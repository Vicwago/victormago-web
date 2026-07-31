import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'
import Faq from '@/components/Faq'
import LeadForm from '@/components/LeadForm'
import ParticleBall from '@/components/ParticleBall'
import ScoreBoard from '@/components/ScoreBoard'
import Tilt from '@/components/Tilt'
import ProductShowcase, { type Producto } from '@/components/ProductShowcase'
import { casosDestacados } from '@/lib/casos'
import { DEFAULT_DESCRIPTION, CTA_LABEL, ctaHref, CAL_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Víctor Mago — Consultor de IA y automatización en A Coruña',
  description: DEFAULT_DESCRIPTION,
  alternates: { canonical: '/' },
}

// ─── 01 LECTURA: qué resuelvo, en lenguaje de cliente ───────────────────────
const lecturas = [
  {
    n: '01',
    titulo: 'Tu equipo pierde horas en tareas repetitivas',
    texto:
      'Copiar datos de un correo a un Excel. Clasificar documentos. Responder por enésima vez la misma pregunta. Automatizo ese circuito completo para que tu gente trabaje en lo que de verdad aporta.',
  },
  {
    n: '02',
    titulo: 'Te llegan más consultas de las que puedes atender',
    texto:
      'Clientes que preguntan a las diez de la noche y compradores que no esperan. Monto asistentes que responden con tu información real, y solo con tu información real, a cualquier hora.',
  },
  {
    n: '03',
    titulo: 'La IA te suena a obligación, no a ventaja',
    texto:
      'El EU AI Act ya está aquí y tu equipo todavía no la usa bien. Formo a equipos sin perfil técnico para que la IA les ahorre trabajo desde la primera semana, cumpliendo la norma.',
  },
]

// ─── 02 TRAYECTORIA: de la pista a la IA en producción ──────────────────────
const etapas = [
  {
    n: '01',
    etiqueta: 'La pista',
    titulo: 'Quince años leyendo el juego',
    texto:
      'Entrenar jugadores me dio algo que ningún máster tech da: leer patrones y anticiparme. Saber por qué alguien repite un error y cómo entrenarlo hasta que la corrección sale sola.',
  },
  {
    n: '02',
    etiqueta: 'Tecnología e IA',
    titulo: 'De la trinchera, no del aula',
    texto:
      'La transición natural. Cofundé NorteIA y me metí donde se aprende de verdad: construyendo sistemas, automatizando procesos, poniendo IA en producción en empresas reales.',
  },
  {
    n: '03',
    etiqueta: 'Consultoría',
    titulo: 'Construyo lo que recomiendo',
    texto:
      'Entender personas + construir tecnología me llevó aquí. No la consultoría de las Big Four: sin slides, con código. Sin promesas, con sistemas funcionando el lunes.',
  },
]

const faqs = [
  {
    q: '¿Necesito saber de tecnología para trabajar contigo?',
    a: 'No. Trabajo mejor con directivos y equipos sin perfil técnico. Mi trabajo es exactamente ese: traducir la IA al lenguaje del negocio. No necesitas saber programar para aplicar la IA en tu empresa.',
  },
  {
    q: '¿Qué es el EU AI Act y por qué me afecta?',
    a: 'Es el reglamento europeo que regula el uso de la IA. Algunas obligaciones ya están vigentes desde febrero de 2025 y la aplicación general llega el 2 de agosto de 2026. Afecta a cualquier empresa que use IA en Europa, con multas de hasta 35 millones de euros o el 7% de la facturación mundial.',
  },
  {
    q: '¿Trabajas con empresas de cualquier sector?',
    a: 'Sí. Tengo especial experiencia con despachos legales, comercio local, inmobiliario y sector cultural. La IA no entiende de sectores: entiende de procesos repetitivos, y esos existen en todas partes.',
  },
  {
    q: '¿Qué pasa después de la primera llamada?',
    a: 'En 20 minutos te digo si la IA puede ayudarte y por dónde empezaría yo. Si tiene sentido seguir, el proyecto lo ejecuto con mi equipo de NorteIA. Si no lo tiene, también te lo digo.',
  },
  {
    q: '¿Cuánto cuesta un proyecto de automatización?',
    a: 'Depende del proceso, pero mi criterio es fijo: si la automatización no se paga sola con las horas que ahorra, no te la recomiendo. Eso también me lo puedes preguntar en la primera llamada, sin compromiso.',
  },
  {
    q: '¿Cómo es la primera reunión?',
    a: 'Una llamada de 20 minutos, gratis y sin compromiso. Me cuentas cómo trabajáis y te digo qué automatizaría primero. Sin jerga técnica y sin venta agresiva.',
  },
]

