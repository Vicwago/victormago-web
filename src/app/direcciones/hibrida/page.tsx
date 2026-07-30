import Home from '@/app/page'

// Dirección C — HÍBRIDA: base clásica + estructura de pista + CTA azul NorteIA.
export default function DemoHibrida() {
  return (
    <div className="theme-hibrida" style={{ position: 'relative' }}>
      {/* Esbozo del elemento firma: una única línea de pista vertical sutil */}
      <div aria-hidden style={{
        position: 'fixed', inset: 0, zIndex: 1, pointerEvents: 'none',
        background: 'linear-gradient(to right, transparent calc(50% - 0.5px), rgba(245,240,232,0.04) 50%, transparent calc(50% + 0.5px))',
      }} />
      <div style={{ position: 'relative', zIndex: 2 }}>
        <Home />
      </div>
    </div>
  )
}
