'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Cormorant_Garamond, Outfit } from 'next/font/google'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-cormorant',
})

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-outfit',
})

export default function LuxuryDemo() {
  const [mounted, setMounted] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div
      className={`${cormorant.variable} ${outfit.variable}`}
      style={{
        backgroundColor: '#0F0E0C',
        color: '#F0EBE1',
        minHeight: '100vh',
        fontFamily: 'var(--font-outfit), sans-serif',
        opacity: mounted ? 1 : 0,
        transition: 'opacity 0.8s ease',
      }}
    >
      <style>{`
        :root {
          --bg: #0F0E0C;
          --bg-card: #1A1916;
          --accent: #C4956A;
          --accent-hot: #F97316;
          --text: #F0EBE1;
          --muted: #8A8174;
          --border: rgba(196,149,106,0.2);
          --font-display: var(--font-cormorant), Georgia, serif;
          --font-body: var(--font-outfit), system-ui, sans-serif;
        }

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .lux-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 24px 64px;
          border-bottom: 1px solid var(--border);
          background: rgba(15,14,12,0.92);
          backdrop-filter: blur(12px);
        }

        .lux-logo {
          font-family: var(--font-display);
          font-size: 28px;
          font-weight: 500;
          letter-spacing: 0.08em;
          color: var(--accent);
          text-decoration: none;
        }

        .lux-nav-links {
          display: flex;
          gap: 48px;
          list-style: none;
        }

        .lux-nav-links a {
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 400;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--muted);
          text-decoration: none;
          transition: color 0.4s ease;
        }

        .lux-nav-links a:hover {
          color: var(--text);
        }

        .lux-btn-nav {
          font-family: var(--font-body);
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--bg);
          background: var(--accent);
          border: none;
          padding: 10px 24px;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
          transition: background 0.4s ease, transform 0.4s ease;
        }

        .lux-btn-nav:hover {
          background: var(--accent-hot);
          transform: translateY(-1px);
        }

        .lux-hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 140px 64px 80px;
          position: relative;
          overflow: hidden;
        }

        .lux-hero::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 45%;
          height: 100%;
          background: linear-gradient(135deg, rgba(196,149,106,0.04) 0%, rgba(249,115,22,0.02) 100%);
          pointer-events: none;
        }

        .lux-hero-content {
          max-width: 680px;
          position: relative;
          z-index: 1;
        }

        .lux-eyebrow {
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 32px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .lux-eyebrow::before {
          content: '';
          display: inline-block;
          width: 32px;
          height: 1px;
          background: var(--accent);
        }

        .lux-h1 {
          font-family: var(--font-display);
          font-size: clamp(52px, 7vw, 88px);
          font-weight: 300;
          line-height: 1.05;
          letter-spacing: -0.01em;
          color: var(--text);
          margin-bottom: 24px;
        }

        .lux-h1 em {
          font-style: italic;
          color: var(--accent);
        }

        .lux-sub {
          font-family: var(--font-display);
          font-size: clamp(24px, 3.5vw, 40px);
          font-weight: 300;
          font-style: italic;
          color: var(--muted);
          margin-bottom: 32px;
          line-height: 1.3;
        }

        .lux-desc {
          font-family: var(--font-body);
          font-size: 16px;
          font-weight: 300;
          line-height: 1.8;
          color: var(--muted);
          margin-bottom: 56px;
          max-width: 480px;
        }

        .lux-cta-group {
          display: flex;
          gap: 20px;
          align-items: center;
          flex-wrap: wrap;
        }

        .lux-btn-primary {
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--bg);
          background: var(--accent);
          border: none;
          padding: 16px 36px;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
          transition: background 0.4s ease, transform 0.4s ease, box-shadow 0.4s ease;
        }

        .lux-btn-primary:hover {
          background: var(--accent-hot);
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(249,115,22,0.25);
        }

        .lux-btn-ghost {
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 400;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--accent);
          background: transparent;
          border: 1px solid var(--border);
          padding: 15px 36px;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
          transition: border-color 0.4s ease, color 0.4s ease, transform 0.4s ease;
        }

        .lux-btn-ghost:hover {
          border-color: var(--accent);
          color: var(--text);
          transform: translateY(-2px);
        }

        .lux-hero-photo {
          position: absolute;
          right: 64px;
          top: 50%;
          transform: translateY(-50%);
          width: min(380px, 35vw);
          aspect-ratio: 3/4;
          background: var(--bg-card);
          border: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .lux-hero-photo::after {
          content: 'VM';
          font-family: var(--font-display);
          font-size: 72px;
          font-weight: 300;
          color: var(--border);
          letter-spacing: 0.1em;
        }

        .lux-hero-photo-accent {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--accent), var(--accent-hot));
        }

        .lux-section {
          padding: 120px 64px;
        }

        .lux-section-alt {
          background: var(--bg-card);
        }

        .lux-stats {
          padding: 64px;
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }

        .lux-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
        }

        .lux-stat {
          padding: 40px 32px;
          border-right: 1px solid var(--border);
          text-align: center;
        }

        .lux-stat:last-child {
          border-right: none;
        }

        .lux-stat-number {
          font-family: var(--font-display);
          font-size: 48px;
          font-weight: 300;
          color: var(--accent);
          display: block;
          margin-bottom: 8px;
          letter-spacing: -0.02em;
        }

        .lux-stat-label {
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--muted);
        }

        .lux-section-label {
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 24px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .lux-section-label::before {
          content: '';
          display: inline-block;
          width: 24px;
          height: 1px;
          background: var(--accent);
        }

        .lux-h2 {
          font-family: var(--font-display);
          font-size: clamp(36px, 4.5vw, 58px);
          font-weight: 300;
          line-height: 1.15;
          letter-spacing: -0.01em;
          color: var(--text);
          margin-bottom: 32px;
        }

        .lux-h2 em {
          font-style: italic;
          color: var(--accent);
        }

        .lux-body-text {
          font-family: var(--font-body);
          font-size: 17px;
          font-weight: 300;
          line-height: 1.9;
          color: var(--muted);
          max-width: 600px;
        }

        .lux-about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .lux-about-image {
          aspect-ratio: 4/5;
          background: var(--bg);
          border: 1px solid var(--border);
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .lux-about-image::after {
          content: 'Víctor Mago';
          font-family: var(--font-display);
          font-size: 22px;
          font-weight: 300;
          font-style: italic;
          color: rgba(196,149,106,0.3);
          letter-spacing: 0.06em;
        }

        .lux-about-image-bar {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 3px;
          background: linear-gradient(180deg, var(--accent), var(--accent-hot));
        }

        .lux-topics {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 40px;
        }

        .lux-pill {
          font-family: var(--font-body);
          font-size: 12px;
          font-weight: 400;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--accent);
          border: 1px solid var(--border);
          padding: 10px 20px;
          display: inline-block;
          transition: background 0.4s ease, border-color 0.4s ease, color 0.4s ease;
          cursor: default;
        }

        .lux-pill:hover {
          background: rgba(196,149,106,0.08);
          border-color: var(--accent);
          color: var(--text);
        }

        .lux-banner {
          padding: 100px 64px;
          background: linear-gradient(135deg, #1A1916 0%, #0F0E0C 100%);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .lux-banner::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 60% 80% at 50% 50%, rgba(196,149,106,0.05) 0%, transparent 70%);
          pointer-events: none;
        }

        .lux-banner-content {
          position: relative;
          z-index: 1;
          max-width: 720px;
          margin: 0 auto;
        }

        .lux-banner-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--accent-hot);
          border: 1px solid rgba(249,115,22,0.3);
          padding: 8px 18px;
          margin-bottom: 36px;
        }

        .lux-banner-badge::before {
          content: '●';
          font-size: 8px;
          animation: pulse 2s ease infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        .lux-banner-h2 {
          font-family: var(--font-display);
          font-size: clamp(38px, 5vw, 64px);
          font-weight: 300;
          line-height: 1.1;
          color: var(--text);
          margin-bottom: 20px;
        }

        .lux-banner-sub {
          font-family: var(--font-body);
          font-size: 17px;
          font-weight: 300;
          line-height: 1.8;
          color: var(--muted);
          margin-bottom: 48px;
        }

        .lux-banner-date {
          font-family: var(--font-body);
          font-size: 12px;
          font-weight: 400;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--muted);
          margin-top: 28px;
        }

        .lux-footer {
          padding: 64px;
          border-top: 1px solid var(--border);
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 48px;
          flex-wrap: wrap;
        }

        .lux-footer-logo {
          font-family: var(--font-display);
          font-size: 32px;
          font-weight: 400;
          color: var(--accent);
          letter-spacing: 0.08em;
          display: block;
          margin-bottom: 12px;
          text-decoration: none;
        }

        .lux-footer-tagline {
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 300;
          color: var(--muted);
          line-height: 1.7;
        }

        .lux-footer-links {
          display: flex;
          flex-direction: column;
          gap: 12px;
          list-style: none;
        }

        .lux-footer-links a {
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 400;
          letter-spacing: 0.1em;
          color: var(--muted);
          text-decoration: none;
          transition: color 0.4s ease;
        }

        .lux-footer-links a:hover {
          color: var(--accent);
        }

        .lux-footer-bottom {
          width: 100%;
          border-top: 1px solid var(--border);
          padding-top: 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
        }

        .lux-footer-copy {
          font-family: var(--font-body);
          font-size: 12px;
          font-weight: 300;
          color: var(--muted);
          letter-spacing: 0.08em;
        }

        .lux-back-link {
          font-family: var(--font-body);
          font-size: 12px;
          font-weight: 400;
          letter-spacing: 0.1em;
          color: var(--muted);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: color 0.4s ease;
        }

        .lux-back-link:hover {
          color: var(--accent);
        }

        .lux-divider {
          height: 1px;
          background: var(--border);
          margin: 0 64px;
        }

        @media (max-width: 1024px) {
          .lux-nav {
            padding: 20px 32px;
          }
          .lux-hero {
            padding: 120px 32px 80px;
          }
          .lux-hero-photo {
            right: 32px;
            width: min(280px, 32vw);
          }
          .lux-section {
            padding: 80px 32px;
          }
          .lux-stats {
            padding: 48px 32px;
          }
          .lux-banner {
            padding: 80px 32px;
          }
          .lux-footer {
            padding: 48px 32px;
          }
          .lux-divider {
            margin: 0 32px;
          }
          .lux-stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .lux-stat:nth-child(2) {
            border-right: none;
          }
          .lux-stat:nth-child(3) {
            border-top: 1px solid var(--border);
          }
          .lux-stat:nth-child(4) {
            border-top: 1px solid var(--border);
            border-right: none;
          }
          .lux-about-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .lux-about-image {
            aspect-ratio: 3/2;
          }
        }

        @media (max-width: 768px) {
          .lux-nav {
            padding: 18px 24px;
          }
          .lux-nav-links {
            display: none;
          }
          .lux-btn-nav {
            font-size: 11px;
            padding: 9px 18px;
          }
          .lux-hero {
            padding: 100px 24px 60px;
            flex-direction: column;
          }
          .lux-hero-content {
            max-width: 100%;
          }
          .lux-hero-photo {
            position: relative;
            right: auto;
            top: auto;
            transform: none;
            width: 100%;
            max-width: 360px;
            margin: 48px auto 0;
          }
          .lux-section {
            padding: 64px 24px;
          }
          .lux-stats {
            padding: 40px 24px;
          }
          .lux-stats-grid {
            grid-template-columns: 1fr 1fr;
          }
          .lux-banner {
            padding: 64px 24px;
          }
          .lux-footer {
            padding: 40px 24px;
            flex-direction: column;
          }
          .lux-divider {
            margin: 0 24px;
          }
          .lux-cta-group {
            flex-direction: column;
            align-items: flex-start;
          }
          .lux-btn-primary, .lux-btn-ghost {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>

      {/* NAV */}
      <nav className="lux-nav">
        <a href="#hero" className="lux-logo">VM</a>
        <ul className="lux-nav-links">
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#webinar">Webinar</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
        <a href="#webinar" className="lux-btn-nav">Reservar plaza</a>
      </nav>

      {/* HERO */}
      <section id="hero" className="lux-hero">
        <div className="lux-hero-content">
          <p className="lux-eyebrow">Consultor · Formador · Co-fundador</p>
          <h1 className="lux-h1">
            La IA no te va a<br />
            <em>quitar el trabajo.</em>
          </h1>
          <p className="lux-sub">Si aprendes a gobernarla.</p>
          <p className="lux-desc">
            Consultor y formador de IA. Especialista en EU AI Act.
            Co-fundador de NorteIA.
          </p>
          <div className="lux-cta-group">
            <a href="#webinar" className="lux-btn-primary">
              Únete al webinar gratuito
            </a>
            <a
              href="https://norteia.es"
              target="_blank"
              rel="noopener noreferrer"
              className="lux-btn-ghost"
            >
              Ver NorteIA →
            </a>
          </div>
        </div>

        <div className="lux-hero-photo">
          <div className="lux-hero-photo-accent" />
        </div>
      </section>

      <div className="lux-divider" />

      {/* STATS */}
      <section className="lux-stats">
        <div className="lux-stats-grid">
          <div className="lux-stat">
            <span className="lux-stat-number">+500</span>
            <span className="lux-stat-label">Profesionales formados</span>
          </div>
          <div className="lux-stat">
            <span className="lux-stat-number">4</span>
            <span className="lux-stat-label">Sectores especializados</span>
          </div>
          <div className="lux-stat">
            <span className="lux-stat-number">EU AI</span>
            <span className="lux-stat-label">Act — especialista</span>
          </div>
          <div className="lux-stat">
            <span className="lux-stat-number">Co-</span>
            <span className="lux-stat-label">fundador de NorteIA</span>
          </div>
        </div>
      </section>

      <div className="lux-divider" />

      {/* SOBRE */}
      <section id="sobre" className="lux-section">
        <div className="lux-about-grid">
          <div className="lux-about-image">
            <div className="lux-about-image-bar" />
          </div>
          <div>
            <p className="lux-section-label">Sobre Víctor</p>
            <h2 className="lux-h2">
              Transformo equipos que <em>dudan</em> en equipos que lideran.
            </h2>
            <p className="lux-body-text">
              Llevo años en el cruce entre negocio y tecnología. No vendo humo
              con la IA — ayudo a organizaciones a entender qué funciona, qué
              no, y qué exige la regulación europea que ya está aquí.
            </p>
            <p className="lux-body-text" style={{ marginTop: '20px' }}>
              Con NorteIA hemos construido desde cero un sistema de automatización
              inteligente para equipos que quieren trabajar mejor, no más.
              La claridad es mi herramienta. La ejecución, mi método.
            </p>

            <div className="lux-topics">
              {[
                'EU AI Act',
                'Automatización',
                'Agentes IA',
                'Gobernanza ética',
                'Formación in-company',
              ].map((topic) => (
                <span key={topic} className="lux-pill">{topic}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section id="webinar" className="lux-banner">
        <div className="lux-banner-content">
          <div className="lux-banner-badge">Plazas limitadas · Agosto 2026</div>
          <h2 className="lux-banner-h2">
            El EU AI Act entra en vigor.<br />
            ¿Está tu empresa preparada?
          </h2>
          <p className="lux-banner-sub">
            En agosto de 2026 la regulación europea de IA será de obligado
            cumplimiento para miles de empresas. En este webinar gratuito
            te explico exactamente qué debes saber, qué tienes que hacer
            y cómo evitar sanciones.
          </p>
          <a href="#contacto" className="lux-btn-primary">
            Únete al webinar gratuito
          </a>
          <p className="lux-banner-date">
            Próxima edición · Junio 2026 · Online · 90 min
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contacto" className="lux-footer">
        <div>
          <a href="#hero" className="lux-footer-logo">VM</a>
          <p className="lux-footer-tagline">
            Víctor Mago · Consultor IA<br />
            A Coruña, España
          </p>
        </div>

        <ul className="lux-footer-links">
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#webinar">Webinar</a></li>
          <li>
            <a
              href="https://norteia.es"
              target="_blank"
              rel="noopener noreferrer"
            >
              norteia.es
            </a>
          </li>
        </ul>

        <ul className="lux-footer-links">
          <li>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="mailto:victor@norteia.es"
            >
              victor@norteia.es
            </a>
          </li>
        </ul>

        <div className="lux-footer-bottom">
          <p className="lux-footer-copy">
            © 2026 Víctor Mago · norteia.es · Todos los derechos reservados
          </p>
          <Link href="/demo" className="lux-back-link">
            ← Volver a demos
          </Link>
        </div>
      </footer>
    </div>
  )
}
