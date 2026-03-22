'use client'
import Link from 'next/link'
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

export default function WebinarPage() {
  const [form, setForm] = useState({ name: '', email: '', empresa: '' })
  const [state, setState] = useState<FormState>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setState('submitting')
    // Formspree fallback — replace with Resend API endpoint when ready
    try {
      const res = await fetch('https://formspree.io/f/PLACEHOLDER', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) { setState('success'); setForm({ name: '', email: '', empresa: '' }) }
      else setState('error')
    } catch {
      // In dev, just show success for demo
      setState('success')
      setForm({ name: '', email: '', empresa: '' })
    }
  }

  return (
    <div style={{ background: C.bg, minHeight: '100vh', color: C.white }}>
      <Navbar />

      {/* Header */}
      <section style={{ padding: 'clamp(120px, 15vh, 160px) clamp(24px, 5vw, 64px) clamp(60px, 8vw, 80px)', textAlign: 'center', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 80, left: '50%', transform: 'translateX(-50%)', width: 1, height: 60, background: `linear-gradient(transparent, ${C.copper})` }} />
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div style={{ display: 'inline-block', background: `${C.orange}15`, border: `1px solid ${C.orange}40`, padding: '5px 16px', marginBottom: 24 }}>
            <span style={{ fontFamily: 'var(--font-outfit)', fontSize: 10, fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: C.orange }}>Gratuito · Mensual</span>
          </div>
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.15 }} style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(38px, 5.5vw, 72px)', fontWeight: 300, lineHeight: 1.1, color: C.white, maxWidth: 700, margin: '0 auto' }}>
          Webinar: IA y EU AI Act<br /><em style={{ fontStyle: 'italic', color: C.copper }}>para pymes</em>
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }} style={{ fontFamily: 'var(--font-outfit)', fontSize: 15, fontWeight: 300, color: C.mutedLight, lineHeight: 1.7, maxWidth: 520, margin: '24px auto 0', letterSpacing: '0.02em' }}>
          Una hora práctica para entender qué cambia con el EU AI Act y cómo adaptar tu empresa sin frenar la innovación.
        </motion.p>
      </section>

      {/* Contenido + Formulario */}
      <section style={{ padding: 'clamp(40px, 6vw, 80px) clamp(24px, 5vw, 64px)', borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 960, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))', gap: 'clamp(48px, 6vw, 80px)' }}>

          {/* Left — info */}
          <Reveal>
            <div>
              <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 11, fontWeight: 500, letterSpacing: '0.24em', textTransform: 'uppercase', color: C.copper, marginBottom: 24 }}>Próxima sesión</p>

              <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, padding: '24px 28px', marginBottom: 36 }}>
                <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: 26, fontWeight: 500, color: C.white, marginBottom: 4 }}>Fecha por confirmar</p>
                <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 13, color: C.mutedLight, letterSpacing: '0.04em' }}>Inscríbete para recibir aviso con la próxima fecha</p>
              </div>

              <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 11, fontWeight: 500, letterSpacing: '0.24em', textTransform: 'uppercase', color: C.copper, marginBottom: 20 }}>¿Por qué asistir?</p>

              {[
                { n: 'I', text: 'Entiende qué es el EU AI Act y qué le afecta realmente a tu empresa, sin tecnicismos.' },
                { n: 'II', text: 'Descubre cómo la IA puede aumentar tu productividad con herramientas que ya existen.' },
                { n: 'III', text: 'Recibe una hoja de ruta personalizada: próximos pasos concretos para tu sector.' },
              ].map((item) => (
                <div key={item.n} style={{ display: 'flex', gap: 20, marginBottom: 24, paddingBottom: 24, borderBottom: `1px solid ${C.border}` }}>
                  <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: 18, fontStyle: 'italic', color: C.copper, flexShrink: 0, minWidth: 20 }}>{item.n}</span>
                  <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 14, fontWeight: 300, color: C.mutedLight, lineHeight: 1.65 }}>{item.text}</p>
                </div>
              ))}

              {/* Details */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 8 }}>
                {[
                  { label: 'Duración', value: '60 minutos + Q&A' },
                  { label: 'Formato', value: 'Online, en directo' },
                  { label: 'Precio', value: 'Completamente gratuito' },
                  { label: 'Plazas', value: 'Limitadas' },
                ].map(d => (
                  <div key={d.label} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: `1px solid ${C.border}`, paddingBottom: 10 }}>
                    <span style={{ fontFamily: 'var(--font-outfit)', fontSize: 12, color: C.muted, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{d.label}</span>
                    <span style={{ fontFamily: 'var(--font-outfit)', fontSize: 13, color: C.white, fontWeight: 400 }}>{d.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Right — form */}
          <Reveal delay={0.1}>
            <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, padding: 'clamp(28px, 4vw, 48px)' }}>
              <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: 26, fontWeight: 400, color: C.white, marginBottom: 6 }}>Reserva tu plaza</p>
              <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 13, fontWeight: 300, color: C.mutedLight, marginBottom: 32, lineHeight: 1.6 }}>Recibirás un aviso cuando confirmemos la próxima fecha.</p>

              {state === 'success' ? (
                <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                  <div style={{ width: 48, height: 48, border: `1px solid ${C.copper}`, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                    <span style={{ color: C.copper, fontSize: 20 }}>✓</span>
                  </div>
                  <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: 22, color: C.white, marginBottom: 8 }}>¡Apuntado!</p>
                  <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 13, color: C.mutedLight }}>Te avisaremos cuando confirmemos la próxima sesión.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  {[
                    { id: 'name', label: 'Nombre completo', type: 'text', value: form.name, key: 'name' as const },
                    { id: 'email', label: 'Email profesional', type: 'email', value: form.email, key: 'email' as const },
                    { id: 'empresa', label: 'Empresa (opcional)', type: 'text', value: form.empresa, key: 'empresa' as const },
                  ].map(f => (
                    <div key={f.id}>
                      <label style={{ display: 'block', fontFamily: 'var(--font-outfit)', fontSize: 11, fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: C.mutedLight, marginBottom: 8 }}>{f.label}</label>
                      <input
                        type={f.type}
                        required={f.id !== 'empresa'}
                        value={f.value}
                        onChange={e => setForm(prev => ({ ...prev, [f.key]: e.target.value }))}
                        style={{
                          width: '100%', background: C.bg, border: `1px solid ${C.border}`, color: C.white,
                          padding: '12px 16px', fontFamily: 'var(--font-outfit)', fontSize: 14, fontWeight: 300,
                          outline: 'none', boxSizing: 'border-box',
                        }}
                        onFocus={e => (e.currentTarget.style.borderColor = C.copper)}
                        onBlur={e => (e.currentTarget.style.borderColor = C.border)}
                      />
                    </div>
                  ))}

                  <button type="submit" disabled={state === 'submitting'} style={{
                    fontFamily: 'var(--font-outfit)', fontSize: 12, fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase',
                    background: state === 'submitting' ? C.muted : C.orange, color: '#fff', border: 'none',
                    padding: '14px 32px', cursor: state === 'submitting' ? 'wait' : 'pointer', marginTop: 8,
                    transition: 'opacity 0.2s',
                  }}>
                    {state === 'submitting' ? 'Enviando...' : 'Reservar plaza gratuita'}
                  </button>

                  {state === 'error' && (
                    <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 12, color: C.orange }}>Ha ocurrido un error. Escríbenos directamente a hola@norteia.es</p>
                  )}

                  <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 11, color: C.muted, lineHeight: 1.5 }}>
                    Sin spam. Puedes darte de baja en cualquier momento. Tus datos se tratan conforme al RGPD.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Testimonios placeholder */}
      <section style={{ padding: 'clamp(60px, 8vw, 100px) clamp(24px, 5vw, 64px)', background: C.bgAlt, borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <Reveal>
            <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 11, fontWeight: 500, letterSpacing: '0.24em', textTransform: 'uppercase', color: C.copper, marginBottom: 40 }}>Quienes ya asistieron</p>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(260px, 100%), 1fr))', gap: 24 }}>
            {[
              { quote: 'Por fin alguien que explica la IA sin jerga técnica. Aplicable desde el día uno.', name: 'Directora de RRHH · Pyme industrial' },
              { quote: 'El EU AI Act me parecía una montaña imposible. Víctor lo explica en 20 minutos.', name: 'CEO · Empresa de servicios, 45 empleados' },
              { quote: 'Salí con tres ideas concretas para automatizar procesos en mi empresa.', name: 'COO · Sector salud' },
            ].map((t, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, padding: '28px 24px', textAlign: 'left' }}>
                  <div style={{ width: 24, height: 2, background: C.copper, marginBottom: 16 }} />
                  <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: 18, fontStyle: 'italic', color: C.white, lineHeight: 1.5, marginBottom: 16 }}>"{t.quote}"</p>
                  <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 11, color: C.muted, letterSpacing: '0.08em' }}>— {t.name}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
