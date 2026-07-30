import Link from 'next/link'
import { C } from '@/lib/theme'
import { CTA_LABEL, ctaHref, CAL_URL } from '@/lib/site'

// CTA primario único de todo el sitio. Si CAL_URL está configurada apunta a
// la agenda; si no, al formulario de contacto.
export default function CtaButton({ variant = 'solid' }: { variant?: 'solid' | 'outline' }) {
  const href = ctaHref()
  const external = Boolean(CAL_URL)
  const solid = variant === 'solid'
  const style: React.CSSProperties = {
    display: 'inline-block',
    fontFamily: C.fontBody,
    fontSize: 12,
    fontWeight: 500,
    letterSpacing: '0.16em',
    textTransform: 'uppercase',
    padding: solid ? '15px 40px' : '13px 32px',
    textDecoration: 'none',
    background: solid ? C.orange : 'transparent',
    color: solid ? C.ctaText : C.copper,
    border: solid ? '1px solid transparent' : `1px solid ${C.borderCu}`,
  }
  return external
    ? <a href={href} target="_blank" rel="noopener noreferrer" style={style}>{CTA_LABEL} →</a>
    : <Link href={href} style={style}>{CTA_LABEL} →</Link>
}
