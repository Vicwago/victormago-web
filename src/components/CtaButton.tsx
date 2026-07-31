import Link from 'next/link'
import { CTA_LABEL, ctaHref, CAL_URL } from '@/lib/site'

// CTA primario único de todo el sitio (pill). Si CAL_URL está configurada
// apunta a la agenda; si no, al formulario de contacto.
export default function CtaButton({ variant = 'solid' }: { variant?: 'solid' | 'outline' }) {
  const href = ctaHref()
  const external = Boolean(CAL_URL)
  const className = variant === 'solid' ? 'btn-primary' : 'btn-ghost'
  return external
    ? <a className={className} href={href} target="_blank" rel="noopener noreferrer">{CTA_LABEL} →</a>
    : <Link className={className} href={href}>{CTA_LABEL} →</Link>
}
