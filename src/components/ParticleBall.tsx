'use client'
import { useEffect, useRef } from 'react'

// Bola de tenis de partículas: esfera 3D proyectada en canvas, rota sola y
// las partículas huyen del cursor. La costura de la bola va en azul claro.
// Rendimiento: pausa fuera de viewport (IO), DPR limitado, ~1300 puntos.
// Accesibilidad: con prefers-reduced-motion queda estática (sin rotar ni reaccionar).
export default function ParticleBall({ className, style }: { className?: string; style?: React.CSSProperties }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const N = 1300
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    // Distribución fibonacci sobre la esfera + marca de costura de bola de tenis
    const pts: { x: number; y: number; z: number; seam: boolean; ox: number; oy: number }[] = []
    const GA = Math.PI * (3 - Math.sqrt(5))
    for (let i = 0; i < N; i++) {
      const y = 1 - (i / (N - 1)) * 2
      const r = Math.sqrt(1 - y * y)
      const th = GA * i
      const x = Math.cos(th) * r
      const z = Math.sin(th) * r
      // Costura clásica: curva |lat| ≈ curva seno de la longitud
      const lon = Math.atan2(z, x)
      const seam = Math.abs(y - 0.62 * Math.sin(2 * lon)) < 0.09
      pts.push({ x, y, z, seam, ox: 0, oy: 0 })
    }

    let w = 0, h = 0, R = 0
    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      w = rect.width
      h = rect.height
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      R = Math.min(w, h) * 0.42
    }
    resize()
    window.addEventListener('resize', resize)

    const mouse = { x: -9999, y: -9999 }
    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }
    const onLeave = () => { mouse.x = -9999; mouse.y = -9999 }
    canvas.addEventListener('mousemove', onMove)
    canvas.addEventListener('mouseleave', onLeave)

    let raf = 0
    let visible = true
    let t = 0
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting })
    io.observe(canvas)

    const cream = '245, 243, 235'
    const blue = '118, 193, 255'

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      const cx = w / 2
      const cy = h / 2
      const rotY = reduced ? 0.6 : t * 0.0022
      const rotX = 0.35
      const cosY = Math.cos(rotY), sinY = Math.sin(rotY)
      const cosX = Math.cos(rotX), sinX = Math.sin(rotX)

      for (const p of pts) {
        // Rotación Y y X
        const x1 = p.x * cosY + p.z * sinY
        const z1 = -p.x * sinY + p.z * cosY
        const y1 = p.y * cosX - z1 * sinX
        const z2 = p.y * sinX + z1 * cosX

        const scale = 1 / (1.9 - z2 * 0.72)
        let sx = cx + x1 * R * scale
        let sy = cy + y1 * R * scale

        // Repulsión del cursor (con inercia de vuelta)
        if (!reduced) {
          const dx = sx - mouse.x
          const dy = sy - mouse.y
          const d2 = dx * dx + dy * dy
          if (d2 < 8100) {
            const d = Math.sqrt(d2) || 1
            const f = ((90 - d) / 90) * 26
            p.ox += (dx / d) * f * 0.35
            p.oy += (dy / d) * f * 0.35
          }
          p.ox *= 0.86
          p.oy *= 0.86
          sx += p.ox
          sy += p.oy
        }

        const depth = (z2 + 1) / 2
        const alpha = 0.12 + depth * 0.75
        const size = (p.seam ? 2.1 : 1.5) * (0.5 + depth * 0.8)
        ctx.fillStyle = p.seam ? `rgba(${blue}, ${alpha})` : `rgba(${cream}, ${alpha * 0.8})`
        ctx.beginPath()
        ctx.arc(sx, sy, size, 0, Math.PI * 2)
        ctx.fill()
      }

      t++
      if (!reduced) raf = requestAnimationFrame(() => { if (visible) draw(); else raf = requestAnimationFrame(waitVisible) })
    }
    const waitVisible = () => {
      if (visible) draw()
      else raf = requestAnimationFrame(waitVisible)
    }
    draw()

    return () => {
      cancelAnimationFrame(raf)
      io.disconnect()
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('mousemove', onMove)
      canvas.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return <canvas ref={canvasRef} className={className} aria-hidden style={{ width: '100%', height: '100%', display: 'block', ...style }} />
}
