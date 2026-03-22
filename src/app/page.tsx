'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { C } from '@/lib/theme'

const HERO_IMG = '/hero-main.jpg'

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, visible }
}

function Reveal({ children, delay = 0, y = 28 }: { children: React.ReactNode; delay?: number; y?: number }) {
  const { ref, visible } = useInView()
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : `translateY(${y}px)`,
      transition: `opacity 0.9s ease ${delay}s, transform 0.9s ease ${delay}s`,
    }}>{children}</div>
  )
}

// SVG icons — clean line art, no emojis
const ICONS: Record<string, React.ReactNode> = {
  brain: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-1.66z"/>
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-1.66z"/>
    </svg>
  ),
  star: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  ),
  scales: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="3" x2="12" y2="21"/><path d="M3 6l9-3 9 3"/>
      <path d="M3 6l4.5 9a4.5 4.5 0 0 1-9 0L3 6"/>
      <path d="M21 6l-4.5 9a4.5 4.5 0 0 0 9 0L21 6"/>
    </svg>
  ),
  target: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
    </svg>
  ),
  circuit: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="6" height="6" rx="1"/><rect x="14" y="4" width="6" height="6" rx="1"/>
      <rect x="4" y="14" width="6" height="6" rx="1"/><rect x="14" y="14" width="6" height="6" rx="1"/>
      <line x1="10" y1="7" x2="14" y2="7"/><line x1="7" y1="10" x2="7" y2="14"/>
      <line x1="17" y1="10" x2="17" y2="14"/><line x1="10" y1="17" x2="14" y2="17"/>
    </svg>
  ),
  users: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
}

function TopicCard({ n, title, desc, iconKey }: { n: string; title: string; desc: string; iconKey: string }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: 'clamp(28px, 3.5vw, 44px) clamp(22px, 2.8vw, 36px)',
        background: hovered ? '#141210' : C.bgAlt,
        borderRight: `1px solid ${C.border}`,
        borderBottom: `1px solid ${C.border}`,
        transition: 'background 0.35s ease',
        cursor: 'default',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ position: 'absolute', inset: 0, background: hovered ? `radial-gradient(ellipse at top left, ${C.copper}08, transparent 70%)` : 'transparent', transition: 'background 0.4s', pointerEvents: 'none' }} />
      <div style={{ color: C.copper, marginBottom: 16 }}>{ICONS[iconKey]}</div>
      <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: 13, fontStyle: 'italic', color: C.copper, letterSpacing: '0.08em', marginBottom: 10 }}>{n}</p>
      <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(19px, 2vw, 24px)', fontWeight: 500, color: C.white, marginBottom: 10 }}>{title}</h3>
      <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 13, fontWeight: 300, color: C.mutedLight, lineHeight: 1.65 }}>{desc}</p>
    </div>
  )
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: `1px solid ${C.border}` }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '24px 0', background: 'transparent', border: 'none', cursor: 'pointer',
          textAlign: 'left', gap: 16,
        }}
      >
        <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(17px, 2vw, 21px)', fontWeight: 500, color: C.white, lineHeight: 1.3 }}>{q}</span>
        <span style={{ color: C.copper, fontSize: 20, flexShrink: 0, transition: 'transform 0.3s', transform: open ? 'rotate(45deg)' : 'none' }}>+</span>
      </button>
      <div style={{
        maxHeight: open ? '400px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.4s ease',
      }}>
        <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 15, fontWeight: 300, color: C.mutedLight, lineHeight: 1.8, paddingBottom: 24 }}>{a}</p>
      </div>
    </div>
  )
}

