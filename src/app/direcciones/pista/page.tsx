import Home from '@/app/page'

// Dirección A — PISTA: la home real pintada con el tema tenis+sistemas.
// La clase .theme-pista (globals.css) sobreescribe todos los tokens.
export default function DemoPista() {
  return (
    <div className="theme-pista" style={{ position: 'relative' }}>
      {/* Elemento firma (esbozo): líneas de pista estructurando el fondo */}
      <div aria-hidden style={{
        position: 'fixed', inset: 0, zIndex: 1, pointerEvents: 'none',
        background: `
          linear-gradient(to right, transparent calc(50% - 0.5px), rgba(242,246,251,0.05) 50%, transparent calc(50% + 0.5px)),
          linear-gradient(to right, transparent 11.5%, rgba(242,246,251,0.04) 12%, transparent 12.5%),
          linear-gradient(to right, transparent 87.5%, rgba(242,246,251,0.04) 88%, transparent 88.5%)
        `,
      }} />
      <div style={{ position: 'relative', zIndex: 2 }}>
        <Home />
      </div>
    </div>
  )
}
