import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

// Inicialización perezosa: evita que el build falle en entornos sin la clave
const getResend = () => new Resend(process.env.RESEND_API_KEY || 're_missing_key')

export async function POST(req: NextRequest) {
  const resend = getResend()
  try {
    const { name, email, empresa = '' } = await req.json()

    if (!name || !email) {
      return NextResponse.json({ error: 'Faltan campos requeridos' }, { status: 400 })
    }

    const firstName = name.split(' ')[0]
    const now = new Date().toLocaleString('es-ES', { timeZone: 'Europe/Madrid', dateStyle: 'full', timeStyle: 'short' })

    await Promise.allSettled([
      // Confirmación al usuario
      resend.emails.send({
        from: 'Víctor Mago <victor@norteia.es>',
        to: email,
        subject: `¡Apuntado al webinar, ${firstName}!`,
        html: `<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#0A0907;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0A0907;padding:40px 20px;">
    <tr><td>
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;margin:0 auto;">
        <tr><td style="border-bottom:1px solid #1E1B14;padding-bottom:28px;">
          <p style="margin:0;font-size:13px;font-weight:600;letter-spacing:0.18em;text-transform:uppercase;color:#C4956A;">
            VICTOR <span style="color:#F5F0E8;">MAGO</span>
          </p>
        </td></tr>
        <tr><td style="padding:32px 0 0;">
          <p style="margin:0 0 20px;font-size:22px;font-weight:300;color:#F5F0E8;">Hola, ${firstName}.</p>
          <p style="margin:0 0 16px;font-size:15px;font-weight:300;color:#9A8E7E;line-height:1.75;">
            Ya estás apuntado${empresa ? ` desde <strong style="color:#F5F0E8;">${empresa}</strong>` : ''} al próximo webinar mensual.
            Te enviaré los detalles (fecha, enlace y agenda) con unos días de antelación.
          </p>
          <p style="margin:0 0 32px;font-size:15px;font-weight:300;color:#9A8E7E;line-height:1.75;">
            Mientras tanto, si tienes alguna pregunta escríbeme a
            <a href="mailto:victor@norteia.es" style="color:#C4956A;text-decoration:none;">victor@norteia.es</a>.
          </p>
        </td></tr>
        <tr><td style="border-top:1px solid #1E1B14;padding-top:28px;">
          <p style="margin:0 0 16px;font-size:10px;font-weight:600;letter-spacing:0.22em;text-transform:uppercase;color:#7A7060;">También puede interesarte</p>
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr><td style="padding:10px 0;border-bottom:1px solid #1E1B14;">
              <a href="https://victormago.com/servicios" style="font-size:13px;color:#F5F0E8;text-decoration:none;">Formación, Consultoría y EU AI Act →</a>
            </td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #1E1B14;">
              <a href="https://victormago.com/servicios/eu-ai-act" style="font-size:13px;color:#F5F0E8;text-decoration:none;">EU AI Act — Agosto 2026, ¿está preparada tu empresa? →</a>
            </td></tr>
            <tr><td style="padding:10px 0;">
              <a href="https://norteia.es" style="font-size:13px;color:#F5F0E8;text-decoration:none;">NorteIA — Agencia de IA para pymes →</a>
            </td></tr>
          </table>
        </td></tr>
        <tr><td style="border-top:1px solid #1E1B14;padding-top:24px;margin-top:8px;">
          <p style="margin:0 0 4px;font-size:13px;font-weight:500;color:#C4956A;">Víctor Mago</p>
          <p style="margin:0;font-size:12px;color:#7A7060;">
            Consultor y Formador de IA ·
            <a href="https://victormago.com" style="color:#7A7060;text-decoration:none;">victormago.com</a>
            &nbsp;·&nbsp;
            <a href="https://norteia.es" style="color:#7A7060;text-decoration:none;">norteia.es</a>
          </p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`,
      }),

      // Notificación a Victor
      resend.emails.send({
        from: 'Web victormago.com <web@norteia.es>',
        to: 'victor@norteia.es',
        subject: `🎯 Nuevo registro webinar: ${name}${empresa ? ` · ${empresa}` : ''}`,
        html: `<!DOCTYPE html>
<html lang="es"><head><meta charset="UTF-8"></head>
<body style="margin:0;padding:40px 20px;background:#0A0907;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;margin:0 auto;">
    <tr><td style="border-bottom:1px solid #1E1B14;padding-bottom:20px;">
      <p style="margin:0;font-size:10px;letter-spacing:0.22em;text-transform:uppercase;color:#7A7060;">victormago.com · Nuevo registro webinar</p>
    </td></tr>
    <tr><td style="padding:28px 0;">
      <table width="100%" cellpadding="0" cellspacing="0">
        ${[
          { label: 'Nombre', val: name },
          { label: 'Email', val: `<a href="mailto:${email}" style="color:#C4956A;text-decoration:none;">${email}</a>` },
          { label: 'Empresa', val: empresa || '—' },
        ].map(r => `<tr>
          <td style="padding:10px 16px;background:#0F0D0A;border:1px solid #1E1B14;width:90px;">
            <p style="margin:0;font-size:10px;font-weight:600;letter-spacing:0.16em;text-transform:uppercase;color:#7A7060;">${r.label}</p>
          </td>
          <td style="padding:10px 16px;background:#0F0D0A;border:1px solid #1E1B14;border-left:none;">
            <p style="margin:0;font-size:13px;color:#F5F0E8;">${r.val}</p>
          </td>
        </tr>`).join('')}
      </table>
    </td></tr>
    <tr><td style="border-top:1px solid #1E1B14;padding-top:20px;">
      <p style="margin:0;font-size:11px;color:#7A7060;">${now}</p>
    </td></tr>
  </table>
</body>
</html>`,
      }),
    ])

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Webinar API error:', err)
    return NextResponse.json({ error: 'Error interno' }, { status: 500 })
  }
}
