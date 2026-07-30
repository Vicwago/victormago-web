'use client'
import { useState } from 'react'
import { C } from '@/lib/theme'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: 'var(--bg)',
  border: `1px solid ${C.border}`,
  padding: '13px 16px',
  fontFamily: C.fontBody,
  fontSize: 14,
  fontWeight: 300,
  color: C.white,
}

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', empresa: '', mensaje: '' })
  const [state, setState] = useState<FormState>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setState('submitting')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) { setState('success'); setForm({ name: '', email: '', empresa: '', mensaje: '' }) }
      else setState('error')
    } catch {
      setState('error')
    }
  }

  if (state === 'success') {
    return (
      <div style={{ textAlign: 'center', padding: '40px 20px' }}>
        <div style={{ width: 48, height: 48, border: `1px solid ${C.copper}`, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
          <span style={{ color: C.copper, fontSize: 20 }}>✓</span>
        </div>
        <p style={{ fontFamily: C.fontDisplay, fontSize: 22, color: C.white, marginBottom: 8 }}>Mensaje recibido</p>
        <p style={{ fontFamily: C.fontBody, fontSize: 13, color: C.mutedLight }}>Te respondo en menos de 24 horas.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      {([
        { id: 'name', label: 'Nombre completo', type: 'text', key: 'name', required: true },
        { id: 'email', label: 'Email', type: 'email', key: 'email', required: true },
        { id: 'empresa', label: 'Empresa (opcional)', type: 'text', key: 'empresa', required: false },
      ] as const).map(f => (
        <div key={f.id}>
          <label htmlFor={f.id} style={{ display: 'block', fontFamily: C.fontBody, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.muted, marginBottom: 8 }}>
            {f.label}
          </label>
          <input
            id={f.id}
            type={f.type}
            required={f.required}
            value={form[f.key]}
            onChange={e => setForm({ ...form, [f.key]: e.target.value })}
            style={inputStyle}
          />
        </div>
      ))}
      <div>
        <label htmlFor="mensaje" style={{ display: 'block', fontFamily: C.fontBody, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.muted, marginBottom: 8 }}>
          ¿En qué te ayudo?
        </label>
        <textarea
          id="mensaje"
          rows={5}
          value={form.mensaje}
          onChange={e => setForm({ ...form, mensaje: e.target.value })}
          style={{ ...inputStyle, resize: 'vertical' }}
        />
      </div>

      {state === 'error' && (
        <p style={{ fontFamily: C.fontBody, fontSize: 13, color: C.orange }}>
          No se pudo enviar el mensaje. Inténtalo de nuevo o escríbeme a victor@norteia.es.
        </p>
      )}

      <button
        type="submit"
        disabled={state === 'submitting'}
        style={{
          fontFamily: C.fontBody, fontSize: 12, fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase',
          background: C.orange, color: C.ctaText, padding: '15px 40px', border: 'none',
          opacity: state === 'submitting' ? 0.6 : 1,
        }}
      >
        {state === 'submitting' ? 'Enviando…' : 'Enviar mensaje →'}
      </button>
    </form>
  )
}
