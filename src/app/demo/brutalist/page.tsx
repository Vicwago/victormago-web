'use client'

import Link from 'next/link'
import { Space_Mono } from 'next/font/google'
import { useState } from 'react'

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
})

const COLORS = {
  bg: '#FFFDF7',
  text: '#0A0A0A',
  yellow: '#FFE600',
  orange: '#F97316',
  border: '#0A0A0A',
  white: '#FFFFFF',
}

const shadow = '4px 4px 0px #0A0A0A'
const shadowSm = '2px 2px 0px #0A0A0A'
const shadowPressed = '1px 1px 0px #0A0A0A'

export default function BrutalistDemo() {
  const [hoveredCta1, setHoveredCta1] = useState(false)
  const [hoveredCta2, setHoveredCta2] = useState(false)
  const [hoveredBannerBtn, setHoveredBannerBtn] = useState(false)
  const [hoveredBack, setHoveredBack] = useState(false)

  const stats = [
    { number: '+200', label: 'PROFESIONALES FORMADOS' },
    { number: '3', label: 'AÑOS APLICANDO IA' },
    { number: '+15', label: 'EMPRESAS ASESORADAS' },
    { number: '100%', label: 'SIN HUMO' },
  ]

  const temas = [
    'EU AI ACT', 'AUTOMATIZACIÓN', 'PROMPTING', 'N8N',
    'CLAUDE', 'CHATGPT', 'MAKE.COM', 'FORMACIÓN IN-COMPANY',
    'CONSULTORÍA IA', 'GOBIERNO DE DATOS', 'HERRAMIENTAS NO-CODE', 'LINKEDIN AI',
  ]

  return (
    <div
      style={{
        fontFamily: spaceMono.style.fontFamily,
        backgroundColor: COLORS.bg,
        color: COLORS.text,
        minHeight: '100vh',
        overflowX: 'hidden',
      }}
      className={spaceMono.variable}
    >
      {/* ─── NAV ─── */}
      <nav
        style={{
          borderBottom: `3px solid ${COLORS.border}`,
          backgroundColor: COLORS.bg,
          padding: '0 24px',
          position: 'sticky',
          top: 0,
          zIndex: 100,
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 64,
          }}
        >
          <span
            style={{
              fontWeight: 700,
              fontSize: '1.1rem',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}
          >
            VÍCTOR MAGO
          </span>
          <div
            style={{
              display: 'flex',
              gap: 32,
              alignItems: 'center',
            }}
          >
            {['SOBRE MÍ', 'FORMACIÓN', 'NORTEIA', 'CONTACTO'].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  textDecoration: 'none',
                  color: COLORS.text,
                  fontWeight: 700,
                  fontSize: '0.8rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  borderBottom: `2px solid transparent`,
                  transition: 'border-color 0.1s',
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLAnchorElement).style.borderBottomColor = COLORS.text)
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLAnchorElement).style.borderBottomColor = 'transparent')
                }
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: '60px 24px 80px',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 0,
        }}
      >
        {/* Yellow accent bar */}
        <div
          style={{
            display: 'inline-block',
            backgroundColor: COLORS.yellow,
            border: `3px solid ${COLORS.border}`,
            padding: '6px 14px',
            fontWeight: 700,
            fontSize: '0.75rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            marginBottom: 24,
            width: 'fit-content',
            boxShadow: shadowSm,
          }}
        >
          CONSULTOR · FORMADOR · CO-FUNDADOR
        </div>

        {/* H1 block */}
        <div
          style={{
            borderLeft: `6px solid ${COLORS.border}`,
            paddingLeft: 24,
            marginBottom: 32,
          }}
        >
          <h1
            style={{
              fontWeight: 700,
              fontSize: 'clamp(2.4rem, 6vw, 5rem)',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
              margin: 0,
              marginBottom: 16,
            }}
          >
            LA IA NO TE VA A
            <br />
            <span
              style={{
                backgroundColor: COLORS.yellow,
                padding: '0 8px',
                display: 'inline-block',
              }}
            >
              QUITAR
            </span>
            <br />
            EL TRABAJO.
          </h1>
          <p
            style={{
              fontWeight: 700,
              fontSize: 'clamp(1.2rem, 3vw, 2rem)',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              margin: 0,
              borderBottom: `3px solid ${COLORS.orange}`,
              paddingBottom: 4,
              display: 'inline-block',
            }}
          >
            SI APRENDES A GOBERNARLA.
          </p>
        </div>

        {/* Description */}
        <p
          style={{
            fontSize: '1rem',
            lineHeight: 1.7,
            maxWidth: 560,
            marginBottom: 40,
            fontWeight: 400,
            opacity: 0.85,
          }}
        >
          Consultor y formador de IA. Especialista en EU AI Act. Co-fundador de NorteIA.
          <br />
          Sin tecnicismos. Sin PowerPoints vacíos. Sin promesas de ciencia ficción.
        </p>

        {/* CTA Buttons */}
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <button
            onMouseEnter={() => setHoveredCta1(true)}
            onMouseLeave={() => setHoveredCta1(false)}
            style={{
              backgroundColor: COLORS.yellow,
              color: COLORS.text,
              border: `3px solid ${COLORS.border}`,
              padding: '14px 28px',
              fontFamily: spaceMono.style.fontFamily,
              fontWeight: 700,
              fontSize: '0.9rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              boxShadow: hoveredCta1 ? shadowPressed : shadow,
              transform: hoveredCta1 ? 'translate(3px, 3px)' : 'translate(0, 0)',
              transition: 'box-shadow 0.08s, transform 0.08s',
            }}
          >
            ÚNETE AL WEBINAR
          </button>
          <a
            href="https://norteia.com"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHoveredCta2(true)}
            onMouseLeave={() => setHoveredCta2(false)}
            style={{
              backgroundColor: COLORS.bg,
              color: COLORS.text,
              border: `3px solid ${COLORS.border}`,
              padding: '14px 28px',
              fontFamily: spaceMono.style.fontFamily,
              fontWeight: 700,
              fontSize: '0.9rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              textDecoration: 'none',
              display: 'inline-block',
              boxShadow: hoveredCta2 ? shadowPressed : shadow,
              transform: hoveredCta2 ? 'translate(3px, 3px)' : 'translate(0, 0)',
              transition: 'box-shadow 0.08s, transform 0.08s',
            }}
          >
            VER NORTEIA →
          </a>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section
        style={{
          borderTop: `3px solid ${COLORS.border}`,
          borderBottom: `3px solid ${COLORS.border}`,
          backgroundColor: COLORS.bg,
          padding: '60px 24px',
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 24,
          }}
        >
          {stats.map(({ number, label }) => (
            <div
              key={label}
              style={{
                border: `3px solid ${COLORS.border}`,
                boxShadow: shadow,
                padding: '32px 24px',
                backgroundColor: COLORS.bg,
              }}
            >
              <div
                style={{
                  fontWeight: 700,
                  fontSize: 'clamp(2.8rem, 5vw, 4rem)',
                  lineHeight: 1,
                  marginBottom: 8,
                  letterSpacing: '-0.03em',
                }}
              >
                {number}
              </div>
              <div
                style={{
                  fontWeight: 700,
                  fontSize: '0.72rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  opacity: 0.65,
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── SOBRE ─── */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'auto 1fr',
              gap: 48,
              alignItems: 'start',
            }}
          >
            {/* Label lateral */}
            <div
              style={{
                writingMode: 'vertical-rl',
                transform: 'rotate(180deg)',
                fontWeight: 700,
                fontSize: '0.75rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                borderRight: `3px solid ${COLORS.border}`,
                paddingRight: 12,
                height: 'fit-content',
              }}
            >
              SOBRE MÍ
            </div>

            {/* Caja de contenido */}
            <div
              style={{
                border: `3px solid ${COLORS.border}`,
                boxShadow: shadow,
                padding: '40px 36px',
              }}
            >
              <h2
                style={{
                  fontWeight: 700,
                  fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  marginBottom: 24,
                  borderBottom: `3px solid ${COLORS.yellow}`,
                  paddingBottom: 12,
                }}
              >
                SIN RODEOS.
              </h2>
              <p
                style={{
                  fontSize: '1rem',
                  lineHeight: 1.75,
                  marginBottom: 20,
                  maxWidth: 680,
                }}
              >
                Llevo más de 3 años aplicando IA en contextos reales. No en laboratorios.
                En empresas que tienen que vender, operar y sobrevivir. He visto lo que
                funciona y lo que es ruido de marketing.
              </p>
              <p
                style={{
                  fontSize: '1rem',
                  lineHeight: 1.75,
                  marginBottom: 20,
                  maxWidth: 680,
                }}
              >
                Co-fundé NorteIA (A Coruña) para ayudar a pymes y profesionales a
                integrar la IA de forma práctica, ética y conforme al nuevo marco legal
                europeo. Especialista en EU AI Act, formador en herramientas de
                automatización y consultor de transformación digital.
              </p>
              <div
                style={{
                  display: 'flex',
                  gap: 12,
                  flexWrap: 'wrap',
                  marginTop: 8,
                }}
              >
                {['A CORUÑA, ESPAÑA', 'COFUNDADOR NORTEIA', 'EU AI ACT SPECIALIST'].map(
                  (tag) => (
                    <span
                      key={tag}
                      style={{
                        border: `2px solid ${COLORS.border}`,
                        padding: '4px 10px',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        backgroundColor: COLORS.yellow,
                      }}
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TEMAS ─── */}
      <section
        style={{
          borderTop: `3px solid ${COLORS.border}`,
          padding: '60px 24px',
          backgroundColor: COLORS.bg,
        }}
      >
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2
            style={{
              fontWeight: 700,
              fontSize: '0.75rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginBottom: 32,
              opacity: 0.5,
            }}
          >
            — TEMAS QUE DOMINO
          </h2>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 12,
            }}
          >
            {temas.map((tema) => (
              <TagItem key={tema} label={tema} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section
        style={{
          backgroundColor: COLORS.text,
          borderTop: `3px solid ${COLORS.border}`,
          borderBottom: `3px solid ${COLORS.border}`,
          padding: '80px 24px',
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: 32,
          }}
        >
          <p
            style={{
              fontWeight: 700,
              fontSize: '0.8rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: COLORS.orange,
              margin: 0,
            }}
          >
            PRÓXIMO WEBINAR — GRATUITO
          </p>
          <h2
            style={{
              fontWeight: 700,
              fontSize: 'clamp(1.8rem, 4vw, 3.2rem)',
              textTransform: 'uppercase',
              letterSpacing: '0.02em',
              color: COLORS.white,
              lineHeight: 1.1,
              margin: 0,
              maxWidth: 700,
            }}
          >
            APRENDE A USAR LA IA ANTES DE QUE LA LEY TE OBLIGUE.
          </h2>
          <p
            style={{
              color: 'rgba(255,255,255,0.65)',
              fontSize: '0.95rem',
              lineHeight: 1.6,
              maxWidth: 520,
              margin: 0,
            }}
          >
            El EU AI Act ya está en vigor. Las empresas tienen hasta 2025-2026 para cumplir.
            En 90 minutos te explico qué cambia, qué debes hacer y cómo adaptarte.
          </p>
          <button
            onMouseEnter={() => setHoveredBannerBtn(true)}
            onMouseLeave={() => setHoveredBannerBtn(false)}
            style={{
              backgroundColor: COLORS.orange,
              color: COLORS.white,
              border: `3px solid ${COLORS.white}`,
              padding: '16px 36px',
              fontFamily: spaceMono.style.fontFamily,
              fontWeight: 700,
              fontSize: '0.95rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              boxShadow: hoveredBannerBtn ? '1px 1px 0px #FFFFFF' : '4px 4px 0px #FFFFFF',
              transform: hoveredBannerBtn ? 'translate(3px, 3px)' : 'translate(0, 0)',
              transition: 'box-shadow 0.08s, transform 0.08s',
            }}
          >
            RESERVA TU PLAZA GRATIS →
          </button>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer
        style={{
          borderTop: `3px solid ${COLORS.border}`,
          padding: '40px 24px',
          backgroundColor: COLORS.bg,
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: 24,
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              gap: 24,
            }}
          >
            <div>
              <div
                style={{
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  marginBottom: 8,
                }}
              >
                VÍCTOR MAGO
              </div>
              <div
                style={{
                  fontSize: '0.8rem',
                  opacity: 0.5,
                  letterSpacing: '0.08em',
                }}
              >
                CONSULTOR IA · A CORUÑA · NORTEIA
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
                alignItems: 'flex-end',
              }}
            >
              {['LINKEDIN', 'TWITTER / X', 'NORTEIA.COM'].map((link) => (
                <a
                  key={link}
                  href="#"
                  style={{
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    color: COLORS.text,
                    borderBottom: `2px solid ${COLORS.text}`,
                  }}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div style={{ borderTop: `2px solid rgba(10,10,10,0.15)` }} />

          {/* Bottom row */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 16,
            }}
          >
            <span style={{ fontSize: '0.75rem', opacity: 0.45, letterSpacing: '0.08em' }}>
              © 2025 VÍCTOR MAGO — TODOS LOS DERECHOS RESERVADOS
            </span>
            <Link
              href="/demo"
              onMouseEnter={() => setHoveredBack(true)}
              onMouseLeave={() => setHoveredBack(false)}
              style={{
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                color: COLORS.text,
                border: `2px solid ${COLORS.border}`,
                padding: '6px 14px',
                display: 'inline-block',
                boxShadow: hoveredBack ? shadowPressed : shadowSm,
                transform: hoveredBack ? 'translate(1px, 1px)' : 'translate(0, 0)',
                transition: 'box-shadow 0.08s, transform 0.08s',
              }}
            >
              ← VOLVER A DEMOS
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

// ─── Sub-component: Tag item ───
function TagItem({ label }: { label: string }) {
  const [hovered, setHovered] = useState(false)
  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: `2px solid #0A0A0A`,
        padding: '8px 16px',
        fontSize: '0.78rem',
        fontWeight: 700,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        cursor: 'default',
        backgroundColor: hovered ? '#FFE600' : '#FFFDF7',
        boxShadow: hovered ? '1px 1px 0px #0A0A0A' : '3px 3px 0px #0A0A0A',
        transform: hovered ? 'translate(2px, 2px)' : 'translate(0, 0)',
        transition: 'background-color 0.08s, box-shadow 0.08s, transform 0.08s',
        fontFamily: 'var(--font-space-mono, monospace)',
      }}
    >
      {label}
    </span>
  )
}
