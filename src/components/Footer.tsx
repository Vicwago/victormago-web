import Link from 'next/link'
import { C } from '@/lib/theme'

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/victormagoheredia/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/vicwago/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
  },
  {
    label: 'NorteIA',
    href: 'https://norteia.es',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer style={{ borderTop: `1px solid ${C.border}`, padding: 'clamp(40px, 5vw, 64px) clamp(24px, 5vw, 64px) clamp(28px, 3vw, 40px)' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>

        {/* Top row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 40, marginBottom: 48 }}>

          {/* Brand */}
          <div>
            <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: 22, fontWeight: 600, letterSpacing: '0.12em', color: C.white, marginBottom: 8 }}>
              VICTOR <span style={{ color: C.copper }}>MAGO</span>
            </p>
            <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 12, color: C.muted, letterSpacing: '0.08em', lineHeight: 1.6 }}>
              Consultor y formador de IA<br />A Coruña, España
            </p>
          </div>

          {/* Nav */}
          <div>
            <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 10, fontWeight: 600, letterSpacing: '0.20em', textTransform: 'uppercase', color: C.muted, marginBottom: 16 }}>Navegación</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { label: 'Conóceme', href: '/conoceme' },
                { label: 'Servicios', href: '/servicios' },
                { label: 'Contacto', href: '/contacto' },
              ].map(l => (
                <Link key={l.href} href={l.href} style={{ fontFamily: 'var(--font-outfit)', fontSize: 13, color: C.mutedLight, textDecoration: 'none', letterSpacing: '0.04em', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = C.copper)}
                  onMouseLeave={e => (e.currentTarget.style.color = C.mutedLight)}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social + NorteIA */}
          <div>
            <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 10, fontWeight: 600, letterSpacing: '0.20em', textTransform: 'uppercase', color: C.muted, marginBottom: 16 }}>Encuéntrame en</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {socialLinks.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 10, color: C.mutedLight, textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = C.copper)}
                  onMouseLeave={e => (e.currentTarget.style.color = C.mutedLight)}
                >
                  {s.icon}
                  <span style={{ fontFamily: 'var(--font-outfit)', fontSize: 13, letterSpacing: '0.04em' }}>{s.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 11, color: C.muted }}>
            © 2026 Víctor Mago · Powered by{' '}
            <a href="https://norteia.es" target="_blank" rel="noopener noreferrer" style={{ color: C.copper, textDecoration: 'none' }}>NorteIA</a>
          </p>
          <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 11, color: C.muted }}>
            A Coruña, España
          </p>
        </div>
      </div>
    </footer>
  )
}
