'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

// Desplazamiento suave (Lenis) solo en la home. Mueve el scroll nativo, así que
// ScoreBoard y las animaciones con animation-timeline: view() siguen funcionando.
// Se desactiva con prefers-reduced-motion y en pantallas táctiles (syncTouch off).
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const lenis = new Lenis({
      duration: 1.1,
      easing: t => 1 - Math.pow(1 - t, 4), // ease-out-quart, sin rebote
      anchors: { offset: -80 }, // enlaces #ancla con hueco para la navbar fija
      prevent: node => node.closest('[data-lenis-prevent]') !== null,
    })

    let raf = requestAnimationFrame(function loop(time) {
      lenis.raf(time)
      raf = requestAnimationFrame(loop)
    })

    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
    }
  }, [])

  return null
}
