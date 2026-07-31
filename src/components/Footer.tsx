import Link from 'next/link'
import { C } from '@/lib/theme'
import { SOCIAL, NAP } from '@/lib/site'

const navLinks = [
  { label: 'Sobre mí', href: '/sobre-mi' },
  { label: 'Casos', href: '/casos' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contacto', href: '/contacto' },
]

export default function Footer() {
  return (
    <footer style={{ borderTop: `1px solid ${C.border}`, padding: 'clamp(40px, 5vw, 64px) clamp(24px, 5vw, 64px) clamp(28px, 3vw, 40px)' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>

        {/* Top row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 40, marginBottom: 48 }}>

          {/* Brand + NAP */}
          <div>
            <p style={{ fontFamily: C.fontDisplay, fontStretch: '125%' as never, fontSize: 21, fontWeight: 800, letterSpacing: '-0.02em', textTransform: 'uppercase', color: C.white, marginBottom: 8 }}>
              Víctor Mago<span style={{ color: C.copper }}>.</span>
            </p>
            <p style={{ fontFamily: C.fontBody, fontSize: 12, color: C.muted, letterSpacing: '0.08em', lineHeight: 1.6 }}>
              Consultor de IA y automatización<br />{NAP.locality}, {NAP.region} (España)
            </p>
          </div>

          {/* Nav */}
          <div>
            <p style={{ fontFamily: C.fontBody, fontSize: 10, fontWeight: 600, letterSpacing: '0.20em', textTransform: 'uppercase', color: C.muted, marginBottom: 16 }}>Navegación</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {navLinks.map(l => (
                <Link key={l.href} href={l.href} style={{ fontFamily: C.fontBody, fontSize: 13, color: C.mutedLight, textDecoration: 'none', letterSpacing: '0.04em', transition: 'color 0.2s' }}>
                  {l.label}
                </Link>
              ))}
              <Link href="/recursos/automatizaciones-procuradores" style={{ fontFamily: C.fontBody, fontSize: 13, color: C.mutedLight, textDecoration: 'none', letterSpacing: '0.04em' }}>
                Recursos gratis
              </Link>
            </div>
          </div>

          {/* Social */}
          <div>
            <p style={{ fontFamily: C.fontBody, fontSize: 10, fontWeight: 600, letterSpacing: '0.20em', textTransform: 'uppercase', color: C.muted, marginBottom: 16 }}>Encuéntrame en</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer" style={{ fontFamily: C.fontBody, fontSize: 13, color: C.mutedLight, letterSpacing: '0.04em' }}>LinkedIn →</a>
              <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" style={{ fontFamily: C.fontBody, fontSize: 13, color: C.mutedLight, letterSpacing: '0.04em' }}>Instagram →</a>
              <a href={`mailto:${SOCIAL.email}`} style={{ fontFamily: C.fontBody, fontSize: 13, color: C.mutedLight, letterSpacing: '0.04em' }}>{SOCIAL.email}</a>
            </div>
          </div>
        </div>

        {/* NorteIA — enlace explícito del brief */}
        <div style={{ borderTop: `1.5px solid ${C.border}`, borderBottom: `1.5px solid ${C.border}`, padding: '18px 0', textAlign: 'center', marginBottom: 4 }}>
          <a href={SOCIAL.norteia} target="_blank" rel="noopener noreferrer" style={{ fontFamily: C.fontMono, fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase', color: C.copper, textDecoration: 'none' }}>
            Los proyectos los ejecuto con NorteIA →
          </a>
        </div>

        {/* Bottom row */}
        <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontFamily: C.fontBody, fontSize: 11, color: C.muted }}>
            © 2026 Víctor Mago
          </p>
          <p style={{ fontFamily: C.fontBody, fontSize: 11, color: C.muted }}>
            {NAP.locality}, España
          </p>
        </div>
      </div>
    </footer>
  )
}
