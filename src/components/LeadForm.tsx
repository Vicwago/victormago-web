'use client'
import { useState } from 'react'
import { C } from '@/lib/theme'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

// Captura de email para el lead magnet. Envía a /api/lead-magnet, que
// entrega el recurso por email (Resend) y notifica a Víctor + Mission Control.
export default function LeadForm({ recurso }: { recurso: string }) {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [state, setState] = useState<FormState>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setState('submitting')
    try {
      const res = await fetch('/api/lead-magnet', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, recurso }),
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
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <input
          type="text"
          aria-label="Tu nombre"
          placeholder="Tu nombre"
          value={name}
          onChange={e => setName(e.target.value)}
          style={{ flex: '1 1 140px', background: 'var(--bg)', border: `1px solid ${C.border}`, padding: '13px 16px', fontFamily: C.fontBody, fontSize: 14, fontWeight: 300, color: C.white }}
        />
        <input
          type="email"
          required
          aria-label="Tu email"
          placeholder="tu@email.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
          style={{ flex: '2 1 200px', background: 'var(--bg)', border: `1px solid ${C.border}`, padding: '13px 16px', fontFamily: C.fontBody, fontSize: 14, fontWeight: 300, color: C.white }}
        />
      </div>
      {state === 'error' && (
        <p style={{ fontFamily: C.fontBody, fontSize: 13, color: C.orange }}>
          No se pudo enviar. Inténtalo de nuevo o escríbeme a victor@norteia.es.
        </p>
      )}
      <button
        type="submit"
        disabled={state === 'submitting'}
        style={{ fontFamily: C.fontBody, fontSize: 12, fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', background: C.orange, color: C.ctaText, padding: '14px 32px', border: 'none', opacity: state === 'submitting' ? 0.6 : 1 }}
      >
        {state === 'submitting' ? 'Enviando…' : 'Quiero el PDF →'}
      </button>
      <p style={{ fontFamily: C.fontBody, fontSize: 11, color: C.muted, lineHeight: 1.6 }}>
        Sin spam. Solo te escribo cuando tengo algo útil que contarte. Puedes darte de baja cuando quieras.
      </p>
    </form>
  )
}
