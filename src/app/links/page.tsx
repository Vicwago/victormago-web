import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { C } from '@/lib/theme'
import { SOCIAL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Enlaces — Víctor Mago',
  description: 'Todos mis enlaces: reserva 20 minutos, recursos gratis, casos y newsletter.',
  alternates: { canonical: '/links' },
  robots: { index: false, follow: true },
}

// Página para la bio de Instagram/TikTok: nuestro "linktree" con marca propia.
// Todos los enlaces llevan UTM para medir qué trae cada red.
const enlaces = [
  { label: 'Reserva 20 min gratis', href: '/contacto?utm_source=bio&utm_medium=social&utm_campaign=links', destacado: true },
  { label: 'Diagnóstico exprés (3 min, gratis)', href: '/diagnostico?utm_source=bio&utm_medium=social&utm_campaign=links', destacado: false },
  { label: 'PDF: 5 automatizaciones para tu pyme', href: '/recursos/automatizaciones-pymes?utm_source=bio&utm_medium=social&utm_campaign=links', destacado: false },
  { label: 'Casos reales', href: '/casos?utm_source=bio&utm_medium=social&utm_campaign=links', destacado: false },
  { label: 'Blog: IA aplicada al negocio', href: '/blog?utm_source=bio&utm_medium=social&utm_campaign=links', destacado: false },
  { label: 'NorteIA — mi agencia', href: 'https://norteia.es?utm_source=victormago&utm_medium=links', destacado: false, externo: true },
]

export default function LinksPage() {
  return (
    <div style={{ background: C.bg, minHeight: '100vh', color: C.white, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '48px 20px' }} className="paper-grain">
      <div style={{ width: 'min(420px, 100%)', textAlign: 'center' }}>
        <div style={{ position: 'relative', width: 88, height: 88, borderRadius: '50%', overflow: 'hidden', border: `2.5px solid ${C.copper}`, margin: '0 auto 16px' }}>
          <Image src="/victor-mago.webp" alt="Víctor Mago" fill sizes="88px" style={{ objectFit: 'cover', objectPosition: 'center top' }} />
        </div>
        <h1 style={{ fontFamily: C.fontDisplay, fontStretch: '125%' as never, fontWeight: 800, fontSize: 26, letterSpacing: '-0.02em', textTransform: 'uppercase', marginBottom: 6 }}>
          Víctor Mago<span style={{ color: C.copper }}>.</span>
        </h1>
        <p style={{ fontFamily: C.fontBody, fontSize: 13.5, fontWeight: 300, color: C.mutedLight, marginBottom: 28 }}>
          Consultor de IA y automatización · A Coruña
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {enlaces.map(e => {
            const style: React.CSSProperties = {
              display: 'block',
              fontFamily: C.fontBody,
              fontWeight: 600,
              fontSize: 15,
              padding: '16px 24px',
              borderRadius: 999,
              background: e.destacado ? C.orange : 'var(--surface)',
              color: e.destacado ? C.ctaText : C.white,
              border: e.destacado ? '1.5px solid transparent' : `1.5px solid ${C.border}`,
            }
            return 'externo' in e && e.externo
              ? <a key={e.label} href={e.href} target="_blank" rel="noopener noreferrer" style={style}>{e.label}</a>
              : <Link key={e.label} href={e.href} style={style}>{e.label}</Link>
          })}
        </div>

        <p style={{ fontFamily: C.fontMono, fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: C.muted, marginTop: 28 }}>
          <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>@vicwago</a>
          {' · '}
          <a href={`mailto:${SOCIAL.email}`} style={{ color: 'inherit' }}>{SOCIAL.email}</a>
        </p>
      </div>
    </div>
  )
}
