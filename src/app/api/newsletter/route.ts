import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'
import { notifyMissionControl } from '@/lib/mission-control'

// Alta en la newsletter "IA que Impulsa" → Resend Audience + bienvenida.
const getResend = () => new Resend(process.env.RESEND_API_KEY || 're_missing_key')

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json()
    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Falta el email' }, { status: 400 })
    }

    const audienceId = process.env.RESEND_AUDIENCE_ID
    if (!audienceId) {
      return NextResponse.json({ error: 'newsletter_no_configurada' }, { status: 503 })
    }

    const resend = getResend()
    const contact = await resend.contacts.create({ email, audienceId, unsubscribed: false })
    if (contact.error) {
      console.error('Resend contact error:', contact.error)
      return NextResponse.json({ error: 'no_alta' }, { status: 502 })
    }

    await resend.emails.send({
      from: 'Víctor Mago <victor@norteia.es>',
      to: email,
      subject: 'Bienvenido a IA que Impulsa ⚡',
      html: `<body style="margin:0;padding:0;background:#F5F3EB;font-family:Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F5F3EB;padding:40px 20px;">
    <tr><td>
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;margin:0 auto;">
        <tr><td style="border-bottom:2px solid #2C03F3;padding-bottom:20px;">
          <p style="margin:0;font-size:14px;font-weight:800;letter-spacing:0.06em;text-transform:uppercase;color:#14122A;">
            Víctor Mago<span style="color:#2C03F3;">.</span>
          </p>
        </td></tr>
        <tr><td style="padding:28px 0 0;">
          <p style="margin:0 0 8px;font-size:12px;letter-spacing:0.2em;text-transform:uppercase;color:#2C03F3;font-weight:600;">IA que Impulsa</p>
          <p style="margin:0 0 20px;font-size:24px;font-weight:700;color:#14122A;line-height:1.2;">Ya estás dentro.</p>
          <p style="margin:0 0 16px;font-size:15px;color:#4E4C60;line-height:1.75;">
            Cada semana te mando una idea práctica de IA y automatización que puedas aplicar
            en tu negocio esa misma semana. Sin teoría eterna: lo que funciona,
            contado desde proyectos reales en Galicia.
          </p>
          <p style="margin:0 0 28px;font-size:15px;color:#4E4C60;line-height:1.75;">
            Mientras llega el primer número, esto es lo más útil que tengo ahora mismo:
          </p>
          <p style="margin:0 0 12px;">
            <a href="https://victormago.com/recursos/automatizaciones-pymes" style="font-size:14px;color:#2C03F3;text-decoration:underline;">→ 5 automatizaciones que cualquier pyme puede montar esta semana</a>
          </p>
          <p style="margin:0 0 32px;">
            <a href="https://victormago.com/blog/eu-ai-act-pymes" style="font-size:14px;color:#2C03F3;text-decoration:underline;">→ El EU AI Act ya se aplica: qué significa para tu pyme</a>
          </p>
          <p style="margin:0;font-size:13px;color:#8B889A;line-height:1.6;">
            Si esto no es para ti, tienes el enlace de baja al pie de cada envío.
          </p>
        </td></tr>
        <tr><td style="border-top:1.5px solid #DCD8C8;margin-top:28px;padding-top:20px;">
          <p style="margin:20px 0 4px;font-size:13px;font-weight:600;color:#14122A;">Víctor Mago</p>
          <p style="margin:0;font-size:12px;color:#8B889A;">
            Consultor de IA · <a href="https://victormago.com" style="color:#8B889A;">victormago.com</a> · A Coruña
          </p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>`,
    })

    await notifyMissionControl({ origen: 'newsletter', name: '', email })

    // Aviso a Víctor de cada alta
    await resend.emails.send({
      from: 'Web victormago.com <web@norteia.es>',
      to: 'victor@norteia.es',
      subject: `Nueva alta en IA que Impulsa: ${email}`,
      html: `<p><strong>Nueva suscripción a la newsletter.</strong></p><p>Email: ${email}</p><p>Origen: victormago.com</p>`,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Newsletter API error:', err)
    return NextResponse.json({ error: 'internal' }, { status: 500 })
  }
}