const faqs = [
  {
    q: '¿Necesito saber de tecnología para trabajar contigo?',
    a: 'No. De hecho, trabajo mejor con directivos y equipos sin perfil técnico. Mi trabajo es exactamente ese: traducir la IA al lenguaje del negocio. No necesitas saber programar ni entender cómo funciona un modelo de lenguaje para aplicar la IA en tu empresa.',
  },
  {
    q: '¿Qué es el EU AI Act y por qué me afecta?',
    a: 'El EU AI Act es el primer reglamento europeo que regula el uso de la Inteligencia Artificial. Entró en vigor en 2024 y será de plena aplicación en agosto de 2026. Afecta a cualquier empresa que use, desarrolle o comercialice sistemas de IA en Europa, independientemente de su tamaño. Las multas pueden llegar al 7% de la facturación mundial.',
  },
  {
    q: '¿Qué diferencia hay entre formación y consultoría?',
    a: 'La formación está orientada a que tu equipo aprenda a usar la IA de forma práctica y autónoma. La consultoría es más estratégica: analizamos juntos cómo la IA puede mejorar tus procesos, productos o servicios, y te doy una hoja de ruta concreta. Muchas veces empezamos con formación y continuamos con consultoría.',
  },
  {
    q: '¿Cuánto tiempo dura una formación?',
    a: 'Depende del objetivo. Tenemos desde sesiones intensivas de medio día para directivos hasta programas de 8–12 horas para equipos completos. Todas parten de casos de uso reales de tu sector, no de teoría genérica. Puedes verlo mejor en la página de Consultoría.',
  },
  {
    q: '¿Trabajas con empresas de cualquier sector?',
    a: 'Sí, aunque tengo especial experiencia en sectores industrial, servicios profesionales, salud y educación. La IA aplicada al negocio tiene patrones comunes independientemente del sector. Lo que cambia son los casos de uso concretos, y eso lo adaptamos a cada cliente.',
  },
  {
    q: '¿Cómo es la primera reunión?',
    a: 'Es una llamada de 20 minutos sin compromiso. Te cuento qué puede hacer la IA por tu empresa y si tiene sentido trabajar juntos. Sin jerga técnica, sin propuestas de venta agresivas. Puedes reservarla directamente desde la página de Consultoría.',
  },
]

