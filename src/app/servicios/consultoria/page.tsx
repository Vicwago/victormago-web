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

const servicios = [
  {
    n: '01',
    title: 'Auditoría de procesos IA',
    desc: 'Mapeo completo de tus flujos de trabajo para identificar dónde la IA puede generar más valor con menos esfuerzo. Resultado: un informe con las 3–5 oportunidades de mayor impacto en tu empresa.',
    items: ['Entrevistas con equipos clave', 'Mapeo de procesos actuales', 'Identificación de quick wins', 'Análisis de herramientas y costes actuales', 'Informe ejecutivo con prioridades'],
  },
  {
    n: '02',
    title: 'Hoja de ruta personalizada',
    desc: 'Plan director de IA con prioridades claras, recursos necesarios y ROI estimado para cada iniciativa. No es un documento teórico: es un plan ejecutable que puedes empezar a implementar la semana siguiente.',
    items: ['Priorización por impacto y facilidad', 'Estimación de ROI por iniciativa', 'Timeline de implementación', 'Recursos y herramientas necesarias', 'KPIs para medir el progreso'],
  },
  {
    n: '03',
    title: 'Agentes y automatización',
    desc: 'Diseño e implementación de flujos autónomos con n8n, Claude y otras herramientas que reducen tiempo y errores. Desde automatizaciones simples hasta agentes que gestionan procesos completos.',
    items: ['Diseño de flujos con n8n', 'Integración de modelos Claude', 'Automatización de correos y reportes', 'Agentes de seguimiento comercial', 'Documentación y formación del equipo'],
  },
]

