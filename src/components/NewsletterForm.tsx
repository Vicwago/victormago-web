'use client'
import { useState } from 'react'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

// Alta en la newsletter "IA que Impulsa" (Resend Audiences).
export default function NewsletterForm({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState('')
  const [consent, setConsent] = useState(false)
  const [state, setState] = useState<FormState>('idle')

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!consent) return
    setState('submitting')
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      setState(res.ok ? 'success' : 'error')
    } catch {
      setState('error')
    }
  }

  if (state === 'success') {
    return (
      <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 300, color: 'var(--text-muted)', lineHeight: 1.6 }}>
        ✓ Dentro. Revisa tu correo: te acabo de dar la bienvenida a <strong style={{ color: 'var(--text)' }}>IA que Impulsa</strong>.
      </p>
    )
  }

  return (
    <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: compact ? 380 : 460 }}>
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
        <input
          type="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="tu@email.com"
          aria-label="Tu email para la newsletter"
          style={{ flex: '1 1 200px', background: 'var(--bg)', border: '1.5px solid var(--border)', borderRadius: 999, padding: '12px 18px', fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 300, color: 'var(--text)' }}
        />
        <button
          type="submit"
          disabled={state === 'submitting' || !consent}
          style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 14, background: 'var(--cta)', color: 'var(--cta-text)', border: 'none', borderRadius: 999, padding: '12px 26px', opacity: state === 'submitting' || !consent ? 0.55 : 1 }}
        >
          {state === 'submitting' ? 'Un momento…' : 'Suscribirme'}
        </button>
      </div>
      <label style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontFamily: 'var(--font-body)', fontSize: 11.5, fontWeight: 300, color: 'var(--text-faint)', lineHeight: 1.5, cursor: 'pointer' }}>
        <input type="checkbox" checked={consent} onChange={e => setConsent(e.target.checked)} required style={{ marginTop: 2, accentColor: '#2C03F3' }} />
        <span>
          Acepto la <a href="/politica-privacidad" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>política de privacidad</a>.
          Puedes darte de baja en cualquier momento.
        </span>
      </label>
      {state === 'error' && (
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 12.5, color: '#C4402A' }}>
          No se pudo completar el alta. Inténtalo de nuevo en un momento.
        </p>
      )}
    </form>
  )
}
