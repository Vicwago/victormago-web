// Tokens de tema — apuntan a las CSS variables definidas en globals.css.
// Cambiar la dirección visual del sitio NO requiere tocar componentes:
// se cambia el bloque :root de globals.css (o se aplica una clase .theme-*).
export const C = {
  bg: 'var(--bg)',
  bgCard: 'var(--surface)',
  bgAlt: 'var(--surface-alt)',
  copper: 'var(--accent)',
  copperLight: 'var(--accent-light)',
  orange: 'var(--cta)',
  ctaText: 'var(--cta-text)',
  white: 'var(--text)',
  muted: 'var(--text-faint)',
  mutedLight: 'var(--text-muted)',
  border: 'var(--border)',
  borderCu: 'var(--border-accent)',
  fontDisplay: 'var(--font-display)',
  fontBody: 'var(--font-body)',
  fontMono: 'var(--font-mono)',
} as const

// Mezclas con transparencia (sustituyen al patrón `${hex}08` que no
// funciona con CSS variables)
export const mix = (pct: number, color = 'var(--accent)') =>
  `color-mix(in srgb, ${color} ${pct}%, transparent)`