export default function Home() {
  return (
    <div style={{ background: C.bg, minHeight: '100vh', color: C.white }}>
      <Navbar />

      {/* ══════════════════════════════════════════════════════
          HERO — Full screen con imagen romana
      ══════════════════════════════════════════════════════ */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        {/* Background image */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image
            src={HERO_IMG}
            alt="Roma"
            fill
            priority
            style={{ objectFit: 'cover', objectPosition: 'center 30%', filter: 'grayscale(20%) brightness(0.35)' }}
            unoptimized
          />
          {/* Gradient overlays */}
          <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to bottom, ${C.bg}60 0%, transparent 30%, transparent 60%, ${C.bg} 100%)` }} />
          <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse at center, transparent 30%, ${C.bg}80 100%)` }} />
        </div>

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: 'clamp(100px, 15vh, 140px) clamp(24px, 5vw, 80px) 80px', maxWidth: 900, margin: '0 auto' }}>
          {/* Top decorative line */}
          <div style={{ width: 1, height: 60, background: `linear-gradient(transparent, ${C.copper})`, margin: '0 auto 40px' }} />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{ fontFamily: 'var(--font-outfit)', fontSize: 11, fontWeight: 500, letterSpacing: '0.30em', textTransform: 'uppercase', color: C.copper, marginBottom: 32 }}
          >
            Consultor & Formador de IA · España
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.25 }}
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(52px, 8.5vw, 110px)',
              fontWeight: 300,
              lineHeight: 1.02,
              color: C.white,
              marginBottom: 16,
              letterSpacing: '-0.02em',
            }}
          >
            La IA no te va a<br />
            <em style={{ fontStyle: 'italic', color: C.copper, fontWeight: 400 }}>quitar el trabajo.</em>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20, margin: '32px 0' }}
          >
            <div style={{ height: 1, width: 80, background: `linear-gradient(to right, transparent, ${C.border})` }} />
            <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(17px, 2.2vw, 22px)', fontStyle: 'italic', color: C.mutedLight, letterSpacing: '0.04em' }}>Si aprendes a gobernarla.</span>
            <div style={{ height: 1, width: 80, background: `linear-gradient(to left, transparent, ${C.border})` }} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            style={{ fontFamily: 'var(--font-outfit)', fontSize: 'clamp(14px, 1.6vw, 17px)', fontWeight: 300, color: C.mutedLight, lineHeight: 1.75, maxWidth: 540, margin: '0 auto 52px', letterSpacing: '0.02em' }}
          >
            Ayudo a directivos de pymes a entender, aplicar y cumplir la inteligencia artificial sin perder el norte.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.95 }}
            style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <Link href="/contacto" style={{
              fontFamily: 'var(--font-outfit)', fontSize: 12, fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase',
              background: C.orange, color: '#fff', padding: '15px 40px', textDecoration: 'none',
              boxShadow: `0 0 40px ${C.orange}30`, transition: 'box-shadow 0.3s, opacity 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.boxShadow = `0 0 60px ${C.orange}50` }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.boxShadow = `0 0 40px ${C.orange}30` }}
            >
              Hablemos 20 min →
            </Link>
            <a href="https://norteia.es" target="_blank" rel="noopener noreferrer" style={{
              fontFamily: 'var(--font-outfit)', fontSize: 12, fontWeight: 400, letterSpacing: '0.18em', textTransform: 'uppercase',
              background: 'transparent', color: C.white, border: `1px solid rgba(255,255,255,0.2)`, padding: '15px 36px', textDecoration: 'none',
              transition: 'border-color 0.3s, color 0.3s',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = C.copper; e.currentTarget.style.color = C.copper }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = C.white }}
            >
              NorteIA →
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: 'absolute', bottom: 36, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}>
            <div style={{ width: 1, height: 48, background: `linear-gradient(${C.copper}, transparent)` }} />
          </motion.div>
          <span style={{ fontFamily: 'var(--font-outfit)', fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: C.muted, marginTop: 4 }}>Descubrir</span>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          STATS
      ══════════════════════════════════════════════════════ */}
      <section style={{ borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
        <Reveal>
          <div style={{ maxWidth: 960, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', padding: '0 clamp(24px, 5vw, 64px)' }}>
            {[
              { n: '+100', label: 'Personas formadas' },
              { n: '4', label: 'Sectores especializados' },
              { n: 'EU AI Act', label: 'Especialista certificado' },
              { n: 'AI First', label: 'Metodología propia' },
            ].map((s, i, arr) => (
              <div key={i} style={{ padding: 'clamp(28px, 4vw, 48px) clamp(16px, 2vw, 24px)', textAlign: 'center', borderRight: i < arr.length - 1 ? `1px solid ${C.border}` : 'none' }}>
                <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(26px, 3vw, 42px)', fontWeight: 500, color: C.copper, letterSpacing: '-0.01em', marginBottom: 8 }}>{s.n}</p>
                <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 11, fontWeight: 400, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.muted }}>{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════════════
          SOBRE — con foto real + imagen romana de fondo
      ══════════════════════════════════════════════════════ */}
      <section style={{ padding: 'clamp(80px, 10vw, 140px) clamp(24px, 5vw, 64px)', position: 'relative', overflow: 'hidden' }}>
        {/* Pure CSS atmospheric background */}
        <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse at 70% 50%, ${C.copper}06 0%, transparent 60%)`, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(to right, transparent, ${C.borderCu}, transparent)` }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 1, background: `linear-gradient(to right, transparent, ${C.border}, transparent)` }} />

        <div style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(48px, 6vw, 96px)', alignItems: 'center', position: 'relative', zIndex: 1 }}>

          {/* Victor's real photo */}
          <Reveal delay={0}>
            <div style={{ position: 'relative', aspectRatio: '3/4', maxWidth: 380 }}>
              {/* Decorative frames */}
              <div style={{ position: 'absolute', inset: 0, border: `1px solid ${C.borderCu}`, zIndex: 2 }} />
              <div style={{ position: 'absolute', top: 14, left: 14, right: -14, bottom: -14, border: `1px solid ${C.border}`, zIndex: 0 }} />
              {/* Copper corner accent */}
              <div style={{ position: 'absolute', top: -1, left: -1, width: 40, height: 40, borderTop: `3px solid ${C.copper}`, borderLeft: `3px solid ${C.copper}`, zIndex: 3 }} />
              <div style={{ position: 'absolute', bottom: -1, right: -1, width: 40, height: 40, borderBottom: `3px solid ${C.copper}`, borderRight: `3px solid ${C.copper}`, zIndex: 3 }} />
              {/* Photo */}
              <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 1 }}>
                <Image
                  src="https://norteia.es/images/victor-mago.jpg"
                  alt="Víctor Mago"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  unoptimized
                />
                {/* Subtle bottom gradient */}
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '30%', background: `linear-gradient(transparent, ${C.bgCard}90)` }} />
              </div>
            </div>
          </Reveal>

          {/* Text */}
          <Reveal delay={0.15}>
            <div>
              <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 11, fontWeight: 500, letterSpacing: '0.24em', textTransform: 'uppercase', color: C.copper, marginBottom: 24 }}>Quién soy</p>
              <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(32px, 4vw, 54px)', fontWeight: 300, lineHeight: 1.1, color: C.white, marginBottom: 24 }}>
                No soy ingeniero.<br />
                <em style={{ fontStyle: 'italic', color: C.copper, fontWeight: 400 }}>Soy alguien que lo aplica.</em>
              </h2>
              <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 15, fontWeight: 300, color: C.mutedLight, lineHeight: 1.85, marginBottom: 16 }}>
                Empecé a explorar la IA cuando se convirtió en una herramienta de negocio real. No desde la teoría, sino desde proyectos con impacto directo en la cuenta de resultados.
              </p>
              <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 15, fontWeight: 300, color: C.mutedLight, lineHeight: 1.85, marginBottom: 32 }}>
                Co-fundé NorteIA con una misión clara: que las pymes españolas puedan adoptar la IA con confianza, cumpliendo el EU AI Act y sin perder de vista sus objetivos de negocio.
              </p>

              <div style={{ borderLeft: `2px solid ${C.borderCu}`, paddingLeft: 20, marginBottom: 36 }}>
                <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(17px, 2vw, 21px)', fontStyle: 'italic', color: C.copperLight, lineHeight: 1.55 }}>
                  "La diferencia no está en tener acceso a la IA.<br />Está en saber qué preguntarle."
                </p>
              </div>

              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                <Link href="/conoceme" style={{ fontFamily: 'var(--font-outfit)', fontSize: 12, fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: C.copper, border: `1px solid ${C.borderCu}`, padding: '12px 28px', textDecoration: 'none', transition: 'border-color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = C.copper)}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = C.borderCu)}
                >
                  Conóceme →
                </Link>
                <a href="https://norteia.es" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-outfit)', fontSize: 12, fontWeight: 400, letterSpacing: '0.16em', textTransform: 'uppercase', color: C.mutedLight, textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                  NorteIA →
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SERVICIOS — 3 tarjetas visuales grandes
      ══════════════════════════════════════════════════════ */}
      <section style={{ borderTop: `1px solid ${C.border}`, background: C.bg, padding: 'clamp(80px, 10vw, 120px) clamp(24px, 5vw, 64px)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <Reveal>
            <div style={{ marginBottom: 64 }}>
              <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 11, fontWeight: 500, letterSpacing: '0.28em', textTransform: 'uppercase', color: C.copper, marginBottom: 16 }}>Servicios</p>
              <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 300, color: C.white, maxWidth: 600, lineHeight: 1.1 }}>
                Tres pilares.<br /><em style={{ color: C.copper }}>Un objetivo.</em>
              </h2>
            </div>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 2 }}>
            {[
              {
                n: 'I', delay: 0.05,
                title: 'Formación IA',
                sub: 'Para equipos y directivos',
                desc: 'De la teoría al uso real. Programas prácticos de IA generativa, metodología AI First y formación in-company adaptada a tu sector.',
                items: ['IA para no técnicos', 'Metodología AI First', 'Formación corporativa'],
                img: '/service-formacion.jpg', imgPos: 'center 30%',
                bg: `radial-gradient(ellipse at 25% 80%, ${C.copper}18 0%, transparent 55%), linear-gradient(160deg, #1A1208 0%, #0D0B07 100%)`,
              },
              {
                n: 'II', delay: 0.12,
                title: 'Consultoría',
                sub: 'Estrategia e implementación',
                desc: 'Diagnóstico real de tu empresa, casos de uso de alto impacto y hoja de ruta concreta. Incluye diseño de agentes y automatizaciones.',
                items: ['Auditoría de procesos IA', 'Hoja de ruta personalizada', 'Agentes y automatización'],
                img: '/service-consultoria.jpg', imgPos: 'center 40%',
                bg: `radial-gradient(ellipse at 75% 20%, ${C.copper}14 0%, transparent 55%), linear-gradient(160deg, #120E08 0%, #0D0B07 100%)`,
              },
              {
                n: 'III', delay: 0.19,
                title: 'EU AI Act',
                sub: 'Cumplimiento normativo',
                desc: 'Especialización en el reglamento europeo de IA. Auditoría, clasificación de riesgos y plan de cumplimiento antes de agosto de 2026.',
                items: ['Auditoría de cumplimiento', 'Clasificación de riesgos', 'Plan de adaptación'],
                img: '/service-eu-ai-act.jpg', imgPos: 'center 20%',
                bg: `radial-gradient(ellipse at 50% 90%, ${C.orange}10 0%, transparent 50%), linear-gradient(160deg, #120A07 0%, #0D0B07 100%)`,
              },
            ].map((s) => (
              <Reveal key={s.n} delay={s.delay}>
                <div style={{ position: 'relative', overflow: 'hidden', background: s.bg, border: `1px solid ${C.border}`, cursor: 'default' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = C.borderCu }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = C.border }}
                >
                  {/* Image area */}
                  <div style={{ position: 'relative', height: 260, overflow: 'hidden' }}>
                    <Image
                      src={s.img}
                      alt=""
                      fill
                      style={{
                        objectFit: 'cover',
                        objectPosition: s.imgPos,
                        filter: `grayscale(30%) brightness(0.18) sepia(15%)`,
                      }}
                    />
                    {/* Copper tint overlay */}
                    <div style={{ position: 'absolute', inset: 0, background: s.bg, opacity: 0.6 }} />
                    {/* Bottom fade */}
                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '50%', background: `linear-gradient(transparent, ${C.bg})` }} />
                    {/* Roman numeral */}
                    <div style={{ position: 'absolute', top: 24, left: 28 }}>
                      <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: 13, fontStyle: 'italic', color: C.copper, letterSpacing: '0.12em', opacity: 0.8 }}>{s.n}</span>
                    </div>
                    {/* Decorative corner */}
                    <div style={{ position: 'absolute', top: 0, right: 0, width: 32, height: 32, borderTop: `1px solid ${C.borderCu}`, borderRight: `1px solid ${C.borderCu}` }} />
                  </div>

                  {/* Content */}
                  <div style={{ padding: '32px 32px 36px' }}>
                    <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 10, fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: C.muted, marginBottom: 10 }}>{s.sub}</p>
                    <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(24px, 2.5vw, 32px)', fontWeight: 400, color: C.white, marginBottom: 16, lineHeight: 1.1 }}>{s.title}</h3>
                    <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 14, fontWeight: 300, color: C.mutedLight, lineHeight: 1.7, marginBottom: 24 }}>{s.desc}</p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 28 }}>
                      {s.items.map(item => (
                        <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                          <div style={{ width: 3, height: 3, background: C.copper, borderRadius: '50%', flexShrink: 0 }} />
                          <span style={{ fontFamily: 'var(--font-outfit)', fontSize: 12, fontWeight: 300, color: C.muted }}>{item}</span>
                        </div>
                      ))}
                    </div>

                    <Link href="/servicios" style={{ fontFamily: 'var(--font-outfit)', fontSize: 11, fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: C.copper, textDecoration: 'none' }}>
                      Saber más →
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.25}>
            <div style={{ textAlign: 'center', marginTop: 48 }}>
              <Link href="/servicios" style={{ fontFamily: 'var(--font-outfit)', fontSize: 12, fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: C.white, border: `1px solid ${C.border}`, padding: '13px 32px', textDecoration: 'none', transition: 'border-color 0.2s, color 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = C.copper; e.currentTarget.style.color = C.copper }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.color = C.white }}
              >
                Ver todos los servicios →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          ROMAN QUOTE BREAK — CSS puro, elegante
      ══════════════════════════════════════════════════════ */}
      <section style={{ position: 'relative', padding: 'clamp(80px, 10vw, 120px) clamp(24px, 5vw, 80px)', background: C.bg, overflow: 'hidden', textAlign: 'center' }}>
        {/* Decorative horizontal rules */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(to right, transparent, ${C.borderCu}, transparent)` }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 1, background: `linear-gradient(to right, transparent, ${C.border}, transparent)` }} />
        {/* Ambient copper glow */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 800, height: 300, background: `radial-gradient(ellipse, ${C.copper}08 0%, transparent 65%)`, pointerEvents: 'none' }} />

        <Reveal>
          <div style={{ position: 'relative', maxWidth: 780, margin: '0 auto' }}>
            {/* Roman ornament top */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 40 }}>
              <div style={{ height: 1, width: 60, background: `linear-gradient(to right, transparent, ${C.copper})` }} />
              <svg width="20" height="20" viewBox="0 0 24 24" fill={C.copper} opacity="0.7">
                <polygon points="12,2 14.4,9.2 22,9.2 16,13.8 18.4,21 12,16.4 5.6,21 8,13.8 2,9.2 9.6,9.2"/>
              </svg>
              <div style={{ height: 1, width: 60, background: `linear-gradient(to left, transparent, ${C.copper})` }} />
            </div>

            <p style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(26px, 4vw, 52px)',
              fontStyle: 'italic', fontWeight: 300,
              color: C.white, lineHeight: 1.25,
              letterSpacing: '-0.01em',
            }}>
              "El que no sabe gobernar la IA,<br />
              <span style={{ color: C.copper }}>será gobernado por quienes sí saben.</span>"
            </p>

            {/* Roman ornament bottom */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginTop: 40 }}>
              <div style={{ height: 1, width: 60, background: `linear-gradient(to right, transparent, ${C.border})` }} />
              <div style={{ width: 6, height: 6, background: C.copper, borderRadius: '50%', opacity: 0.6 }} />
              <div style={{ height: 1, width: 60, background: `linear-gradient(to left, transparent, ${C.border})` }} />
            </div>
          </div>
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════════════
          FAQ
      ══════════════════════════════════════════════════════ */}
      <section style={{ padding: 'clamp(80px, 10vw, 120px) clamp(24px, 5vw, 64px)', borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <Reveal>
            <div style={{ marginBottom: 56, textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 11, fontWeight: 500, letterSpacing: '0.24em', textTransform: 'uppercase', color: C.copper, marginBottom: 16 }}>Preguntas frecuentes</p>
              <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(28px, 3.5vw, 46px)', fontWeight: 300, color: C.white }}>
                Lo que más me preguntan
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              {faqs.map((faq, i) => <FaqItem key={i} {...faq} />)}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CTA BANNER
      ══════════════════════════════════════════════════════ */}
      <section style={{ position: 'relative', padding: 'clamp(80px, 10vw, 120px) clamp(24px, 5vw, 64px)', textAlign: 'center', overflow: 'hidden', background: C.bgAlt, borderTop: `1px solid ${C.border}` }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 800, height: 500, background: `radial-gradient(ellipse, ${C.copper}07 0%, transparent 60%)`, pointerEvents: 'none' }} />
        <Reveal>
          <div style={{ maxWidth: 680, margin: '0 auto', position: 'relative' }}>
            <div style={{ display: 'inline-block', background: `${C.orange}15`, border: `1px solid ${C.orange}40`, padding: '5px 16px', marginBottom: 28 }}>
              <span style={{ fontFamily: 'var(--font-outfit)', fontSize: 10, fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: C.orange }}>Urgente — Agosto 2026</span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(34px, 5vw, 62px)', fontWeight: 300, lineHeight: 1.1, color: C.white, marginBottom: 20 }}>
              ¿Tu empresa está preparada<br /><em style={{ fontStyle: 'italic', color: C.copper }}>para el EU AI Act?</em>
            </h2>
            <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 15, fontWeight: 300, color: C.mutedLight, lineHeight: 1.75, marginBottom: 44, maxWidth: 520, margin: '0 auto 44px' }}>
              Multas de hasta 35 millones de euros o el 7% de la facturación mundial. No esperes a que el regulador llame a tu puerta.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/consultoria" style={{ fontFamily: 'var(--font-outfit)', fontSize: 12, fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', background: C.orange, color: '#fff', padding: '15px 40px', textDecoration: 'none', boxShadow: `0 0 30px ${C.orange}25` }}>
                Hablemos ahora
              </Link>
              <a href="https://norteia.es/contacto" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-outfit)', fontSize: 12, fontWeight: 400, letterSpacing: '0.16em', textTransform: 'uppercase', background: 'transparent', color: C.copper, border: `1px solid ${C.borderCu}`, padding: '15px 36px', textDecoration: 'none' }}>
                Ver NorteIA →
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      <Footer />
    </div>
  )
}