// ─── VITRINA: productos propios ─────────────────────────────────────────────
// TODO-VÍCTOR: capturas de cada producto en public/productos/ y añadirlas al
// array `imagenes` (la tarjeta pasa a abrir la galería automáticamente).
const productos: Producto[] = [
  {
    tag: 'SaaS',
    nombre: 'CoachDesk',
    texto: 'Software para entrenadores de tenis, hecho por un entrenador de tenis: alumnos, clases y seguimiento sin hojas de cálculo.',
    imagenes: [],
    href: '/casos/coachdesk-saas-tenis',
  },
  {
    tag: 'Herramienta',
    nombre: 'Faro',
    texto: 'Auditoría con IA de la presencia digital de negocios locales: detecta qué falla en tu web, tu ficha de Google y tu reputación antes de que te cueste clientes.',
    imagenes: [],
    href: null,
    estado: 'En desarrollo',
  },
  {
    tag: 'Sistema interno',
    nombre: 'Mission Control',
    texto: 'Nuestro CRM con agentes de IA: prospecta, hace seguimiento y documenta el trabajo comercial casi solo. Lo usamos cada día en NorteIA.',
    imagenes: [],
    href: '/blog/mission-control-crm-agentes-ia',
  },
]

const tickerFrases = [
  'La bola llega: o la esperas o corres detrás de ella',
  'Sistemas que funcionan el lunes por la mañana',
  'El Art. 4 del EU AI Act ya está en vigor',
  'Sin humo, sin slides eternas',
  '15 años enseñando a anticiparse',
]

// ─── SVG: media pista de tenis (líneas de cal) + arco de bola ───────────────
function CourtSvg({ night = false }: { night?: boolean }) {
  const line = night ? 'var(--chalk)' : 'var(--text)'
  return (
    <svg viewBox="0 0 560 640" fill="none" aria-hidden style={{ width: '100%', height: 'auto', display: 'block' }}>
      <g stroke={line} strokeWidth="2" opacity={night ? 0.5 : 0.16}>
        <rect x="40" y="40" width="480" height="560" />
        <line x1="95" y1="40" x2="95" y2="600" />
        <line x1="465" y1="40" x2="465" y2="600" />
        <line x1="95" y1="330" x2="465" y2="330" />
        <line x1="280" y1="330" x2="280" y2="600" />
        <line x1="280" y1="40" x2="280" y2="58" />
      </g>
      <line x1="16" y1="40" x2="544" y2="40" stroke={line} strokeWidth="4" opacity={night ? 0.7 : 0.3} />
      <path
        className="ball-arc"
        d="M 60 620 C 180 300, 340 180, 530 96"
        stroke="var(--accent)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="530" cy="96" r="9" fill="var(--accent)" />
    </svg>
  )
}

