'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { C } from '@/lib/theme'
import { CTA_LABEL, ctaHref, CAL_URL } from '@/lib/site'

// Navegación: máximo 5 items + un único CTA primario (regla del brief).
const navLinks = [
  { label: 'Sobre mí', href: '/sobre-mi' },
  { label: 'Casos', href: '/casos' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contacto', href: '/contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    if (!isMobile) setMobileOpen(false)
  }, [isMobile])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const closeMobile = () => setMobileOpen(false)
  const ctaExternal = Boolean(CAL_URL)
  const CtaTag = ctaExternal ? 'a' : Link

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '0 clamp(20px, 4vw, 56px)',
        height: 64,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: scrolled || mobileOpen ? 'color-mix(in srgb, var(--bg) 96%, transparent)' : 'transparent',
        backdropFilter: scrolled || mobileOpen ? 'blur(12px)' : 'none',
        borderBottom: scrolled || mobileOpen ? `1px solid ${C.border}` : '1px solid transparent',
        transition: 'all 0.4s ease',
      }}>
        <Link href="/" onClick={closeMobile} style={{ textDecoration: 'none' }}>
          <span style={{ fontFamily: C.fontDisplay, fontStretch: '125%' as never, fontSize: 19, fontWeight: 800, letterSpacing: '-0.02em', textTransform: 'uppercase', color: C.white }}>
            Víctor Mago<span style={{ color: C.copper }}>.</span>
          </span>
        </Link>

        {/* ── Desktop nav ── */}
        {!isMobile && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} style={{
                fontFamily: C.fontBody, fontSize: 11, fontWeight: 400,
                letterSpacing: '0.16em', textTransform: 'uppercase', color: C.mutedLight,
                textDecoration: 'none', transition: 'color 0.2s',
              }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                {link.label}
              </Link>
            ))}

            <CtaTag
              href={ctaHref()}
              {...(ctaExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              style={{
                fontFamily: C.fontBody, fontSize: 14, fontWeight: 600,
                background: C.orange, color: C.ctaText, padding: '10px 24px',
                borderRadius: 999,
                textDecoration: 'none', transition: 'opacity 0.2s',
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLElement>) => (e.currentTarget.style.opacity = '0.85')}
              onMouseLeave={(e: React.MouseEvent<HTMLElement>) => (e.currentTarget.style.opacity = '1')}
            >
              {CTA_LABEL} →
            </CtaTag>
          </div>
        )}

        {/* ── Hamburger (móvil) ── */}
        {isMobile && (
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileOpen}
            style={{
              background: 'none', border: 'none', padding: '10px 8px',
              cursor: 'pointer', display: 'flex', flexDirection: 'column',
              justifyContent: 'center', alignItems: 'center', gap: 5, width: 44, height: 44,
            }}
          >
            <span style={{ display: 'block', width: 22, height: 1.5, background: C.white, transition: 'transform 0.3s ease, opacity 0.3s ease', transform: mobileOpen ? 'translateY(6.5px) rotate(45deg)' : 'none' }} />
            <span style={{ display: 'block', width: 22, height: 1.5, background: C.white, transition: 'opacity 0.3s ease', opacity: mobileOpen ? 0 : 1 }} />
            <span style={{ display: 'block', width: 22, height: 1.5, background: C.white, transition: 'transform 0.3s ease, opacity 0.3s ease', transform: mobileOpen ? 'translateY(-6.5px) rotate(-45deg)' : 'none' }} />
          </button>
        )}
      </nav>

      {/* ── Menú móvil ── */}
      {isMobile && (
        <div style={{
          position: 'fixed', top: 64, left: 0, right: 0, bottom: 0, zIndex: 99,
          background: 'color-mix(in srgb, var(--bg) 98%, transparent)',
          backdropFilter: 'blur(16px)',
          overflowY: 'auto',
          padding: '32px clamp(20px, 6vw, 48px) 48px',
          display: 'flex', flexDirection: 'column',
          opacity: mobileOpen ? 1 : 0,
          transform: mobileOpen ? 'translateY(0)' : 'translateY(-12px)',
          pointerEvents: mobileOpen ? 'auto' : 'none',
          transition: 'opacity 0.28s ease, transform 0.28s ease',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', borderTop: `1px solid ${C.border}` }}>
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} onClick={closeMobile} style={{
                fontFamily: C.fontBody, fontSize: 13, fontWeight: 400,
                letterSpacing: '0.16em', textTransform: 'uppercase',
                color: C.mutedLight, textDecoration: 'none',
                padding: '18px 0',
                borderBottom: `1px solid ${C.border}`,
                transition: 'color 0.2s',
              }}>
                {link.label}
              </Link>
            ))}
          </div>

          <div style={{ marginTop: 36 }}>
            <CtaTag
              href={ctaHref()}
              {...(ctaExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              onClick={closeMobile}
              style={{
                display: 'block', textAlign: 'center',
                fontFamily: C.fontBody, fontSize: 15, fontWeight: 600,
                background: C.orange, color: C.ctaText, padding: '16px 32px',
                borderRadius: 999,
                textDecoration: 'none',
              }}>
              {CTA_LABEL} →
            </CtaTag>
          </div>
        </div>
      )}
    </>
  )
}
