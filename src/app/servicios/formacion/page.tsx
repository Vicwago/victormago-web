'use client'
import Image from 'next/image'
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
    <div ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)', transition: `opacity 0.85s ease ${delay}s, transform 0.85s ease ${delay}s` }}>
      {children}
    </div>
  )
}

const programas = [
  {
    n: '01',
    title: 'IA para no técnicos',
    duration: '4–8 horas',
    format: 'Presencial o remoto',
    desc: 'Introducción práctica a ChatGPT, Claude y herramientas de IA generativa aplicadas al trabajo del día a día. Sin programación, sin jerga técnica. Al terminar, tu equipo sabe qué pedirle a la IA y cómo.',
    items: ['Qué es la IA generativa y cómo funciona', 'Prompting efectivo desde el primer día', 'Herramientas clave: ChatGPT, Claude, Gemini', 'Casos de uso por departamento', 'Errores comunes y cómo evitarlos'],
  },
  {
    n: '02',
    title: 'Metodología AI First',
    duration: '1–2 días',
    format: 'Workshop en empresa',
    desc: 'Rediseño de procesos poniendo la IA en el centro. Tu empresa aprende a pensar primero en la IA antes de ejecutar cualquier tarea. Un cambio de mentalidad que multiplica la productividad.',
    items: ['Diagnóstico de procesos actuales', 'Identificación de oportunidades de automatización', 'Rediseño de flujos de trabajo con IA', 'Implementación práctica con herramientas reales', 'Plan de adopción por equipos'],
  },
  {
    n: '03',
    title: 'Formación corporativa a medida',
    duration: 'A definir',
    format: 'Personalizado',
    desc: 'Programa diseñado específicamente para tu empresa, tu sector y tus objetivos. Adaptado al nivel técnico de tu equipo y al momento digital en que se encuentra tu organización.',
    items: ['Análisis previo del equipo y necesidades', 'Contenido 100% adaptado a tu sector', 'Materiales y recursos exclusivos', 'Sesiones de seguimiento post-formación', 'Certificado de participación'],
  },
]

