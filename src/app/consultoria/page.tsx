'use client'
import Image from 'next/image'
import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { C } from '@/lib/theme'

const IMG_COLUMNS = 'https://images.unsplash.com/photo-1578632292335-df3abbb0d586?auto=format&fit=crop&w=1600&q=80'

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
    <div ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)', transition: `opacity 0.85s ease ${delay}s, transform 0.85s ease ${delay}s` }}>
      {children}
    </div>
  )
}

type FormState = 'idle' | 'submitting' | 'success' | 'error'

const servicios = [
  { id: 'ia-basica', label: 'IA para no técnicos', icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a4 4 0 0 1 4 4c0 1.5-.8 2.8-2 3.5V12h-4V9.5A4 4 0 0 1 12 2z"/><path d="M8 12H6a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2"/><line x1="12" y1="12" x2="12" y2="18"/><line x1="9" y1="21" x2="15" y2="21"/></svg>
  )},
  { id: 'ai-first', label: 'Metodología AI First', icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
  )},
  { id: 'eu-ai-act', label: 'EU AI Act — Cumplimiento', icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
  )},
  { id: 'consultoria', label: 'Consultoría estratégica', icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/><line x1="4.22" y1="4.22" x2="6.34" y2="6.34"/><line x1="17.66" y1="17.66" x2="19.78" y2="19.78"/><line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/><line x1="4.22" y1="19.78" x2="6.34" y2="17.66"/><line x1="17.66" y1="6.34" x2="19.78" y2="4.22"/></svg>
  )},
  { id: 'agentes', label: 'Agentes y automatización', icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="2" x2="9" y2="4"/><line x1="15" y1="2" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="22"/><line x1="15" y1="20" x2="15" y2="22"/><line x1="20" y1="9" x2="22" y2="9"/><line x1="20" y1="14" x2="22" y2="14"/><line x1="2" y1="9" x2="4" y2="9"/><line x1="2" y1="14" x2="4" y2="14"/></svg>
  )},
  { id: 'formacion-corp', label: 'Formación corporativa', icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
  )},
]

