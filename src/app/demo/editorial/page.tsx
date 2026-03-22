'use client'

import Link from 'next/link'
import { Playfair_Display, Source_Serif_4, Space_Grotesk } from 'next/font/google'
import { useEffect, useRef } from 'react'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
})

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  variable: '--font-source-serif',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk',
})

// Paleta
const C = {
  bg: '#FAFAF5',
  text: '#111111',
  accent: '#F97316',
  muted: '#6B6B6B',
  border: '#DDDDD8',
  dark: '#111111',
  darkText: '#F5F5F0',
  darkMuted: '#888884',
}

export default function EditorialPage() {
  const revealRefs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            el.style.opacity = '1'
            el.style.transform = 'translateY(0)'
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.12 }
    )

    revealRefs.current.forEach((el) => {
      if (el) {
        el.style.opacity = '0'
        el.style.transform = 'translateY(28px)'
        el.style.transition = 'opacity 0.7s ease, transform 0.7s ease'
        observer.observe(el)
      }
    })

    return () => observer.disconnect()
  }, [])

  const addRef = (el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el)
    }
  }

  return (
    <div
      className={`${playfair.variable} ${sourceSerif.variable} ${spaceGrotesk.variable}`}
      style={{ backgroundColor: C.bg, color: C.text, minHeight: '100vh' }}
    >
      {/* ── NAV ── */}
      <nav
        style={{
          backgroundColor: C.bg,
          borderBottom: `1px solid ${C.border}`,
          position: 'sticky',
          top: 0,
          zIndex: 50,
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 24px',
            height: '64px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <div
            style={{
              fontFamily: 'var(--font-playfair)',
              fontWeight: 700,
              fontSize: '22px',
              letterSpacing: '-0.5px',
              color: C.text,
            }}
          >
            VM
          </div>

          {/* Links */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '32px',
            }}
          >
            <nav
              style={{
                display: 'flex',
                gap: '28px',
              }}
            >
              {['Sobre', 'Webinar', 'Contacto'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  style={{
                    fontFamily: 'var(--font-space-grotesk)',
                    fontSize: '13px',
                    fontWeight: 500,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: C.muted,
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = C.text)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = C.muted)}
                >
                  {item}
                </a>
              ))}
            </nav>
            <a
              href="#webinar"
              style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: C.bg,
                backgroundColor: C.accent,
                padding: '8px 18px',
                textDecoration: 'none',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              Webinar
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '80px 24px 64px',
          borderBottom: `1px solid ${C.border}`,
        }}
      >
        {/* Issue label */}
        <div
          ref={addRef}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '48px',
          }}
        >
          <div
            style={{
              width: '32px',
              height: '1px',
              backgroundColor: C.accent,
            }}
          />
          <span
            style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: C.muted,
            }}
          >
            Víctor Mago — Consultor IA
          </span>
        </div>

        {/* Main layout: number + headline */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '40px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0',
            }}
          >
            {/* Big number */}
            <div
              ref={addRef}
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(96px, 18vw, 200px)',
                fontWeight: 900,
                color: C.accent,
                lineHeight: 1,
                marginBottom: '-16px',
                letterSpacing: '-4px',
                userSelect: 'none',
              }}
            >
              01
            </div>

            {/* H1 */}
            <h1
              ref={addRef}
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(40px, 7vw, 88px)',
                fontWeight: 800,
                lineHeight: 1.0,
                letterSpacing: '-2px',
                color: C.text,
                margin: '0 0 24px 0',
                maxWidth: '900px',
              }}
            >
              "La IA no te va a
              <br />
              <span style={{ fontStyle: 'italic', fontWeight: 400 }}>
                quitar el trabajo."
              </span>
            </h1>

            {/* Divider line */}
            <div
              style={{
                width: '100%',
                height: '1px',
                backgroundColor: C.border,
                marginBottom: '24px',
              }}
            />

            {/* Sub + desc row */}
            <div
              ref={addRef}
              className="sub-row"
              style={{
                display: 'grid',
                gridTemplateColumns: 'auto 1fr',
                gap: '40px',
                alignItems: 'start',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: 'clamp(22px, 3.5vw, 40px)',
                  fontWeight: 500,
                  color: C.text,
                  lineHeight: 1.2,
                  whiteSpace: 'nowrap',
                }}
              >
                Si aprendes a
                <br />
                gobernarla.
              </div>

              <div
                style={{
                  borderLeft: `1px solid ${C.border}`,
                  paddingLeft: '40px',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-source-serif)',
                    fontSize: '18px',
                    lineHeight: 1.7,
                    color: C.muted,
                    margin: '0 0 28px 0',
                    maxWidth: '480px',
                  }}
                >
                  Consultor y formador de IA. Especialista en EU AI Act.
                  Co-fundador de NorteIA.
                </p>

                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                  <a
                    href="#webinar"
                    style={{
                      fontFamily: 'var(--font-space-grotesk)',
                      fontSize: '14px',
                      fontWeight: 600,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      color: C.bg,
                      backgroundColor: C.text,
                      padding: '14px 28px',
                      textDecoration: 'none',
                      transition: 'background-color 0.2s',
                      display: 'inline-block',
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = C.accent)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = C.text)
                    }
                  >
                    Únete al webinar gratuito
                  </a>
                  <a
                    href="https://norteai.es"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: 'var(--font-space-grotesk)',
                      fontSize: '14px',
                      fontWeight: 500,
                      color: C.text,
                      textDecoration: 'none',
                      padding: '14px 0',
                      borderBottom: `1px solid ${C.text}`,
                      display: 'inline-block',
                      transition: 'color 0.2s, border-color 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = C.accent
                      e.currentTarget.style.borderColor = C.accent
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = C.text
                      e.currentTarget.style.borderColor = C.text
                    }}
                  >
                    Ver NorteIA →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '64px 24px',
          borderBottom: `1px solid ${C.border}`,
        }}
      >
        <div
          ref={addRef}
          className="stats-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '0',
          }}
        >
          {[
            { num: '+200', label: 'Profesionales formados en IA' },
            { num: '3 años', label: 'Trabajando con IA aplicada' },
            { num: 'EU AI Act', label: 'Especialista certificado' },
            { num: 'NorteIA', label: 'Co-fundador activo' },
          ].map((stat, i) => (
            <div
              key={i}
              style={{
                borderLeft: i > 0 ? `1px solid ${C.border}` : 'none',
                padding: i > 0 ? '0 0 0 40px' : '0 40px 0 0',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: 'clamp(28px, 4vw, 52px)',
                  fontWeight: 800,
                  color: C.text,
                  lineHeight: 1,
                  marginBottom: '8px',
                  letterSpacing: '-1px',
                }}
              >
                {stat.num}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-space-grotesk)',
                  fontSize: '12px',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: C.muted,
                  lineHeight: 1.4,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SOBRE ── */}
      <section
        id="sobre"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '80px 24px',
          borderBottom: `1px solid ${C.border}`,
        }}
      >
        {/* Section header */}
        <div
          ref={addRef}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '56px',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: C.muted,
            }}
          >
            Sobre
          </span>
          <div
            style={{
              flex: 1,
              height: '1px',
              backgroundColor: C.border,
            }}
          />
          <span
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: '13px',
              fontStyle: 'italic',
              color: C.muted,
            }}
          >
            02
          </span>
        </div>

        {/* Two-column article layout */}
        <div
          className="two-col"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '64px',
            alignItems: 'start',
          }}
        >
          {/* Left column */}
          <div>
            <h2
              ref={addRef}
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(28px, 3.5vw, 44px)',
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: '-1px',
                color: C.text,
                margin: '0 0 32px 0',
              }}
            >
              Ayudo a empresas a adoptar la IA
              <span style={{ fontStyle: 'italic', fontWeight: 400 }}>
                {' '}sin perder el control.
              </span>
            </h2>

            <p
              ref={addRef}
              style={{
                fontFamily: 'var(--font-source-serif)',
                fontSize: '17px',
                lineHeight: 1.75,
                color: C.muted,
                margin: '0 0 20px 0',
              }}
            >
              Con más de tres años trabajando en proyectos de IA aplicada a
              negocios reales, he formado a más de 200 profesionales en España
              y Latinoamérica sobre cómo integrar herramientas de inteligencia
              artificial de forma práctica y responsable.
            </p>

            <p
              ref={addRef}
              style={{
                fontFamily: 'var(--font-source-serif)',
                fontSize: '17px',
                lineHeight: 1.75,
                color: C.muted,
                margin: '0',
              }}
            >
              Soy co-fundador de NorteIA, una consultora especializada en
              transformación digital con IA. Mi enfoque combina la formación
              práctica con la compliance del{' '}
              <strong style={{ color: C.text, fontWeight: 600 }}>
                EU AI Act
              </strong>
              , para que las empresas puedan avanzar con seguridad jurídica.
            </p>
          </div>

          {/* Right column: pull quote + extra copy */}
          <div>
            {/* Pull quote */}
            <blockquote
              ref={addRef}
              style={{
                borderLeft: `3px solid ${C.accent}`,
                paddingLeft: '28px',
                margin: '0 0 40px 0',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: 'clamp(20px, 2.5vw, 28px)',
                  fontWeight: 400,
                  fontStyle: 'italic',
                  lineHeight: 1.4,
                  color: C.text,
                  margin: '0 0 12px 0',
                }}
              >
                "La diferencia no está en tener acceso a la IA. Está en saber
                qué preguntarle."
              </p>
              <cite
                style={{
                  fontFamily: 'var(--font-space-grotesk)',
                  fontSize: '12px',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: C.accent,
                  fontStyle: 'normal',
                }}
              >
                — Víctor Mago
              </cite>
            </blockquote>

            <div
              style={{
                borderTop: `1px solid ${C.border}`,
                paddingTop: '32px',
              }}
            >
              {[
                'Consultor IA para pymes y corporaciones',
                'Formador certificado EU AI Act',
                'Co-fundador de NorteIA (A Coruña)',
                'Speaker en eventos de transformación digital',
              ].map((item, i) => (
                <div
                  key={i}
                  ref={addRef}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    padding: '14px 0',
                    borderBottom: `1px solid ${C.border}`,
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-playfair)',
                      fontSize: '13px',
                      fontStyle: 'italic',
                      color: C.accent,
                      minWidth: '20px',
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-source-serif)',
                      fontSize: '15px',
                      color: C.text,
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TEMAS ── */}
      <section
        id="webinar"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '80px 24px',
          borderBottom: `1px solid ${C.border}`,
        }}
      >
        {/* Section header */}
        <div
          ref={addRef}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '56px',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: C.muted,
            }}
          >
            Temas
          </span>
          <div
            style={{
              flex: 1,
              height: '1px',
              backgroundColor: C.border,
            }}
          />
          <span
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: '13px',
              fontStyle: 'italic',
              color: C.muted,
            }}
          >
            03
          </span>
        </div>

        <div
          className="two-col"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '64px',
            alignItems: 'start',
          }}
        >
          {/* Index list */}
          <div>
            <p
              ref={addRef}
              style={{
                fontFamily: 'var(--font-source-serif)',
                fontSize: '18px',
                lineHeight: 1.7,
                color: C.muted,
                margin: '0 0 40px 0',
              }}
            >
              Formo y asesoro sobre estos ejes temáticos, adaptados siempre al
              sector y madurez digital de cada organización.
            </p>

            <div>
              {[
                { num: 'I', title: 'IA Generativa aplicada al negocio' },
                { num: 'II', title: 'Automatización de procesos con IA' },
                { num: 'III', title: 'EU AI Act — Cumplimiento y estrategia' },
                { num: 'IV', title: 'Gestión del cambio organizacional' },
                { num: 'V', title: 'Prompting avanzado para equipos' },
                { num: 'VI', title: 'Agentes IA y flujos autónomos' },
              ].map((item, i) => (
                <div
                  key={i}
                  ref={addRef}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '48px 1fr auto',
                    alignItems: 'center',
                    gap: '16px',
                    padding: '20px 0',
                    borderBottom: `1px solid ${C.border}`,
                    cursor: 'default',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-playfair)',
                      fontSize: '13px',
                      fontStyle: 'italic',
                      fontWeight: 400,
                      color: C.accent,
                    }}
                  >
                    {item.num}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-playfair)',
                      fontSize: '17px',
                      fontWeight: 600,
                      color: C.text,
                      letterSpacing: '-0.3px',
                    }}
                  >
                    {item.title}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-space-grotesk)',
                      fontSize: '18px',
                      color: C.border,
                    }}
                  >
                    →
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: webinar promo */}
          <div
            ref={addRef}
            style={{
              backgroundColor: '#F5F5F0',
              padding: '48px',
              border: `1px solid ${C.border}`,
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: C.accent,
                marginBottom: '20px',
              }}
            >
              Próximo evento
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: '28px',
                fontWeight: 700,
                lineHeight: 1.2,
                letterSpacing: '-0.5px',
                color: C.text,
                margin: '0 0 16px 0',
              }}
            >
              Webinar gratuito: IA y EU AI Act en 2025
            </h3>

            <div
              style={{
                width: '40px',
                height: '2px',
                backgroundColor: C.accent,
                margin: '0 0 24px 0',
              }}
            />

            <p
              style={{
                fontFamily: 'var(--font-source-serif)',
                fontSize: '16px',
                lineHeight: 1.7,
                color: C.muted,
                margin: '0 0 32px 0',
              }}
            >
              Una sesión práctica para entender qué cambia con el EU AI Act y
              cómo adaptar tu empresa sin parar la innovación.
            </p>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                marginBottom: '32px',
              }}
            >
              {[
                '60 minutos con casos reales',
                'Sesión de Q&A incluida',
                'Completamente gratuito',
                'Plazas limitadas',
              ].map((point, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                  }}
                >
                  <div
                    style={{
                      width: '4px',
                      height: '4px',
                      borderRadius: '50%',
                      backgroundColor: C.accent,
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: 'var(--font-space-grotesk)',
                      fontSize: '14px',
                      color: C.text,
                    }}
                  >
                    {point}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#"
              style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: C.bg,
                backgroundColor: C.text,
                padding: '16px 32px',
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'background-color 0.2s',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = C.accent)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = C.text)
              }
            >
              Reservar plaza gratis
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER (dark) ── */}
      <section
        style={{
          backgroundColor: C.dark,
          padding: '100px 24px',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          {/* Top line */}
          <div
            ref={addRef}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginBottom: '56px',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: C.darkMuted,
              }}
            >
              EU AI Act
            </span>
            <div
              style={{
                flex: 1,
                height: '1px',
                backgroundColor: '#2A2A2A',
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: '13px',
                fontStyle: 'italic',
                color: C.darkMuted,
              }}
            >
              04
            </span>
          </div>

          <div
            className="cta-row"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr auto',
              gap: '64px',
              alignItems: 'end',
            }}
          >
            <div>
              <div
                ref={addRef}
                style={{
                  fontFamily: 'var(--font-space-grotesk)',
                  fontSize: '12px',
                  fontWeight: 600,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: C.accent,
                  marginBottom: '24px',
                }}
              >
                Urgente — En vigor desde agosto 2024
              </div>

              <h2
                ref={addRef}
                style={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: 'clamp(32px, 5vw, 64px)',
                  fontWeight: 800,
                  lineHeight: 1.05,
                  letterSpacing: '-2px',
                  color: C.darkText,
                  margin: '0 0 28px 0',
                  maxWidth: '700px',
                }}
              >
                El EU AI Act ya es ley.
                <span
                  style={{
                    fontStyle: 'italic',
                    fontWeight: 400,
                    color: C.accent,
                  }}
                >
                  {' '}
                  ¿Tu empresa está preparada?
                </span>
              </h2>

              <p
                ref={addRef}
                style={{
                  fontFamily: 'var(--font-source-serif)',
                  fontSize: '18px',
                  lineHeight: 1.7,
                  color: C.darkMuted,
                  margin: '0',
                  maxWidth: '580px',
                }}
              >
                Las multas llegan hasta los 35 millones de euros o el 7% de la
                facturación mundial. No esperes a que el regulador llame a tu
                puerta. Aprende a cumplir y a crecer al mismo tiempo.
              </p>
            </div>

            <div
              ref={addRef}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                minWidth: '220px',
              }}
            >
              <a
                href="#webinar"
                style={{
                  fontFamily: 'var(--font-space-grotesk)',
                  fontSize: '13px',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: C.dark,
                  backgroundColor: C.accent,
                  padding: '18px 32px',
                  textDecoration: 'none',
                  display: 'block',
                  textAlign: 'center',
                  transition: 'opacity 0.2s',
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
                  fontFamily: 'var(--font-space-grotesk)',
                  fontSize: '13px',
                  fontWeight: 500,
                  color: C.darkMuted,
                  textDecoration: 'none',
                  padding: '18px 32px',
                  textAlign: 'center',
                  border: `1px solid #2A2A2A`,
                  transition: 'color 0.2s, border-color 0.2s',
                  display: 'block',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = C.darkText
                  e.currentTarget.style.borderColor = '#444'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = C.darkMuted
                  e.currentTarget.style.borderColor = '#2A2A2A'
                }}
              >
                Ver NorteIA →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        id="contacto"
        style={{
          borderTop: `1px solid ${C.border}`,
          backgroundColor: C.bg,
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '28px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '24px',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: '18px',
                fontWeight: 700,
                color: C.text,
              }}
            >
              VM
            </span>
            <span
              style={{
                fontFamily: 'var(--font-source-serif)',
                fontSize: '14px',
                color: C.muted,
              }}
            >
              Víctor Mago — Consultor IA · A Coruña, España
            </span>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '24px',
            }}
          >
            <a
              href="https://norteai.es"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontSize: '12px',
                fontWeight: 500,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: C.muted,
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.accent)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.muted)}
            >
              NorteIA
            </a>
            <a
              href="mailto:victor@norteai.es"
              style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontSize: '12px',
                fontWeight: 500,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: C.muted,
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.accent)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.muted)}
            >
              Contacto
            </a>
          </div>
        </div>
      </footer>

      {/* ── VOLVER A DEMOS ── */}
      <div
        style={{
          backgroundColor: C.bg,
          borderTop: `1px solid ${C.border}`,
          padding: '16px 24px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <Link
          href="/demo"
          style={{
            fontFamily: 'var(--font-space-grotesk)',
            fontSize: '13px',
            fontWeight: 500,
            color: C.muted,
            textDecoration: 'none',
            transition: 'color 0.2s',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = C.text)}
          onMouseLeave={(e) => (e.currentTarget.style.color = C.muted)}
        >
          ← Volver a demos
        </Link>
      </div>

      {/* ── RESPONSIVE STYLES ── */}
      <style>{`
        @media (max-width: 900px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 32px 0 !important;
          }
          .two-col {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .cta-row {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
        @media (max-width: 640px) {
          .sub-row {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .stats-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </div>
  )
}
