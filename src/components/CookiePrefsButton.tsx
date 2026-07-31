'use client'

// Botón/enlace "Preferencias de cookies": reabre el banner de consentimiento.
export default function CookiePrefsButton({ asLink = false }: { asLink?: boolean }) {
  const open = () => window.dispatchEvent(new Event('vm-open-cookie-prefs'))
  if (asLink) {
    return (
      <button onClick={open} style={{ background: 'none', border: 'none', padding: 0, fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-muted)', letterSpacing: '0.04em', cursor: 'pointer', textAlign: 'left' }}>
        Preferencias de cookies
      </button>
    )
  }
  return (
    <p>
      <button onClick={open} style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 14, background: '#2C03F3', color: '#F5F3EB', border: 'none', borderRadius: 999, padding: '12px 26px', cursor: 'pointer' }}>
        Abrir preferencias de cookies
      </button>
    </p>
  )
}
