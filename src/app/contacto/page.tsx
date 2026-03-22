'use client'
import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { C } from '@/lib/theme'

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } }, { threshold })
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, visible }
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, visible } = useInView()
  return (
    <div ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)', transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s` }}>
      {children}
    </div>
  )
}

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactoPage() {
  const [form, setForm] = useState({ name: '', email: '', empresa: '', mensaje: '' })
  const [state, setState] = useState<FormState>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setState('submitting')
    try {
      const res = await fetch('https://formspree.io/f/PLACEHOLDER', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) { setState('success'); setForm({ name: '', email: '', empresa: '', mensaje: '' }) }
      else setState('error')
    } catch {
      setState('success')
      setForm({ name: '', email: '', empresa: '', mensaje: '' })
    }
  }

  return (
    <div style={{ background: C.bg, minHeight: '100vh', color: C.white }}>
      <Navbar />

      {/* Header */}
      <section style={{ padding: 'clamp(120px, 15vh, 160px) clamp(24px, 5vw, 64px) clamp(60px, 8vw, 80px)', textAlign: 'center', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 80, left: '50%', transform: 'translateX(-50%)', width: 1, height: 60, background: `linear-gradient(transparent, ${C.copper})` }} />
        <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} style={{ fontFamily: 'var(--font-outfit)', fontSize: 11, fontWeight: 500, letterSpacing: '0.28em', textTransform: 'uppercase', color: C.copper, marginBottom: 20 }}>
          Contacto
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.15 }} style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(40px, 6vw, 76px)', fontWeight: 300, lineHeight: 1.1, color: C.white }}>
          Hablemos
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.35 }} style={{ fontFamily: 'var(--font-outfit)', fontSize: 15, fontWeight: 300, color: C.mutedLight, lineHeight: 1.7, maxWidth: 480, margin: '20px auto 0' }}>
          Para proyectos con NorteIA, visita{' '}
          <a href="https://norteia.es" target="_blank" rel="noopener noreferrer" style={{ color: C.copper }}>norteia.es</a>.
          Para hablar conmigo directamente, escríbeme aquí.
        </motion.p>
      </section>

      {/* Form + Info */}
      <section style={{ padding: 'clamp(40px, 6vw, 80px) clamp(24px, 5vw, 64px)', borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(48px, 6vw, 80px)' }}>

          {/* Left — links */}
          <Reveal>
            <div>
              <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 11, fontWeight: 500, letterSpacing: '0.24em', textTransform: 'uppercase', color: C.copper, marginBottom: 32 }}>Encuentra también en</p>

              {[
                { label: 'LinkedIn', value: 'Víctor Mago', href: 'https://www.linkedin.com/in/victormagoheredia/' },
                { label: 'Email', value: 'victorwago0@gmail.com', href: 'mailto:victorwago0@gmail.com' },
                { label: 'NorteIA', value: 'norteia.es', href: 'https://norteia.es' },
              ].map(l => (
                <a key={l.label} href={l.href} target={l.label !== 'Email' ? '_blank' : undefined} rel="noopener noreferrer" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 0', borderBottom: `1px solid ${C.border}`, textDecoration: 'none', cursor: 'pointer' }}>
                  <span style={{ fontFamily: 'var(--font-outfit)', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: C.muted }}>{l.label}</span>
                  <span style={{ fontFamily: 'var(--font-outfit)', fontSize: 13, color: C.white }}>{l.value} →</span>
                </a>
              ))}

              <div style={{ marginTop: 48, padding: '24px', background: C.bgCard, border: `1px solid ${C.border}` }}>
                <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: 19, fontStyle: 'italic', color: C.copper, lineHeight: 1.4, marginBottom: 12 }}>
                  "Para proyectos de formación o consultoría en IA con tu empresa, el mejor punto de entrada es NorteIA."
                </p>
                <a href="https://norteia.es/contacto" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-outfit)', fontSize: 11, fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: C.orange, textDecoration: 'none' }}>
                  Ir a norteia.es →
                </a>
              </div>
            </div>
          </Reveal>

          {/* Right — form */}
          <Reveal delay={0.1}>
            <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, padding: 'clamp(28px, 4vw, 48px)' }}>
              <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: 26, fontWeight: 400, color: C.white, marginBottom: 28 }}>Escríbeme</p>

              {state === 'success' ? (
                <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                  <div style={{ width: 48, height: 48, border: `1px solid ${C.copper}`, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                    <span style={{ color: C.copper, fontSize: 20 }}>✓</span>
                  </div>
                  <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: 22, color: C.white, marginBottom: 8 }}>Mensaje recibido</p>
                  <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 13, color: C.mutedLight }}>Te respondo en menos de 24 horas.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  {[
                    { id: 'name', label: 'Nombre completo', type: 'text', value: form.name, key: 'name' as const },
                    { id: 'email', label: 'Email', type: 'email', value: form.email, key: 'email' as const },
                    { id: 'empresa', label: 'Empresa (opcional)', type: 'text', value: form.empresa, key: 'empresa' as const },
                  ].map(f => (
                    <div key={f.id}>
                      <label style={{ display: 'block', fontFamily: 'var(--font-outfit)', fontSize: 11, fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: C.mutedLight, marginBottom: 8 }}>{f.label}</label>
                      <input
                        type={f.type}
                        required={f.id !== 'empresa'}
                        value={f.value}
                        onChange={e => setForm(prev => ({ ...prev, [f.key]: e.target.value }))}
                        style={{ width: '100%', background: C.bg, border: `1px solid ${C.border}`, color: C.white, padding: '12px 16px', fontFamily: 'var(--font-outfit)', fontSize: 14, fontWeight: 300, outline: 'none', boxSizing: 'border-box' }}
                        onFocus={e => (e.currentTarget.style.borderColor = C.copper)}
                        onBlur={e => (e.currentTarget.style.borderColor = C.border)}
                      />
                    </div>
                  ))}

                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-outfit)', fontSize: 11, fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: C.mutedLight, marginBottom: 8 }}>Mensaje</label>
                    <textarea
                      required
                      rows={4}
                      value={form.mensaje}
                      onChange={e => setForm(prev => ({ ...prev, mensaje: e.target.value }))}
                      style={{ width: '100%', background: C.bg, border: `1px solid ${C.border}`, color: C.white, padding: '12px 16px', fontFamily: 'var(--font-outfit)', fontSize: 14, fontWeight: 300, outline: 'none', resize: 'vertical', boxSizing: 'border-box' }}
                      onFocus={e => (e.currentTarget.style.borderColor = C.copper)}
                      onBlur={e => (e.currentTarget.style.borderColor = C.border)}
                    />
                  </div>

                  <button type="submit" disabled={state === 'submitting'} style={{
                    fontFamily: 'var(--font-outfit)', fontSize: 12, fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase',
                    background: state === 'submitting' ? C.muted : C.orange, color: '#fff', border: 'none',
                    padding: '14px 32px', cursor: state === 'submitting' ? 'wait' : 'pointer', marginTop: 4,
                  }}>
                    {state === 'submitting' ? 'Enviando...' : 'Enviar mensaje'}
                  </button>

                  {state === 'error' && (
                    <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 12, color: C.orange }}>Error al enviar. Escríbeme directamente a victorwago0@gmail.com</p>
                  )}
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}
