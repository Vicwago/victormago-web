'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { JetBrains_Mono } from 'next/font/google'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const COLORS = {
  bg: '#0D1117',
  bgCard: '#161B22',
  bgAlt: '#13181F',
  accentAmber: '#FFB000',
  accentOrange: '#F97316',
  text: '#E6EDF3',
  muted: '#7D8590',
  border: 'rgba(255,176,0,0.2)',
  borderSubtle: 'rgba(255,176,0,0.1)',
  cursor: '#F97316',
  green: '#3FB950',
  greenMuted: 'rgba(63,185,80,0.15)',
}

const TYPEWRITER_LINES = [
  '$ victor --role consultor-ia --especialidad eu-ai-act',
  '> Loading expertise...',
  '> [████████████████████] 100%',
  '> Ready. Connecting...',
]

function TypewriterBlock() {
  const [lines, setLines] = useState<string[]>([])
  const [currentLine, setCurrentLine] = useState(0)
  const [currentChar, setCurrentChar] = useState(0)
  const [showCursor, setShowCursor] = useState(true)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 530)
    return () => clearInterval(cursorInterval)
  }, [])

  useEffect(() => {
    if (currentLine >= TYPEWRITER_LINES.length) {
      setDone(true)
      return
    }
    const line = TYPEWRITER_LINES[currentLine]
    if (currentChar < line.length) {
      const timeout = setTimeout(() => {
        setCurrentChar(prev => prev + 1)
      }, currentLine === 0 ? 45 : 30)
      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => {
        setLines(prev => [...prev, line])
        setCurrentLine(prev => prev + 1)
        setCurrentChar(0)
      }, currentLine === 0 ? 600 : 200)
      return () => clearTimeout(timeout)
    }
  }, [currentLine, currentChar])

  const partialLine = currentLine < TYPEWRITER_LINES.length
    ? TYPEWRITER_LINES[currentLine].slice(0, currentChar)
    : ''

  return (
    <div style={{
      background: COLORS.bgCard,
      border: `1px solid ${COLORS.border}`,
      borderRadius: '8px',
      padding: '20px 24px',
      maxWidth: '580px',
      margin: '0 auto',
    }}>
      {/* Terminal window dots */}
      <div style={{ display: 'flex', gap: '6px', marginBottom: '16px' }}>
        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#FF5F57' }} />
        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#FEBC2E' }} />
        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#28C840' }} />
        <span style={{ marginLeft: '8px', color: COLORS.muted, fontSize: '12px', alignSelf: 'center' }}>
          victor@norteai ~ bash
        </span>
      </div>
      {lines.map((line, i) => (
        <div key={i} style={{
          color: line.startsWith('$') ? COLORS.accentAmber : line.startsWith('>') ? COLORS.green : COLORS.text,
          fontSize: '13px',
          lineHeight: '1.7',
          whiteSpace: 'pre',
        }}>
          {line}
        </div>
      ))}
      {!done && currentLine < TYPEWRITER_LINES.length && (
        <div style={{
          color: TYPEWRITER_LINES[currentLine].startsWith('$') ? COLORS.accentAmber : COLORS.green,
          fontSize: '13px',
          lineHeight: '1.7',
          whiteSpace: 'pre',
        }}>
          {partialLine}
          <span style={{
            display: 'inline-block',
            width: '8px',
            height: '14px',
            background: showCursor ? COLORS.cursor : 'transparent',
            verticalAlign: 'middle',
            marginLeft: '1px',
            borderRadius: '1px',
          }} />
        </div>
      )}
      {done && (
        <div style={{ color: COLORS.accentOrange, fontSize: '13px', lineHeight: '1.7' }}>
          {'> '}
          <span style={{ color: COLORS.green }}>Conectado. Listo para ayudarte.</span>
          <span style={{
            display: 'inline-block',
            width: '8px',
            height: '14px',
            background: showCursor ? COLORS.cursor : 'transparent',
            verticalAlign: 'middle',
            marginLeft: '2px',
            borderRadius: '1px',
          }} />
        </div>
      )}
    </div>
  )
}

