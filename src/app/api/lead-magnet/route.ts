import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'
import { notifyMissionControl } from '@/lib/mission-control'

const resend = new Resend(process.env.RESEND_API_KEY)

// TODO-VÍCTOR: cuando el PDF esté maquetado, subirlo a public/recursos/
// con este nombre (o cambiar la constante).
const PDF_URL = 'https://victormago.com/recursos/5-automatizaciones-pymes.pdf'

function emailEntrega(name: string, email: string) {
  const firstName = (name || '').split(' ')[0] || 'hola'
  return {
    from: 'Víctor Mago <victor@norteia.es>',
    to: email,
    subject: 'Tu PDF: 5 automatizaciones para tu empresa',
    html: `<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#0A0907;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0A0907;padding:40px 20px;">
    <tr><td>
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;margin:0 auto;">
        <tr><td style="border-bottom:1px solid #1E1B14;padding-bottom:24px;">
          <p style="margin:0;font-size:13px;font-weight:600;letter-spacing:0.18em;text-transform:uppercase;color:#C4956A;">
            VICTOR <span style="color:#F5F0E8;">MAGO</span>
          </p>
        </td></tr>
        <tr><td style="padding:28px 0 0;">
          <p style="margin:0 0 20px;font-size:22px;font-weight:300;color:#F5F0E8;">Aquí tienes, ${firstName}.</p>
          <p style="margin:0 0 28px;font-size:15px;font-weight:300;color:#9A8E7E;line-height:1.75;">
            Estas son las <strong style="color:#F5F0E8;">5 automatizaciones que cualquier pyme
            puede montar esta semana</strong>. Nada teórico: cada una está explicada
            con el proceso, la herramienta y el resultado que puedes esperar.
          </p>
          <p style="margin:0 0 32px;">
            <a href="${PDF_URL}" style="display:inline-block;background:#F97316;color:#ffffff;font-size:13px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;padding:14px 32px;text-decoration:none;">
              Descargar el PDF →
            </a>
          </p>
          <p style="margin:0 0 8px;font-size:14px;font-weight:300;color:#9A8E7E;line-height:1.7;">
            Y si quieres ver cómo encajaría en tu despacho, reserva 20 minutos conmigo — gratis y sin compromiso:
          </p>
          <p style="margin:0 0 32px;">
            <a href="https://victormago.com/contacto" style="font-size:14px;color:#C4956A;text-decoration:none;">victormago.com/contacto →</a>
          </p>
        </td></tr>
        <tr><td style="border-top:1px solid #1E1B14;padding-top:24px;">
          <p style="margin:0 0 4px;font-size:13px;font-weight:500;color:#C4956A;">Víctor Mago</p>
          <p style="margin:0;font-size:12px;color:#7A7060;">
            Consultor de IA · <a href="https://victormago.com" style="color:#7A7060;text-decoration:none;">victormago.com</a>
            &nbsp;·&nbsp; <a href="https://norteia.es" style="color:#7A7060;text-decoration:none;">norteia.es</a>
          </p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`,
  }
}

function emailAvisoVictor(name: string, email: string, recurso: string) {
  return {
    from: 'Web victormago.com <web@norteia.es>',
    to: 'victor@norteia.es',
    subject: `Nuevo lead (lead magnet): ${email}`,
    html: `<p><strong>Lead magnet:</strong> ${recurso}</p>
<p><strong>Nombre:</strong> ${name || '—'}<br/>
<strong>Email:</strong> ${email}</p>
<p>Origen: victormago.com/recursos</p>`,
  }
}

export async function POST(req: NextRequest) {
  try {
    const { name = '', email, recurso = 'automatizaciones-pymes' } = await req.json()

    if (!email) {
      return NextResponse.json({ error: 'Falta el email' }, { status: 400 })
    }

    const results = await Promise.allSettled([
      resend.emails.send(emailEntrega(name, email)),
      resend.emails.send(emailAvisoVictor(name, email, recurso)),
    ])

    await notifyMissionControl({ origen: 'lead-magnet', name, email, recurso })

    const errors = results.filter(r => r.status === 'rejected')
    if (errors.length === 2) {
      console.error('Resend errors:', errors)
      return NextResponse.json({ error: 'Error al enviar el recurso' }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Lead magnet API error:', err)
    return NextResponse.json({ error: 'Error interno' }, { status: 500 })
  }
}