export default function Home() {
  const destacados = casosDestacados()
  const ctaExternal = Boolean(CAL_URL)

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh', color: 'var(--text)' }} className="paper-grain">
      <Navbar />
      <ScoreBoard />

      {/* ══════════ PUNTO 00 · SAQUE ══════════ */}
      <section style={{ position: 'relative', minHeight: '96vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <span className="punto-label">Punto 00 · Saque</span>

        {/* Pista de fondo tras la estatua */}
        <div aria-hidden style={{ position: 'absolute', right: 'clamp(-160px, -6vw, -30px)', top: '54%', transform: 'translateY(-50%)', width: 'clamp(300px, 42vw, 600px)', pointerEvents: 'none', opacity: 0.75 }}>
          <CourtSvg />
        </div>

        <div style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: 1220, margin: '0 auto', padding: 'clamp(96px, 13vh, 140px) clamp(24px, 5vw, 64px) 40px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.15fr) minmax(0, 0.85fr)', gap: 'clamp(16px, 3vw, 48px)', alignItems: 'center' }} className="hero-grid">

            {/* Texto */}
            <div>
              <p className="rise rise-1" style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 'clamp(18px, 2.6vh, 30px)' }}>
                Consultor de IA · A Coruña — Galicia — España
              </p>

              <h1 className="rise rise-2" style={{
                fontFamily: 'var(--font-display)',
                fontStretch: '125%',
                fontWeight: 800,
                fontSize: 'clamp(52px, 9vw, 132px)',
                lineHeight: 0.94,
                letterSpacing: '-0.035em',
                textTransform: 'uppercase',
                color: 'var(--text)',
                marginBottom: 'clamp(22px, 3vh, 36px)',
              }}>
                Víctor<br />Mago<span style={{ color: 'var(--accent)' }}>.</span>
              </h1>

              <div className="rise rise-3" style={{ marginBottom: 'clamp(22px, 3vh, 32px)' }}>
                <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 'clamp(16px, 1.9vw, 20px)', color: 'var(--accent)', marginBottom: 6 }}>
                  Consultor de IA y automatización.
                </p>
                <p style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: 'clamp(15px, 1.8vw, 19px)', color: 'var(--text)', marginBottom: 6 }}>
                  Cofundador de NorteIA.
                </p>
                <p style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: 'clamp(15px, 1.8vw, 19px)', color: 'var(--text)' }}>
                  Entrenador de tenis.
                </p>
              </div>

              <p className="rise rise-4" style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: 'clamp(15px, 1.7vw, 17.5px)', color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: '42ch', marginBottom: 'clamp(28px, 4vh, 44px)' }}>
            15 años enseñando a jugadores a anticiparse. Ahora enseño lo mismo a las empresas,
            con sistemas que funcionan el lunes por la mañana.
              </p>

              <div className="rise rise-5 cta-buttons" style={{ display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center' }}>
                {ctaExternal
                  ? <a className="btn-primary" href={ctaHref()} target="_blank" rel="noopener noreferrer">{CTA_LABEL}</a>
                  : <Link className="btn-primary" href={ctaHref()}>{CTA_LABEL}</Link>}
                <a className="btn-ghost" href="#lectura">Sigue el punto ↓</a>
              </div>
            </div>

            {/* La bola de partículas junto al nombre (petición de Mariana) */}
            <div className="rise rise-3" style={{ position: 'relative' }}>
              <Tilt max={5}>
                <div style={{ position: 'relative', width: 'min(100%, 520px)', aspectRatio: '1', marginLeft: 'auto' }}>
                  <ParticleBall light />
                </div>
              </Tilt>
            </div>
          </div>
        </div>
      </section>

      <hr className="tramline" />

      {/* ══════════ CONFÍAN EN MÍ ══════════ */}
      <section style={{ padding: 'clamp(44px, 6vw, 72px) clamp(24px, 5vw, 64px)' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <Reveal>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--text-faint)', textAlign: 'center', marginBottom: 34 }}>
              Confían en mí
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'clamp(32px, 6vw, 80px)', flexWrap: 'wrap' }}>
              <figure style={{ textAlign: 'center' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logos/icpc.webp" alt="Ilustre Colegio de Procuradores de A Coruña" className="trust-logo" style={{ height: 64 }} />
                <figcaption style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 300, color: 'var(--text-faint)', marginTop: 10 }}>
                  Ilustre Colegio de Procuradores<br />de A Coruña
                </figcaption>
              </figure>
              <figure style={{ textAlign: 'center' }}>
                <a href="https://www.sanchezgarciaprocuradores.com/" target="_blank" rel="noopener noreferrer">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/logos/sanchez.png" alt="Sánchez García Procuradores" className="trust-logo-invert" style={{ height: 34 }} />
                </a>
                <figcaption style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 300, color: 'var(--text-faint)', marginTop: 10 }}>
                  Sánchez García<br />Procuradores
                </figcaption>
              </figure>
              <figure style={{ textAlign: 'center' }}>
                <a href="https://tenismarineda.net/" target="_blank" rel="noopener noreferrer">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/logos/marineda.webp" alt="Escuela de Tenis Marineda" className="trust-logo" style={{ height: 48 }} />
                </a>
                <figcaption style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 300, color: 'var(--text-faint)', marginTop: 10 }}>
                  Escuela de Tenis<br />Marineda
                </figcaption>
              </figure>
              {/* TODO-VÍCTOR: más logos cuando confirmes cuáles (mismo patrón) */}
            </div>
          </Reveal>
        </div>
      </section>

      <hr className="tramline" />

      {/* ══════════ PUNTO 01 · LECTURA ══════════ */}
      <section id="lectura" style={{ position: 'relative', padding: 'clamp(80px, 11vw, 140px) clamp(24px, 5vw, 64px)' }}>
        <span className="punto-label">Punto 01 · Lectura</span>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <Reveal>
            <h2 style={{ fontFamily: 'var(--font-display)', fontStretch: '118%', fontWeight: 750, fontSize: 'clamp(30px, 4.6vw, 58px)', lineHeight: 1.02, letterSpacing: '-0.025em', maxWidth: '18ch', marginBottom: 'clamp(40px, 6vw, 72px)' }}>
              Leo tu negocio como leía al rival<span style={{ color: 'var(--accent)' }}>.</span>
            </h2>
          </Reveal>

          <div>
            {lecturas.map((l, i) => (
              <div key={l.n} className="tilt-in" style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(56px, 120px) 1fr',
                gap: 'clamp(16px, 4vw, 56px)',
                padding: 'clamp(28px, 4vw, 44px) 0',
                borderTop: '1.5px solid var(--border)',
                alignItems: 'start',
              }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(13px, 1.4vw, 15px)', color: 'var(--accent)', paddingTop: 6 }}>
                  {l.n} /
                </span>
                <div style={{ maxWidth: 620, justifySelf: i % 2 === 1 ? 'end' : 'start' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(20px, 2.6vw, 30px)', letterSpacing: '-0.015em', lineHeight: 1.15, marginBottom: 12 }}>
                    {l.titulo}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: 15.5, color: 'var(--text-muted)', lineHeight: 1.75, maxWidth: '58ch' }}>
                    {l.texto}
                  </p>
                </div>
              </div>
            ))}
            <div style={{ borderTop: '1.5px solid var(--border)' }} />
          </div>
        </div>
      </section>

      {/* ══════════ PUNTO 02 · TRAYECTORIA (drench azul) ══════════ */}
      <section className="section-blue" style={{ position: 'relative', padding: 'clamp(80px, 11vw, 150px) clamp(24px, 5vw, 64px)', overflow: 'hidden' }}>
        <span className="punto-label" style={{ color: 'var(--text-faint)' }}>Punto 02 · Anticipación</span>
        {/* Línea de cal cruzando el azul */}
        <div aria-hidden className="drift-slow" style={{ position: 'absolute', left: '8%', right: '8%', top: 90, height: 1.5, background: 'rgba(245,243,235,0.25)' }} />
        {/* Bola de tenis de partículas: reacciona al cursor */}
        <div aria-hidden style={{ position: 'absolute', right: 'clamp(-140px, -4vw, 0px)', top: '4%', width: 'clamp(300px, 42vw, 640px)', aspectRatio: '1', pointerEvents: 'auto', opacity: 0.95 }}>
          <ParticleBall />
        </div>

        <div style={{ maxWidth: 1120, margin: '0 auto', position: 'relative' }}>
          <Reveal>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--accent-light)', marginBottom: 20 }}>
              Trayectoria
            </p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontStretch: '120%', fontWeight: 800, fontSize: 'clamp(34px, 5.6vw, 74px)', lineHeight: 0.98, letterSpacing: '-0.03em', textTransform: 'uppercase', color: 'var(--text)', maxWidth: '16ch', marginBottom: 'clamp(44px, 6vw, 80px)' }}>
              De la pista a la IA en producción<span style={{ color: 'var(--accent-light)' }}>.</span>
            </h2>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(260px, 100%), 1fr))', gap: 'clamp(24px, 3.5vw, 48px)' }}>
            {etapas.map((e, i) => (
              <div key={e.n} className="scale-in" style={{ borderTop: '2px solid rgba(245,243,235,0.45)', paddingTop: 22, marginTop: i * 34 }}>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent-light)', marginBottom: 14 }}>
                  {e.n} · {e.etiqueta}
                </p>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 750, fontSize: 'clamp(20px, 2.4vw, 27px)', letterSpacing: '-0.015em', lineHeight: 1.12, color: 'var(--text)', marginBottom: 14 }}>
                  {e.titulo}
                </h3>
                <p style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: 15, color: 'var(--text-muted)', lineHeight: 1.75 }}>
                  {e.texto}
                </p>
              </div>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(20px, 3vw, 36px)', marginTop: 'clamp(48px, 6vw, 80px)', flexWrap: 'wrap' }}>
              <div style={{ position: 'relative', width: 108, height: 108, borderRadius: '50%', overflow: 'hidden', border: '2.5px solid rgba(245,243,235,0.6)', flexShrink: 0 }}>
                <Image src="/victor-mago.webp" alt="Víctor Mago" fill sizes="108px" style={{ objectFit: 'cover', objectPosition: 'center top' }} />
              </div>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(18px, 2.3vw, 26px)', letterSpacing: '-0.015em', lineHeight: 1.3, color: 'var(--text)', maxWidth: '30ch' }}>
                "Sigo entrenando cada tarde. La pista es donde mejor se entiende lo que hago por las mañanas."
              </p>
              <Link href="/sobre-mi" style={{ fontFamily: 'var(--font-mono)', fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent-light)', marginLeft: 'auto' }}>
                Mi historia →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════ PUNTO 03 · GOLPES GANADORES (noche) ══════════ */}
      <section className="section-night" style={{ position: 'relative', padding: 'clamp(80px, 11vw, 140px) clamp(24px, 5vw, 64px)' }}>
        <span className="punto-label" style={{ color: 'var(--text-faint)' }}>Punto 03 · Golpes ganadores</span>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <Reveal>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 20, marginBottom: 'clamp(36px, 5vw, 56px)' }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontStretch: '118%', fontWeight: 750, fontSize: 'clamp(30px, 4.6vw, 58px)', lineHeight: 1.02, letterSpacing: '-0.025em', color: 'var(--text)' }}>
                Golpes ganadores<span style={{ color: 'var(--accent)' }}>.</span>
              </h2>
              <Link href="/casos" style={{ fontFamily: 'var(--font-mono)', fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent)' }}>
                Marcador completo →
              </Link>
            </div>
          </Reveal>

          <div role="list">
            {destacados.map((caso, i) => (
              <Link key={caso.slug} role="listitem" href={`/casos/${caso.slug}`} style={{ display: 'block' }}>
                <div className="tilt-in" style={{
                  display: 'grid',
                  gridTemplateColumns: 'minmax(70px, 110px) 1fr auto',
                  gap: 'clamp(14px, 3vw, 40px)',
                  alignItems: 'center',
                  padding: 'clamp(22px, 3vw, 34px) clamp(4px, 1vw, 12px)',
                  borderTop: '1.5px solid var(--border)',
                  transition: 'background 0.25s',
                }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--accent)' }}>SET {i + 1}</span>
                  <span>
                    <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(19px, 2.6vw, 30px)', letterSpacing: '-0.015em', color: 'var(--text)', marginBottom: 6 }}>
                      {caso.alias}
                    </span>
                    <span style={{ display: 'block', fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: 14, color: 'var(--text-muted)', maxWidth: '62ch', lineHeight: 1.6 }}>
                      {caso.sector} — {caso.resumen}
                    </span>
                  </span>
                  <span aria-hidden style={{ fontFamily: 'var(--font-mono)', fontSize: 18, color: 'var(--accent)' }}>→</span>
                </div>
              </Link>
            ))}
            <div style={{ borderTop: '1.5px solid var(--border)' }} />
          </div>

          <Reveal delay={0.15}>
            <p style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: 14.5, color: 'var(--text-muted)', lineHeight: 1.7, marginTop: 'clamp(28px, 4vw, 40px)', maxWidth: '68ch' }}>
              Trabajo con despachos legales, inmobiliarias, comercios y proyectos culturales
              de Galicia. Los proyectos los ejecuto con{' '}
              <a href="https://norteia.es" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', textDecoration: 'underline', textUnderlineOffset: 3 }}>NorteIA</a>.
              {/* TODO-VÍCTOR: testimonio real con nombre cuando lo tengas */}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ══════════ PUNTO 04 · VITRINA (productos propios) ══════════ */}
      <section style={{ position: 'relative', padding: 'clamp(80px, 11vw, 130px) clamp(24px, 5vw, 64px)', background: 'var(--surface-alt)' }}>
        <span className="punto-label">Punto 04 · Vitrina</span>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <Reveal>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 20, marginBottom: 'clamp(36px, 5vw, 56px)' }}>
              <div>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16 }}>
                  Lo que construyo
                </p>
                <h2 style={{ fontFamily: 'var(--font-display)', fontStretch: '118%', fontWeight: 750, fontSize: 'clamp(30px, 4.6vw, 58px)', lineHeight: 1.02, letterSpacing: '-0.025em' }}>
                  No solo lo cuento:<br />lo fabrico<span style={{ color: 'var(--accent)' }}>.</span>
                </h2>
              </div>
            </div>
          </Reveal>
          <ProductShowcase productos={productos} />
        </div>
      </section>

      {/* ══════════ PUNTO 04 · MARCADOR (ticker) ══════════ */}
      <div className="ticker" aria-hidden style={{ background: 'var(--accent)', padding: '16px 0' }}>
        <div className="ticker-track">
          {[0, 1].map(dup => (
            <span key={dup} style={{ display: 'inline-flex' }}>
              {tickerFrases.map(f => (
                <span key={f} style={{ fontFamily: 'var(--font-mono)', fontSize: 13.5, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--bg)', padding: '0 28px', whiteSpace: 'nowrap' }}>
                  {f} <span style={{ opacity: 0.55, paddingLeft: 28 }}>●</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ══════════ PUNTO 05 · ENTRENAMIENTO (lead magnet + FAQ) ══════════ */}
      <section style={{ position: 'relative', padding: 'clamp(80px, 11vw, 140px) clamp(24px, 5vw, 64px)' }}>
        <span className="punto-label">Punto 05 · Entrenamiento</span>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))', gap: 'clamp(40px, 6vw, 88px)', alignItems: 'start' }}>

            <Reveal>
              <div style={{ position: 'sticky', top: 100, background: 'var(--surface)', border: '1.5px solid var(--border-accent)', borderRadius: 'var(--radius-card)', padding: 'clamp(26px, 3.5vw, 40px)' }}>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 18 }}>
                  PDF gratis
                </p>
                <h2 style={{ fontFamily: 'var(--font-display)', fontStretch: '118%', fontWeight: 750, fontSize: 'clamp(24px, 3vw, 36px)', lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: 16 }}>
                  5 automatizaciones que cualquier pyme puede montar esta semana<span style={{ color: 'var(--accent)' }}>.</span>
                </h2>
                <p style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: 15, color: 'var(--text-muted)', lineHeight: 1.75, maxWidth: '48ch', marginBottom: 26 }}>
                  El proceso, la herramienta y el resultado de cada una. Sale de proyectos reales
                  con empresas de Galicia. Si tienes papeleo, te sirve.
                </p>
                <LeadForm recurso="automatizaciones-pymes" />
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 750, fontSize: 'clamp(22px, 2.6vw, 30px)', letterSpacing: '-0.015em', marginBottom: 10 }}>
                  Lo que me preguntan antes de empezar
                </h2>
                <Faq items={faqs} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════ PUNTO 06 · BOLA DE PARTIDO ══════════ */}
      <section className="section-night" style={{ position: 'relative', padding: 'clamp(90px, 13vw, 160px) clamp(24px, 5vw, 64px)', overflow: 'hidden' }}>
        <span className="punto-label">Punto 06 · Bola de partido</span>
        <div aria-hidden className="drift-slow" style={{ position: 'absolute', left: 'clamp(-220px, -10vw, -60px)', bottom: '-30%', width: 'clamp(300px, 38vw, 540px)', transform: 'rotate(180deg)', pointerEvents: 'none', opacity: 0.6 }}>
          <CourtSvg night />
        </div>
        <Reveal>
          <div style={{ position: 'relative', maxWidth: 900, margin: '0 auto' }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 22 }}>
              Bola de partido
            </p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontStretch: '122%', fontWeight: 800, fontSize: 'clamp(36px, 6.4vw, 84px)', lineHeight: 0.98, letterSpacing: '-0.03em', textTransform: 'uppercase', color: 'var(--text)', marginBottom: 26 }}>
              ¿Qué jugada te está llegando<span style={{ color: 'var(--accent)' }}>?</span>
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: 'clamp(15px, 1.8vw, 18px)', color: 'var(--text-muted)', lineHeight: 1.75, maxWidth: '48ch', marginBottom: 40 }}>
              20 minutos, gratis y sin compromiso. Me cuentas cómo trabajáis y te digo qué
              automatizaría primero. Si la IA no te va a ayudar, también te lo digo.
            </p>
            <div className="cta-buttons" style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              {ctaExternal
                ? <a className="btn-primary" href={ctaHref()} target="_blank" rel="noopener noreferrer">{CTA_LABEL}</a>
                : <Link className="btn-primary" href={ctaHref()}>{CTA_LABEL}</Link>}
              <a className="btn-ghost" style={{ borderColor: 'var(--text)', color: 'var(--text)' }} href="mailto:victor@norteia.es">victor@norteia.es</a>
            </div>
          </div>
        </Reveal>
      </section>

      <Footer />
    </div>
  )
}
