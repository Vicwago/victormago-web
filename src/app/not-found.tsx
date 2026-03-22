import Link from 'next/link'

export default function NotFound() {
  return (
    <div style={{ background: '#0A0907', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 24, color: '#F5F0E8', fontFamily: 'system-ui, sans-serif' }}>
      <p style={{ fontSize: 11, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#C4956A' }}>404</p>
      <h1 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 300 }}>Página no encontrada</h1>
      <Link href="/" style={{ fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#F97316', textDecoration: 'none' }}>
        Volver al inicio →
      </Link>
    </div>
  )
}