function BlinkingCursor() {
  const [visible, setVisible] = useState(true)
  useEffect(() => {
    const interval = setInterval(() => setVisible(v => !v), 600)
    return () => clearInterval(interval)
  }, [])
  return (
    <span style={{
      display: 'inline-block',
      width: '3px',
      height: '0.85em',
      background: visible ? COLORS.cursor : 'transparent',
      verticalAlign: 'baseline',
      marginLeft: '4px',
      borderRadius: '1px',
      position: 'relative',
      top: '2px',
    }} />
  )
}

const STATS = [
  { varName: 'formados', value: '500+', type: 'number', label: 'profesionales formados' },
  { varName: 'satisfaccion', value: '97%', type: 'string', label: 'satisfacción en talleres' },
  { varName: 'empresas', value: '40+', type: 'number', label: 'empresas asesoradas' },
  { varName: 'anos_exp', value: '8', type: 'number', label: 'años en transformación digital' },
]

const TOPICS = [
  { module: 'EUAIAct', from: 'victor-mago', desc: 'Cumplimiento y riesgos legales de IA en Europa' },
  { module: 'AutomatizacionIA', from: 'victor-mago', desc: 'Flujos de trabajo con n8n, Claude y APIs' },
  { module: 'FormacionEquipos', from: 'victor-mago', desc: 'Talleres prácticos para equipos no técnicos' },
  { module: 'EstrategiaIA', from: 'victor-mago', desc: 'Hoja de ruta de IA para pymes y startups' },
]

