import Link from 'next/link'
import { C } from '@/lib/theme'
import { SOCIAL, NAP } from '@/lib/site'
import NewsletterForm from '@/components/NewsletterForm'
import CookiePrefsButton from '@/components/CookiePrefsButton'

const navLinks = [
  { label: 'Sobre mí', href: '/sobre-mi' },
  { label: 'Casos', href: '/casos' },
  { label: 'Blog', href: '/blog' },
  { label: 'Diagnóstico exprés', href: '/diagnostico' },
  { label: 'Recursos gratis', href: '/recursos/automatizaciones-pymes' },
  { label: 'Contacto', href: '/contacto' },
]

const legalLinks = [
  { label: 'Aviso legal', href: '/aviso-legal' },
  { label: 'Privacidad', href: '/politica-privacidad' },
  { label: 'Cookies', href: '/politica-cookies' },
  { label: 'Mis datos', href: '/mis-datos' },
]

export default function Footer() {
  return (
    <footer style={{ borderTop: `1.5px solid ${C.border}`, padding: 'clamp(40px, 5vw, 64px) clamp(24px, 5vw, 64px) clamp(28px, 3vw, 40px)' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>

        {/* Newsletter */}
        <div style={{ borderBottom: `1.5px solid ${C.border}`, paddingBottom: 'clamp(32px, 4vw, 44px)', marginBottom: 'clamp(32px, 4vw, 44px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: 24, alignItems: 'center' }}>
          <div>
            <p style={{ fontFamily: C.fontMono, fontSize: 11, letterSpacing: '0.24em', textTransform: 'uppercase', color: C.copper, marginBottom: 10 }}>Newsletter</p>
            <p style={{ fontFamily: C.fontDisplay, fontWeight: 750, fontSize: 'clamp(20px, 2.4vw, 26px)', letterSpacing: '-0.015em', color: C.white, marginBottom: 6 }}>
              IA que Impulsa<span style={{ color: C.copper }}>.</span>
            </p>
            <p style={{ fontFamily: C.fontBody, fontSize: 13.5, fontWeight: 300, color: C.mutedLight, lineHeight: 1.6 }}>
              Una idea práctica de IA a la semana, aplicable en tu negocio esa misma semana.
            </p>
          </div>
          <NewsletterForm compact />
        </div>

        {/* Columnas */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 40, marginBottom: 40 }}>

          <div>
            <p style={{ fontFamily: C.fontDisplay, fontStretch: '125%' as never, fontSize: 21, fontWeight: 800, letterSpacing: '-0.02em', textTransform: 'uppercase', color: C.white, marginBottom: 8 }}>
              Víctor Mago<span style={{ color: C.copper }}>.</span>
            </p>
            <p style={{ fontFamily: C.fontBody, fontSize: 12, color: C.muted, letterSpacing: '0.08em', lineHeight: 1.6 }}>
              Consultor de IA y automatización<br />{NAP.locality}, {NAP.region} (España)
            </p>
          </div>

          <div>
            <p style={{ fontFamily: C.fontBody, fontSize: 10, fontWeight: 600, letterSpacing: '0.20em', textTransform: 'uppercase', color: C.muted, marginBottom: 16 }}>Navegación</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {navLinks.map(l => (
                <Link key={l.href} href={l.href} style={{ fontFamily: C.fontBody, fontSize: 13, color: C.mutedLight, textDecoration: 'none', letterSpacing: '0.04em' }}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p style={{ fontFamily: C.fontBody, fontSize: 10, fontWeight: 600, letterSpacing: '0.20em', textTransform: 'uppercase', color: C.muted, marginBottom: 16 }}>Legal</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {legalLinks.map(l => (
                <Link key={l.href} href={l.href} style={{ fontFamily: C.fontBody, fontSize: 13, color: C.mutedLight, textDecoration: 'none', letterSpacing: '0.04em' }}>
                  {l.label}
                </Link>
              ))}
              <CookiePrefsButton asLink />
              {/* TODO-VÍCTOR: cuando llegue la subvención UE, añadir aquí la página /subvencion */}
            </div>
          </div>

          <div>
            <p style={{ fontFamily: C.fontBody, fontSize: 10, fontWeight: 600, letterSpacing: '0.20em', textTransform: 'uppercase', color: C.muted, marginBottom: 16 }}>Encuéntrame en</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer" style={{ fontFamily: C.fontBody, fontSize: 13, color: C.mutedLight, letterSpacing: '0.04em' }}>LinkedIn →</a>
              <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" style={{ fontFamily: C.fontBody, fontSize: 13, color: C.mutedLight, letterSpacing: '0.04em' }}>Instagram →</a>
              <a href={`mailto:${SOCIAL.email}`} style={{ fontFamily: C.fontBody, fontSize: 13, color: C.mutedLight, letterSpacing: '0.04em' }}>{SOCIAL.email}</a>
              <a href="tel:+34637905866" style={{ fontFamily: C.fontBody, fontSize: 13, color: C.mutedLight, letterSpacing: '0.04em' }}>+34 637 90 58 66</a>
            </div>
          </div>
        </div>

        {/* NorteIA — enlace explícito del brief */}
        <div style={{ borderTop: `1.5px solid ${C.border}`, borderBottom: `1.5px solid ${C.border}`, padding: '18px 0', textAlign: 'center', marginBottom: 4 }}>
          <a href={SOCIAL.norteia} target="_blank" rel="noopener noreferrer" style={{ fontFamily: C.fontMono, fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase', color: C.copper, textDecoration: 'none' }}>
            Los proyectos los ejecuto con NorteIA →
          </a>
        </div>

        <div style={{ paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontFamily: C.fontBody, fontSize: 11, color: C.muted }}>
            © 2026 Víctor Mago. Todos los derechos reservados.
          </p>
          <p style={{ fontFamily: C.fontBody, fontSize: 11, color: C.muted }}>
            {NAP.locality}, España
          </p>
        </div>
      </div>
    </footer>
  )
}
