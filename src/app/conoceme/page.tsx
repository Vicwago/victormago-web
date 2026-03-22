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

const timeline = [
  { year: '2023', event: 'Primeros pasos en el mundo de la IA. Investigación sobre el impacto de la inteligencia artificial en los negocios y su potencial transformador.' },
  { year: '2024', event: 'Primer curso oficial de IA a través de IBM. Descubrimiento de la IA aplicada al negocio y formación intensiva en IA generativa, prompting y flujos de trabajo autónomos.' },
  { year: '2025', event: 'Boom de la IA. Formación intensiva con múltiples cursos especializados. Co-fundación de NorteIA junto a Luis Salgado a finales de año.' },
  { year: '2026', event: 'EU AI Act en plena aplicación. Certificaciones especializadas y expansión de programas formativos. NorteIA como referente en compliance para pymes españolas.' },
]

export default function ConozemePage() {
  return (
    <div style={{ background: C.bg, minHeight: '100vh', color: C.white }}>
      <Navbar />

      {/* Header */}
      <section style={{ padding: 'clamp(120px, 15vh, 160px) clamp(24px, 5vw, 64px) clamp(60px, 8vw, 80px)', textAlign: 'center', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 80, left: '50%', transform: 'translateX(-50%)', width: 1, height: 60, background: `linear-gradient(transparent, ${C.copper})` }} />
        <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
          style={{ fontFamily: 'var(--font-outfit)', fontSize: 11, fontWeight: 500, letterSpacing: '0.28em', textTransform: 'uppercase', color: C.copper, marginBottom: 20 }}>
          Conóceme
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.15 }}
          style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(44px, 7vw, 90px)', fontWeight: 300, lineHeight: 1.05, color: C.white }}>
          Víctor Mago
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.35 }}
          style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(18px, 2.5vw, 26px)', fontStyle: 'italic', color: C.copper, marginTop: 10 }}>
          Consultor y Formador de IA · Co-fundador de NorteIA
        </motion.p>
      </section>

      {/* Bio + Photo */}
      <section style={{ padding: 'clamp(60px, 8vw, 100px) clamp(24px, 5vw, 64px)', borderTop: `1px solid ${C.border}`, overflow: 'hidden' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(48px, 6vw, 96px)', alignItems: 'start' }}>

          {/* Photo real */}
          <Reveal>
            <div style={{ position: 'relative', aspectRatio: '3/4', maxWidth: 380 }}>
              <div style={{ position: 'absolute', inset: 0, border: `1px solid ${C.borderCu}`, zIndex: 2 }} />
              <div style={{ position: 'absolute', top: 14, left: 14, right: -14, bottom: -14, border: `1px solid ${C.border}`, zIndex: 0 }} />
              <div style={{ position: 'absolute', top: -1, left: -1, width: 40, height: 40, borderTop: `3px solid ${C.copper}`, borderLeft: `3px solid ${C.copper}`, zIndex: 3 }} />
              <div style={{ position: 'absolute', bottom: -1, right: -1, width: 40, height: 40, borderBottom: `3px solid ${C.copper}`, borderRight: `3px solid ${C.copper}`, zIndex: 3 }} />
              <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 1 }}>
                <Image
                  src="https://norteia.es/images/victor-mago.jpg"
                  alt="Víctor Mago"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  unoptimized
                />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '30%', background: `linear-gradient(transparent, ${C.bgCard}90)` }} />
              </div>
            </div>
          </Reveal>

          {/* Text */}
          <Reveal delay={0.15}>
            <div>
              <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 15, fontWeight: 300, color: C.mutedLight, lineHeight: 1.9, marginBottom: 20 }}>
                Soy Víctor Mago, consultor y formador de Inteligencia Artificial con base en A Coruña, España. Llevo más de tres años ayudando a empresas y directivos a entender, aplicar y cumplir la IA de forma práctica y responsable.
              </p>
              <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 15, fontWeight: 300, color: C.mutedLight, lineHeight: 1.9, marginBottom: 20 }}>
                No soy ingeniero de software. Soy alguien que aprendió a usar la IA desde el negocio, no desde el laboratorio. Esa perspectiva es, precisamente, lo que más valor aporta a los directivos con los que trabajo: hablo su idioma.
              </p>
              <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 15, fontWeight: 300, color: C.mutedLight, lineHeight: 1.9, marginBottom: 32 }}>
                Co-fundé NorteIA junto a Luis Salgado con un objetivo claro: que las pymes españolas puedan adoptar la IA con confianza, cumpliendo el EU AI Act y sin perder de vista sus objetivos de negocio. La formación práctica y el cumplimiento normativo van de la mano.
              </p>

              {/* Quote */}
              <div style={{ borderLeft: `2px solid ${C.borderCu}`, paddingLeft: 20, marginBottom: 36 }}>
                <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(17px, 2vw, 22px)', fontStyle: 'italic', color: C.copperLight, lineHeight: 1.5 }}>
                  "La diferencia no está en tener acceso a la IA.<br />Está en saber qué preguntarle."
                </p>
              </div>

              {/* Valores */}
              <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 11, fontWeight: 500, letterSpacing: '0.24em', textTransform: 'uppercase', color: C.copper, marginBottom: 20 }}>Mis valores</p>
              {[
                { v: 'Honestidad', d: 'Digo lo que la IA puede hacer y lo que no. Sin hype, sin promesas vacías.' },
                { v: 'Practicidad', d: 'Todo lo que enseño parte de casos de uso reales, no de teoría académica.' },
                { v: 'Ética en IA', d: 'La tecnología debe servir a las personas y a los negocios, no al revés.' },
              ].map((item) => (
                <div key={item.v} style={{ display: 'flex', gap: 16, marginBottom: 18 }}>
                  <div style={{ width: 4, height: 4, background: C.copper, borderRadius: '50%', marginTop: 8, flexShrink: 0 }} />
                  <div>
                    <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 13, fontWeight: 500, color: C.white, marginBottom: 3 }}>{item.v}</p>
                    <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 13, fontWeight: 300, color: C.mutedLight }}>{item.d}</p>
                  </div>
                </div>
              ))}

              {/* Social links */}
              <div style={{ display: 'flex', gap: 16, marginTop: 36, flexWrap: 'wrap' }}>
                <a href="https://www.linkedin.com/in/victormagoheredia/" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-outfit)', fontSize: 12, fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.copper, border: `1px solid ${C.borderCu}`, padding: '11px 24px', textDecoration: 'none' }}>LinkedIn →</a>
                <a href="https://www.instagram.com/vicwago/" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-outfit)', fontSize: 12, fontWeight: 400, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.mutedLight, border: `1px solid ${C.border}`, padding: '11px 24px', textDecoration: 'none' }}>Instagram →</a>
                <a href="https://norteia.es" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-outfit)', fontSize: 12, fontWeight: 400, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.mutedLight, textDecoration: 'none', display: 'flex', alignItems: 'center' }}>NorteIA →</a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ padding: 'clamp(60px, 8vw, 100px) clamp(24px, 5vw, 64px)', background: C.bgAlt, borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <Reveal>
            <div style={{ marginBottom: 56, textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 11, fontWeight: 500, letterSpacing: '0.24em', textTransform: 'uppercase', color: C.copper, marginBottom: 16 }}>Trayectoria</p>
              <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 300, color: C.white }}>El camino hasta aquí</h2>
            </div>
          </Reveal>

          <div style={{ position: 'relative', paddingLeft: 36 }}>
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 1, background: `linear-gradient(${C.borderCu}, ${C.border})` }} />
            {timeline.map((item, i) => (
              <Reveal key={item.year} delay={i * 0.06}>
                <div style={{ position: 'relative', marginBottom: 36 }}>
                  <div style={{ position: 'absolute', left: -40, top: 5, width: 9, height: 9, borderRadius: '50%', background: i === timeline.length - 1 ? C.orange : C.copper, border: `2px solid ${C.bg}` }} />
                  <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: 13, fontStyle: 'italic', color: C.copper, letterSpacing: '0.08em', marginBottom: 6 }}>{item.year}</p>
                  <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 14, fontWeight: 300, color: C.mutedLight, lineHeight: 1.65 }}>{item.event}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: 'clamp(60px, 8vw, 100px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
        <Reveal>
          <div style={{ maxWidth: 540, margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(28px, 3.5vw, 46px)', fontWeight: 300, color: C.white, marginBottom: 20 }}>
              ¿Hablamos sobre tu empresa<br /><em style={{ color: C.copper, fontStyle: 'italic' }}>y la IA?</em>
            </h2>
            <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 14, fontWeight: 300, color: C.mutedLight, lineHeight: 1.7, marginBottom: 36 }}>20 minutos. Sin compromiso. Te cuento exactamente qué puede hacer la IA por tu negocio.</p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/consultoria" style={{ fontFamily: 'var(--font-outfit)', fontSize: 12, fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', background: C.orange, color: '#fff', padding: '14px 36px', textDecoration: 'none' }}>Hablemos →</Link>
              <Link href="/contacto" style={{ fontFamily: 'var(--font-outfit)', fontSize: 12, fontWeight: 400, letterSpacing: '0.16em', textTransform: 'uppercase', color: C.copper, border: `1px solid ${C.borderCu}`, padding: '14px 32px', textDecoration: 'none' }}>Contacto directo</Link>
            </div>
          </div>
        </Reveal>
      </section>

      <Footer />
    </div>
  )
}
