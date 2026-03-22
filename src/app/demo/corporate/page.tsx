'use client'

import Link from 'next/link'
import { Plus_Jakarta_Sans } from 'next/font/google'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})

const C = {
  navy: '#0F172A',
  navyLight: '#1E293B',
  white: '#FFFFFF',
  accent: '#F97316',
  mutedNavy: '#94A3B8',
  mutedWhite: '#64748B',
}

const stats = [
  { value: '200+', label: 'Empresas formadas' },
  { value: '5 años', label: 'Especialista en IA' },
  { value: 'EU AI Act', label: 'Consultor certificado' },
  { value: '3.000+', label: 'Profesionales alcanzados' },
]

const topics = [
  {
    title: 'Estrategia de IA',
    desc: 'Hoja de ruta para integrar IA en procesos clave del negocio con criterio y sin humo.',
  },
  {
    title: 'EU AI Act',
    desc: 'Cumplimiento normativo europeo en IA. Auditorías, clasificación de riesgo y planes de acción.',
  },
  {
    title: 'Automatización con n8n',
    desc: 'Workflows sin código para equipos no técnicos. Conecta herramientas y elimina trabajo manual.',
  },
  {
    title: 'Formación de equipos',
    desc: 'Programas de upskilling para que tu equipo gobierne la IA antes de que la IA los gobierne a ellos.',
  },
  {
    title: 'Agentes de IA',
    desc: 'Diseño e implementación de agentes autónomos para ventas, operaciones y atención al cliente.',
  },
  {
    title: 'IA generativa aplicada',
    desc: 'De ChatGPT a flujos de trabajo reales. Casos de uso verificados con ROI medible.',
  },
]

