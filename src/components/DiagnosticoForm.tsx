'use client'
import { useState } from 'react'
import { C } from '@/lib/theme'
import { CTA_LABEL, ctaHref, CAL_URL } from '@/lib/site'

type Estado = 'form' | 'cargando' | 'resultado' | 'error'

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: 'var(--bg)',
  border: `1.5px solid ${C.border}`,
  borderRadius: 12,
  padding: '13px 16px',
  fontFamily: C.fontBody,
  fontSize: 14,
  fontWeight: 300,
  color: C.white,
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: C.fontMono,
  fontSize: 11,
  letterSpacing: '0.16em',
  textTransform: 'uppercase',
  color: C.muted,
  marginBottom: 8,
}

// Mini-consultorio: 5 preguntas → diagnóstico personalizado con IA.
export default function DiagnosticoForm() {
  const [estado, setEstado] = useState<Estado>('form')
  const [diagnostico, setDiagnostico] = useState('')
  const [consent, setConsent] = useState(false)
  const [form, setForm] = useState({ sector: '', tamano: '', dolor: '', herramientas: '', urgencia: '', email: '' })

  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }))

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!consent) return
    setEstado('cargando')
    try {
      const res = await fetch('/api/diagnostico', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        const { diagnostico: d } = await res.json()
        setDiagnostico(d)
        setEstado('resultado')
      } else {
        setEstado('error')
      }
    } catch {
      setEstado('error')
    }
  }

  if (estado === 'resultado') {
    return (
      <div>
        <div style={{ background: C.bgCard, border: `1.5px solid ${C.borderCu}`, borderRadius: 'var(--radius-card)', padding: 'clamp(26px, 3.5vw, 40px)', marginBottom: 24 }}>
          <p style={{ fontFamily: C.fontMono, fontSize: 11, letterSpacing: '0.24em', textTransform: 'uppercase', color: C.copper, marginBottom: 18 }}>
            Tu diagnóstico exprés
          </p>
          <div style={{ fontFamily: C.fontBody, fontSize: 15, fontWeight: 300, color: C.mutedLight, lineHeight: 1.85, whiteSpace: 'pre-wrap' }}>
            {diagnostico}
          </div>
        </div>
        <p style={{ fontFamily: C.fontBody, fontSize: 13.5, fontWeight: 300, color: C.muted, marginBottom: 18 }}>
          Te lo he enviado también por email. ¿Lo aterrizamos sobre tu caso concreto?
        </p>
        {CAL_URL
          ? <a className="btn-primary" href={ctaHref()} target="_blank" rel="noopener noreferrer">{CTA_LABEL}</a>
          : <a className="btn-primary" href="/contacto">{CTA_LABEL}</a>}
      </div>
    )
  }

  if (estado === 'cargando') {
    return (
      <div style={{ textAlign: 'center', padding: '60px 20px' }}>
        <p style={{ fontFamily: C.fontDisplay, fontWeight: 750, fontSize: 22, color: C.white, marginBottom: 10 }}>
          Analizando tus respuestas…
        </p>
        <p style={{ fontFamily: C.fontBody, fontSize: 13.5, fontWeight: 300, color: C.muted }}>
          Unos segundos: estoy cruzando tu situación con casos parecidos.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
      <div>
        <label htmlFor="d-sector" style={labelStyle}>01 · ¿A qué se dedica tu empresa?</label>
        <input id="d-sector" required value={form.sector} onChange={e => set('sector', e.target.value)} placeholder="Ej: despacho legal, inmobiliaria, clínica, tienda…" style={inputStyle} />
      </div>
      <div>
        <label htmlFor="d-tamano" style={labelStyle}>02 · ¿Cuántas personas sois?</label>
        <input id="d-tamano" value={form.tamano} onChange={e => set('tamano', e.target.value)} placeholder="Ej: 4 personas" style={inputStyle} />
      </div>
      <div>
        <label htmlFor="d-dolor" style={labelStyle}>03 · ¿Dónde pierde más horas tu equipo cada semana?</label>
        <textarea id="d-dolor" required rows={3} value={form.dolor} onChange={e => set('dolor', e.target.value)} placeholder="Ej: contestar emails repetitivos, pasar datos a Excel, perseguir clientes…" style={{ ...inputStyle, resize: 'vertical' }} />
      </div>
      <div>
        <label htmlFor="d-herr" style={labelStyle}>04 · ¿Qué herramientas usáis hoy?</label>
        <input id="d-herr" value={form.herramientas} onChange={e => set('herramientas', e.target.value)} placeholder="Ej: Gmail, Excel, WhatsApp, un programa de gestión…" style={inputStyle} />
      </div>
      <div>
        <label htmlFor="d-urg" style={labelStyle}>05 · ¿Por qué ahora?</label>
        <input id="d-urg" value={form.urgencia} onChange={e => set('urgencia', e.target.value)} placeholder="Ej: no llegamos a todo, la competencia se mueve, EU AI Act…" style={inputStyle} />
      </div>
      <div>
        <label htmlFor="d-email" style={labelStyle}>Tu email (te envío el diagnóstico)</label>
        <input id="d-email" type="email" required value={form.email} onChange={e => set('email', e.target.value)} placeholder="tu@email.com" style={inputStyle} />
      </div>

      <label style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontFamily: C.fontBody, fontSize: 11.5, fontWeight: 300, color: C.muted, lineHeight: 1.5, cursor: 'pointer' }}>
        <input type="checkbox" checked={consent} onChange={e => setConsent(e.target.checked)} required style={{ marginTop: 2, accentColor: '#2C03F3' }} />
        <span>
          Acepto la <a href="/politica-privacidad" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>política de privacidad</a>.
          El diagnóstico se genera con IA a partir de tus respuestas.
        </span>
      </label>

      {estado === 'error' && (
        <p style={{ fontFamily: C.fontBody, fontSize: 13, color: C.orange }}>
          No se pudo generar el diagnóstico. Inténtalo de nuevo o escríbeme directamente a victor@norteia.es.
        </p>
      )}

      <button type="submit" disabled={!consent} style={{ fontFamily: C.fontBody, fontSize: 15, fontWeight: 600, background: C.orange, color: C.ctaText, padding: '15px 36px', border: 'none', borderRadius: 999, alignSelf: 'flex-start', opacity: consent ? 1 : 0.55 }}>
        Generar mi diagnóstico →
      </button>
    </form>
  )
}
