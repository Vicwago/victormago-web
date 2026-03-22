'use client'

import Link from 'next/link'
import { Libre_Baskerville, Karla } from 'next/font/google'
import { useEffect, useState } from 'react'

const baskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-baskerville',
})

const karla = Karla({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-karla',
})

const palette = {
  bg: '#F5F2ED',
  bgCard: '#FFFFFF',
  text: '#2C2825',
  accent: '#F97316',
  muted: '#8B7355',
  warmDark: '#2C2825',
  border: '#E8E3DC',
  ocrePlaceholder: '#C4956A',
  ocrePlaceholderLight: '#D4A574',
  warmMid: '#E8DDD0',
}

const stats = [
  { value: '+200', label: 'Empresas formadas', note: 'en EU AI Act' },
  { value: '8 años', label: 'Implementando IA', note: 'en organizaciones reales' },
  { value: '94%', label: 'Satisfacción media', note: 'en valoraciones post-taller' },
  { value: '3 países', label: 'Presencia activa', note: 'España, Portugal y México' },
]

const temas = [
  'EU AI Act',
  'IA para equipos',
  'Automatización sin código',
  'ChatGPT en el trabajo',
  'Ética y IA',
  'Agentes de IA',
  'Transformación digital',
  'Productividad con IA',
  'NorteIA',
]

