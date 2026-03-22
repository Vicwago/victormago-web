'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { C } from '@/lib/theme'

const HERO_IMG = '/hero-servicios.jpg'

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
    <div ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(28px)', transition: `opacity 0.9s ease ${delay}s, transform 0.9s ease ${delay}s` }}>
      {children}
    </div>
  )
}

const servicios = [
  {
    id: 'formacion',
    n: 'I',
    title: 'Formación IA',
    sub: 'Para equipos y directivos',
    tagline: 'De la teoría al resultado en una sesión.',
    desc: 'Programas prácticos diseñados para que tu equipo empiece a usar la IA desde el primer día. Sin programación, sin jerga técnica. Trabajo con equipos directivos, mandos intermedios y equipos operativos.',
    img: '/service-formacion.jpg', imgPosition: 'center 30%',
    items: [
      { title: 'IA para no técnicos', desc: 'Introducción práctica a ChatGPT, Claude y herramientas de IA generativa aplicadas al trabajo del día a día.' },
      { title: 'Metodología AI First', desc: 'Rediseño de procesos poniendo la IA en el centro. Tu empresa aprende a pensar primero en la IA antes de ejecutar cualquier tarea.' },
      { title: 'Formación corporativa', desc: 'Programas a medida para empresas de cualquier tamaño. Adaptados a tu sector, tu madurez digital y tus objetivos.' },
    ],
    bg: `radial-gradient(ellipse at 25% 80%, ${C.copper}18 0%, transparent 55%), linear-gradient(160deg, #1A1208 0%, #0D0B07 100%)`,
  },
  {
    id: 'consultoria',
    n: 'II',
    title: 'Consultoría',
    sub: 'Estrategia e implementación',
    tagline: 'Un diagnóstico real. Una hoja de ruta ejecutable.',
    desc: 'Analizo tu empresa, identifico los casos de uso de IA de mayor impacto y te doy un plan concreto para implementarlo. Incluye diseño de agentes autónomos y automatizaciones.',
    img: '/service-consultoria.jpg', imgPosition: 'center 40%',
    items: [
      { title: 'Auditoría de procesos IA', desc: 'Mapeo completo de tus flujos de trabajo para identificar dónde la IA puede generar más valor con menos esfuerzo.' },
      { title: 'Hoja de ruta personalizada', desc: 'Plan director de IA con prioridades claras, recursos necesarios y ROI estimado para cada iniciativa.' },
      { title: 'Agentes y automatización', desc: 'Diseño e implementación de flujos autónomos con n8n, Claude y otras herramientas que reducen tiempo y errores.' },
    ],
    bg: `radial-gradient(ellipse at 75% 20%, ${C.copper}14 0%, transparent 55%), linear-gradient(160deg, #120E08 0%, #0D0B07 100%)`,
  },
  {
    id: 'eu-ai-act',
    n: 'III',
    title: 'EU AI Act',
    sub: 'Cumplimiento normativo',
    tagline: 'Agosto 2026. Sin excusas.',
    desc: 'El Reglamento Europeo de IA es de plena aplicación en agosto de 2026. Las multas llegan al 7% de la facturación. Te ayudo a entender qué te afecta, cómo adaptarte y cómo convertirlo en ventaja competitiva.',
    img: '/service-eu-ai-act.jpg', imgPosition: 'center 20%',
    items: [
      { title: 'Auditoría de cumplimiento', desc: 'Evaluación de todos los sistemas de IA que usas o desarrollas para identificar obligaciones bajo el EU AI Act.' },
      { title: 'Clasificación de riesgos', desc: 'Mapeamos tus sistemas por nivel de riesgo (mínimo, limitado, alto, inaceptable) y definimos las medidas requeridas.' },
      { title: 'Plan de adaptación', desc: 'Hoja de ruta de cumplimiento con plazos, responsables y documentación requerida lista para auditoría.' },
    ],
    bg: `radial-gradient(ellipse at 50% 90%, ${C.orange}10 0%, transparent 50%), linear-gradient(160deg, #120A07 0%, #0D0B07 100%)`,
  },
]

