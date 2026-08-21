// ─── Envío automático de "IA que Impulsa" (modelo de VETO) ──────────────────
// El jueves, newsletter.mjs deja el número como BORRADOR en Resend y manda la
// preview a Víctor. Este script corre el viernes y lo envía SALVO que Víctor
// lo haya parado. No pregunta: comprueba.
//
// Se ABORTA el envío (y no pasa nada) si:
//   · el JSON tiene "cancelado": true            → veto explícito
//   · el JSON ya tiene "enviadoAt"               → no reenviar nunca
//   · el borrador ya no existe en Resend (404)   → Víctor lo borró = veto
//   · el broadcast no está en estado 'draft'     → ya salió o está en cola
//   · el borrador tiene más de VENTANA_DIAS      → es un número viejo; el
//     jueves no se generó uno nuevo y no queremos reenviar el anterior
//
// Uso:
//   node scripts/newsletter-auto-send.mjs --dry-run   → dice qué haría
//   node scripts/newsletter-auto-send.mjs             → envía de verdad
import { readFileSync, writeFileSync, readdirSync } from 'node:fs'
import { resolve, dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const DIR = join(ROOT, 'entregables', 'newsletter')
const VENTANA_DIAS = 3
const DRY = process.argv.includes('--dry-run')

for (const line of readFileSync(resolve(ROOT, '.env.local'), 'utf8').split('\n')) {
  const m = line.match(/^([A-Z_0-9]+)=(.*)$/)
  if (m && !process.env[m[1]]) process.env[m[1]] = m[2].trim()
}
const KEY = process.env.RESEND_API_KEY
if (!KEY) throw new Error('falta RESEND_API_KEY en .env.local')

// Salir con process.exit() en Windows revienta libuv si queda un fetch en
// vuelo (exit 127 aunque todo fuera bien), y la tarea programada lo leeria
// como fallo. Por eso: excepciones tipadas + process.exitCode, sin exit().
class Veto extends Error {}
const abortar = (motivo) => { throw new Veto(motivo) }

async function main () {

// ─── 1. El número más alto de la carpeta ────────────────────────────────────
const archivos = readdirSync(DIR).filter(f => /^\d+\.json$/.test(f)).sort()
if (!archivos.length) abortar('no hay ningun numero en entregables/newsletter/')
const ruta = join(DIR, archivos[archivos.length - 1])
const numero = JSON.parse(readFileSync(ruta, 'utf8'))
const etiqueta = `Nº ${String(numero.numero).padStart(3, '0')}`

// ─── 2. Vetos que viven en el propio JSON ───────────────────────────────────
if (numero.cancelado === true) abortar(`${etiqueta} marcado como cancelado en ${archivos[archivos.length - 1]}`)
if (numero.enviadoAt) abortar(`${etiqueta} ya se envio el ${numero.enviadoAt}`)
if (!numero.broadcastId) abortar(`${etiqueta} no tiene broadcastId (el borrador del jueves no llego a crearse)`)

// ─── 3. Estado real en Resend ───────────────────────────────────────────────
const res = await fetch(`https://api.resend.com/broadcasts/${numero.broadcastId}`, {
  headers: { Authorization: `Bearer ${KEY}` },
})
if (res.status === 404) abortar(`el borrador de ${etiqueta} ya no existe en Resend (borrado = veto de Victor)`)
if (!res.ok) throw new Error(`Resend respondio ${res.status} al leer el borrador`)
const b = await res.json()

if (b.status !== 'draft') abortar(`${etiqueta} esta en estado "${b.status}", no en borrador`)

const creado = new Date(b.created_at)
const dias = (Date.now() - creado.getTime()) / 86400000
if (dias > VENTANA_DIAS) {
  abortar(`el borrador de ${etiqueta} se creo hace ${dias.toFixed(1)} dias (mas de ${VENTANA_DIAS}). ` +
          `Esta semana no se genero un numero nuevo; no se reenvia el anterior.`)
}

// ─── 4. Enviar ──────────────────────────────────────────────────────────────
console.log(`${etiqueta} · "${numero.asunto}"`)
console.log(`   borrador ${numero.broadcastId} creado hace ${dias.toFixed(1)} dias · estado ${b.status}`)

if (DRY) { console.log('DRY-RUN · todas las comprobaciones pasan; en real se enviaria AHORA a la audiencia'); return }

const envio = await fetch(`https://api.resend.com/broadcasts/${numero.broadcastId}/send`, {
  method: 'POST',
  headers: { Authorization: `Bearer ${KEY}`, 'Content-Type': 'application/json' },
  body: JSON.stringify({}),
})
if (!envio.ok) {
    throw new Error(`Resend rechazo el envio (${envio.status}): ${JSON.stringify(await envio.json().catch(() => ({})))}`)
  }

numero.enviadoAt = new Date().toISOString()
writeFileSync(ruta, JSON.stringify(numero, null, 2) + '\n', 'utf8')
console.log(`ENVIADO · ${etiqueta} salio a la audiencia (${numero.enviadoAt})`)
}

main().catch(err => {
  if (err instanceof Veto) { console.log(`NO SE ENVIA · ${err.message}`); return }
  console.error(`ABORTADO · ${err.message}`)
  process.exitCode = 1
})