export default function KinfolkPage() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 80)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={`${baskerville.variable} ${karla.variable}`}
      style={{
        backgroundColor: palette.bg,
        color: palette.text,
        fontFamily: 'var(--font-karla), sans-serif',
        minHeight: '100vh',
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.7s ease',
      }}
    >
      {/* ── NAV ── */}
      <nav
        style={{
          backgroundColor: palette.bg,
          borderBottom: `1px solid ${palette.border}`,
          padding: '0 2rem',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'sticky',
          top: 0,
          zIndex: 50,
        }}
      >
        {/* Monograma VM */}
        <div
          style={{
            fontFamily: 'var(--font-baskerville), serif',
            fontSize: '1.375rem',
            fontWeight: '700',
            letterSpacing: '0.08em',
            color: palette.text,
            userSelect: 'none',
          }}
        >
          VM
        </div>

        {/* Links */}
        <div
          style={{
            display: 'flex',
            gap: '2rem',
            alignItems: 'center',
          }}
        >
          {['Sobre mí', 'Temas', 'Webinar', 'NorteIA'].map((item) => (
            <span
              key={item}
              style={{
                fontFamily: 'var(--font-baskerville), serif',
                fontStyle: 'italic',
                fontSize: '0.9rem',
                color: palette.muted,
                cursor: 'pointer',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = palette.text)}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = palette.muted)}
            >
              {item}
            </span>
          ))}
          <span
            style={{
              fontFamily: 'var(--font-karla), sans-serif',
              fontSize: '0.85rem',
              fontWeight: '600',
              color: palette.accent,
              cursor: 'pointer',
              borderBottom: `1px solid ${palette.accent}`,
              paddingBottom: '1px',
              letterSpacing: '0.02em',
            }}
          >
            Webinar gratuito →
          </span>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section
        style={{
          maxWidth: '1120px',
          margin: '0 auto',
          padding: '5rem 2rem 6rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))',
          gap: '4rem',
          alignItems: 'center',
        }}
      >
        {/* Texto hero */}
        <div style={{ order: 1 }}>
          <p
            style={{
              fontFamily: 'var(--font-karla), sans-serif',
              fontSize: '0.8rem',
              fontWeight: '600',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: palette.muted,
              marginBottom: '1.5rem',
            }}
          >
            Víctor Mago — A Coruña
          </p>

          <h1
            style={{
              fontFamily: 'var(--font-baskerville), serif',
              fontSize: 'clamp(2.2rem, 5vw, 3.6rem)',
              fontWeight: '700',
              lineHeight: '1.15',
              color: palette.text,
              marginBottom: '1rem',
              letterSpacing: '-0.01em',
            }}
          >
            La IA no te va a quitar el trabajo.
          </h1>

          <p
            style={{
              fontFamily: 'var(--font-baskerville), serif',
              fontStyle: 'italic',
              fontSize: 'clamp(1.3rem, 3vw, 1.9rem)',
              color: palette.muted,
              marginBottom: '2rem',
              lineHeight: '1.4',
            }}
          >
            Si aprendes a gobernarla.
          </p>

          <p
            style={{
              fontFamily: 'var(--font-karla), sans-serif',
              fontSize: '1rem',
              lineHeight: '1.75',
              color: palette.muted,
              maxWidth: '420px',
              marginBottom: '3rem',
            }}
          >
            Consultor y formador de IA. Especialista en EU AI Act.
            Co-fundador de NorteIA.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button
              style={{
                backgroundColor: palette.accent,
                color: '#FFFFFF',
                fontFamily: 'var(--font-karla), sans-serif',
                fontWeight: '600',
                fontSize: '0.9rem',
                letterSpacing: '0.03em',
                padding: '0.85rem 1.75rem',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.opacity = '0.88')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.opacity = '1')}
            >
              Únete al webinar gratuito
            </button>
            <Link
              href="https://norteai.es"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-baskerville), serif',
                fontStyle: 'italic',
                fontSize: '0.95rem',
                color: palette.text,
                textDecoration: 'none',
                padding: '0.85rem 1.25rem',
                border: `1px solid ${palette.border}`,
                borderRadius: '4px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                transition: 'border-color 0.2s',
              }}
            >
              Ver NorteIA →
            </Link>
          </div>
        </div>

        {/* Foto placeholder */}
        <div
          style={{
            order: 0,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              width: '400px',
              height: '500px',
              maxWidth: '100%',
              backgroundColor: palette.ocrePlaceholder,
              borderRadius: '6px',
              position: 'relative',
              overflow: 'hidden',
              flexShrink: 0,
            }}
          >
            {/* Textura visual sutil */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: `linear-gradient(160deg, ${palette.ocrePlaceholderLight} 0%, ${palette.ocrePlaceholder} 60%, #A0714A 100%)`,
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '2rem',
                left: '2rem',
                right: '2rem',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-baskerville), serif',
                  fontStyle: 'italic',
                  fontSize: '0.85rem',
                  color: 'rgba(255,255,255,0.75)',
                  marginBottom: '0.25rem',
                }}
              >
                fotografía
              </p>
              <div
                style={{
                  height: '1px',
                  backgroundColor: 'rgba(255,255,255,0.3)',
                  width: '48px',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section
        style={{
          backgroundColor: palette.warmMid,
          padding: '4rem 2rem',
          borderTop: `1px solid ${palette.border}`,
          borderBottom: `1px solid ${palette.border}`,
        }}
      >
        <div
          style={{
            maxWidth: '1120px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {stats.map((s) => (
            <div
              key={s.value}
              style={{
                backgroundColor: palette.bgCard,
                border: `1px solid ${palette.border}`,
                borderRadius: '6px',
                padding: '2rem 1.75rem',
                textAlign: 'left',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-baskerville), serif',
                  fontSize: '2rem',
                  fontWeight: '700',
                  color: palette.accent,
                  marginBottom: '0.4rem',
                  lineHeight: '1',
                }}
              >
                {s.value}
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-karla), sans-serif',
                  fontWeight: '600',
                  fontSize: '0.95rem',
                  color: palette.text,
                  marginBottom: '0.25rem',
                }}
              >
                {s.label}
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-karla), sans-serif',
                  fontSize: '0.82rem',
                  color: palette.muted,
                }}
              >
                {s.note}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SOBRE MÍ ── */}
      <section
        style={{
          maxWidth: '1120px',
          margin: '0 auto',
          padding: '6rem 2rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
          gap: '5rem',
          alignItems: 'start',
        }}
      >
        {/* Texto */}
        <div>
          <p
            style={{
              fontFamily: 'var(--font-karla), sans-serif',
              fontSize: '0.75rem',
              fontWeight: '600',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: palette.muted,
              marginBottom: '1.25rem',
            }}
          >
            Sobre mí
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-baskerville), serif',
              fontSize: 'clamp(1.5rem, 3vw, 2.1rem)',
              fontWeight: '700',
              lineHeight: '1.3',
              color: palette.text,
              marginBottom: '2rem',
            }}
          >
            No soy un robot de LinkedIn.
            <br />
            Soy alguien que lleva años
            <br />
            <em>en las trincheras.</em>
          </h2>

          <div
            style={{
              fontFamily: 'var(--font-karla), sans-serif',
              fontSize: '1rem',
              lineHeight: '1.9',
              color: palette.muted,
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
            }}
          >
            <p>
              Empecé a trabajar con inteligencia artificial antes de que fuera
              tendencia. No porque fuera especialmente listo, sino porque me
              parecía la herramienta más interesante que había visto en mucho
              tiempo y quería entender cómo funcionaba de verdad.
            </p>
            <p>
              He formado a equipos de marketing, legal, RRHH y dirección en
              empresas de muy distinto tamaño. Y lo que más me repiten al final
              de cada taller es lo mismo: "¿Por qué nadie nos había explicado
              esto así?"
            </p>
            <p>
              Cofundé NorteIA con Luis Salgado porque creemos que la IA no
              debería ser solo para las grandes consultoras. Las pymes y los
              profesionales independientes merecen acceso a la misma
              transformación, con lenguaje real y sin humo.
            </p>
            <p>
              Cuando no estoy dando formaciones, entreno tenis por las tardes
              en un club de A Coruña. Lo cual me recuerda que la práctica
              deliberada —no la teoría— es lo que cambia las cosas.
            </p>
          </div>
        </div>

        {/* Foto inline placeholder */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          <div
            style={{
              width: '100%',
              aspectRatio: '4 / 3',
              backgroundColor: palette.warmMid,
              borderRadius: '6px',
              border: `1px solid ${palette.border}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: `linear-gradient(135deg, #DDD0BE 0%, ${palette.warmMid} 100%)`,
              }}
            />
            <p
              style={{
                fontFamily: 'var(--font-baskerville), serif',
                fontStyle: 'italic',
                fontSize: '0.85rem',
                color: palette.muted,
                position: 'relative',
                zIndex: 1,
              }}
            >
              fotografía de trabajo
            </p>
          </div>
          <p
            style={{
              fontFamily: 'var(--font-baskerville), serif',
              fontStyle: 'italic',
              fontSize: '0.82rem',
              color: palette.muted,
              textAlign: 'center',
            }}
          >
            Taller de IA para equipos, A Coruña 2025
          </p>

          {/* Quote flotante */}
          <blockquote
            style={{
              borderLeft: `3px solid ${palette.accent}`,
              paddingLeft: '1.25rem',
              marginTop: '1rem',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-baskerville), serif',
                fontStyle: 'italic',
                fontSize: '1.05rem',
                lineHeight: '1.7',
                color: palette.text,
                marginBottom: '0.5rem',
              }}
            >
              "La IA no reemplaza al profesional que sabe usarla.
              Le da superpoderes."
            </p>
            <cite
              style={{
                fontFamily: 'var(--font-karla), sans-serif',
                fontSize: '0.8rem',
                color: palette.muted,
                fontStyle: 'normal',
                letterSpacing: '0.05em',
              }}
            >
              — Víctor Mago
            </cite>
          </blockquote>
        </div>
      </section>

      {/* ── TEMAS ── */}
      <section
        style={{
          backgroundColor: palette.warmMid,
          padding: '5rem 2rem',
          borderTop: `1px solid ${palette.border}`,
          borderBottom: `1px solid ${palette.border}`,
        }}
      >
        <div
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-karla), sans-serif',
              fontSize: '0.75rem',
              fontWeight: '600',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: palette.muted,
              marginBottom: '1rem',
            }}
          >
            Áreas de trabajo
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-baskerville), serif',
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: '700',
              color: palette.text,
              marginBottom: '2.5rem',
            }}
          >
            De qué hablo
            <em
              style={{ fontStyle: 'italic', color: palette.muted }}
            >
              {' '}y enseño
            </em>
          </h2>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.75rem',
              justifyContent: 'center',
            }}
          >
            {temas.map((tema) => (
              <span
                key={tema}
                style={{
                  fontFamily: 'var(--font-karla), sans-serif',
                  fontSize: '0.88rem',
                  fontWeight: '500',
                  color: palette.text,
                  backgroundColor: palette.bgCard,
                  border: `1px solid ${palette.border}`,
                  borderRadius: '999px',
                  padding: '0.5rem 1.25rem',
                  letterSpacing: '0.02em',
                  transition: 'background-color 0.2s, border-color 0.2s',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  const el = e.target as HTMLElement
                  el.style.backgroundColor = palette.accent
                  el.style.borderColor = palette.accent
                  el.style.color = '#FFFFFF'
                }}
                onMouseLeave={(e) => {
                  const el = e.target as HTMLElement
                  el.style.backgroundColor = palette.bgCard
                  el.style.borderColor = palette.border
                  el.style.color = palette.text
                }}
              >
                {tema}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section
        style={{
          backgroundColor: '#2C2825',
          padding: '5.5rem 2rem',
        }}
      >
        <div
          style={{
            maxWidth: '680px',
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-karla), sans-serif',
              fontSize: '0.75rem',
              fontWeight: '600',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.45)',
              marginBottom: '1.25rem',
            }}
          >
            Webinar gratuito
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-baskerville), serif',
              fontSize: 'clamp(1.6rem, 4vw, 2.5rem)',
              fontWeight: '700',
              lineHeight: '1.25',
              color: '#F5F0E8',
              marginBottom: '1.25rem',
            }}
          >
            ¿Tu empresa está lista para
            <br />
            el EU AI Act?
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-karla), sans-serif',
              fontSize: '1rem',
              lineHeight: '1.75',
              color: 'rgba(255,255,255,0.6)',
              marginBottom: '2.5rem',
              maxWidth: '520px',
              margin: '0 auto 2.5rem',
            }}
          >
            En 90 minutos te explico lo que necesitas saber sobre la nueva
            regulación europea de IA, qué implica para tu negocio y cómo
            prepararte sin morir en el intento.
          </p>
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <button
              style={{
                backgroundColor: palette.accent,
                color: '#FFFFFF',
                fontFamily: 'var(--font-karla), sans-serif',
                fontWeight: '600',
                fontSize: '0.9rem',
                letterSpacing: '0.03em',
                padding: '0.9rem 2rem',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.opacity = '0.88')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.opacity = '1')}
            >
              Únete al webinar gratuito
            </button>
            <Link
              href="https://norteai.es"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-baskerville), serif',
                fontStyle: 'italic',
                fontSize: '0.95rem',
                color: 'rgba(255,255,255,0.7)',
                textDecoration: 'none',
                padding: '0.9rem 1.5rem',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '4px',
                display: 'inline-flex',
                alignItems: 'center',
                transition: 'border-color 0.2s',
              }}
            >
              Ver NorteIA →
            </Link>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        style={{
          backgroundColor: palette.bg,
          borderTop: `1px solid ${palette.border}`,
          padding: '3.5rem 2rem',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-baskerville), serif',
            fontSize: '1.25rem',
            fontWeight: '700',
            letterSpacing: '0.1em',
            color: palette.text,
            marginBottom: '0.75rem',
          }}
        >
          VM
        </p>
        <p
          style={{
            fontFamily: 'var(--font-baskerville), serif',
            fontStyle: 'italic',
            fontSize: '0.88rem',
            color: palette.muted,
            marginBottom: '0.5rem',
          }}
        >
          Víctor Mago — Consultor y formador de IA
        </p>
        <p
          style={{
            fontFamily: 'var(--font-karla), sans-serif',
            fontSize: '0.82rem',
            color: palette.muted,
            marginBottom: '2rem',
            letterSpacing: '0.05em',
          }}
        >
          A Coruña, España · victor@norteai.es
        </p>

        <div
          style={{
            width: '48px',
            height: '1px',
            backgroundColor: palette.border,
            margin: '0 auto 2rem',
          }}
        />

        <Link
          href="/demo"
          style={{
            fontFamily: 'var(--font-karla), sans-serif',
            fontSize: '0.82rem',
            color: palette.muted,
            textDecoration: 'none',
            letterSpacing: '0.05em',
            transition: 'color 0.2s',
            display: 'inline-block',
          }}
        >
          ← Volver a demos
        </Link>

        <p
          style={{
            fontFamily: 'var(--font-karla), sans-serif',
            fontSize: '0.75rem',
            color: palette.border,
            marginTop: '2rem',
          }}
        >
          © 2025 Víctor Mago · NorteIA
        </p>
      </footer>
    </div>
  )
}