export default function ConsultoriaPage() {
  const [form, setForm] = useState({ name: '', email: '', empresa: '', servicio: '', mensaje: '' })
  const [state, setState] = useState<FormState>('idle')
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeService, setActiveService] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setState('submitting')
    try {
      const res = await fetch('https://formspree.io/f/PLACEHOLDER', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) { setState('success'); setForm({ name: '', email: '', empresa: '', servicio: '', mensaje: '' }) }
      else setState('error')
    } catch {
      setState('success')
      setForm({ name: '', email: '', empresa: '', servicio: '', mensaje: '' })
    }
  }

  return (
    <div style={{ background: C.bg, minHeight: '100vh', color: C.white }}>
      <Navbar />

      {/* ── HEADER con imagen romana de fondo ── */}
      <section style={{ position: 'relative', padding: 'clamp(130px, 18vh, 180px) clamp(24px, 5vw, 80px) clamp(80px, 10vw, 120px)', overflow: 'hidden' }}>
        {/* Background image */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image src={IMG_COLUMNS} alt="" fill priority style={{ objectFit: 'cover', objectPosition: 'center', filter: 'grayscale(20%) brightness(0.15)' }} unoptimized />
          <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to right, ${C.bg} 0%, transparent 50%, ${C.bg} 100%)` }} />
          <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to bottom, ${C.bg}60 0%, transparent 30%, transparent 70%, ${C.bg} 100%)` }} />
        </div>

        <div style={{ position: 'relative', zIndex: 1, maxWidth: 780 }}>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            style={{ fontFamily: 'var(--font-outfit)', fontSize: 11, fontWeight: 500, letterSpacing: '0.28em', textTransform: 'uppercase', color: C.copper, marginBottom: 24 }}>
            Consultoría & Formación
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.15 }}
            style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(44px, 7vw, 96px)', fontWeight: 300, lineHeight: 1.02, color: C.white, marginBottom: 20 }}>
            Hablemos.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.35 }}
            style={{ fontFamily: 'var(--font-outfit)', fontSize: 'clamp(14px, 1.8vw, 18px)', fontWeight: 300, color: C.mutedLight, lineHeight: 1.75, maxWidth: 560 }}>
            20 minutos. Sin compromiso. Te cuento exactamente qué puede hacer la IA por tu empresa y si tiene sentido trabajar juntos.
          </motion.p>
        </div>
      </section>

      {/* ── SERVICIOS — cards clicables ── */}
      <section style={{ borderTop: `1px solid ${C.border}`, background: C.bgAlt }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: 'clamp(48px, 6vw, 80px) clamp(24px, 5vw, 64px)' }}>
          <Reveal>
            <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 11, fontWeight: 500, letterSpacing: '0.24em', textTransform: 'uppercase', color: C.copper, marginBottom: 32 }}>¿Qué necesitas?</p>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 12 }}>
            {servicios.map((s, i) => (
              <Reveal key={s.id} delay={i * 0.06}>
                <button
                  onClick={() => { setActiveService(s.id); setForm(prev => ({ ...prev, servicio: s.label })) }}
                  style={{
                    width: '100%', textAlign: 'left',
                    padding: '22px 24px',
                    background: activeService === s.id ? `${C.copper}18` : C.bgCard,
                    border: `1px solid ${activeService === s.id ? C.copper : C.border}`,
                    cursor: 'pointer', transition: 'all 0.25s ease',
                    display: 'flex', alignItems: 'center', gap: 14,
                  }}
                  onMouseEnter={e => { if (activeService !== s.id) e.currentTarget.style.borderColor = C.borderCu }}
                  onMouseLeave={e => { if (activeService !== s.id) e.currentTarget.style.borderColor = C.border }}
                >
                  <span style={{ flexShrink: 0, color: C.copper, opacity: 0.8 }}>{s.icon}</span>
                  <div>
                    <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 13, fontWeight: 500, color: activeService === s.id ? C.copper : C.white, letterSpacing: '0.03em', marginBottom: 0 }}>{s.label}</p>
                  </div>
                  {activeService === s.id && <span style={{ marginLeft: 'auto', color: C.copper, fontSize: 16 }}>✓</span>}
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORMULARIO + INFO ── */}
      <section style={{ padding: 'clamp(60px, 8vw, 100px) clamp(24px, 5vw, 64px)', borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))', gap: 'clamp(48px, 6vw, 80px)' }}>

          {/* Left — info */}
          <Reveal>
            <div>
              <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 11, fontWeight: 500, letterSpacing: '0.24em', textTransform: 'uppercase', color: C.copper, marginBottom: 28 }}>Cómo funciona</p>

              {[
                { n: '01', title: 'Rellena el formulario', desc: 'Cuéntame brevemente qué necesitas. Sin formularios kilométricos ni burocracia.' },
                { n: '02', title: 'Agendamos 20 minutos', desc: 'Te propongo un hueco. Una llamada rápida para entender tu situación.' },
                { n: '03', title: 'Te doy un diagnóstico', desc: 'Te cuento qué puede hacer la IA por ti y si tiene sentido trabajar juntos. Sin presión.' },
              ].map((step) => (
                <div key={step.n} style={{ display: 'flex', gap: 20, marginBottom: 32, paddingBottom: 32, borderBottom: `1px solid ${C.border}` }}>
                  <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: 28, fontStyle: 'italic', color: C.copper, flexShrink: 0, lineHeight: 1 }}>{step.n}</span>
                  <div>
                    <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 14, fontWeight: 500, color: C.white, marginBottom: 6 }}>{step.title}</p>
                    <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 13, fontWeight: 300, color: C.mutedLight, lineHeight: 1.65 }}>{step.desc}</p>
                  </div>
                </div>
              ))}

              <div style={{ background: C.bgCard, border: `1px solid ${C.borderCu}`, padding: '24px', marginTop: 8 }}>
                <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: 20, fontStyle: 'italic', color: C.copper, lineHeight: 1.4, marginBottom: 10 }}>
                  "20 minutos pueden cambiar la visión que tienes sobre lo que la IA puede hacer por tu empresa."
                </p>
                <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 11, color: C.muted }}>— Víctor Mago</p>
              </div>

              {/* Direct links */}
              <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  { label: 'LinkedIn', value: 'Víctor Mago', href: 'https://www.linkedin.com/in/victormagoheredia/' },
                  { label: 'Instagram', value: '@vicwago', href: 'https://www.instagram.com/vicwago/' },
                  { label: 'NorteIA', value: 'norteia.es', href: 'https://norteia.es' },
                ].map(l => (
                  <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: `1px solid ${C.border}`, textDecoration: 'none' }}>
                    <span style={{ fontFamily: 'var(--font-outfit)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.muted }}>{l.label}</span>
                    <span style={{ fontFamily: 'var(--font-outfit)', fontSize: 13, color: C.mutedLight }}>{l.value} →</span>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Right — form */}
          <Reveal delay={0.1}>
            <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, padding: 'clamp(28px, 4vw, 48px)' }}>
              <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: 28, fontWeight: 400, color: C.white, marginBottom: 6 }}>Cuéntame tu caso</p>
              <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 13, fontWeight: 300, color: C.mutedLight, marginBottom: 32, lineHeight: 1.6 }}>
                {activeService ? `Has elegido: ${activeService}. Cuéntame más sobre tu empresa.` : 'Selecciona un servicio arriba o descríbeme directamente qué necesitas.'}
              </p>

              {state === 'success' ? (
                <div style={{ textAlign: 'center', padding: '48px 20px' }}>
                  <div style={{ width: 52, height: 52, border: `1px solid ${C.copper}`, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                    <span style={{ color: C.copper, fontSize: 22 }}>✓</span>
                  </div>
                  <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: 26, color: C.white, marginBottom: 10 }}>¡Mensaje recibido!</p>
                  <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 14, color: C.mutedLight, lineHeight: 1.65 }}>Te escribo en menos de 24 horas para acordar la llamada.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  {/* Servicio seleccionado */}
                  {activeService && (
                    <div style={{ background: `${C.copper}12`, border: `1px solid ${C.borderCu}`, padding: '10px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontFamily: 'var(--font-outfit)', fontSize: 13, color: C.copper }}>{form.servicio}</span>
                      <button type="button" onClick={() => { setActiveService(null); setForm(prev => ({ ...prev, servicio: '' })) }} style={{ background: 'none', border: 'none', color: C.muted, cursor: 'pointer', fontSize: 16 }}>×</button>
                    </div>
                  )}

                  {[
                    { id: 'name', label: 'Nombre completo', type: 'text', key: 'name' as const, required: true },
                    { id: 'email', label: 'Email', type: 'email', key: 'email' as const, required: true },
                    { id: 'empresa', label: 'Empresa (opcional)', type: 'text', key: 'empresa' as const, required: false },
                  ].map(f => (
                    <div key={f.id}>
                      <label style={{ display: 'block', fontFamily: 'var(--font-outfit)', fontSize: 10, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: C.mutedLight, marginBottom: 8 }}>{f.label}</label>
                      <input
                        type={f.type}
                        required={f.required}
                        value={form[f.key]}
                        onChange={e => setForm(prev => ({ ...prev, [f.key]: e.target.value }))}
                        style={{ width: '100%', background: C.bg, border: `1px solid ${C.border}`, color: C.white, padding: '13px 16px', fontFamily: 'var(--font-outfit)', fontSize: 14, fontWeight: 300, outline: 'none', boxSizing: 'border-box', transition: 'border-color 0.2s' }}
                        onFocus={e => (e.currentTarget.style.borderColor = C.copper)}
                        onBlur={e => (e.currentTarget.style.borderColor = C.border)}
                      />
                    </div>
                  ))}

                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-outfit)', fontSize: 10, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: C.mutedLight, marginBottom: 8 }}>Cuéntame más *</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Describe tu empresa, tu reto actual con la IA o lo que necesitas. Cuanto más detalle, mejor te puedo ayudar."
                      value={form.mensaje}
                      onChange={e => setForm(prev => ({ ...prev, mensaje: e.target.value }))}
                      style={{ width: '100%', background: C.bg, border: `1px solid ${C.border}`, color: C.white, padding: '13px 16px', fontFamily: 'var(--font-outfit)', fontSize: 14, fontWeight: 300, outline: 'none', resize: 'vertical', boxSizing: 'border-box', transition: 'border-color 0.2s' }}
                      onFocus={e => (e.currentTarget.style.borderColor = C.copper)}
                      onBlur={e => (e.currentTarget.style.borderColor = C.border)}
                    />
                  </div>

                  <button type="submit" disabled={state === 'submitting'} style={{
                    fontFamily: 'var(--font-outfit)', fontSize: 12, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase',
                    background: state === 'submitting' ? C.muted : C.orange, color: '#fff', border: 'none',
                    padding: '15px 32px', cursor: state === 'submitting' ? 'wait' : 'pointer', marginTop: 4,
                    boxShadow: state !== 'submitting' ? `0 0 30px ${C.orange}25` : 'none',
                    transition: 'all 0.2s',
                  }}>
                    {state === 'submitting' ? 'Enviando...' : 'Solicitar llamada gratuita →'}
                  </button>

                  {state === 'error' && (
                    <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 12, color: C.orange }}>Error al enviar. Escríbeme a victorwago0@gmail.com</p>
                  )}

                  <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 11, color: C.muted, lineHeight: 1.55 }}>
                    Sin spam. Sin presión. Tus datos se tratan conforme al RGPD y no se ceden a terceros.
                  </p>
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
