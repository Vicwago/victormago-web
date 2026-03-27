import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

// ─── Email al usuario que contacta ──────────────────────────────────────────
function emailConfirmacion(name: string, email: string, empresa: string) {
  const firstName = name.split(' ')[0]
  return {
    from: 'Víctor Mago <victor@norteia.es>',
    to: email,
    subject: `¡Recibido, ${firstName}! Hablamos pronto`,
    html: `<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#0A0907;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0A0907;padding:40px 20px;">
    <tr><td>
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;margin:0 auto;">

        <!-- Header -->
        <tr><td style="border-bottom:1px solid #1E1B14;padding-bottom:28px;margin-bottom:28px;">
          <p style="margin:0;font-size:13px;font-weight:600;letter-spacing:0.18em;text-transform:uppercase;color:#C4956A;">
            VICTOR <span style="color:#F5F0E8;">MAGO</span>
          </p>
        </td></tr>

        <!-- Saludo -->
        <tr><td style="padding:32px 0 0;">
          <p style="margin:0 0 20px;font-size:22px;font-weight:300;color:#F5F0E8;line-height:1.3;">
            Hola, ${firstName}.
          </p>
          <p style="margin:0 0 16px;font-size:15px;font-weight:300;color:#9A8E7E;line-height:1.75;">
            He recibido tu mensaje${empresa ? ` de <strong style="color:#F5F0E8;">${empresa}</strong>` : ''} y me pongo en contacto contigo
            en las próximas <strong style="color:#F5F0E8;">24 horas</strong> — normalmente bastante antes.
          </p>
          <p style="margin:0 0 32px;font-size:15px;font-weight:300;color:#9A8E7E;line-height:1.75;">
            Si tienes algo urgente, escríbeme directamente a
            <a href="mailto:victor@norteia.es" style="color:#C4956A;text-decoration:none;">victor@norteia.es</a>.
          </p>
        </td></tr>

        <!-- Divisor -->
        <tr><td style="border-top:1px solid #1E1B14;padding-top:28px;">
          <p style="margin:0 0 16px;font-size:10px;font-weight:600;letter-spacing:0.22em;text-transform:uppercase;color:#7A7060;">
            Mientras tanto, puede interesarte
          </p>
        </td></tr>

        <!-- Links -->
        <tr><td style="padding-bottom:8px;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #1E1B14;">
                <a href="https://victormago.com/servicios" style="font-size:13px;color:#F5F0E8;text-decoration:none;letter-spacing:0.04em;">
                  Formación, Consultoría y EU AI Act →
                </a>
              </td>
            </tr>
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #1E1B14;">
                <a href="https://victormago.com/servicios/eu-ai-act" style="font-size:13px;color:#F5F0E8;text-decoration:none;letter-spacing:0.04em;">
                  EU AI Act — Agosto 2026, ¿está preparada tu empresa? →
                </a>
              </td>
            </tr>
            <tr>
              <td style="padding:10px 0;">
                <a href="https://norteia.es" style="font-size:13px;color:#F5F0E8;text-decoration:none;letter-spacing:0.04em;">
                  NorteIA — Agencia de IA para pymes →
                </a>
              </td>
            </tr>
          </table>
        </td></tr>

        <!-- Footer -->
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
  }
}

// ─── Notificación a Victor ───────────────────────────────────────────────────
function emailNotificacionVictor(name: string, email: string, empresa: string, mensaje: string) {
  const now = new Date().toLocaleString('es-ES', { timeZone: 'Europe/Madrid', dateStyle: 'full', timeStyle: 'short' })
  return {
    from: 'victormago.com <victor@norteia.es>',
    to: 'victor@norteia.es',
    subject: `🔔 Nuevo lead: ${name}${empresa ? ` · ${empresa}` : ''} — victormago.com`,
    html: `<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#0A0907;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0A0907;padding:40px 20px;">
    <tr><td>
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;margin:0 auto;">

        <tr><td style="border-bottom:1px solid #1E1B14;padding-bottom:20px;">
          <p style="margin:0;font-size:10px;letter-spacing:0.22em;text-transform:uppercase;color:#7A7060;">victormago.com · Nuevo lead</p>
        </td></tr>

        <tr><td style="padding:28px 0 20px;">
          <p style="margin:0 0 24px;font-size:20px;font-weight:300;color:#F5F0E8;">
            Nuevo contacto desde tu web
          </p>
          <table width="100%" cellpadding="0" cellspacing="0">
            ${[
              { label: 'Nombre', val: name },
              { label: 'Email', val: `<a href="mailto:${email}" style="color:#C4956A;text-decoration:none;">${email}</a>` },
              { label: 'Empresa', val: empresa || '—' },
            ].map(r => `
            <tr>
              <td style="padding:10px 16px;background:#0F0D0A;border:1px solid #1E1B14;width:90px;">
                <p style="margin:0;font-size:10px;font-weight:600;letter-spacing:0.16em;text-transform:uppercase;color:#7A7060;">${r.label}</p>
              </td>
              <td style="padding:10px 16px;background:#0F0D0A;border:1px solid #1E1B14;border-left:none;">
                <p style="margin:0;font-size:13px;color:#F5F0E8;">${r.val}</p>
              </td>
            </tr>`).join('')}
            <tr>
              <td colspan="2" style="padding:16px;background:#0F0D0A;border:1px solid #1E1B14;border-top:none;">
                <p style="margin:0 0 8px;font-size:10px;font-weight:600;letter-spacing:0.16em;text-transform:uppercase;color:#7A7060;">Mensaje</p>
                <p style="margin:0;font-size:13px;color:#9A8E7E;line-height:1.65;">${mensaje.replace(/\n/g, '<br>')}</p>
              </td>
            </tr>
          </table>
        </td></tr>

        <tr><td style="border-top:1px solid #1E1B14;padding-top:20px;">
          <p style="margin:0;font-size:11px;color:#7A7060;">${now}</p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`,
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, empresa = '', mensaje = '' } = body

    if (!name || !email) {
      return NextResponse.json({ error: 'Faltan campos requeridos' }, { status: 400 })
    }

    const results = await Promise.allSettled([
      resend.emails.send(emailConfirmacion(name, email, empresa)),
      resend.emails.send(emailNotificacionVictor(name, email, empresa, mensaje)),
    ])

    const errors = results.filter(r => r.status === 'rejected')
    if (errors.length === 2) {
      console.error('Resend errors:', errors)
      return NextResponse.json({ error: 'Error al enviar emails' }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json({ error: 'Error interno' }, { status: 500 })
  }
}
