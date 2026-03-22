'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { C } from '@/lib/theme'

const serviciosItems = [
  {
    label: 'Formación IA',
    desc: 'Para equipos y directivos',
    href: '/servicios/formacion',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
  },
  {
    label: 'Consultoría',
    desc: 'Estrategia e implementación',
    href: '/servicios/consultoria',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
      </svg>
    ),
  },
  {
    label: 'EU AI Act',
    desc: 'Cumplimiento normativo',
    href: '/servicios/eu-ai-act',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [dropOpen, setDropOpen] = useState(false)
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

  // Cerrar menú móvil al pasar a desktop
  useEffect(() => {
    if (!isMobile) setMobileOpen(false)
  }, [isMobile])

  // Bloquear scroll del body cuando el menú móvil está abierto
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const closeMobile = () => setMobileOpen(false)

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '0 clamp(20px, 4vw, 56px)',
        height: 64,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: scrolled || mobileOpen ? 'rgba(10,9,7,0.96)' : 'transparent',
        backdropFilter: scrolled || mobileOpen ? 'blur(12px)' : 'none',
        borderBottom: scrolled || mobileOpen ? `1px solid ${C.border}` : '1px solid transparent',
        transition: 'all 0.4s ease',
      }}>
        <Link href="/" onClick={closeMobile} style={{ textDecoration: 'none' }}>
          <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: 20, fontWeight: 600, letterSpacing: '0.12em', color: C.white }}>
            VICTOR <span style={{ color: C.copper }}>MAGO</span>
          </span>
        </Link>

        {/* ── Desktop nav ── */}
        {!isMobile && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 36 }}>

            <Link href="/conoceme" style={{
              fontFamily: 'var(--font-outfit)', fontSize: 11, fontWeight: 400,
              letterSpacing: '0.16em', textTransform: 'uppercase', color: C.mutedLight,
              textDecoration: 'none', transition: 'color 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.color = C.copper)}
              onMouseLeave={e => (e.currentTarget.style.color = C.mutedLight)}
            >
              Conóceme
            </Link>

            {/* Servicios dropdown */}
            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => setDropOpen(true)}
              onMouseLeave={() => setDropOpen(false)}
            >
              <Link href="/servicios" style={{
                fontFamily: 'var(--font-outfit)', fontSize: 11, fontWeight: 400,
                letterSpacing: '0.16em', textTransform: 'uppercase',
                color: dropOpen ? C.copper : C.mutedLight,
                textDecoration: 'none', transition: 'color 0.2s',
                display: 'flex', alignItems: 'center', gap: 5,
              }}>
                Servicios
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ transition: 'transform 0.2s', transform: dropOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                  <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>

              <div style={{
                position: 'absolute', top: '100%', left: '50%',
                transform: 'translateX(-50%)',
                paddingTop: 10,
                opacity: dropOpen ? 1 : 0,
                pointerEvents: dropOpen ? 'auto' : 'none',
                transition: 'opacity 0.18s ease',
              }}>
                <div style={{
                  background: 'rgba(14,12,9,0.97)',
                  backdropFilter: 'blur(16px)',
                  border: `1px solid ${C.border}`,
                  minWidth: 280,
                  padding: '8px 0',
                  position: 'relative',
                }}>
                  <div style={{
                    position: 'absolute', top: 5, left: '50%', transform: 'translateX(-50%)',
                    width: 10, height: 10,
                    background: 'rgba(14,12,9,0.97)',
                    borderTop: `1px solid ${C.border}`,
                    borderLeft: `1px solid ${C.border}`,
                    rotate: '45deg',
                  }} />

                  {serviciosItems.map((item) => (
                    <Link key={item.href} href={item.href} style={{ textDecoration: 'none', display: 'block' }}
                      onClick={() => setDropOpen(false)}
                    >
                      <div style={{
                        display: 'flex', alignItems: 'flex-start', gap: 14,
                        padding: '12px 20px',
                        transition: 'background 0.15s',
                      }}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = `${C.copper}0d` }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent' }}
                      >
                        <span style={{ color: C.copper, opacity: 0.7, marginTop: 1, flexShrink: 0 }}>
                          {item.icon}
                        </span>
                        <div>
                          <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 12, fontWeight: 500, letterSpacing: '0.08em', color: C.white, marginBottom: 2 }}>
                            {item.label}
                          </p>
                          <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 11, fontWeight: 300, color: C.muted }}>
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}

                  <div style={{ margin: '8px 20px 4px', paddingTop: 8, borderTop: `1px solid ${C.border}` }}>
                    <Link href="/servicios" style={{ textDecoration: 'none' }} onClick={() => setDropOpen(false)}>
                      <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 10, fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: C.copper }}>
                        Ver todos los servicios →
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/contacto" style={{
              fontFamily: 'var(--font-outfit)', fontSize: 11, fontWeight: 400,
              letterSpacing: '0.16em', textTransform: 'uppercase', color: C.mutedLight,
              textDecoration: 'none', transition: 'color 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.color = C.copper)}
              onMouseLeave={e => (e.currentTarget.style.color = C.mutedLight)}
            >
              Contacto
            </Link>

            <Link href="/contacto" style={{
              fontFamily: 'var(--font-outfit)', fontSize: 11, fontWeight: 500,
              letterSpacing: '0.14em', textTransform: 'uppercase',
              background: C.orange, color: '#fff', padding: '9px 20px',
              textDecoration: 'none', transition: 'opacity 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              Hablemos →
            </Link>
          </div>
        )}

        {/* ── Hamburger button (móvil) ── */}
        {isMobile && (
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            style={{
              background: 'none', border: 'none', padding: '8px 4px',
              cursor: 'pointer', display: 'flex', flexDirection: 'column',
              justifyContent: 'center', gap: 5, width: 36, height: 36,
            }}
          >
            <span style={{
              display: 'block', width: 22, height: 1.5, background: C.white,
              transition: 'transform 0.3s ease, opacity 0.3s ease',
              transform: mobileOpen ? 'translateY(6.5px) rotate(45deg)' : 'none',
            }} />
            <span style={{
              display: 'block', width: 22, height: 1.5, background: C.white,
              transition: 'opacity 0.3s ease',
              opacity: mobileOpen ? 0 : 1,
            }} />
            <span style={{
              display: 'block', width: 22, height: 1.5, background: C.white,
              transition: 'transform 0.3s ease, opacity 0.3s ease',
              transform: mobileOpen ? 'translateY(-6.5px) rotate(-45deg)' : 'none',
            }} />
          </button>
        )}
      </nav>

      {/* ── Mobile menu overlay ── */}
      {isMobile && (
        <div style={{
          position: 'fixed', top: 64, left: 0, right: 0, bottom: 0, zIndex: 99,
          background: 'rgba(10,9,7,0.98)',
          backdropFilter: 'blur(16px)',
          overflowY: 'auto',
          padding: '32px clamp(20px, 6vw, 48px) 48px',
          display: 'flex', flexDirection: 'column',
          opacity: mobileOpen ? 1 : 0,
          transform: mobileOpen ? 'translateY(0)' : 'translateY(-12px)',
          pointerEvents: mobileOpen ? 'auto' : 'none',
          transition: 'opacity 0.28s ease, transform 0.28s ease',
        }}>

          {/* Links principales */}
          <div style={{ display: 'flex', flexDirection: 'column', borderTop: `1px solid ${C.border}` }}>
            {[
              { label: 'Conóceme', href: '/conoceme' },
              { label: 'Servicios', href: '/servicios' },
              { label: 'Contacto', href: '/contacto' },
            ].map(link => (
              <Link key={link.href} href={link.href} onClick={closeMobile} style={{
                fontFamily: 'var(--font-outfit)', fontSize: 13, fontWeight: 400,
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

          {/* Sub-servicios */}
          <div style={{ marginTop: 28 }}>
            <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 10, fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: C.muted, marginBottom: 16 }}>
              Servicios
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {serviciosItems.map(item => (
                <Link key={item.href} href={item.href} onClick={closeMobile} style={{ textDecoration: 'none' }}>
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: 14,
                    padding: '14px 16px',
                    background: C.bgAlt,
                    border: `1px solid ${C.border}`,
                    marginBottom: 4,
                  }}>
                    <span style={{ color: C.copper, opacity: 0.7, flexShrink: 0 }}>{item.icon}</span>
                    <div>
                      <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 12, fontWeight: 500, letterSpacing: '0.08em', color: C.white, marginBottom: 2 }}>{item.label}</p>
                      <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 11, fontWeight: 300, color: C.muted }}>{item.desc}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div style={{ marginTop: 36 }}>
            <Link href="/contacto" onClick={closeMobile} style={{
              display: 'block', textAlign: 'center',
              fontFamily: 'var(--font-outfit)', fontSize: 12, fontWeight: 500,
              letterSpacing: '0.18em', textTransform: 'uppercase',
              background: C.orange, color: '#fff', padding: '16px 32px',
              textDecoration: 'none',
            }}>
              Hablemos 20 min →
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
