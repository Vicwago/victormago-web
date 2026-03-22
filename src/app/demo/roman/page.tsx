'use client'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { Cormorant_Garamond, Outfit } from 'next/font/google'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
})

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-outfit',
})

const C = {
  bg: '#0A0907',
  bgCard: '#0F0D0A',
  bgAlt: '#131109',
  copper: '#C4956A',
  copperLight: '#D4A97A',
  orange: '#F97316',
  white: '#F5F0E8',
  muted: '#7A7060',
  mutedLight: '#9A8E7E',
  border: '#1E1B14',
  borderCu: '#2A2318',
}

function useInView(threshold = 0.15) {
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
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(28px)',
      transition: `opacity 0.9s ease ${delay}s, transform 0.9s ease ${delay}s`,
    }}>
      {children}
    </div>
  )
}

export default function RomanDemo() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <div className={`${cormorant.variable} ${outfit.variable}`} style={{ background: C.bg, minHeight: '100vh', color: C.white }}>

      {/* NAV */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '0 48px',
        height: 64,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: scrolled ? 'rgba(10,9,7,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? `1px solid ${C.border}` : '1px solid transparent',
        transition: 'all 0.4s ease',
      }}>
        <div style={{ fontFamily: 'var(--font-cormorant)', fontSize: 20, fontWeight: 600, letterSpacing: '0.12em', color: C.white }}>
          VICTOR <span style={{ color: C.copper }}>MAGO</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 40 }}>
          {['Sobre', 'Webinar', 'Contacto'].map(l => (
            <span key={l} style={{ fontFamily: 'var(--font-outfit)', fontSize: 12, fontWeight: 400, letterSpacing: '0.18em', textTransform: 'uppercase', color: C.mutedLight, cursor: 'pointer' }}>{l}</span>
          ))}
          <span style={{
            fontFamily: 'var(--font-outfit)', fontSize: 11, fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase',
            background: C.orange, color: '#fff', padding: '8px 18px', cursor: 'pointer',
          }}>Webinar →</span>
        </div>
      </nav>

      {/* HERO */}
      <section style={{
        minHeight: '100vh',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        textAlign: 'center',
        padding: '120px 48px 80px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Decorative top line */}
        <div style={{ position: 'absolute', top: 100, left: '50%', transform: 'translateX(-50%)', width: 1, height: 60, background: `linear-gradient(transparent, ${C.copper})` }} />

        {/* Statue placeholder — Roman aesthetic */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          pointerEvents: 'none',
        }}>
          {/* Silhouette bust - geometric suggestion of a Roman bust */}
          <div style={{ position: 'relative', opacity: 0.06 }}>
            <div style={{ width: 180, height: 240, background: C.white, borderRadius: '50% 50% 0 0 / 60% 60% 0 0', position: 'relative' }}>
              <div style={{ position: 'absolute', bottom: -60, left: '50%', transform: 'translateX(-50%)', width: 110, height: 70, background: C.white, borderRadius: '4px 4px 0 0' }} />
              <div style={{ position: 'absolute', bottom: -80, left: '50%', transform: 'translateX(-50%)', width: 140, height: 20, background: C.white }} />
            </div>
          </div>
          {/* Vignette */}
          <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse at center, transparent 30%, ${C.bg} 75%)` }} />
        </div>

        {/* Radial glow */}
        <div style={{ position: 'absolute', top: '35%', left: '50%', transform: 'translate(-50%, -50%)', width: 600, height: 400, background: `radial-gradient(ellipse, ${C.copper}08 0%, transparent 70%)`, pointerEvents: 'none' }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: 760 }}>
          {/* Eyebrow */}
          <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 11, fontWeight: 500, letterSpacing: '0.28em', textTransform: 'uppercase', color: C.copper, marginBottom: 32 }}>
            Consultor & Formador de IA · España
          </p>

          {/* Main headline */}
          <h1 style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(52px, 7vw, 90px)',
            fontWeight: 300,
            lineHeight: 1.08,
            letterSpacing: '-0.01em',
            color: C.white,
            marginBottom: 12,
          }}>
            La IA no te va a<br />
            <em style={{ fontStyle: 'italic', color: C.copper, fontWeight: 400 }}>quitar el trabajo.</em>
          </h1>

          {/* Rule */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, margin: '28px 0' }}>
            <div style={{ height: 1, width: 60, background: C.border }} />
            <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: 18, fontStyle: 'italic', color: C.mutedLight, letterSpacing: '0.04em' }}>Si aprendes a gobernarla.</span>
            <div style={{ height: 1, width: 60, background: C.border }} />
          </div>

          <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 15, fontWeight: 300, color: C.mutedLight, lineHeight: 1.7, maxWidth: 520, margin: '0 auto 48px', letterSpacing: '0.02em' }}>
            Ayudo a directivos de pymes a entender, aplicar y cumplir<br />la inteligencia artificial sin perder el norte.
          </p>

          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={{
              fontFamily: 'var(--font-outfit)', fontSize: 12, fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase',
              background: C.orange, color: '#fff', border: 'none', padding: '14px 36px', cursor: 'pointer',
            }}>
              Únete al Webinar Gratuito
            </button>
            <button style={{
              fontFamily: 'var(--font-outfit)', fontSize: 12, fontWeight: 400, letterSpacing: '0.16em', textTransform: 'uppercase',
              background: 'transparent', color: C.copper, border: `1px solid ${C.borderCu}`, padding: '14px 36px', cursor: 'pointer',
            }}>
              Conoce NorteIA →
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <span style={{ fontFamily: 'var(--font-outfit)', fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: C.muted }}>Descubrir</span>
          <div style={{ width: 1, height: 40, background: `linear-gradient(${C.copper}, transparent)` }} />
        </div>
      </section>

      {/* STATS */}
      <section style={{ padding: '80px 48px', borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
        <Reveal>
          <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1 }}>
            {[
              { n: '+500', label: 'Personas formadas en IA' },
              { n: '4', label: 'Sectores especializados' },
              { n: 'EU AI Act', label: 'Núcleo del programa' },
              { n: 'NorteIA', label: 'Empresa cofundada' },
            ].map((s, i) => (
              <div key={i} style={{ padding: '32px 24px', textAlign: 'center', borderRight: i < 3 ? `1px solid ${C.border}` : 'none' }}>
                <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: 500, color: C.copper, letterSpacing: '-0.01em', marginBottom: 8 }}>{s.n}</p>
                <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 11, fontWeight: 400, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.muted }}>{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* SOBRE — dos columnas salgadoia-style */}
      <section style={{ padding: '120px 48px', maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
        {/* Image placeholder — Roman bust */}
        <Reveal delay={0}>
          <div style={{ position: 'relative', aspectRatio: '3/4', maxWidth: 380 }}>
            {/* Frame */}
            <div style={{ position: 'absolute', inset: 0, border: `1px solid ${C.borderCu}`, zIndex: 1 }} />
            <div style={{ position: 'absolute', top: 12, left: 12, right: -12, bottom: -12, border: `1px solid ${C.border}`, zIndex: 0 }} />
            {/* Placeholder content */}
            <div style={{
              position: 'absolute', inset: 0, background: C.bgCard,
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              overflow: 'hidden',
            }}>
              {/* Geometric Roman bust suggestion */}
              <div style={{ position: 'relative', marginBottom: 24 }}>
                <div style={{ width: 100, height: 130, background: `linear-gradient(160deg, ${C.copper}30, ${C.copper}10)`, borderRadius: '50% 50% 0 0 / 55% 55% 0 0', border: `1px solid ${C.copper}25` }} />
                <div style={{ position: 'absolute', bottom: -30, left: '50%', transform: 'translateX(-50%)', width: 65, height: 36, background: `linear-gradient(180deg, ${C.copper}20, transparent)`, borderRadius: '2px 2px 0 0', border: `1px solid ${C.copper}20`, borderBottom: 'none' }} />
                <div style={{ position: 'absolute', bottom: -42, left: '50%', transform: 'translateX(-50%)', width: 90, height: 12, background: `${C.copper}15`, border: `1px solid ${C.copper}20` }} />
              </div>
              <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: 11, fontStyle: 'italic', color: C.muted, letterSpacing: '0.1em' }}>Víctor Mago · A Coruña</p>
            </div>
          </div>
        </Reveal>

        {/* Text */}
        <Reveal delay={0.15}>
          <div>
            <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 11, fontWeight: 500, letterSpacing: '0.24em', textTransform: 'uppercase', color: C.copper, marginBottom: 24 }}>Quién soy</p>
            <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(34px, 3.5vw, 50px)', fontWeight: 400, lineHeight: 1.15, color: C.white, marginBottom: 28, letterSpacing: '-0.01em' }}>
              No soy ingeniero.<br />
              <em style={{ fontStyle: 'italic', color: C.copper }}>Soy alguien que lo aplica.</em>
            </h2>
            <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 15, fontWeight: 300, color: C.mutedLight, lineHeight: 1.8, marginBottom: 20 }}>
              Empecé a explorar la IA cuando se convirtió en una herramienta de negocio real. No desde la teoría, sino desde proyectos con impacto directo en la cuenta de resultados.
            </p>
            <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 15, fontWeight: 300, color: C.mutedLight, lineHeight: 1.8, marginBottom: 36 }}>
              Co-fundé NorteIA para llevar la formación en IA y el cumplimiento del EU AI Act a pymes españolas que lo necesitan y no saben por dónde empezar.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {['EU AI Act · Cumplimiento y estrategia', 'Automatización de procesos', 'Agentes IA y flujos autónomos', 'Formación corporativa práctica'].map((t, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 4, height: 4, background: C.copper, borderRadius: '50%', flexShrink: 0 }} />
                  <span style={{ fontFamily: 'var(--font-outfit)', fontSize: 13, fontWeight: 300, color: C.mutedLight, letterSpacing: '0.03em' }}>{t}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 40, display: 'flex', gap: 24, alignItems: 'center' }}>
              <button style={{ fontFamily: 'var(--font-outfit)', fontSize: 12, fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', background: 'transparent', color: C.copper, border: `1px solid ${C.borderCu}`, padding: '12px 28px', cursor: 'pointer' }}>Ver NorteIA →</button>
            </div>
          </div>
        </Reveal>
      </section>

      {/* TEMAS — estética romana, numeración latina */}
      <section style={{ padding: '80px 48px', borderTop: `1px solid ${C.border}`, background: C.bgAlt }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <Reveal>
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 11, fontWeight: 500, letterSpacing: '0.24em', textTransform: 'uppercase', color: C.copper, marginBottom: 16 }}>Disciplinas</p>
              <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(32px, 3vw, 46px)', fontWeight: 400, color: C.white, letterSpacing: '-0.01em' }}>
                Áreas en las que formo y asesoro
              </h2>
            </div>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, border: `1px solid ${C.border}` }}>
            {[
              { n: 'I', title: 'EU AI Act', desc: 'Cumplimiento normativo y estrategia de adaptación para tu empresa.' },
              { n: 'II', title: 'IA Generativa', desc: 'Aplicación práctica de modelos de lenguaje en procesos de negocio.' },
              { n: 'III', title: 'Automatización', desc: 'Flujos autónomos y agentes IA que multiplican la productividad.' },
              { n: 'IV', title: 'Formación corporativa', desc: 'Programas a medida para equipos con diferentes niveles técnicos.' },
              { n: 'V', title: 'Gobernanza ética', desc: 'Marcos de uso responsable de la IA dentro de la organización.' },
              { n: 'VI', title: 'Prompting avanzado', desc: 'Técnicas para extraer el máximo valor de los modelos de IA.' },
            ].map((t, i) => (
              <TopicCard key={i} t={t} colors={C} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section style={{ padding: '100px 48px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 600, height: 400, background: `radial-gradient(ellipse, ${C.copper}0A 0%, transparent 65%)`, pointerEvents: 'none' }} />
        <Reveal>
          <div style={{ maxWidth: 680, margin: '0 auto', position: 'relative' }}>
            <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 11, fontWeight: 500, letterSpacing: '0.24em', textTransform: 'uppercase', color: C.copper, marginBottom: 24 }}>Urgente — Agosto 2026</p>
            <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(36px, 4vw, 58px)', fontWeight: 300, lineHeight: 1.15, color: C.white, marginBottom: 20 }}>
              ¿Tu empresa está preparada<br />
              <em style={{ fontStyle: 'italic', color: C.copper }}>para el EU AI Act?</em>
            </h2>
            <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 15, fontWeight: 300, color: C.mutedLight, lineHeight: 1.7, marginBottom: 40 }}>
              Multas de hasta el 7% de la facturación mundial. No esperes a que el regulador llame a tu puerta.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <button style={{ fontFamily: 'var(--font-outfit)', fontSize: 12, fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', background: C.orange, color: '#fff', border: 'none', padding: '14px 36px', cursor: 'pointer' }}>
                Únete al Webinar Gratuito
              </button>
              <button style={{ fontFamily: 'var(--font-outfit)', fontSize: 12, fontWeight: 400, letterSpacing: '0.16em', textTransform: 'uppercase', background: 'transparent', color: C.copper, border: `1px solid ${C.borderCu}`, padding: '14px 36px', cursor: 'pointer' }}>
                Habla con NorteIA →
              </button>
            </div>
          </div>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: `1px solid ${C.border}`, padding: '40px 48px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <div>
            <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: 18, fontWeight: 600, letterSpacing: '0.12em', color: C.white, marginBottom: 4 }}>
              VICTOR <span style={{ color: C.copper }}>MAGO</span>
            </p>
            <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 11, color: C.muted, letterSpacing: '0.1em' }}>Consultor IA · A Coruña, España</p>
          </div>
          <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
            {['NorteIA', 'LinkedIn', 'Contacto'].map(l => (
              <span key={l} style={{ fontFamily: 'var(--font-outfit)', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: C.muted, cursor: 'pointer' }}>{l}</span>
            ))}
          </div>
          <Link href="/demo" style={{ fontFamily: 'var(--font-outfit)', fontSize: 11, letterSpacing: '0.12em', color: C.muted, textDecoration: 'none' }}>← Volver a demos</Link>
        </div>
      </footer>

    </div>
  )
}

type RomanColors = { bg: string; bgCard: string; bgAlt: string; copper: string; copperLight: string; orange: string; white: string; muted: string; mutedLight: string; border: string; borderCu: string }
function TopicCard({ t, colors: C }: { t: { n: string; title: string; desc: string }; colors: RomanColors }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: '40px 32px',
        background: hovered ? C.bgCard : C.bgAlt,
        borderRight: '1px solid ' + C.border,
        borderBottom: '1px solid ' + C.border,
        transition: 'background 0.3s ease',
        cursor: 'default',
      }}
    >
      <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: 13, fontStyle: 'italic', color: C.copper, letterSpacing: '0.08em', marginBottom: 12 }}>{t.n}</p>
      <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 22, fontWeight: 500, color: C.white, marginBottom: 12, letterSpacing: '-0.01em' }}>{t.title}</h3>
      <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 13, fontWeight: 300, color: C.mutedLight, lineHeight: 1.65 }}>{t.desc}</p>
    </div>
  )
}