export default function RetroDemo() {
  return (
    <main
      className={jetbrainsMono.className}
      style={{
        background: COLORS.bg,
        minHeight: '100vh',
        color: COLORS.text,
        fontFamily: 'inherit',
      }}
    >
      {/* ─── NAV ─── */}
      <nav style={{
        background: COLORS.bg,
        borderBottom: `1px solid ${COLORS.border}`,
        padding: '0 24px',
        height: '56px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backdropFilter: 'blur(8px)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ color: COLORS.muted, fontSize: '14px' }}>~/</span>
          <span style={{ color: COLORS.accentAmber, fontSize: '14px', fontWeight: '600' }}>victormago</span>
        </div>
        <div style={{ display: 'flex', gap: '28px', alignItems: 'center' }}>
          {['sobre', 'temas', 'webinar'].map(link => (
            <a
              key={link}
              href={`#${link}`}
              style={{
                color: COLORS.muted,
                textDecoration: 'none',
                fontSize: '13px',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = COLORS.accentAmber)}
              onMouseLeave={e => (e.currentTarget.style.color = COLORS.muted)}
            >
              ./{link}
            </a>
          ))}
          <a
            href="#webinar"
            style={{
              background: COLORS.accentOrange,
              color: '#fff',
              textDecoration: 'none',
              fontSize: '12px',
              fontWeight: '600',
              padding: '6px 14px',
              borderRadius: '4px',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            $ join --webinar
          </a>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '80px 24px 60px',
        textAlign: 'center',
      }}>
        {/* whoami badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: COLORS.bgCard,
          border: `1px solid ${COLORS.border}`,
          borderRadius: '20px',
          padding: '6px 16px',
          marginBottom: '32px',
        }}>
          <span style={{ color: COLORS.accentAmber, fontSize: '13px' }}>$</span>
          <span style={{ color: COLORS.muted, fontSize: '13px' }}>whoami</span>
          <span style={{ color: COLORS.muted, fontSize: '13px' }}>→</span>
          <span style={{ color: COLORS.text, fontSize: '13px', fontWeight: '600' }}>Víctor Mago</span>
        </div>

        {/* H1 */}
        <h1 style={{
          fontSize: 'clamp(32px, 6vw, 64px)',
          fontWeight: '700',
          lineHeight: '1.1',
          margin: '0 0 16px',
          letterSpacing: '-0.5px',
        }}>
          <span style={{ color: COLORS.text }}>La IA no te va</span>
          <br />
          <span style={{ color: COLORS.accentAmber }}>a quitar el trabajo.</span>
          <BlinkingCursor />
        </h1>

        {/* Sub */}
        <p style={{
          fontSize: 'clamp(16px, 2.5vw, 22px)',
          color: COLORS.muted,
          margin: '0 0 48px',
          fontWeight: '400',
        }}>
          <span style={{ color: COLORS.accentOrange }}>//</span>{' '}
          Si aprendes a gobernarla.
        </p>

        {/* Typewriter */}
        <TypewriterBlock />

        {/* CTAs */}
        <div style={{
          display: 'flex',
          gap: '16px',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginTop: '40px',
        }}>
          <a
            href="#webinar"
            style={{
              background: COLORS.accentOrange,
              color: '#fff',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: '700',
              padding: '14px 28px',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'opacity 0.2s, transform 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.opacity = '0.9'
              e.currentTarget.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.opacity = '1'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <span>▶</span> Únete al webinar gratuito
          </a>
          <a
            href="https://norteai.es"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: 'transparent',
              color: COLORS.accentAmber,
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: '600',
              padding: '14px 28px',
              borderRadius: '6px',
              border: `1px solid ${COLORS.border}`,
              transition: 'border-color 0.2s, transform 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = COLORS.accentAmber
              e.currentTarget.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = COLORS.border
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            Ver NorteIA →
          </a>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '40px 24px',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px',
        }}>
          {STATS.map(stat => (
            <div
              key={stat.varName}
              style={{
                background: COLORS.bgCard,
                border: `1px solid ${COLORS.border}`,
                borderRadius: '8px',
                padding: '20px',
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = COLORS.accentAmber)}
              onMouseLeave={e => (e.currentTarget.style.borderColor = COLORS.border)}
            >
              <div style={{ fontSize: '11px', color: COLORS.muted, marginBottom: '8px' }}>
                <span style={{ color: '#BB9AF7' }}>const</span>{' '}
                <span style={{ color: COLORS.accentAmber }}>{stat.varName}</span>{' '}
                <span style={{ color: COLORS.muted }}>=</span>
              </div>
              <div style={{
                fontSize: '28px',
                fontWeight: '700',
                color: COLORS.text,
                marginBottom: '4px',
              }}>
                {stat.type === 'string'
                  ? <><span style={{ color: COLORS.green }}>&quot;</span>{stat.value}<span style={{ color: COLORS.green }}>&quot;</span></>
                  : <span style={{ color: '#79C0FF' }}>{stat.value}</span>
                }
              </div>
              <div style={{ fontSize: '12px', color: COLORS.muted }}>
                <span style={{ color: COLORS.muted }}>// </span>{stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── SOBRE ─── */}
      <section id="sobre" style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '60px 24px',
      }}>
        <div style={{
          background: COLORS.bgCard,
          border: `1px solid ${COLORS.border}`,
          borderRadius: '8px',
          padding: '32px',
        }}>
          {/* Comment block header */}
          <div style={{ marginBottom: '24px' }}>
            <div style={{ color: COLORS.green, fontSize: '13px', lineHeight: '1.8' }}>/**</div>
            <div style={{ color: COLORS.green, fontSize: '13px', lineHeight: '1.8' }}>
              {' * '}
              <span style={{ color: COLORS.muted }}>@module</span>{' '}
              <span style={{ color: COLORS.accentAmber }}>Bio</span>
            </div>
            <div style={{ color: COLORS.green, fontSize: '13px', lineHeight: '1.8' }}>
              {' * '}
              <span style={{ color: COLORS.muted }}>@author</span>{' '}
              <span style={{ color: COLORS.text }}>Víctor Mago</span>
            </div>
            <div style={{ color: COLORS.green, fontSize: '13px', lineHeight: '1.8' }}>
              {' * '}
              <span style={{ color: COLORS.muted }}>@location</span>{' '}
              <span style={{ color: COLORS.text }}>A Coruña, España</span>
            </div>
            <div style={{ color: COLORS.green, fontSize: '13px', lineHeight: '1.8' }}>{'*/'}</div>
          </div>

          {/* Bio content */}
          <div style={{
            borderLeft: `3px solid ${COLORS.accentAmber}`,
            paddingLeft: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}>
            <p style={{ fontSize: '15px', color: COLORS.text, lineHeight: '1.7', margin: 0 }}>
              Consultor de IA y cofundador de{' '}
              <a href="https://norteai.es" target="_blank" rel="noopener noreferrer"
                style={{ color: COLORS.accentAmber, textDecoration: 'none' }}>NorteIA</a>.
              Ayudo a empresas y profesionales a entender, adoptar y cumplir con la normativa de
              inteligencia artificial en Europa.
            </p>
            <p style={{ fontSize: '15px', color: COLORS.muted, lineHeight: '1.7', margin: 0 }}>
              No vengo del mundo técnico. Vengo del mundo real — y eso es exactamente por qué funciono:
              traduzco lo que la IA puede hacer en acciones concretas que tu equipo puede ejecutar mañana.
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '8px' }}>
              {['eu-ai-act', 'automatizacion', 'formacion', 'norteai', 'n8n', 'claude'].map(tag => (
                <span key={tag} style={{
                  background: COLORS.greenMuted,
                  color: COLORS.green,
                  border: `1px solid rgba(63,185,80,0.3)`,
                  borderRadius: '4px',
                  padding: '3px 10px',
                  fontSize: '12px',
                }}>
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── TEMAS ─── */}
      <section id="temas" style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '20px 24px 60px',
      }}>
        <div style={{ marginBottom: '28px' }}>
          <span style={{ color: COLORS.muted, fontSize: '12px' }}>// módulos disponibles</span>
          <h2 style={{
            fontSize: 'clamp(20px, 3vw, 28px)',
            fontWeight: '700',
            color: COLORS.text,
            margin: '8px 0 0',
          }}>
            <span style={{ color: COLORS.accentAmber }}>import</span>
            {' '}expertise{' '}
            <span style={{ color: COLORS.accentAmber }}>from</span>
            {' '}
            <span style={{ color: COLORS.green }}>&apos;victor-mago&apos;</span>
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '12px',
        }}>
          {TOPICS.map((topic, i) => (
            <div
              key={topic.module}
              style={{
                background: COLORS.bgCard,
                border: `1px solid ${COLORS.borderSubtle}`,
                borderRadius: '8px',
                padding: '20px',
                transition: 'border-color 0.2s, background 0.2s',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = COLORS.accentAmber
                e.currentTarget.style.background = COLORS.bgAlt
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = COLORS.borderSubtle
                e.currentTarget.style.background = COLORS.bgCard
              }}
            >
              <div style={{ fontSize: '12px', color: COLORS.muted, marginBottom: '10px' }}>
                <span style={{ color: '#BB9AF7' }}>import</span>
                {' { '}
                <span style={{ color: COLORS.accentAmber }}>{topic.module}</span>
                {' } '}
                <span style={{ color: '#BB9AF7' }}>from</span>
                {' '}
                <span style={{ color: COLORS.green }}>&apos;{topic.from}&apos;</span>
              </div>
              <p style={{ fontSize: '13px', color: COLORS.muted, margin: 0, lineHeight: '1.6' }}>
                <span style={{ color: COLORS.muted }}>{'//'} </span>{topic.desc}
              </p>
              <div style={{ marginTop: '12px', fontSize: '11px', color: COLORS.muted }}>
                v{i + 1}.0.0 · stable
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section id="webinar" style={{
        background: COLORS.bgAlt,
        borderTop: `1px solid ${COLORS.border}`,
        borderBottom: `1px solid ${COLORS.border}`,
        padding: '60px 24px',
      }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          {/* Code block header */}
          <div style={{
            background: COLORS.bgCard,
            border: `1px solid ${COLORS.border}`,
            borderRadius: '8px 8px 0 0',
            padding: '10px 16px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            borderBottom: `1px solid ${COLORS.border}`,
          }}>
            <span style={{ color: COLORS.accentOrange, fontSize: '12px' }}>⚡</span>
            <span style={{ color: COLORS.muted, fontSize: '12px' }}>webinar.config.ts</span>
          </div>
          <div style={{
            background: COLORS.bgCard,
            border: `1px solid ${COLORS.border}`,
            borderTop: 'none',
            borderRadius: '0 0 8px 8px',
            padding: '28px 32px 32px',
          }}>
            <div style={{ fontSize: '12px', color: COLORS.muted, lineHeight: '2', marginBottom: '20px' }}>
              <div>
                <span style={{ color: '#BB9AF7' }}>export const</span>
                {' '}
                <span style={{ color: COLORS.accentAmber }}>webinar</span>
                {' = {'}
              </div>
              <div style={{ paddingLeft: '20px' }}>
                <span style={{ color: COLORS.green }}>titulo</span>
                {': '}
                <span style={{ color: '#A5D6FF' }}>&quot;IA sin miedo: tu hoja de ruta en 60 min&quot;</span>
                {','}
              </div>
              <div style={{ paddingLeft: '20px' }}>
                <span style={{ color: COLORS.green }}>precio</span>
                {': '}
                <span style={{ color: '#79C0FF' }}>0</span>
                {', '}
                <span style={{ color: COLORS.muted }}>// gratuito</span>
              </div>
              <div style={{ paddingLeft: '20px' }}>
                <span style={{ color: COLORS.green }}>formato</span>
                {': '}
                <span style={{ color: '#A5D6FF' }}>&quot;online · en directo&quot;</span>
                {','}
              </div>
              <div style={{ paddingLeft: '20px' }}>
                <span style={{ color: COLORS.green }}>plazas</span>
                {': '}
                <span style={{ color: '#79C0FF' }}>limited</span>
                {','}
              </div>
              <div>{'}'}</div>
            </div>

            {/* Output */}
            <div style={{
              background: COLORS.bg,
              border: `1px solid ${COLORS.borderSubtle}`,
              borderRadius: '6px',
              padding: '16px 20px',
              marginBottom: '28px',
            }}>
              <div style={{ fontSize: '12px', color: COLORS.muted, marginBottom: '6px' }}>
                {'>'} output:
              </div>
              <div style={{ fontSize: '18px', fontWeight: '700', color: COLORS.text, lineHeight: '1.4' }}>
                Apúntate gratis y aprende a usar IA{' '}
                <span style={{ color: COLORS.accentAmber }}>sin perder el norte.</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <button
                style={{
                  background: COLORS.accentOrange,
                  color: '#fff',
                  border: 'none',
                  fontSize: '14px',
                  fontWeight: '700',
                  padding: '14px 28px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                $ join --webinar --gratuito
              </button>
              <a
                href="https://norteai.es"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: 'transparent',
                  color: COLORS.accentAmber,
                  border: `1px solid ${COLORS.border}`,
                  fontSize: '14px',
                  fontWeight: '600',
                  padding: '14px 24px',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  display: 'inline-block',
                  transition: 'border-color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = COLORS.accentAmber)}
                onMouseLeave={e => (e.currentTarget.style.borderColor = COLORS.border)}
              >
                Ver NorteIA →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '32px 24px',
        borderTop: `1px solid ${COLORS.borderSubtle}`,
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
        }}>
          <span style={{ color: COLORS.muted, fontSize: '13px' }}>
            <span style={{ color: COLORS.green }}>{'//'}</span>
            {' © 2026 victormago.com · built with '}
            <span style={{ color: COLORS.accentAmber }}>☕ + IA</span>
          </span>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            {[
              { href: 'https://linkedin.com', label: './linkedin' },
              { href: 'https://norteai.es', label: './norteai' },
            ].map(link => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: COLORS.muted,
                  textDecoration: 'none',
                  fontSize: '13px',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = COLORS.accentAmber)}
                onMouseLeave={e => (e.currentTarget.style.color = COLORS.muted)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <Link
            href="/demo"
            style={{
              color: COLORS.muted,
              textDecoration: 'none',
              fontSize: '13px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = COLORS.accentAmber)}
            onMouseLeave={e => (e.currentTarget.style.color = COLORS.muted)}
          >
            <span>←</span>
            <span>cd /demo</span>
          </Link>
        </div>
      </footer>
    </main>
  )
}
