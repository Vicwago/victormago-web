'use client'
import { useState } from 'react'
import { C } from '@/lib/theme'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

// Captura de email para el lead magnet. Envía a /api/lead-magnet, que
// entrega el recurso por email (Resend) y notifica a Víctor + Mission Control.
export default function LeadForm({ recurso }: { recurso: string }) {
  const [email, setEmail] = useState('')
  const [consent, setConsent] = useState(false)
  const [state, setState] = useState<FormState>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!consent) return
    setState('submitting')
    try {
      const res = await fetch('/api/lead-magnet', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: '', email, recurso }),
      })
      if (res.ok) setState('success')
      else setState('error')
    } catch {
      setState('error')
    }
  }

  if (state === 'success') {
    return (
      <div style={{ padding: '24px', background: C.bgCard, border: `1px solid ${C.borderCu}`, textAlign: 'center' }}>
        <p style={{ fontFamily: C.fontDisplay, fontSize: 20, color: C.white, marginBottom: 6 }}>Revisa tu correo</p>
        <p style={{ fontFamily: C.fontBody, fontSize: 13, color: C.mutedLight }}>
          Te acabo de enviar el recurso a <strong style={{ color: C.white }}>{email}</strong>. Si no aparece, mira en spam.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
        <input
          type="email"
          required
          aria-label="Tu email"
          placeholder="tu@email.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
          style={{ flex: '1 1 200px', background: 'var(--bg)', border: `1.5px solid ${C.border}`, borderRadius: 999, padding: '13px 18px', fontFamily: C.fontBody, fontSize: 14, fontWeight: 300, color: C.white }}
        />
        <button
          type="submit"
          disabled={state === 'submitting' || !consent}
          style={{ fontFamily: C.fontBody, fontSize: 15, fontWeight: 600, background: C.orange, color: C.ctaText, padding: '13px 28px', border: 'none', borderRadius: 999, opacity: state === 'submitting' || !consent ? 0.55 : 1 }}
        >
          {state === 'submitting' ? 'Enviando…' : 'Descargar PDF gratis'}
        </button>
      </div>
      <label style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontFamily: C.fontBody, fontSize: 11.5, fontWeight: 300, color: C.muted, lineHeight: 1.5, cursor: 'pointer' }}>
        <input type="checkbox" checked={consent} onChange={e => setConsent(e.target.checked)} required style={{ marginTop: 2, accentColor: '#2C03F3' }} />
        <span>
          Acepto la <a href="/politica-privacidad" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>política de privacidad</a>.
          Sin spam: baja cuando quieras.
        </span>
      </label>
      {state === 'error' && (
        <p style={{ fontFamily: C.fontBody, fontSize: 13, color: C.orange }}>
          No se pudo enviar. Inténtalo de nuevo o escríbeme a victor@norteia.es.
        </p>
      )}
    </form>
  )
}
