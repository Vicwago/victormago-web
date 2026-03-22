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

const riesgos = [
  { level: 'Inaceptable', color: '#ef4444', desc: 'Prohibido. Sistemas de scoring social, manipulación subliminal, biometría en tiempo real en espacios públicos.' },
  { level: 'Alto riesgo', color: C.orange, desc: 'Obligaciones estrictas. RRHH, crédito, educación, infraestructuras críticas, servicios esenciales.' },
  { level: 'Riesgo limitado', color: C.copper, desc: 'Obligaciones de transparencia. Chatbots, generación de contenido, deepfakes.' },
  { level: 'Riesgo mínimo', color: '#22c55e', desc: 'Sin obligaciones específicas. La mayoría de sistemas de IA empresariales entran aquí.' },
]

const servicios = [
  {
    n: '01',
    title: 'Auditoría de cumplimiento',
    desc: 'Evaluación de todos los sistemas de IA que usas o desarrollas para identificar obligaciones bajo el EU AI Act. Resultado: un inventario completo con el estado de cada sistema.',
    items: ['Inventario de sistemas de IA', 'Análisis de proveedores y contratos', 'Identificación de obligaciones aplicables', 'Evaluación de documentación existente', 'Informe ejecutivo y técnico'],
  },
  {
    n: '02',
    title: 'Clasificación de riesgos',
    desc: 'Mapeamos tus sistemas por nivel de riesgo (mínimo, limitado, alto, inaceptable) y definimos las medidas requeridas para cada uno. Claridad total sobre qué te afecta y qué no.',
    items: ['Clasificación por categoría de riesgo', 'Análisis de cadena de valor de IA', 'Evaluación de impacto en derechos fundamentales', 'Documentación técnica requerida', 'Registro de sistemas de alto riesgo'],
  },
  {
    n: '03',
    title: 'Plan de adaptación',
    desc: 'Hoja de ruta de cumplimiento con plazos, responsables y documentación requerida lista para auditoría. Sin pánico, con un plan claro y ejecutable.',
    items: ['Roadmap de cumplimiento priorizado', 'Plantillas de documentación', 'Políticas de gobernanza de IA', 'Formación al equipo responsable', 'Preparación para auditorías externas'],
  },
]

const faq = [
  {
    q: '¿A quién afecta el EU AI Act?',
    a: 'A cualquier empresa que use, desarrolle o distribuya sistemas de IA en la Unión Europea, independientemente de su tamaño o sede.',
  },
  {
    q: '¿Cuándo entra en vigor?',
    a: 'La mayoría de obligaciones son de plena aplicación en agosto de 2026. Algunos requisitos para sistemas de alto riesgo ya eran aplicables desde agosto de 2025.',
  },
  {
    q: '¿Qué pasa si no cumplo?',
    a: 'Las multas pueden alcanzar el 7% de la facturación global anual o 35 millones de euros, lo que sea mayor.',
  },
  {
    q: '¿Mi empresa usa sistemas de alto riesgo?',
    a: 'Depende de tu sector. RRHH, scoring crediticio, diagnóstico médico, educación y seguridad crítica tienen requisitos específicos. En la mayoría de pymes, el riesgo es limitado o mínimo.',
  },
  {
    q: '¿Necesito contratar un equipo legal?',
    a: 'No necesariamente. Para la mayoría de pymes, el cumplimiento es gestionable con el apoyo adecuado. La clave está en hacer bien el inventario y la clasificación.',
  },
]

