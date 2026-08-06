import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'
import { notifyMissionControl } from '@/lib/mission-control'
import { CONOCIMIENTO } from '@/lib/conocimiento'

// Mini-consultorio: 5 respuestas del visitante → diagnóstico personalizado
// generado con IA + lead al CRM + aviso a Víctor con las respuestas.
const getResend = () => new Resend(process.env.RESEND_API_KEY || 're_missing_key')

const SYSTEM = `Eres el motor del "Diagnóstico exprés" de victormago.com (Víctor Mago, consultor de IA y automatización en A Coruña, cofundador de NorteIA).

Recibirás las respuestas de una empresa a 5 preguntas. Devuelve un diagnóstico breve y accionable en TEXTO PLANO (sin markdown), con esta estructura exacta:

LECTURA
(2-3 frases: qué patrón ves en su situación, en lenguaje de negocio, directo y concreto)

POR DÓNDE EMPEZARÍA
1. (primera automatización o acción concreta, adaptada a su sector y su problema)
2. (segunda)
3. (tercera)

SIGUIENTE PASO
(1-2 frases proponiendo la llamada de 20 minutos para aterrizarlo)

Reglas: español, tono profesional cercano, cero jerga técnica sin explicar, NO inventes precios ni plazos ni resultados garantizados. Si mencionan el EU AI Act o formación, recuerda que el Art. 4 (alfabetización) está vigente desde febrero de 2025.

${CONOCIMIENTO}`

export async function POST(req: NextRequest) {
  const key = process.env.ANTHROPIC_API_KEY
  if (!key) return NextResponse.json({ error: 'no_key' }, { status: 503 })

  try {
    const { sector, tamano, dolor, herramientas, urgencia, email } = await req.json()
    if (!email || !sector || !dolor) {
      return NextResponse.json({ error: 'faltan_datos' }, { status: 400 })
    }

    const respuestas = `Sector: ${String(sector).slice(0, 200)}
Tamaño del equipo: ${String(tamano || 'no indicado').slice(0, 100)}
Dónde pierden más horas: ${String(dolor).slice(0, 600)}
Herramientas que usan hoy: ${String(herramientas || 'no indicado').slice(0, 300)}
Urgencia / motivo: ${String(urgencia || 'no indicado').slice(0, 300)}`

    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'x-api-key': key, 'anthropic-version': '2023-06-01', 'content-type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 700,
        system: SYSTEM,
        messages: [{ role: 'user', content: respuestas }],
      }),
    })
    if (!res.ok) {
      console.error('Diagnostico API error:', res.status, await res.text())
      return NextResponse.json({ error: 'upstream' }, { status: 502 })
    }
    const data = await res.json()
    const diagnostico = data.content?.[0]?.text ?? ''

    // Lead → Víctor + CRM (no bloquea la respuesta al usuario)
    const resend = getResend()
    await Promise.allSettled([
      resend.emails.send({
        from: 'Web victormago.com <web@norteia.es>',
        to: 'victor@norteia.es',
        subject: `Diagnóstico exprés completado: ${email}`,
        html: `<p><strong>Nuevo diagnóstico exprés.</strong></p>
<p><strong>Email:</strong> ${email}</p>
<pre style="font-size:13px;line-height:1.6;white-space:pre-wrap;">${respuestas}</pre>
<p><strong>Diagnóstico generado:</strong></p>
<pre style="font-size:13px;line-height:1.6;white-space:pre-wrap;">${diagnostico}</pre>`,
      }),
      notifyMissionControl({ origen: 'diagnostico', name: '', email, empresa: sector, mensaje: `Diagnóstico exprés — pierde horas en: ${String(dolor).slice(0, 300)}` }),
    ])

    return NextResponse.json({ diagnostico })
  } catch (err) {
    console.error('Diagnostico error:', err)
    return NextResponse.json({ error: 'internal' }, { status: 500 })
  }
}
