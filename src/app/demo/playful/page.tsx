'use client'

import { Inter } from 'next/font/google'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function PlayfulPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div
      className={inter.className}
      style={{
        backgroundColor: '#0C0C0C',
        color: '#FFFFFF',
        minHeight: '100vh',
        overflowX: 'hidden',
      }}
    >
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }

        .fade-in-1 {
          opacity: 0;
          animation: fadeInUp 0.7s ease forwards;
          animation-delay: 0.1s;
        }
        .fade-in-2 {
          opacity: 0;
          animation: fadeInUp 0.7s ease forwards;
          animation-delay: 0.25s;
        }
        .fade-in-3 {
          opacity: 0;
          animation: fadeInUp 0.7s ease forwards;
          animation-delay: 0.4s;
        }
        .fade-in-4 {
          opacity: 0;
          animation: fadeInUp 0.7s ease forwards;
          animation-delay: 0.55s;
        }
        .fade-in-5 {
          opacity: 0;
          animation: fadeInUp 0.7s ease forwards;
          animation-delay: 0.7s;
        }

        .stat-card {
          transition: box-shadow 0.3s ease, transform 0.3s ease;
          cursor: default;
        }
        .stat-card:hover {
          box-shadow: 0 0 32px rgba(249, 115, 22, 0.25), 0 0 0 1px rgba(249, 115, 22, 0.35);
          transform: translateY(-2px);
        }

        .topic-pill {
          transition: background 0.25s ease, transform 0.2s ease;
        }
        .topic-pill:hover {
          background: rgba(249, 115, 22, 0.12) !important;
          transform: translateY(-1px);
        }

        .cta-primary {
          transition: opacity 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
        }
        .cta-primary:hover {
          opacity: 0.92;
          transform: translateY(-1px);
          box-shadow: 0 8px 32px rgba(249, 115, 22, 0.4);
        }

        .cta-secondary {
          transition: color 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
        }
        .cta-secondary:hover {
          color: #F97316 !important;
          border-color: rgba(249, 115, 22, 0.6) !important;
          transform: translateY(-1px);
        }

        .nav-link {
          transition: color 0.2s ease;
        }
        .nav-link:hover {
          color: #F97316 !important;
        }

        .dot-grid {
          background-image: radial-gradient(circle, rgba(249,115,22,0.18) 1px, transparent 1px);
          background-size: 28px 28px;
        }

        .glow-badge {
          animation: pulse-glow 3s ease-in-out infinite;
        }
      `}</style>

      {/* NAV */}
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          backgroundColor: 'rgba(12, 12, 12, 0.75)',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
        }}
      >
        <div
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            padding: '0 24px',
            height: '64px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #F97316, #FB923C)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                fontSize: '14px',
                color: '#0C0C0C',
              }}
            >
              VM
            </div>
            <span
              style={{
                fontWeight: 600,
                fontSize: '15px',
                backgroundImage: 'linear-gradient(135deg, #F97316, #FB923C)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                color: 'transparent',
              }}
            >
              Víctor Mago
            </span>
          </div>

          {/* Nav links */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '32px',
            }}
          >
            <a
              href="#sobre"
              className="nav-link"
              style={{
                color: '#94A3B8',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 500,
              }}
            >
              Sobre mí
            </a>
            <a
              href="#temas"
              className="nav-link"
              style={{
                color: '#94A3B8',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 500,
              }}
            >
              Formación
            </a>
            <a
              href="#cta"
              style={{
                padding: '8px 18px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #F97316, #FB923C)',
                color: '#0C0C0C',
                textDecoration: 'none',
                fontSize: '13px',
                fontWeight: 700,
                transition: 'opacity 0.2s',
              }}
            >
              Webinar gratis
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          paddingTop: '64px',
        }}
      >
        {/* Dot grid texture */}
        <div
          className="dot-grid"
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.5,
          }}
        />

        {/* Radial gradient overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(249,115,22,0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        {/* Bottom fade */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '200px',
            background: 'linear-gradient(to bottom, transparent, #0C0C0C)',
            pointerEvents: 'none',
          }}
        />

        <div
          style={{
            position: 'relative',
            zIndex: 1,
            maxWidth: '820px',
            margin: '0 auto',
            padding: '80px 24px',
            textAlign: 'center',
          }}
        >
          {/* Badge */}
          <div
            className={mounted ? 'fade-in-1 glow-badge' : ''}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '100px',
              backgroundColor: 'rgba(249,115,22,0.1)',
              border: '1px solid rgba(249,115,22,0.3)',
              fontSize: '12px',
              fontWeight: 600,
              color: '#FB923C',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              marginBottom: '40px',
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: '#F97316',
                display: 'inline-block',
              }}
            />
            EU AI Act 2026
          </div>

          {/* H1 */}
          <h1
            className={mounted ? 'fade-in-2' : ''}
            style={{
              fontSize: 'clamp(36px, 6vw, 72px)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              margin: '0 0 24px 0',
            }}
          >
            La IA no te va a{' '}
            <span
              style={{
                backgroundImage: 'linear-gradient(135deg, #F97316, #FB923C)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                color: 'transparent',
              }}
            >
              quitar el trabajo.
            </span>
          </h1>

          {/* Sub */}
          <p
            className={mounted ? 'fade-in-3' : ''}
            style={{
              fontSize: 'clamp(22px, 3.5vw, 36px)',
              fontWeight: 300,
              color: '#94A3B8',
              margin: '0 0 20px 0',
              letterSpacing: '-0.01em',
            }}
          >
            Si aprendes a{' '}
            <span style={{ color: '#FFFFFF', fontWeight: 500 }}>
              gobernarla.
            </span>
          </p>

          {/* Desc */}
          <p
            className={mounted ? 'fade-in-3' : ''}
            style={{
              fontSize: '16px',
              color: '#64748B',
              maxWidth: '520px',
              margin: '0 auto 48px auto',
              lineHeight: 1.7,
            }}
          >
            Consultor y formador de IA. Especialista en EU AI Act.
            Co-fundador de{' '}
            <span style={{ color: '#94A3B8', fontWeight: 500 }}>NorteIA.</span>
          </p>

          {/* CTAs */}
          <div
            className={mounted ? 'fade-in-4' : ''}
            style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <a
              href="#cta"
              className="cta-primary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '14px 28px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #F97316, #FB923C)',
                color: '#0C0C0C',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '15px',
              }}
            >
              Únete al webinar gratuito
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 8H13M13 8L9 4M13 8L9 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="https://norteai.es"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-secondary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '14px 28px',
                borderRadius: '10px',
                backgroundColor: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#94A3B8',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '15px',
              }}
            >
              Ver NorteIA →
            </a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section
        style={{
          padding: '80px 24px',
          maxWidth: '1100px',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '16px',
          }}
        >
          {[
            { value: '+500', label: 'Profesionales formados', icon: '👥' },
            { value: '3 años', label: 'Especialización en IA', icon: '🧠' },
            { value: '100%', label: 'Cumplimiento EU AI Act', icon: '🛡️' },
            { value: '4.9★', label: 'Valoración media', icon: '⭐' },
          ].map((stat, i) => (
            <div
              key={i}
              className="stat-card"
              style={{
                padding: '28px 24px',
                borderRadius: '16px',
                backgroundColor: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(249,115,22,0.2)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
              }}
            >
              <div style={{ fontSize: '28px', marginBottom: '12px' }}>
                {stat.icon}
              </div>
              <div
                style={{
                  fontSize: '32px',
                  fontWeight: 800,
                  backgroundImage: 'linear-gradient(135deg, #F97316, #FB923C)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  color: 'transparent',
                  letterSpacing: '-0.02em',
                  marginBottom: '6px',
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: '14px',
                  color: '#94A3B8',
                  fontWeight: 500,
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
        id="sobre"
        style={{
          position: 'relative',
          padding: '100px 24px',
          overflow: 'hidden',
        }}
      >
        {/* Subtle gradient bg */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse 60% 70% at 20% 50%, rgba(249,115,22,0.05) 0%, transparent 60%)',
            pointerEvents: 'none',
          }}
        />

        <div
          style={{
            position: 'relative',
            zIndex: 1,
            maxWidth: '1100px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '64px',
            alignItems: 'center',
          }}
        >
          {/* Left */}
          <div>
            <p
              style={{
                fontSize: '12px',
                fontWeight: 700,
                color: '#F97316',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '16px',
              }}
            >
              Sobre mí
            </p>
            <h2
              style={{
                fontSize: 'clamp(28px, 4vw, 44px)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 1.15,
                margin: '0 0 24px 0',
              }}
            >
              Hago que la IA sea
              <br />
              <span
                style={{
                  backgroundImage: 'linear-gradient(135deg, #F97316, #FB923C)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  color: 'transparent',
                }}
              >
                comprensible y accionable.
              </span>
            </h2>
            <p
              style={{
                fontSize: '16px',
                color: '#64748B',
                lineHeight: 1.8,
                margin: '0 0 16px 0',
              }}
            >
              Llevo años ayudando a empresas y profesionales a entender qué
              significa la inteligencia artificial en la práctica — no como
              tendencia, sino como herramienta concreta que transforma procesos
              reales.
            </p>
            <p
              style={{
                fontSize: '16px',
                color: '#64748B',
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              Soy co-fundador de NorteIA, donde construimos soluciones de IA
              para empresas en A Coruña y el resto de España. Especialista
              certificado en el cumplimiento del EU AI Act.
            </p>
          </div>

          {/* Right — avatar placeholder with gradient */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                width: '280px',
                height: '280px',
                borderRadius: '24px',
                background:
                  'linear-gradient(135deg, rgba(249,115,22,0.15), rgba(251,146,60,0.05))',
                border: '1px solid rgba(249,115,22,0.25)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
              }}
            >
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #F97316, #FB923C)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '32px',
                  fontWeight: 800,
                  color: '#0C0C0C',
                }}
              >
                V
              </div>
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{ fontWeight: 700, fontSize: '18px', color: '#FFFFFF' }}
                >
                  Víctor Mago
                </div>
                <div style={{ fontSize: '13px', color: '#94A3B8', marginTop: '4px' }}>
                  Consultor IA · Co-fundador NorteIA
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEMAS */}
      <section
        id="temas"
        style={{
          padding: '100px 24px',
          maxWidth: '1100px',
          margin: '0 auto',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <p
            style={{
              fontSize: '12px',
              fontWeight: 700,
              color: '#F97316',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '16px',
            }}
          >
            Formación
          </p>
          <h2
            style={{
              fontSize: 'clamp(26px, 4vw, 40px)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              margin: 0,
            }}
          >
            Temas que trabajo
          </h2>
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px',
            justifyContent: 'center',
          }}
        >
          {[
            'EU AI Act y cumplimiento normativo',
            'IA para equipos comerciales',
            'Automatización con n8n',
            'Prompting avanzado',
            'Inteligencia artificial generativa',
            'Integración de IA en procesos',
            'Gestión del cambio con IA',
            'Agentes IA autónomos',
            'IA responsable y ética',
            'Formación para directivos',
            'ChatGPT en entornos empresariales',
            'Casos de uso reales',
          ].map((topic, i) => (
            <div
              key={i}
              className="topic-pill"
              style={{
                padding: '10px 20px',
                borderRadius: '100px',
                backgroundColor: 'rgba(249,115,22,0.06)',
                border: '1px solid rgba(249,115,22,0.2)',
                fontSize: '14px',
                fontWeight: 500,
                color: '#CBD5E1',
                cursor: 'default',
              }}
            >
              {topic}
            </div>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section
        id="cta"
        style={{
          padding: '0 24px 100px 24px',
        }}
      >
        <div
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            borderRadius: '24px',
            background: 'linear-gradient(135deg, #F97316, #FB923C)',
            padding: 'clamp(48px, 6vw, 72px) clamp(32px, 5vw, 64px)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Subtle inner pattern */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage:
                'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
              pointerEvents: 'none',
            }}
          />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <p
              style={{
                fontSize: '12px',
                fontWeight: 700,
                color: 'rgba(0,0,0,0.5)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '16px',
              }}
            >
              Próximo evento
            </p>
            <h2
              style={{
                fontSize: 'clamp(24px, 4vw, 38px)',
                fontWeight: 800,
                color: '#0C0C0C',
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
                margin: '0 0 16px 0',
              }}
            >
              Webinar gratuito:{' '}
              <span style={{ display: 'block' }}>
                Cómo implementar IA sin caer en la trampa.
              </span>
            </h2>
            <p
              style={{
                fontSize: '16px',
                color: 'rgba(0,0,0,0.6)',
                marginBottom: '36px',
                lineHeight: 1.6,
                maxWidth: '500px',
                margin: '0 auto 36px auto',
              }}
            >
              Una sesión práctica para entender el EU AI Act, evitar errores
              comunes y empezar con IA de forma segura y efectiva.
            </p>
            <div
              style={{
                display: 'flex',
                gap: '14px',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <a
                href="mailto:victor@norteai.es"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '14px 28px',
                  borderRadius: '10px',
                  backgroundColor: '#0C0C0C',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  fontWeight: 700,
                  fontSize: '15px',
                  transition: 'opacity 0.2s',
                }}
              >
                Únete al webinar gratuito
              </a>
              <a
                href="https://norteai.es"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '14px 28px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(0,0,0,0.12)',
                  border: '1px solid rgba(0,0,0,0.15)',
                  color: 'rgba(0,0,0,0.75)',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '15px',
                }}
              >
                Ver NorteIA →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          padding: '48px 24px',
        }}
      >
        <div
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px',
          }}
        >
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '7px',
                background: 'linear-gradient(135deg, #F97316, #FB923C)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                fontSize: '12px',
                color: '#0C0C0C',
              }}
            >
              VM
            </div>
            <span style={{ color: '#64748B', fontSize: '13px', fontWeight: 500 }}>
              Víctor Mago — Consultor IA
            </span>
          </div>

          {/* Links */}
          <div
            style={{
              display: 'flex',
              gap: '24px',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <a
              href="https://norteai.es"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
              style={{
                color: '#64748B',
                textDecoration: 'none',
                fontSize: '13px',
                fontWeight: 500,
              }}
            >
              NorteIA
            </a>
            <a
              href="mailto:victor@norteai.es"
              className="nav-link"
              style={{
                color: '#64748B',
                textDecoration: 'none',
                fontSize: '13px',
                fontWeight: 500,
              }}
            >
              Contacto
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
              style={{
                color: '#64748B',
                textDecoration: 'none',
                fontSize: '13px',
                fontWeight: 500,
              }}
            >
              LinkedIn
            </a>
            <Link
              href="/demo"
              style={{
                color: '#F97316',
                textDecoration: 'none',
                fontSize: '13px',
                fontWeight: 600,
              }}
            >
              ← Volver a demos
            </Link>
          </div>
        </div>

        <div
          style={{
            maxWidth: '1100px',
            margin: '32px auto 0 auto',
            paddingTop: '24px',
            borderTop: '1px solid rgba(255,255,255,0.04)',
            textAlign: 'center',
          }}
        >
          <p style={{ color: '#334155', fontSize: '12px', margin: 0 }}>
            © 2026 Víctor Mago. Co-fundador de NorteIA — A Coruña, España.
          </p>
        </div>
      </footer>
    </div>
  )
}
