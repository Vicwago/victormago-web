// ─── Integración con Mission Control (CRM de NorteIA) ───────────────────────
// Cada lead de la web (formulario de contacto, lead magnet, webinar) se envía
// también al CRM para que entre en el pipeline automáticamente.
//
// TODO-VÍCTOR: definir el webhook receptor. Dos opciones (sesión aparte):
//   a) Webhook de n8n que inserta en el Supabase de Mission Control v2.
//   b) Edge Function de Supabase con service key.
// Mientras MISSION_CONTROL_WEBHOOK_URL no esté configurada en Vercel,
// esta función no hace nada (y nunca rompe el envío del email).

export type WebLead = {
  origen: 'contacto' | 'lead-magnet' | 'webinar' | 'chat' | 'newsletter'
  name: string
  email: string
  empresa?: string
  mensaje?: string
  recurso?: string
}

export async function notifyMissionControl(lead: WebLead): Promise<void> {
  const url = process.env.MISSION_CONTROL_WEBHOOK_URL
  if (!url) return
  try {
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...lead, fuente: 'victormago.com', ts: new Date().toISOString() }),
      signal: AbortSignal.timeout(5000),
    })
  } catch (err) {
    // El CRM nunca debe tumbar la entrega del email al lead
    console.error('Mission Control webhook error:', err)
  }
}
