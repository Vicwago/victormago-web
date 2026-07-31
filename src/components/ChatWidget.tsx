'use client'
import { useEffect, useRef, useState } from 'react'

type Msg = { role: 'user' | 'assistant'; content: string }

const SALUDO: Msg = {
  role: 'assistant',
  content:
    'Hola, soy el asistente de Víctor, impulsado por IA. ¿Tienes una duda sobre automatización, formación de equipos o el EU AI Act? Pregúntame lo que quieras.',
}

const FALLBACK =
  'Ahora mismo no puedo responder por aquí. Escríbele directamente a Víctor en victormago.com/contacto o reserva 20 minutos gratis — te contesta en menos de 24 h.'

// Chat asistente flotante (equivalente al "Asistente de Luis" de salgadoia.com).
export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [msgs, setMsgs] = useState<Msg[]>([SALUDO])
  const [input, setInput] = useState('')
  const [busy, setBusy] = useState(false)
  const listRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight })
  }, [msgs, open])

  const send = async () => {
    const text = input.trim()
    if (!text || busy) return
    const next: Msg[] = [...msgs, { role: 'user', content: text }]
    setMsgs(next)
    setInput('')
    setBusy(true)
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next.slice(1) }),
      })
      if (res.ok) {
        const { reply } = await res.json()
        setMsgs(m => [...m, { role: 'assistant', content: reply || FALLBACK }])
      } else {
        setMsgs(m => [...m, { role: 'assistant', content: FALLBACK }])
      }
    } catch {
      setMsgs(m => [...m, { role: 'assistant', content: FALLBACK }])
    }
    setBusy(false)
  }

  return (
    <>
      {/* Botón flotante */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Cerrar asistente' : 'Abrir asistente'}
        aria-expanded={open}
        style={{
          position: 'fixed', right: 'clamp(14px, 2.5vw, 32px)', bottom: 'clamp(14px, 2.5vw, 32px)', zIndex: 95,
          width: 56, height: 56, borderRadius: '50%',
          background: '#2C03F3', color: '#F5F3EB', border: 'none',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 10px 30px -8px rgba(44, 3, 243, 0.5)',
          transition: 'transform 0.25s cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        )}
      </button>

      {/* Panel */}
      {open && (
        <div role="dialog" aria-label="Asistente de Víctor" style={{
          position: 'fixed', right: 'clamp(10px, 2vw, 32px)', bottom: 'clamp(80px, 12vh, 100px)', zIndex: 95,
          width: 'min(370px, calc(100vw - 24px))', maxHeight: 'min(540px, 72vh)',
          display: 'flex', flexDirection: 'column',
          background: 'var(--surface, #FCFBF6)', border: '1.5px solid var(--border, #DCD8C8)',
          borderRadius: 18, overflow: 'hidden',
          boxShadow: '0 24px 60px -18px rgba(20, 18, 42, 0.35)',
        }}>
          {/* Cabecera */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 18px', borderBottom: '1.5px solid var(--border, #DCD8C8)', background: '#071233' }}>
            <span style={{ width: 34, height: 34, borderRadius: '50%', background: '#2C03F3', color: '#F5F3EB', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 14, flexShrink: 0 }}>V</span>
            <span>
              <span style={{ display: 'block', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 14, color: '#F2F6FB' }}>Asistente de Víctor</span>
              <span style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: 10.5, letterSpacing: '0.08em', color: '#8FA3BC' }}>Impulsado por IA</span>
            </span>
          </div>

          {/* Mensajes */}
          <div ref={listRef} style={{ flex: 1, overflowY: 'auto', padding: 16, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {msgs.map((m, i) => (
              <div key={i} style={{
                alignSelf: m.role === 'user' ? 'flex-end' : 'flex-start',
                maxWidth: '85%',
                background: m.role === 'user' ? '#2C03F3' : 'var(--surface-alt, #EDEAE0)',
                color: m.role === 'user' ? '#F5F3EB' : 'var(--text, #14122A)',
                borderRadius: m.role === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                padding: '10px 14px',
                fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 300, lineHeight: 1.6,
                whiteSpace: 'pre-wrap',
              }}>
                {m.content}
              </div>
            ))}
            {busy && (
              <div style={{ alignSelf: 'flex-start', fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-faint, #8B889A)', padding: '6px 4px' }}>
                Escribiendo…
              </div>
            )}
          </div>

          {/* Input */}
          <form
            onSubmit={e => { e.preventDefault(); send() }}
            style={{ display: 'flex', gap: 8, padding: 12, borderTop: '1.5px solid var(--border, #DCD8C8)' }}
          >
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Escribe tu pregunta…"
              aria-label="Tu pregunta"
              style={{ flex: 1, background: 'var(--bg, #F5F3EB)', border: '1.5px solid var(--border, #DCD8C8)', borderRadius: 999, padding: '11px 16px', fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text, #14122A)' }}
            />
            <button
              type="submit"
              disabled={busy || !input.trim()}
              aria-label="Enviar"
              style={{ width: 42, height: 42, borderRadius: '50%', background: '#2C03F3', color: '#F5F3EB', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: busy || !input.trim() ? 0.5 : 1, flexShrink: 0 }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4z"/><path d="M22 2 11 13"/></svg>
            </button>
          </form>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 10.5, fontWeight: 300, color: 'var(--text-faint, #8B889A)', padding: '0 16px 12px', lineHeight: 1.5 }}>
            Asistente automático: puede equivocarse. Para hablar con Víctor de verdad,{' '}
            <a href="/contacto" style={{ color: '#2C03F3', textDecoration: 'underline' }}>reserva 20 min gratis</a>.
          </p>
        </div>
      )}
    </>
  )
}
