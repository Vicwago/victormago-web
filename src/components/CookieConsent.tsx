'use client'
import { useEffect, useState } from 'react'
import Script from 'next/script'

// Banner de consentimiento (criterio AEPD: rechazar tan fácil como aceptar).
// GA4 SOLO se carga tras aceptar. Sin GA_ID configurado no hay cookies de
// análisis, así que el banner ni aparece.
const KEY = 'vm-cookie-consent' // 'granted' | 'denied'

export default function CookieConsent({ gaId }: { gaId?: string }) {
  const [consent, setConsent] = useState<string | null>('pending')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(KEY)
    setConsent(stored)
    setVisible(Boolean(gaId) && !stored)
    // "Preferencias de cookies" (footer / política) reabre el banner
    const reopen = () => { setVisible(true) }
    window.addEventListener('vm-open-cookie-prefs', reopen)
    return () => window.removeEventListener('vm-open-cookie-prefs', reopen)
  }, [gaId])

  const decide = (value: 'granted' | 'denied') => {
    localStorage.setItem(KEY, value)
    setConsent(value)
    setVisible(false)
    if (value === 'denied' && consent === 'granted') {
      // Retirar el consentimiento requiere recargar para dejar de medir
      window.location.reload()
    }
  }

  return (
    <>
      {gaId && consent === 'granted' && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
          <Script id="ga4" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaId}', { anonymize_ip: true });`}
          </Script>
        </>
      )}

      {visible && (
        <div role="dialog" aria-label="Aviso de cookies" style={{
          position: 'fixed', left: '50%', bottom: 'clamp(12px, 2vw, 24px)', transform: 'translateX(-50%)',
          zIndex: 300, width: 'min(680px, calc(100vw - 24px))',
          background: 'var(--surface, #FCFBF6)', border: '1.5px solid var(--border, #DCD8C8)',
          borderRadius: 16, padding: 'clamp(16px, 2.5vw, 22px)',
          boxShadow: '0 20px 50px -15px rgba(20, 18, 42, 0.35)',
          display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap',
        }}>
          <p style={{ flex: '1 1 300px', fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 300, color: 'var(--text-muted, #4E4C60)', lineHeight: 1.6, margin: 0 }}>
            Uso cookies técnicas necesarias y, solo si aceptas, cookies de analítica (Google
            Analytics) para entender cómo se usa la web.{' '}
            <a href="/politica-cookies" style={{ color: '#2C03F3', textDecoration: 'underline' }}>Política de cookies</a>
          </p>
          <div style={{ display: 'flex', gap: 10 }}>
            <button onClick={() => decide('denied')} style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 13.5, background: 'transparent', color: 'var(--text, #14122A)', border: '1.5px solid var(--border, #DCD8C8)', borderRadius: 999, padding: '10px 22px' }}>
              Rechazar
            </button>
            <button onClick={() => decide('granted')} style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 13.5, background: '#2C03F3', color: '#F5F3EB', border: '1.5px solid transparent', borderRadius: 999, padding: '10px 22px' }}>
              Aceptar
            </button>
          </div>
        </div>
      )}
    </>
  )
}