export default function FormacionPage() {
  return (
    <div style={{ background: C.bg, minHeight: '100vh', color: C.white }}>
      <Navbar />

      {/* Hero */}
      <section style={{ position: 'relative', padding: 'clamp(130px, 18vh, 180px) clamp(24px, 5vw, 80px) clamp(80px, 10vw, 120px)', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image src="/service-formacion.jpg" alt="" fill priority sizes="100vw" style={{ objectFit: 'cover', objectPosition: 'center 30%', filter: 'brightness(0.18)' }} unoptimized />
          <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to right, ${C.bg} 0%, transparent 60%, ${C.bg} 100%)` }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '50%', background: `linear-gradient(transparent, ${C.bg})` }} />
        </div>

        <div style={{ position: 'relative', zIndex: 1, maxWidth: 700 }}>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            style={{ fontFamily: 'var(--font-outfit)', fontSize: 11, fontWeight: 500, letterSpacing: '0.28em', textTransform: 'uppercase', color: C.copper, marginBottom: 16 }}>
            Servicios · Formación IA
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.15 }}
            style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(44px, 7vw, 88px)', fontWeight: 300, lineHeight: 1.02, color: C.white, marginBottom: 20 }}>
            De la teoría<br /><em style={{ color: C.copper }}>al resultado.</em>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.35 }}
            style={{ fontFamily: 'var(--font-outfit)', fontSize: 'clamp(14px, 1.8vw, 18px)', fontWeight: 300, color: C.mutedLight, lineHeight: 1.75, maxWidth: 520 }}>
            Programas prácticos para que tu equipo empiece a usar la IA desde el primer día. Sin programación, sin jerga técnica.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.55 }}
            style={{ display: 'flex', gap: 16, marginTop: 36, flexWrap: 'wrap' }}>
            <Link href="/contacto" style={{ fontFamily: 'var(--font-outfit)', fontSize: 12, fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', background: C.orange, color: '#fff', padding: '13px 28px', textDecoration: 'none' }}>
              Solicitar programa →
            </Link>
            <Link href="/servicios" style={{ fontFamily: 'var(--font-outfit)', fontSize: 12, fontWeight: 400, letterSpacing: '0.16em', textTransform: 'uppercase', color: C.copper, border: `1px solid ${C.borderCu}`, padding: '13px 24px', textDecoration: 'none' }}>
              Todos los servicios
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section style={{ padding: 'clamp(60px, 8vw, 100px) clamp(24px, 5vw, 64px)', borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'center' }}>
          <Reveal>
            <div>
              <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 11, fontWeight: 500, letterSpacing: '0.24em', textTransform: 'uppercase', color: C.copper, marginBottom: 16 }}>¿Para quién es?</p>
              <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(28px, 3.5vw, 46px)', fontWeight: 300, color: C.white, lineHeight: 1.15, marginBottom: 20 }}>
                Para equipos que quieren<br /><em style={{ color: C.copper }}>resultados reales.</em>
              </h2>
              <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 15, fontWeight: 300, color: C.mutedLight, lineHeight: 1.85 }}>
                Trabajo con equipos directivos, mandos intermedios y equipos operativos de cualquier sector. No necesitas saber programar. Necesitas saber qué pedirle a la IA.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {[
                { label: '+100', sub: 'personas formadas' },
                { label: '3', sub: 'programas disponibles' },
                { label: '100%', sub: 'orientado al negocio' },
                { label: '0', sub: 'conocimientos técnicos requeridos' },
              ].map(s => (
                <div key={s.label} style={{ padding: '24px 20px', border: `1px solid ${C.border}`, background: C.bgCard }}>
                  <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: 36, fontWeight: 300, color: C.copper, lineHeight: 1, marginBottom: 6 }}>{s.label}</p>
                  <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 11, fontWeight: 300, color: C.muted, letterSpacing: '0.04em' }}>{s.sub}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Programs */}
      <section style={{ padding: 'clamp(60px, 8vw, 100px) clamp(24px, 5vw, 64px)', background: C.bgAlt, borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <Reveal>
            <div style={{ marginBottom: 56, maxWidth: 560 }}>
              <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 11, fontWeight: 500, letterSpacing: '0.24em', textTransform: 'uppercase', color: C.copper, marginBottom: 16 }}>Programas</p>
              <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(28px, 3.5vw, 48px)', fontWeight: 300, color: C.white, lineHeight: 1.1 }}>
                Elige el que<br />mejor se adapta a tu empresa.
              </h2>
            </div>
          </Reveal>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {programas.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.08}>
                <div style={{ background: C.bg, border: `1px solid ${C.border}`, padding: 'clamp(28px, 4vw, 40px)' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: 'clamp(24px, 4vw, 48px)' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 16 }}>
                        <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: 40, fontWeight: 300, color: C.copper, opacity: 0.4, lineHeight: 1 }}>{p.n}</span>
                        <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(22px, 2.5vw, 30px)', fontWeight: 400, color: C.white }}>{p.title}</h3>
                      </div>
                      <div style={{ display: 'flex', gap: 20, marginBottom: 16 }}>
                        <span style={{ fontFamily: 'var(--font-outfit)', fontSize: 11, color: C.muted, letterSpacing: '0.06em' }}>⏱ {p.duration}</span>
                        <span style={{ fontFamily: 'var(--font-outfit)', fontSize: 11, color: C.muted, letterSpacing: '0.06em' }}>📍 {p.format}</span>
                      </div>
                      <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 14, fontWeight: 300, color: C.mutedLight, lineHeight: 1.8 }}>{p.desc}</p>
                    </div>
                    <div>
                      <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 10, fontWeight: 500, letterSpacing: '0.20em', textTransform: 'uppercase', color: C.muted, marginBottom: 16 }}>Contenido</p>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                        {p.items.map(item => (
                          <div key={item} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                            <div style={{ width: 4, height: 4, background: C.copper, borderRadius: '50%', marginTop: 7, flexShrink: 0 }} />
                            <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 13, fontWeight: 300, color: C.mutedLight, lineHeight: 1.5 }}>{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: 'clamp(60px, 8vw, 100px) clamp(24px, 5vw, 64px)', borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <Reveal>
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 11, fontWeight: 500, letterSpacing: '0.24em', textTransform: 'uppercase', color: C.copper, marginBottom: 16 }}>Cómo funciona</p>
              <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 300, color: C.white }}>El proceso, paso a paso.</h2>
            </div>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 24 }}>
            {[
              { step: '1', title: 'Diagnóstico', desc: 'Analizamos el nivel actual de tu equipo y qué herramientas usáis.' },
              { step: '2', title: 'Diseño', desc: 'Diseño un programa a medida con casos de uso de tu sector.' },
              { step: '3', title: 'Impartición', desc: 'Sesión o taller intensivo, presencial o en remoto.' },
              { step: '4', title: 'Seguimiento', desc: 'Recursos, materiales y acceso a consultas post-formación.' },
            ].map((s, i) => (
              <Reveal key={s.step} delay={i * 0.1}>
                <div style={{ padding: '28px 24px', border: `1px solid ${C.border}`, background: C.bgCard, position: 'relative' }}>
                  <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: 52, fontWeight: 300, color: C.copper, opacity: 0.15, position: 'absolute', top: 12, right: 16, lineHeight: 1 }}>{s.step}</span>
                  <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: 20, fontWeight: 400, color: C.white, marginBottom: 10 }}>{s.title}</p>
                  <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 13, fontWeight: 300, color: C.mutedLight, lineHeight: 1.65 }}>{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: 'clamp(60px, 8vw, 100px) clamp(24px, 5vw, 64px)', textAlign: 'center', background: C.bgAlt, borderTop: `1px solid ${C.border}` }}>
        <Reveal>
          <div style={{ maxWidth: 520, margin: '0 auto' }}>
            <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 11, fontWeight: 500, letterSpacing: '0.28em', textTransform: 'uppercase', color: C.copper, marginBottom: 20 }}>¿Hablamos?</p>
            <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(30px, 4vw, 50px)', fontWeight: 300, color: C.white, lineHeight: 1.1, marginBottom: 20 }}>
              Una llamada.<br /><em style={{ color: C.copper }}>Sin compromiso.</em>
            </h2>
            <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 15, fontWeight: 300, color: C.mutedLight, lineHeight: 1.75, marginBottom: 36 }}>
              Cuéntame en qué punto está tu equipo y te propongo el programa más adecuado.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contacto" style={{ fontFamily: 'var(--font-outfit)', fontSize: 12, fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', background: C.orange, color: '#fff', padding: '14px 36px', textDecoration: 'none' }}>
                Solicitar programa →
              </Link>
              <Link href="/servicios" style={{ fontFamily: 'var(--font-outfit)', fontSize: 12, fontWeight: 400, letterSpacing: '0.16em', textTransform: 'uppercase', color: C.copper, border: `1px solid ${C.borderCu}`, padding: '14px 28px', textDecoration: 'none' }}>
                Ver todos los servicios
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <Footer />
    </div>
  )
}