export default function ConsultoriaPage() {
  return (
    <div style={{ background: C.bg, minHeight: '100vh', color: C.white }}>
      <Navbar />

      {/* Hero */}
      <section style={{ position: 'relative', padding: 'clamp(130px, 18vh, 180px) clamp(24px, 5vw, 80px) clamp(80px, 10vw, 120px)', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image src="/service-consultoria.jpg" alt="" fill priority sizes="100vw" style={{ objectFit: 'cover', objectPosition: 'center 40%', filter: 'brightness(0.18)' }} unoptimized />
          <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to right, ${C.bg} 0%, transparent 60%, ${C.bg} 100%)` }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '50%', background: `linear-gradient(transparent, ${C.bg})` }} />
        </div>

        <div style={{ position: 'relative', zIndex: 1, maxWidth: 700 }}>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            style={{ fontFamily: 'var(--font-outfit)', fontSize: 11, fontWeight: 500, letterSpacing: '0.28em', textTransform: 'uppercase', color: C.copper, marginBottom: 16 }}>
            Servicios · Consultoría
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.15 }}
            style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(44px, 7vw, 88px)', fontWeight: 300, lineHeight: 1.02, color: C.white, marginBottom: 20 }}>
            Un diagnóstico real.<br /><em style={{ color: C.copper }}>Una hoja de ruta.</em>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.35 }}
            style={{ fontFamily: 'var(--font-outfit)', fontSize: 'clamp(14px, 1.8vw, 18px)', fontWeight: 300, color: C.mutedLight, lineHeight: 1.75, maxWidth: 520 }}>
            Analizo tu empresa, identifico los casos de uso de IA de mayor impacto y te doy un plan concreto para implementarlo.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.55 }}
            style={{ display: 'flex', gap: 16, marginTop: 36, flexWrap: 'wrap' }}>
            <Link href="/contacto" style={{ fontFamily: 'var(--font-outfit)', fontSize: 12, fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', background: C.orange, color: '#fff', padding: '13px 28px', textDecoration: 'none' }}>
              Primera consulta →
            </Link>
            <Link href="/servicios" style={{ fontFamily: 'var(--font-outfit)', fontSize: 12, fontWeight: 400, letterSpacing: '0.16em', textTransform: 'uppercase', color: C.copper, border: `1px solid ${C.borderCu}`, padding: '13px 24px', textDecoration: 'none' }}>
              Todos los servicios
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Value prop */}
      <section style={{ padding: 'clamp(60px, 8vw, 100px) clamp(24px, 5vw, 64px)', borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'center' }}>
          <Reveal>
            <div>
              <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 11, fontWeight: 500, letterSpacing: '0.24em', textTransform: 'uppercase', color: C.copper, marginBottom: 16 }}>Mi enfoque</p>
              <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(28px, 3.5vw, 46px)', fontWeight: 300, color: C.white, lineHeight: 1.15, marginBottom: 20 }}>
                No soy ingeniero.<br /><em style={{ color: C.copper }}>Hablo tu idioma.</em>
              </h2>
              <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 15, fontWeight: 300, color: C.mutedLight, lineHeight: 1.85, marginBottom: 16 }}>
                Aprendí a usar la IA desde el negocio, no desde el laboratorio. Eso significa que entiendo qué le importa a un directivo: resultados, plazos y ROI.
              </p>
              <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 15, fontWeight: 300, color: C.mutedLight, lineHeight: 1.85 }}>
                No vendo soluciones tecnológicas. Vendo claridad sobre cómo la IA puede hacer crecer tu negocio.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {[
                { icon: '✓', text: 'Diagnóstico en menos de 2 semanas' },
                { icon: '✓', text: 'Plan ejecutable, no un PowerPoint de 80 slides' },
                { icon: '✓', text: 'Implementación real con n8n y Claude' },
                { icon: '✓', text: 'Sin costes técnicos innecesarios' },
                { icon: '✓', text: 'Seguimiento hasta que funciona' },
              ].map(item => (
                <div key={item.text} style={{ display: 'flex', gap: 14, padding: '16px 0', borderBottom: `1px solid ${C.border}`, alignItems: 'center' }}>
                  <span style={{ fontFamily: 'var(--font-outfit)', fontSize: 14, color: C.copper, flexShrink: 0 }}>{item.icon}</span>
                  <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 14, fontWeight: 300, color: C.mutedLight }}>{item.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services detail */}
      <section style={{ padding: 'clamp(60px, 8vw, 100px) clamp(24px, 5vw, 64px)', background: C.bgAlt, borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <Reveal>
            <div style={{ marginBottom: 56, maxWidth: 560 }}>
              <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 11, fontWeight: 500, letterSpacing: '0.24em', textTransform: 'uppercase', color: C.copper, marginBottom: 16 }}>Servicios</p>
              <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(28px, 3.5vw, 48px)', fontWeight: 300, color: C.white, lineHeight: 1.1 }}>
                Lo que incluye<br />la consultoría.
              </h2>
            </div>
          </Reveal>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {servicios.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <div style={{ background: C.bg, border: `1px solid ${C.border}`, padding: 'clamp(28px, 4vw, 40px)' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(24px, 4vw, 48px)' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 12 }}>
                        <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: 40, fontWeight: 300, color: C.copper, opacity: 0.4, lineHeight: 1 }}>{s.n}</span>
                        <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(22px, 2.5vw, 30px)', fontWeight: 400, color: C.white }}>{s.title}</h3>
                      </div>
                      <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 14, fontWeight: 300, color: C.mutedLight, lineHeight: 1.8 }}>{s.desc}</p>
                    </div>
                    <div>
                      <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 10, fontWeight: 500, letterSpacing: '0.20em', textTransform: 'uppercase', color: C.muted, marginBottom: 16 }}>Entregables</p>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                        {s.items.map(item => (
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

      {/* Quote */}
      <section style={{ padding: 'clamp(60px, 8vw, 80px) clamp(24px, 5vw, 64px)', borderTop: `1px solid ${C.border}` }}>
        <Reveal>
          <div style={{ maxWidth: 700, margin: '0 auto', borderLeft: `2px solid ${C.borderCu}`, paddingLeft: 28 }}>
            <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(20px, 2.5vw, 28px)', fontStyle: 'italic', color: C.copperLight, lineHeight: 1.5, marginBottom: 16 }}>
              "La mayoría de empresas no necesitan más tecnología. Necesitan saber qué tecnología usar, en qué orden, y por qué."
            </p>
            <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 12, color: C.muted, letterSpacing: '0.08em' }}>— Víctor Mago</p>
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section style={{ padding: 'clamp(60px, 8vw, 100px) clamp(24px, 5vw, 64px)', textAlign: 'center', background: C.bgAlt, borderTop: `1px solid ${C.border}` }}>
        <Reveal>
          <div style={{ maxWidth: 520, margin: '0 auto' }}>
            <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 11, fontWeight: 500, letterSpacing: '0.28em', textTransform: 'uppercase', color: C.copper, marginBottom: 20 }}>Empecemos</p>
            <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(30px, 4vw, 50px)', fontWeight: 300, color: C.white, lineHeight: 1.1, marginBottom: 20 }}>
              Primera consulta<br /><em style={{ color: C.copper }}>gratuita.</em>
            </h2>
            <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 15, fontWeight: 300, color: C.mutedLight, lineHeight: 1.75, marginBottom: 36 }}>
              20 minutos para entender tu situación y decirte si tiene sentido trabajar juntos.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contacto" style={{ fontFamily: 'var(--font-outfit)', fontSize: 12, fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', background: C.orange, color: '#fff', padding: '14px 36px', textDecoration: 'none' }}>
                Hablemos →
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
