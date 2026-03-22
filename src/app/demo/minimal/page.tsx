'use client'

import Link from 'next/link'
import { Space_Grotesk } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

const COLORS = {
  bg: '#FFFFFF',
  text: '#111111',
  accent: '#F97316',
  muted: '#999999',
  border: '#E5E5E5',
  borderDark: '#111111',
}

const stats = [
  { value: '200+', label: 'Empresas formadas' },
  { value: '5 años', label: 'Especialista en IA' },
  { value: 'EU AI Act', label: 'Consultor certificado' },
  { value: '3.000+', label: 'Profesionales alcanzados' },
]

const topics = [
  'Estrategia de IA',
  'EU AI Act',
  'Automatización con n8n',
  'ChatGPT para empresas',
  'Agentes de IA',
  'Transformación digital',
  'Formación de equipos',
  'IA generativa',
  'Compliance IA',
  'Productividad con IA',
  'LLMs aplicados',
  'Casos de uso reales',
]

export default function MinimalDemo() {
  return (
    <div
      className={spaceGrotesk.className}
      style={{
        backgroundColor: COLORS.bg,
        color: COLORS.text,
        minHeight: '100vh',
        fontFamily: 'inherit',
      }}
    >
      {/* NAV */}
      <nav
        style={{
          borderBottom: `1px solid ${COLORS.borderDark}`,
          padding: '0 clamp(1.5rem, 5vw, 4rem)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '64px',
        }}
      >
        <span
          style={{
            fontSize: '1rem',
            fontWeight: '600',
            letterSpacing: '-0.02em',
            color: COLORS.text,
          }}
        >
          Víctor Mago
        </span>
        <div
          style={{
            display: 'flex',
            gap: '2rem',
            alignItems: 'center',
          }}
        >
          {['Sobre mí', 'Temas', 'Contacto'].map((link) => (
            <a
              key={link}
              href="#"
              style={{
                fontSize: '0.875rem',
                fontWeight: '400',
                color: COLORS.text,
                textDecoration: 'none',
                transition: 'color 0.15s',
              }}
              onMouseEnter={(e) => {
                ;(e.target as HTMLElement).style.color = COLORS.accent
              }}
              onMouseLeave={(e) => {
                ;(e.target as HTMLElement).style.color = COLORS.text
              }}
            >
              {link}
            </a>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section
        style={{
          padding: 'clamp(4rem, 10vw, 8rem) clamp(1.5rem, 5vw, 4rem)',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <div style={{ maxWidth: '780px' }}>
          <p
            style={{
              fontSize: '0.75rem',
              fontWeight: '500',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: COLORS.muted,
              marginBottom: '1.5rem',
            }}
          >
            Consultor · Formador · NorteIA
          </p>
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
              fontWeight: '700',
              lineHeight: '1.0',
              letterSpacing: '-0.04em',
              color: COLORS.text,
              marginBottom: '1.5rem',
            }}
          >
            La IA no te va a quitar el trabajo.
          </h1>
          <p
            style={{
              fontSize: 'clamp(1.25rem, 3vw, 2rem)',
              fontWeight: '300',
              letterSpacing: '-0.02em',
              color: COLORS.muted,
              marginBottom: '2rem',
              lineHeight: '1.3',
            }}
          >
            Si aprendes a gobernarla.
          </p>
          <p
            style={{
              fontSize: '1rem',
              fontWeight: '400',
              color: COLORS.text,
              lineHeight: '1.6',
              marginBottom: '3rem',
              maxWidth: '520px',
            }}
          >
            Consultor y formador de IA. Especialista en EU AI Act. Co-fundador de NorteIA.
          </p>
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
            }}
          >
            <a
              href="#"
              style={{
                display: 'inline-block',
                backgroundColor: COLORS.accent,
                color: '#FFFFFF',
                padding: '0.875rem 2rem',
                fontSize: '0.9375rem',
                fontWeight: '600',
                letterSpacing: '-0.01em',
                textDecoration: 'none',
                transition: 'opacity 0.15s',
              }}
              onMouseEnter={(e) => {
                ;(e.target as HTMLElement).style.opacity = '0.85'
              }}
              onMouseLeave={(e) => {
                ;(e.target as HTMLElement).style.opacity = '1'
              }}
            >
              Únete al webinar gratuito
            </a>
            <Link
              href="https://norteai.es"
              target="_blank"
              style={{
                display: 'inline-block',
                backgroundColor: 'transparent',
                color: COLORS.text,
                border: `1px solid ${COLORS.borderDark}`,
                padding: '0.875rem 2rem',
                fontSize: '0.9375rem',
                fontWeight: '500',
                letterSpacing: '-0.01em',
                textDecoration: 'none',
                transition: 'all 0.15s',
              }}
              onMouseEnter={(e) => {
                const el = e.target as HTMLElement
                el.style.backgroundColor = COLORS.text
                el.style.color = COLORS.bg
              }}
              onMouseLeave={(e) => {
                const el = e.target as HTMLElement
                el.style.backgroundColor = 'transparent'
                el.style.color = COLORS.text
              }}
            >
              Ver NorteIA →
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section
        style={{
          borderTop: `1px solid ${COLORS.border}`,
          borderBottom: `1px solid ${COLORS.border}`,
          padding: '0 clamp(1.5rem, 5vw, 4rem)',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.value}
              style={{
                padding: '2.5rem 0',
                borderRight: i < stats.length - 1 ? `1px solid ${COLORS.border}` : 'none',
                paddingLeft: i > 0 ? '2rem' : '0',
                paddingRight: i < stats.length - 1 ? '2rem' : '0',
              }}
            >
              <div
                style={{
                  fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
                  fontWeight: '700',
                  letterSpacing: '-0.04em',
                  color: COLORS.text,
                  lineHeight: '1',
                  marginBottom: '0.5rem',
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: '0.8125rem',
                  fontWeight: '400',
                  color: COLORS.muted,
                  letterSpacing: '0.01em',
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SOBRE */}
      <section
        style={{
          padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 4rem)',
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div style={{ maxWidth: '600px', width: '100%' }}>
          <p
            style={{
              fontSize: '0.75rem',
              fontWeight: '500',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: COLORS.muted,
              marginBottom: '2rem',
            }}
          >
            Sobre mí
          </p>
          <p
            style={{
              fontSize: '1.125rem',
              fontWeight: '400',
              lineHeight: '1.75',
              color: COLORS.text,
              marginBottom: '1.5rem',
            }}
          >
            Llevo años ayudando a empresas a entender la inteligencia artificial sin humo. No hablo
            de ciencia ficción. Hablo de herramientas concretas, procesos reales y resultados
            medibles.
          </p>
          <p
            style={{
              fontSize: '1.125rem',
              fontWeight: '400',
              lineHeight: '1.75',
              color: COLORS.text,
              marginBottom: '1.5rem',
            }}
          >
            Soy co-fundador de NorteIA, consultora de IA con sede en A Coruña. Trabajo con pymes,
            startups y corporaciones que quieren adaptarse a la nueva realidad regulatoria y
            operativa de la IA en Europa.
          </p>
          <p
            style={{
              fontSize: '1.125rem',
              fontWeight: '400',
              lineHeight: '1.75',
              color: COLORS.text,
            }}
          >
            Mi especialidad: el EU AI Act. El marco legal que va a cambiar cómo las empresas
            europeas desarrollan, despliegan y usan la IA.
          </p>
        </div>
      </section>

      {/* TEMAS */}
      <section
        style={{
          padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 5vw, 4rem)',
          borderTop: `1px solid ${COLORS.border}`,
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <p
          style={{
            fontSize: '0.75rem',
            fontWeight: '500',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: COLORS.muted,
            marginBottom: '2.5rem',
          }}
        >
          Áreas de especialización
        </p>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.625rem',
          }}
        >
          {topics.map((topic) => (
            <span
              key={topic}
              style={{
                display: 'inline-block',
                border: `1px solid ${COLORS.borderDark}`,
                padding: '0.5rem 1.125rem',
                fontSize: '0.875rem',
                fontWeight: '400',
                color: COLORS.text,
                cursor: 'default',
                transition: 'all 0.15s',
                userSelect: 'none',
              }}
              onMouseEnter={(e) => {
                const el = e.target as HTMLElement
                el.style.backgroundColor = COLORS.accent
                el.style.borderColor = COLORS.accent
                el.style.color = '#FFFFFF'
              }}
              onMouseLeave={(e) => {
                const el = e.target as HTMLElement
                el.style.backgroundColor = 'transparent'
                el.style.borderColor = COLORS.borderDark
                el.style.color = COLORS.text
              }}
            >
              {topic}
            </span>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section
        style={{
          backgroundColor: COLORS.text,
          padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 5vw, 4rem)',
          margin: 'clamp(3rem, 6vw, 5rem) 0 0',
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
          <div>
            <h2
              style={{
                fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                fontWeight: '700',
                letterSpacing: '-0.03em',
                color: '#FFFFFF',
                marginBottom: '0.75rem',
                lineHeight: '1.1',
              }}
            >
              ¿Listo para gobernar la IA?
            </h2>
            <p
              style={{
                fontSize: '1rem',
                fontWeight: '400',
                color: '#999999',
                maxWidth: '480px',
                lineHeight: '1.6',
              }}
            >
              Únete al próximo webinar gratuito y aprende cómo aplicar la IA en tu empresa de forma
              práctica, segura y conforme al EU AI Act.
            </p>
          </div>
          <a
            href="#"
            style={{
              display: 'inline-block',
              backgroundColor: COLORS.accent,
              color: '#FFFFFF',
              padding: '1rem 2.25rem',
              fontSize: '0.9375rem',
              fontWeight: '600',
              letterSpacing: '-0.01em',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              transition: 'opacity 0.15s',
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              ;(e.target as HTMLElement).style.opacity = '0.85'
            }}
            onMouseLeave={(e) => {
              ;(e.target as HTMLElement).style.opacity = '1'
            }}
          >
            Únete al webinar gratuito
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          borderTop: `1px solid ${COLORS.border}`,
          padding: '1.5rem clamp(1.5rem, 5vw, 4rem)',
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
        }}
      >
        <span
          style={{
            fontSize: '0.8125rem',
            color: COLORS.muted,
            fontWeight: '400',
          }}
        >
          © 2026 Víctor Mago · NorteIA
        </span>
        <div
          style={{
            display: 'flex',
            gap: '1.5rem',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          {[
            { label: 'LinkedIn', href: '#' },
            { label: 'NorteIA', href: 'https://norteai.es' },
            { label: 'Contacto', href: '#' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontSize: '0.8125rem',
                color: COLORS.muted,
                textDecoration: 'none',
                transition: 'color 0.15s',
              }}
              onMouseEnter={(e) => {
                ;(e.target as HTMLElement).style.color = COLORS.text
              }}
              onMouseLeave={(e) => {
                ;(e.target as HTMLElement).style.color = COLORS.muted
              }}
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/demo"
            style={{
              fontSize: '0.8125rem',
              color: COLORS.muted,
              textDecoration: 'none',
              transition: 'color 0.15s',
            }}
            onMouseEnter={(e) => {
              ;(e.target as HTMLElement).style.color = COLORS.text
            }}
            onMouseLeave={(e) => {
              ;(e.target as HTMLElement).style.color = COLORS.muted
            }}
          >
            ← Volver a demos
          </Link>
        </div>
      </footer>
    </div>
  )
}
