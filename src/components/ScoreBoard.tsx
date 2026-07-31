'use client'
import { useEffect, useState } from 'react'

// Marcador fijo: puntúa el scroll como un punto de tenis.
// 0 → 15 → 30 → 40 → JUEGO al llegar a la bola de partido.
const SCORES = ['0', '15', '30', '40', 'JUEGO'] as const

export default function ScoreBoard() {
  const [idx, setIdx] = useState(0)
  const [pop, setPop] = useState(false)
  const [show, setShow] = useState(false)

  useEffect(() => {
    let last = 0
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      const p = max > 0 ? window.scrollY / max : 0
      const next = p < 0.06 ? 0 : p < 0.32 ? 1 : p < 0.58 ? 2 : p < 0.85 ? 3 : 4
      setShow(p > 0.03)
      if (next !== last) {
        last = next
        setIdx(next)
        setPop(true)
        setTimeout(() => setPop(false), 320)
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div aria-hidden style={{
      position: 'fixed',
      left: 'clamp(14px, 2.5vw, 32px)',
      bottom: 'clamp(14px, 2.5vw, 32px)',
      zIndex: 90,
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      background: '#071233',
      border: '1.5px solid rgba(118, 193, 255, 0.4)',
      borderRadius: 999,
      padding: '9px 18px 9px 14px',
      boxShadow: '0 8px 30px -10px rgba(7, 18, 51, 0.55)',
      opacity: show ? 1 : 0,
      transform: show ? 'translateY(0)' : 'translateY(16px)',
      transition: 'opacity 0.4s, transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
      pointerEvents: 'none',
    }} className="scoreboard">
      <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#B8E44A', boxShadow: '0 0 10px #B8E44A', flexShrink: 0 }} />
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#8FA3BC' }}>
        Punto
      </span>
      <span style={{
        fontFamily: 'var(--font-mono)',
        fontSize: 15,
        fontWeight: 500,
        color: '#F2F6FB',
        minWidth: 42,
        textAlign: 'center',
        transform: pop ? 'scale(1.35)' : 'scale(1)',
        transition: 'transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
        display: 'inline-block',
      }}>
        {SCORES[idx]}
      </span>
    </div>
  )
}
