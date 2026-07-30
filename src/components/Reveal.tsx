'use client'
import { useEffect, useRef, useState } from 'react'

// Animación de entrada al hacer scroll. Respeta prefers-reduced-motion
// (la transición se anula vía CSS global) y no bloquea el contenido si
// IntersectionObserver no dispara.
export default function Reveal({ children, delay = 0, y = 28 }: { children: React.ReactNode; delay?: number; y?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.12 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : `translateY(${y}px)`,
      transition: `opacity 0.9s ease ${delay}s, transform 0.9s ease ${delay}s`,
    }}>{children}</div>
  )
}
