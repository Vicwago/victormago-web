import { NextRequest, NextResponse } from 'next/server'
import { CONOCIMIENTO } from '@/lib/conocimiento'

// Asistente de la web (como el de salgadoia.com) — usa la API de Claude.
// TODO-VÍCTOR: añadir ANTHROPIC_API_KEY en Vercel (Settings → Environment
// Variables). Sin la clave, el widget muestra un fallback hacia /contacto.
// Modelo Haiku: el más barato (~céntimos por cientos de conversaciones).

const SYSTEM = `Eres el asistente virtual de Víctor Mago (victormago.com), consultor de IA y automatización en A Coruña, Galicia. Cofundador de NorteIA (norteia.es) junto a Luis Salgado. 15 años como entrenador de tenis; su enfoque: "enseñar a las empresas a anticiparse como enseñaba a sus jugadores".

Qué hace Víctor:
- Automatización de procesos repetitivos (documentos, correos, datos, avisos) para pymes.
- Asistentes con IA que responden con la información real del negocio (RAG).
- Formación de equipos sin perfil técnico, incluida la alfabetización del Art. 4 del EU AI Act (vigente desde febrero 2025; aplicación general del reglamento: 2 de agosto de 2026).
- Los proyectos los ejecuta con el equipo de NorteIA.

Reglas:
- Responde SIEMPRE en español, breve (2-4 frases), tono directo y cercano, sin jerga.
- Tu objetivo: resolver la duda y proponer la llamada gratuita de 20 minutos → enlace: /contacto
- Recurso gratuito si encaja: PDF "5 automatizaciones para pymes" → /recursos/automatizaciones-pymes
- NO inventes precios, plazos, clientes ni resultados concretos. Si preguntan precio: "depende del proceso; en la llamada de 20 min Víctor te lo concreta sin compromiso".
- NO des información de clientes de Víctor más allá de lo publicado en los casos.
- Si piden algo fuera de tema, redirige amablemente a lo que hace Víctor.
- Los enlaces internos escríbelos como ruta (ej: /casos, /contacto) — el widget los hace clicables.
- TEXTO PLANO SIEMPRE: nada de markdown, ni asteriscos, ni almohadillas, ni listas con guiones. Frases y párrafos normales.

${CONOCIMIENTO}`

export async function POST(req: NextRequest) {
  const key = process.env.ANTHROPIC_API_KEY
  if (!key) {
    return NextResponse.json({ error: 'no_key' }, { status: 503 })
  }

  try {
    const { messages } = await req.json()
    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: 'bad_request' }, { status: 400 })
    }

    // Solo los últimos 12 turnos, entradas truncadas (anti-abuso básico)
    const clean = messages.slice(-12).map((m: { role: string; content: string }) => ({
      role: m.role === 'assistant' ? 'assistant' : 'user',
      content: String(m.content).slice(0, 2000),
    }))

    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': key,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 400,
        system: SYSTEM,
        messages: clean,
      }),
    })

    if (!res.ok) {
      console.error('Claude API error:', res.status, await res.text())
      return NextResponse.json({ error: 'upstream' }, { status: 502 })
    }

    const data = await res.json()
    const text = data.content?.[0]?.text ?? ''
    return NextResponse.json({ reply: text })
  } catch (err) {
    console.error('Chat API error:', err)
    return NextResponse.json({ error: 'internal' }, { status: 500 })
  }
}