export default function CorporateDemo() {
  return (
    <div
      className={jakarta.className}
      style={{
        backgroundColor: C.white,
        color: C.navy,
        minHeight: '100vh',
        overflowX: 'hidden',
      }}
    >
      {/* ── NAV ── */}
      <nav
        style={{
          backgroundColor: C.navy,
          padding: '0 clamp(1.5rem, 6vw, 5rem)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '72px',
          position: 'sticky',
          top: 0,
          zIndex: 50,
          borderBottom: `1px solid ${C.navyLight}`,
        }}
      >
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div
            style={{
              width: '40px',
              height: '40px',
              backgroundColor: C.accent,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              fontSize: '1rem',
              color: C.white,
              letterSpacing: '-0.03em',
              flexShrink: 0,
            }}
          >
            VM
          </div>
          <span
            style={{
              color: C.white,
              fontWeight: 700,
              fontSize: '1rem',
              letterSpacing: '-0.02em',
            }}
          >
            Víctor Mago
          </span>
        </div>

        {/* Links */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'clamp(1rem, 3vw, 2.5rem)',
          }}
        >
          {['Sobre mí', 'Temas', 'NorteIA'].map((link) => (
            <a
              key={link}
              href="#"
              style={{
                color: C.white,
                fontWeight: 500,
                fontSize: '0.875rem',
                textDecoration: 'none',
                letterSpacing: '0.01em',
                opacity: 0.85,
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget
                el.style.opacity = '1'
                el.style.textDecoration = `underline`
                el.style.textDecorationColor = C.accent
                el.style.textUnderlineOffset = '4px'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.opacity = '0.85'
                el.style.textDecoration = 'none'
              }}
            >
              {link}
            </a>
          ))}
          <a
            href="#webinar"
            style={{
              backgroundColor: C.accent,
              color: C.white,
              fontWeight: 700,
              fontSize: '0.875rem',
              padding: '0.5rem 1.25rem',
              textDecoration: 'none',
              letterSpacing: '0.01em',
              transition: 'opacity 0.15s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Webinar gratuito
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section
        style={{
          backgroundColor: C.navy,
          padding: 'clamp(5rem, 12vw, 9rem) clamp(1.5rem, 6vw, 5rem)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Diagonal accent stripe */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: 'clamp(200px, 35vw, 520px)',
            height: '100%',
            background: `linear-gradient(135deg, transparent 40%, ${C.navyLight} 40%)`,
            pointerEvents: 'none',
          }}
        />
        {/* Orange accent bar */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: 'clamp(80px, 15vw, 200px)',
            height: '6px',
            backgroundColor: C.accent,
          }}
        />

        <div
          style={{
            maxWidth: '900px',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Eyebrow */}
          <p
            style={{
              color: C.accent,
              fontWeight: 700,
              fontSize: 'clamp(0.75rem, 1.2vw, 0.875rem)',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '1.5rem',
            }}
          >
            Consultor de IA · Formador · Cofundador
          </p>

          {/* H1 */}
          <h1
            style={{
              color: C.white,
              fontWeight: 800,
              fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              marginBottom: '1.5rem',
              maxWidth: '800px',
            }}
          >
            La IA no te va a quitar el trabajo.
          </h1>

          {/* Sub */}
          <p
            style={{
              color: C.accent,
              fontWeight: 700,
              fontSize: 'clamp(1.25rem, 3.5vw, 2.25rem)',
              letterSpacing: '-0.02em',
              marginBottom: '1.75rem',
              lineHeight: 1.2,
            }}
          >
            Si aprendes a gobernarla.
          </p>

          {/* Description */}
          <p
            style={{
              color: C.mutedNavy,
              fontWeight: 400,
              fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
              lineHeight: 1.7,
              maxWidth: '580px',
              marginBottom: '2.75rem',
            }}
          >
            Consultor y formador de IA. Especialista en EU AI Act.
            Co-fundador de NorteIA.
          </p>

          {/* CTAs */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              alignItems: 'center',
            }}
          >
            <a
              id="webinar"
              href="#"
              style={{
                backgroundColor: C.accent,
                color: C.white,
                fontWeight: 700,
                fontSize: '1rem',
                padding: '0.9rem 2rem',
                textDecoration: 'none',
                letterSpacing: '0.01em',
                display: 'inline-block',
                transition: 'opacity 0.15s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              Únete al webinar gratuito
            </a>
            <a
              href="https://norteai.es"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: C.white,
                fontWeight: 600,
                fontSize: '1rem',
                textDecoration: 'none',
                letterSpacing: '0.01em',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                opacity: 0.85,
                transition: 'opacity 0.15s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '1'
                e.currentTarget.style.textDecoration = 'underline'
                e.currentTarget.style.textDecorationColor = C.accent
                e.currentTarget.style.textUnderlineOffset = '4px'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '0.85'
                e.currentTarget.style.textDecoration = 'none'
              }}
            >
              Ver NorteIA →
            </a>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section
        style={{
          backgroundColor: C.white,
          padding: 'clamp(4rem, 8vw, 6rem) clamp(1.5rem, 6vw, 5rem)',
          borderBottom: `4px solid ${C.navy}`,
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
          }}
        >
          {stats.map((s) => (
            <div
              key={s.label}
              style={{
                borderLeft: `4px solid ${C.accent}`,
                paddingLeft: '1.5rem',
              }}
            >
              <p
                style={{
                  color: C.navy,
                  fontWeight: 800,
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  lineHeight: 1,
                  letterSpacing: '-0.03em',
                  marginBottom: '0.5rem',
                }}
              >
                {s.value}
              </p>
              <p
                style={{
                  color: C.mutedWhite,
                  fontWeight: 500,
                  fontSize: '0.9rem',
                  letterSpacing: '0.02em',
                  textTransform: 'uppercase',
                }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SOBRE ── */}
      <section
        style={{
          backgroundColor: C.white,
          padding: 'clamp(4rem, 9vw, 7rem) clamp(1.5rem, 6vw, 5rem)',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(2.5rem, 6vw, 5rem)',
            alignItems: 'center',
          }}
        >
          {/* Left — Text */}
          <div>
            <p
              style={{
                color: C.accent,
                fontWeight: 700,
                fontSize: '0.8rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginBottom: '1rem',
              }}
            >
              Sobre mí
            </p>
            <h2
              style={{
                color: C.navy,
                fontWeight: 800,
                fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                marginBottom: '1.5rem',
              }}
            >
              Hablo de IA con empresas que no quieren humo.
            </h2>
            <p
              style={{
                color: C.mutedWhite,
                fontWeight: 400,
                fontSize: '1.05rem',
                lineHeight: 1.75,
                marginBottom: '1.25rem',
              }}
            >
              Soy Víctor Mago, consultor y formador especializado en IA aplicada
              a negocios. Cofundador de NorteIA, desde donde ayudamos a empresas
              a entender, implementar y gobernar la inteligencia artificial con
              criterio real.
            </p>
            <p
              style={{
                color: C.mutedWhite,
                fontWeight: 400,
                fontSize: '1.05rem',
                lineHeight: 1.75,
                marginBottom: '2rem',
              }}
            >
              Especialista en EU AI Act y en automatización con herramientas como
              n8n y Claude. Mi enfoque es práctico: menos teoría, más resultados
              medibles en el negocio.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {['EU AI Act', 'NorteIA', 'n8n', 'Claude', 'Formación corporativa'].map((tag) => (
                <span
                  key={tag}
                  style={{
                    backgroundColor: C.navy,
                    color: C.white,
                    fontWeight: 600,
                    fontSize: '0.8rem',
                    padding: '0.35rem 0.9rem',
                    letterSpacing: '0.03em',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right — Photo placeholder */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                width: '100%',
                maxWidth: '420px',
                aspectRatio: '4/5',
                backgroundColor: C.navyLight,
                border: `4px solid ${C.accent}`,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1rem',
                position: 'relative',
              }}
            >
              {/* Decorative corner */}
              <div
                aria-hidden
                style={{
                  position: 'absolute',
                  top: '-12px',
                  right: '-12px',
                  width: '48px',
                  height: '48px',
                  backgroundColor: C.accent,
                }}
              />
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  backgroundColor: C.accent,
                  opacity: 0.25,
                  borderRadius: '50%',
                }}
              />
              <p
                style={{
                  color: C.mutedNavy,
                  fontWeight: 500,
                  fontSize: '0.875rem',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                }}
              >
                Foto — Víctor Mago
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TEMAS ── */}
      <section
        style={{
          backgroundColor: C.navy,
          padding: 'clamp(4rem, 9vw, 7rem) clamp(1.5rem, 6vw, 5rem)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Header */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              gap: '1.5rem',
              marginBottom: 'clamp(2.5rem, 5vw, 4rem)',
            }}
          >
            <div>
              <p
                style={{
                  color: C.accent,
                  fontWeight: 700,
                  fontSize: '0.8rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  marginBottom: '0.75rem',
                }}
              >
                Especialidades
              </p>
              <h2
                style={{
                  color: C.white,
                  fontWeight: 800,
                  fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                  lineHeight: 1.1,
                  letterSpacing: '-0.03em',
                }}
              >
                En qué puedo ayudarte
              </h2>
            </div>
            <div
              style={{
                width: 'clamp(60px, 10vw, 120px)',
                height: '4px',
                backgroundColor: C.accent,
                flexShrink: 0,
              }}
            />
          </div>

          {/* Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {topics.map((t) => (
              <TopicCard key={t.title} title={t.title} desc={t.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section
        style={{
          backgroundColor: C.accent,
          padding: 'clamp(3.5rem, 8vw, 6rem) clamp(1.5rem, 6vw, 5rem)',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
          }}
        >
          <div style={{ flex: '1 1 400px' }}>
            <p
              style={{
                color: C.navy,
                fontWeight: 700,
                fontSize: '0.8rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginBottom: '0.75rem',
                opacity: 0.7,
              }}
            >
              Próxima sesión — Plaza limitadas
            </p>
            <h2
              style={{
                color: C.navy,
                fontWeight: 800,
                fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                marginBottom: '1rem',
              }}
            >
              Webinar gratuito: IA para tu empresa en 2026
            </h2>
            <p
              style={{
                color: C.navy,
                fontWeight: 400,
                fontSize: '1.05rem',
                lineHeight: 1.65,
                opacity: 0.8,
                maxWidth: '520px',
              }}
            >
              Aprende a implementar IA sin inversión inicial, evitar los errores
              más caros y cumplir con el EU AI Act. 60 minutos, sin teoría vacía.
            </p>
          </div>

          <div style={{ flexShrink: 0 }}>
            <a
              href="#"
              style={{
                backgroundColor: C.navy,
                color: C.white,
                fontWeight: 700,
                fontSize: '1rem',
                padding: '1rem 2.25rem',
                textDecoration: 'none',
                letterSpacing: '0.01em',
                display: 'inline-block',
                transition: 'opacity 0.15s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              Únete al webinar gratuito
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        style={{
          backgroundColor: '#080E1A',
          padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 6vw, 5rem)',
          borderTop: `4px solid ${C.navyLight}`,
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            gap: '3rem',
            marginBottom: '2.5rem',
          }}
        >
          {/* Brand */}
          <div style={{ flex: '1 1 260px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '1.25rem',
              }}
            >
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: C.accent,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '1rem',
                  color: C.white,
                  letterSpacing: '-0.03em',
                  flexShrink: 0,
                }}
              >
                VM
              </div>
              <span
                style={{
                  color: C.white,
                  fontWeight: 700,
                  fontSize: '1rem',
                  letterSpacing: '-0.02em',
                }}
              >
                Víctor Mago
              </span>
            </div>
            <p
              style={{
                color: C.mutedNavy,
                fontWeight: 400,
                fontSize: '0.9rem',
                lineHeight: 1.65,
                maxWidth: '280px',
              }}
            >
              Consultor y formador de IA. Especialista en EU AI Act.
              Co-fundador de NorteIA.
            </p>
          </div>

          {/* Links */}
          <div>
            <p
              style={{
                color: C.white,
                fontWeight: 700,
                fontSize: '0.8rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '1rem',
              }}
            >
              Navegación
            </p>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.6rem',
              }}
            >
              {['Sobre mí', 'Temas', 'Webinar', 'NorteIA'].map((link) => (
                <a
                  key={link}
                  href="#"
                  style={{
                    color: C.mutedNavy,
                    fontWeight: 400,
                    fontSize: '0.9rem',
                    textDecoration: 'none',
                    transition: 'color 0.15s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = C.white
                    e.currentTarget.style.textDecoration = 'underline'
                    e.currentTarget.style.textDecorationColor = C.accent
                    e.currentTarget.style.textUnderlineOffset = '4px'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = C.mutedNavy
                    e.currentTarget.style.textDecoration = 'none'
                  }}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p
              style={{
                color: C.white,
                fontWeight: 700,
                fontSize: '0.8rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '1rem',
              }}
            >
              Contacto
            </p>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.6rem',
              }}
            >
              {['LinkedIn', 'hola@victormago.es', 'NorteIA.es'].map((item) => (
                <a
                  key={item}
                  href="#"
                  style={{
                    color: C.mutedNavy,
                    fontWeight: 400,
                    fontSize: '0.9rem',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = C.white
                    e.currentTarget.style.textDecoration = 'underline'
                    e.currentTarget.style.textDecorationColor = C.accent
                    e.currentTarget.style.textUnderlineOffset = '4px'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = C.mutedNavy
                    e.currentTarget.style.textDecoration = 'none'
                  }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: `1px solid ${C.navyLight}`,
            paddingTop: '1.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <p
            style={{
              color: C.mutedNavy,
              fontWeight: 400,
              fontSize: '0.825rem',
            }}
          >
            © 2026 Víctor Mago · Todos los derechos reservados
          </p>
          <Link
            href="/demo"
            style={{
              color: C.mutedNavy,
              fontWeight: 500,
              fontSize: '0.825rem',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = C.white
              e.currentTarget.style.textDecoration = 'underline'
              e.currentTarget.style.textDecorationColor = C.accent
              e.currentTarget.style.textUnderlineOffset = '4px'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = C.mutedNavy
              e.currentTarget.style.textDecoration = 'none'
            }}
          >
            ← Volver a demos
          </Link>
        </div>
      </footer>
    </div>
  )
}

/* ── Topic Card — isolated to handle hover state ── */
function TopicCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div
      style={{
        backgroundColor: C.white,
        padding: '2rem',
        borderTop: `4px solid transparent`,
        cursor: 'default',
        transition: 'border-color 0.2s',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement
        el.style.borderTopColor = C.accent
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement
        el.style.borderTopColor = 'transparent'
      }}
    >
      <h3
        style={{
          color: C.navy,
          fontWeight: 700,
          fontSize: '1.1rem',
          letterSpacing: '-0.02em',
          marginBottom: '0.75rem',
        }}
      >
        {title}
      </h3>
      <p
        style={{
          color: C.mutedWhite,
          fontWeight: 400,
          fontSize: '0.9rem',
          lineHeight: 1.7,
        }}
      >
        {desc}
      </p>
    </div>
  )
}
