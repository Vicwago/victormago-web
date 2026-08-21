// ─── Motor de "IA que Impulsa" ──────────────────────────────────────────────
// Genera un número de la newsletter desde su JSON, lo deja como BORRADOR en
// Resend (broadcast sobre la audiencia) y manda una preview a Víctor.
// El envío real a suscriptores es un paso aparte y deliberado (--send):
// el sistema prepara, propone y avisa; el botón de enviar lo pulsa Víctor.
//
// Uso:
//   node scripts/newsletter.mjs entregables/newsletter/001.json          → borrador + preview
//   node scripts/newsletter.mjs entregables/newsletter/001.json --send   → envía a la audiencia
import { readFileSync, writeFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')

// Cargar .env.local (el script corre fuera de Next)
for (const line of readFileSync(resolve(ROOT, '.env.local'), 'utf8').split('\n')) {
  const m = line.match(/^([A-Z_0-9]+)=(.*)$/)
  if (m && !process.env[m[1]]) process.env[m[1]] = m[2].trim()
}

const KEY = process.env.RESEND_API_KEY
const AUDIENCE = process.env.RESEND_AUDIENCE_ID
if (!KEY || !AUDIENCE) {
  console.error('Faltan RESEND_API_KEY o RESEND_AUDIENCE_ID en .env.local')
  process.exit(1)
}

const [archivo, flag] = process.argv.slice(2)
if (!archivo) {
  console.error('Uso: node scripts/newsletter.mjs <numero.json> [--send]')
  process.exit(1)
}
const rutaJson = resolve(ROOT, archivo)
const numero = JSON.parse(readFileSync(rutaJson, 'utf8'))

const api = async (path, opts = {}) => {
  const res = await fetch(`https://api.resend.com${path}`, {
    ...opts,
    headers: { Authorization: `Bearer ${KEY}`, 'Content-Type': 'application/json' },
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(`Resend ${path} → ${res.status}: ${JSON.stringify(data)}`)
  return data
}

// ─── Plantilla (identidad "El punto", email-safe: tablas + estilos inline) ──
function render({ preview = false } = {}) {
  const enlaceBaja = preview
    ? 'https://victormago.com/mis-datos'
    : '{{{RESEND_UNSUBSCRIBE_URL}}}'
  const bannerPreview = preview
    ? `<tr><td style="background:#2C03F3;padding:10px 16px;">
         <p style="margin:0;font-size:12px;color:#F5F3EB;letter-spacing:0.08em;text-transform:uppercase;">
           Borrador Nº ${numero.numero} — SALE SOLO MAÑANA VIERNES A LAS 9:00.<br>
           Para pararlo: borra este broadcast en Resend, o dímelo en Claude Code.
         </p>
       </td></tr>`
    : ''
  const parrafos = numero.parrafos
    .map(p => `<p style="margin:0 0 16px;font-size:15px;color:#4E4C60;line-height:1.75;">${p}</p>`)
    .join('\n')
  const enCorto = (numero.encorto || [])
    .map(e => `<p style="margin:0 0 12px;"><a href="${e.url}" style="font-size:14px;color:#2C03F3;text-decoration:underline;">→ ${e.titulo}</a></p>`)
    .join('\n')

  return `<body style="margin:0;padding:0;background:#F5F3EB;font-family:Helvetica,Arial,sans-serif;">
  <div style="display:none;max-height:0;overflow:hidden;">${numero.previewText}</div>
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F5F3EB;padding:40px 20px;">
    <tr><td>
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;margin:0 auto;">
        ${bannerPreview}
        <tr><td style="border-bottom:2px solid #2C03F3;padding-bottom:20px;">
          <p style="margin:0;font-size:14px;font-weight:800;letter-spacing:0.06em;text-transform:uppercase;color:#14122A;">
            Víctor Mago<span style="color:#2C03F3;">.</span>
          </p>
        </td></tr>
        <tr><td style="padding:28px 0 0;">
          <p style="margin:0 0 8px;font-size:12px;letter-spacing:0.2em;text-transform:uppercase;color:#2C03F3;font-weight:600;">
            IA que Impulsa · Nº ${String(numero.numero).padStart(3, '0')}
          </p>
          <p style="margin:0 0 20px;font-size:24px;font-weight:700;color:#14122A;line-height:1.25;">${numero.titular}</p>
          ${parrafos}
        </td></tr>
        <tr><td style="padding:12px 0 28px;">
          <table cellpadding="0" cellspacing="0" width="100%" style="background:#FFFFFF;border:1.5px solid #DCD8C8;border-radius:12px;">
            <tr><td style="padding:20px 22px;">
              <p style="margin:0 0 6px;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#8B889A;">${numero.destacado.etiqueta}</p>
              <p style="margin:0 0 14px;font-size:17px;font-weight:700;color:#14122A;line-height:1.3;">${numero.destacado.titulo}</p>
              <a href="${numero.destacado.url}" style="display:inline-block;background:#2C03F3;color:#F5F3EB;font-size:14px;font-weight:600;text-decoration:none;padding:10px 22px;border-radius:999px;">Leerlo completo →</a>
            </td></tr>
          </table>
        </td></tr>
        ${enCorto ? `<tr><td style="padding:0 0 24px;">
          <p style="margin:0 0 12px;font-size:12px;letter-spacing:0.2em;text-transform:uppercase;color:#14122A;font-weight:700;">En corto</p>
          ${enCorto}
        </td></tr>` : ''}
        ${numero.ps ? `<tr><td style="padding:0 0 24px;">
          <p style="margin:0;font-size:14px;color:#4E4C60;line-height:1.7;"><em>P.D. — ${numero.ps}</em></p>
        </td></tr>` : ''}
        <tr><td style="border-top:1.5px solid #DCD8C8;padding-top:20px;">
          <p style="margin:0 0 4px;font-size:13px;font-weight:600;color:#14122A;">Víctor Mago</p>
          <p style="margin:0 0 14px;font-size:12px;color:#8B889A;">
            Consultor de IA · <a href="https://victormago.com" style="color:#8B889A;">victormago.com</a> · A Coruña
          </p>
          <p style="margin:0;font-size:11px;color:#8B889A;line-height:1.6;">
            Recibes esto porque te apuntaste en victormago.com ·
            <a href="${enlaceBaja}" style="color:#8B889A;">Darse de baja</a>
          </p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>`
}

// ─── Flujo ──────────────────────────────────────────────────────────────────
const FROM = 'Víctor Mago <victor@norteia.es>'

if (flag === '--send') {
  if (!numero.broadcastId) {
    console.error('Este número no tiene broadcastId (genera antes el borrador sin --send).')
    process.exit(1)
  }
  await api(`/broadcasts/${numero.broadcastId}/send`, { method: 'POST', body: JSON.stringify({}) })
  console.log(`ENVIADO → Nº ${numero.numero} a la audiencia (broadcast ${numero.broadcastId})`)
} else {
  const b = await api('/broadcasts', {
    method: 'POST',
    body: JSON.stringify({
      audience_id: AUDIENCE,
      from: FROM,
      subject: numero.asunto,
      name: `IA que Impulsa · Nº ${String(numero.numero).padStart(3, '0')}`,
      html: render(),
    }),
  })
  numero.broadcastId = b.id
  writeFileSync(rutaJson, JSON.stringify(numero, null, 2) + '\n', 'utf8')
  console.log(`BORRADOR creado en Resend → ${b.id}`)

  await api('/emails', {
    method: 'POST',
    body: JSON.stringify({
      from: 'Newsletter victormago.com <web@norteia.es>',
      to: 'victor@norteia.es',
      subject: `[BORRADOR Nº ${String(numero.numero).padStart(3, '0')}] ${numero.asunto}`,
      html: render({ preview: true }),
    }),
  })
  console.log('PREVIEW enviada a victor@norteia.es')
  console.log('Se enviara solo el viernes a las 9:00 (newsletter-ia-que-impulsa-envio).')
  console.log(`Para pararlo: borra el broadcast en Resend o pon "cancelado": true en ${archivo}`)
  console.log(`Para enviarlo ya, sin esperar: node scripts/newsletter.mjs ${archivo} --send`)
}