export default function EuAiActPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div style={{ background: C.bg, minHeight: '100vh', color: C.white }}>
      <Navbar />

      {/* Hero */}
      <section style={{ position: 'relative', padding: 'clamp(130px, 18vh, 180px) clamp(24px, 5vw, 80px) clamp(80px, 10vw, 120px)', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image src="/service-eu-ai-act.jpg" alt="" fill priority sizes="100vw" style={{ objectFit: 'cover', objectPosition: 'center 50%', filter: 'brightness(0.2)' }} unoptimized />
          <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to right, ${C.bg} 0%, transparent 60%, ${C.bg} 100%)` }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '50%', background: `linear-gradient(transparent, ${C.bg})` }} />
        </div>

        <div style={{ position: 'relative', zIndex: 1, maxWidth: 700 }}>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            style={{ fontFamily: 'var(--font-outfit)', fontSize: 11, fontWeight: 500, letterSpacing: '0.28em', textTransform: 'uppercase', color: C.copper, marginBottom: 16 }}>
            Servicios · EU AI Act
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.15 }}
            style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(44px, 7vw, 88px)', fontWeight: 300, lineHeight: 1.02, color: C.white, marginBottom: 20 }}>
            Agosto 2026.<br /><em style={{ color: C.copper }}>Sin excusas.</em>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.35 }}
            style={{ fontFamily: 'var(--font-outfit)', fontSize: 'clamp(14px, 1.8vw, 18px)', fontWeight: 300, color: C.mutedLight, lineHeight: 1.75, maxWidth: 520 }}>
            El Reglamento Europeo de IA es de plena aplicación en agosto de 2026. Las multas llegan al 7% de la facturación. Te ayudo a entender qué te afecta y cómo adaptarte.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.55 }}
            style={{ display: 'flex', gap: 16, marginTop: 36, flexWrap: 'wrap' }}>
            <Link href="/contacto" style={{ fontFamily: 'var(--font-outfit)', fontSize: 12, fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', background: C.orange, color: '#fff', padding: '13px 28px', textDecoration: 'none' }}>
              Auditoría gratuita →
            </Link>
            <Link href="/servicios" style={{ fontFamily: 'var(--font-outfit)', fontSize: 12, fontWeight: 400, letterSpacing: '0.16em', textTransform: 'uppercase', color: C.copper, border: `1px solid ${C.borderCu}`, padding: '13px 24px', textDecoration: 'none' }}>
              Todos los servicios
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Urgency + Timeline */}
      <section style={{ padding: 'clamp(60px, 8vw, 100px) clamp(24px, 5vw, 64px)', borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'start' }}>
          <Reveal>
            <div>
              <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 11, fontWeight: 500, letterSpacing: '0.24em', textTransform: 'uppercase', color: C.copper, marginBottom: 16 }}>¿Por qué ahora?</p>
              <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(28px, 3.5vw, 46px)', fontWeight: 300, color: C.white, lineHeight: 1.15, marginBottom: 20 }}>
                El reloj corre.<br /><em style={{ color: C.copper }}>El coste no baja.</em>
              </h2>
              <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 15, fontWeight: 300, color: C.mutedLight, lineHeight: 1.85, marginBottom: 16 }}>
                Las empresas que empiezan antes tienen más tiempo para adaptarse, menos prisas y menos costes. Las que esperan al último momento se arriesgan a multas y a implementaciones apresuradas.
              </p>
              <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 15, fontWeight: 300, color: C.mutedLight, lineHeight: 1.85 }}>
                Además, el cumplimiento del EU AI Act puede convertirse en una ventaja competitiva: los clientes y socios europeos cada vez valoran más a las empresas que demuestran responsabilidad en el uso de la IA.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 10, fontWeight: 500, letterSpacing: '0.20em', textTransform: 'uppercase', color: C.muted, marginBottom: 20 }}>Fechas clave</p>
              {[
                { date: 'Feb 2025', event: 'Prohibiciones de sistemas inaceptables en vigor', active: true },
                { date: 'Ago 2025', event: 'Obligaciones para modelos de IA de uso general', active: true },
                { date: 'Ago 2026', event: 'Plena aplicación para sistemas de alto riesgo', active: false, highlight: true },
                { date: '2027+', event: 'Revisiones y nuevas categorías', active: false },
              ].map((item, i) => (
                <div key={item.date} style={{ display: 'flex', gap: 16, paddingBottom: 20, marginBottom: 20, borderBottom: `1px solid ${C.border}`, position: 'relative' }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: item.highlight ? C.orange : item.active ? C.copper : C.border, marginTop: 4, flexShrink: 0 }} />
                  <div>
                    <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 11, fontWeight: 500, color: item.highlight ? C.orange : C.copper, letterSpacing: '0.08em', marginBottom: 4 }}>{item.date}</p>
                    <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 13, fontWeight: item.highlight ? 500 : 300, color: item.highlight ? C.white : C.mutedLight }}>{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Risk levels */}
      <section style={{ padding: 'clamp(60px, 8vw, 100px) clamp(24px, 5vw, 64px)', background: C.bgAlt, borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <Reveal>
            <div style={{ marginBottom: 48, textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 11, fontWeight: 500, letterSpacing: '0.24em', textTransform: 'uppercase', color: C.copper, marginBottom: 16 }}>Clasificación</p>
              <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 300, color: C.white }}>Los cuatro niveles de riesgo.</h2>
            </div>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
            {riesgos.map((r, i) => (
              <Reveal key={r.level} delay={i * 0.08}>
                <div style={{ padding: '28px 24px', border: `1px solid ${C.border}`, background: C.bg, borderTop: `3px solid ${r.color}` }}>
                  <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: r.color, marginBottom: 12 }}>{r.level}</p>
                  <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 13, fontWeight: 300, color: C.mutedLight, lineHeight: 1.65 }}>{r.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: 'clamp(60px, 8vw, 100px) clamp(24px, 5vw, 64px)', borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <Reveal>
            <div style={{ marginBottom: 56, maxWidth: 560 }}>
              <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 11, fontWeight: 500, letterSpacing: '0.24em', textTransform: 'uppercase', color: C.copper, marginBottom: 16 }}>Servicios</p>
              <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(28px, 3.5vw, 48px)', fontWeight: 300, color: C.white, lineHeight: 1.1 }}>
                Del diagnóstico<br />al cumplimiento.
              </h2>
            </div>
          </Reveal>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {servicios.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <div style={{ background: C.bgAlt, border: `1px solid ${C.border}`, padding: 'clamp(28px, 4vw, 40px)' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: 'clamp(24px, 4vw, 48px)' }}>
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

      {/* FAQ */}
      <section style={{ padding: 'clamp(60px, 8vw, 100px) clamp(24px, 5vw, 64px)', background: C.bgAlt, borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <Reveal>
            <div style={{ marginBottom: 48, textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 11, fontWeight: 500, letterSpacing: '0.24em', textTransform: 'uppercase', color: C.copper, marginBottom: 16 }}>FAQ</p>
              <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 300, color: C.white }}>Preguntas frecuentes.</h2>
            </div>
          </Reveal>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {faq.map((item, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div style={{ background: C.bg, border: `1px solid ${C.border}`, overflow: 'hidden' }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 24px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: 16 }}
                  >
                    <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 14, fontWeight: 500, color: C.white }}>{item.q}</p>
                    <span style={{ fontFamily: 'var(--font-outfit)', fontSize: 20, color: C.copper, flexShrink: 0, lineHeight: 1, transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0)', transition: 'transform 0.2s' }}>+</span>
                  </button>
                  {openFaq === i && (
                    <div style={{ padding: '0 24px 20px' }}>
                      <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 14, fontWeight: 300, color: C.mutedLight, lineHeight: 1.75 }}>{item.a}</p>
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: 'clamp(60px, 8vw, 100px) clamp(24px, 5vw, 64px)', textAlign: 'center', borderTop: `1px solid ${C.border}` }}>
        <Reveal>
          <div style={{ maxWidth: 520, margin: '0 auto' }}>
            <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 11, fontWeight: 500, letterSpacing: '0.28em', textTransform: 'uppercase', color: C.copper, marginBottom: 20 }}>¿Por dónde empezamos?</p>
            <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(30px, 4vw, 50px)', fontWeight: 300, color: C.white, lineHeight: 1.1, marginBottom: 20 }}>
              Auditoría inicial<br /><em style={{ color: C.copper }}>sin compromiso.</em>
            </h2>
            <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 15, fontWeight: 300, color: C.mutedLight, lineHeight: 1.75, marginBottom: 36 }}>
              En 30 minutos te digo qué sistemas tienes que revisar, cuáles son prioritarios y si necesitas ayuda.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contacto" style={{ fontFamily: 'var(--font-outfit)', fontSize: 12, fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', background: C.orange, color: '#fff', padding: '14px 36px', textDecoration: 'none' }}>
                Solicitar auditoría →
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