export default function ServiciosPage() {
  return (
    <div style={{ background: C.bg, minHeight: '100vh', color: C.white }}>
      <Navbar />

      {/* Header */}
      <section style={{ position: 'relative', padding: 'clamp(130px, 18vh, 180px) clamp(24px, 5vw, 80px) clamp(80px, 10vw, 120px)', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image src={HERO_IMG} alt="" fill priority style={{ objectFit: 'cover', objectPosition: 'center 25%', filter: 'grayscale(20%) brightness(0.12)' }} unoptimized />
          <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to right, ${C.bg} 0%, transparent 60%, ${C.bg} 100%)` }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '50%', background: `linear-gradient(transparent, ${C.bg})` }} />
        </div>

        <div style={{ position: 'relative', zIndex: 1, maxWidth: 700 }}>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            style={{ fontFamily: 'var(--font-outfit)', fontSize: 11, fontWeight: 500, letterSpacing: '0.28em', textTransform: 'uppercase', color: C.copper, marginBottom: 24 }}>
            Servicios
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.15 }}
            style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(44px, 7vw, 96px)', fontWeight: 300, lineHeight: 1.02, color: C.white, marginBottom: 20 }}>
            Tres pilares.<br /><em style={{ color: C.copper }}>Un objetivo.</em>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.35 }}
            style={{ fontFamily: 'var(--font-outfit)', fontSize: 'clamp(14px, 1.8vw, 18px)', fontWeight: 300, color: C.mutedLight, lineHeight: 1.75, maxWidth: 520 }}>
            Formación, consultoría y cumplimiento del EU AI Act. Todo lo que necesitas para que la IA trabaje para tu empresa, no al revés.
          </motion.p>
        </div>
      </section>

      {/* Service cards — detailed */}
      {servicios.map((s, idx) => (
        <section key={s.id} id={s.id} style={{ borderTop: `1px solid ${C.border}`, background: idx % 2 === 0 ? C.bg : C.bgAlt }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', padding: 'clamp(60px, 8vw, 100px) clamp(24px, 5vw, 64px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(48px, 6vw, 96px)', alignItems: 'center' }}>

            {/* Visual card */}
            <Reveal delay={idx % 2 === 0 ? 0 : 0.1}>
              <div style={{ position: 'relative', overflow: 'hidden', background: s.bg, border: `1px solid ${C.borderCu}` }}>
                <div style={{ position: 'relative', height: 320, overflow: 'hidden' }}>
                  <Image
                    src={s.img}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: 'cover', objectPosition: s.imgPosition, filter: 'brightness(0.35) contrast(1.1)' }}
                    unoptimized
                  />
                  <div style={{ position: 'absolute', inset: 0, background: s.bg, opacity: 0.5 }} />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '60%', background: `linear-gradient(transparent, ${idx % 2 === 0 ? C.bg : C.bgAlt})` }} />

                  {/* Numeral */}
                  <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: 120, fontWeight: 300, fontStyle: 'italic', color: C.copper, opacity: 0.12, lineHeight: 1, userSelect: 'none' }}>{s.n}</span>
                  </div>

                  {/* Corner accents */}
                  <div style={{ position: 'absolute', top: 0, left: 0, width: 28, height: 28, borderTop: `2px solid ${C.copper}`, borderLeft: `2px solid ${C.copper}` }} />
                  <div style={{ position: 'absolute', bottom: 0, right: 0, width: 28, height: 28, borderBottom: `2px solid ${C.copper}`, borderRight: `2px solid ${C.copper}` }} />
                </div>

                <div style={{ padding: '24px 28px 28px' }}>
                  <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 10, fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: C.muted, marginBottom: 8 }}>{s.sub}</p>
                  <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: 22, fontStyle: 'italic', color: C.copper, lineHeight: 1.3 }}>{s.tagline}</p>
                </div>
              </div>
            </Reveal>

            {/* Text */}
            <Reveal delay={idx % 2 === 0 ? 0.1 : 0}>
              <div>
                <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 11, fontWeight: 500, letterSpacing: '0.24em', textTransform: 'uppercase', color: C.copper, marginBottom: 16 }}>{s.n} — {s.sub}</p>
                <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(28px, 3.5vw, 48px)', fontWeight: 300, color: C.white, marginBottom: 20, lineHeight: 1.1 }}>{s.title}</h2>
                <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 15, fontWeight: 300, color: C.mutedLight, lineHeight: 1.85, marginBottom: 32 }}>{s.desc}</p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 36 }}>
                  {s.items.map((item) => (
                    <div key={item.title} style={{ display: 'flex', gap: 16, paddingBottom: 20, borderBottom: `1px solid ${C.border}` }}>
                      <div style={{ width: 4, height: 4, background: C.copper, borderRadius: '50%', marginTop: 8, flexShrink: 0 }} />
                      <div>
                        <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 13, fontWeight: 500, color: C.white, marginBottom: 4 }}>{item.title}</p>
                        <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 13, fontWeight: 300, color: C.mutedLight, lineHeight: 1.65 }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Link href="/contacto" style={{ fontFamily: 'var(--font-outfit)', fontSize: 12, fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', background: C.orange, color: '#fff', padding: '13px 28px', textDecoration: 'none', display: 'inline-block' }}>
                  Me interesa →
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section style={{ padding: 'clamp(80px, 10vw, 120px) clamp(24px, 5vw, 64px)', textAlign: 'center', background: C.bgAlt, borderTop: `1px solid ${C.border}` }}>
        <Reveal>
          <div style={{ maxWidth: 560, margin: '0 auto' }}>
            <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 11, fontWeight: 500, letterSpacing: '0.28em', textTransform: 'uppercase', color: C.copper, marginBottom: 20 }}>¿Por dónde empezamos?</p>
            <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(30px, 4vw, 52px)', fontWeight: 300, color: C.white, lineHeight: 1.1, marginBottom: 20 }}>
              20 minutos.<br /><em style={{ color: C.copper, fontStyle: 'italic' }}>Sin compromiso.</em>
            </h2>
            <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 15, fontWeight: 300, color: C.mutedLight, lineHeight: 1.75, marginBottom: 36 }}>
              Te cuento exactamente qué puede hacer la IA por tu empresa y si tiene sentido trabajar juntos.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contacto" style={{ fontFamily: 'var(--font-outfit)', fontSize: 12, fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', background: C.orange, color: '#fff', padding: '14px 36px', textDecoration: 'none' }}>
                Hablemos →
              </Link>
              <Link href="/conoceme" style={{ fontFamily: 'var(--font-outfit)', fontSize: 12, fontWeight: 400, letterSpacing: '0.16em', textTransform: 'uppercase', color: C.copper, border: `1px solid ${C.borderCu}`, padding: '14px 32px', textDecoration: 'none' }}>
                Sobre mí
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <Footer />
    </div>
  )
}
