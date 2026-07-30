import Link from 'next/link'
import { C } from '@/lib/theme'

// ─── Página interna: plan de diseño de las 3 direcciones (Fase 4) ───────────
// Víctor elige aquí. Al decidir, la dirección ganadora se aplica al sitio
// cambiando el bloque :root de globals.css y desarrollando su elemento firma.

type Direccion = {
  slug: string
  nombre: string
  concepto: string
  paleta: { hex: string; nombre: string; funcion: string }[]
  tipografia: string
  firma: string
  pros: string
  contras: string
}

const direcciones: Direccion[] = [
  {
    slug: 'pista',
    nombre: 'A · PISTA',
    concepto: 'La geometría de la pista de tenis cruzada con el lenguaje de los sistemas: líneas, ritmo y marcador. Emparentada con la paleta NorteIA.',
    paleta: [
      { hex: '#050A14', nombre: 'Noche', funcion: 'Fondo' },
      { hex: '#0A1120', nombre: 'Pista interior', funcion: 'Superficies' },
      { hex: '#76C1FF', nombre: 'Azul NorteIA claro', funcion: 'Acento + CTA' },
      { hex: '#F2F6FB', nombre: 'Línea de cal', funcion: 'Texto' },
      { hex: '#8FA3BC', nombre: 'Grada', funcion: 'Texto secundario' },
    ],
    tipografia: 'Space Grotesk (display) · Outfit (cuerpo) · IBM Plex Mono (números/marcador)',
    firma: 'Las líneas de la pista como sistema de layout: filetes de 1px que estructuran cada sección como la geometría de una pista, y datos en tipografía de marcador.',
    pros: 'Identidad propia que nadie puede copiar. Coherencia máxima con NorteIA. Moderna sin ser genérica.',
    contras: 'Rompe con todo lo actual: hay que sustituir el imaginario romano entero.',
  },
  {
    slug: 'foro',
    nombre: 'B · FORO',
    concepto: 'La dirección actual (clásica romana: serif, cobre, atmósfera oscura) depurada: menos ornamento, más contenido, misma elegancia.',
    paleta: [
      { hex: '#0A0907', nombre: 'Noche cálida', funcion: 'Fondo' },
      { hex: '#0F0D0A', nombre: 'Piedra', funcion: 'Superficies' },
      { hex: '#C4956A', nombre: 'Cobre', funcion: 'Acento' },
      { hex: '#F97316', nombre: 'Naranja', funcion: 'CTA' },
      { hex: '#F5F0E8', nombre: 'Mármol', funcion: 'Texto' },
    ],
    tipografia: 'Cormorant Garamond (display) · Outfit (cuerpo)',
    firma: 'El contraste serif itálica cobre sobre negro cálido: la frase clave de cada sección en itálica como inscripción.',
    pros: 'Continuidad total: cero coste de transición y ya está probada. Elegante y seria para el público legal.',
    contras: 'Estética vista en marca personal de consultoría. No cuenta nada de ti: ni tenis, ni sistemas, ni NorteIA.',
  },
  {
    slug: 'hibrida',
    nombre: 'C · HÍBRIDA',
    concepto: 'Base clásica (serif, calma, cobre) con la estructura de líneas de pista y el azul NorteIA reservado solo para la acción.',
    paleta: [
      { hex: '#0B0A08', nombre: 'Noche cálida', funcion: 'Fondo' },
      { hex: '#C4956A', nombre: 'Cobre', funcion: 'Acento editorial' },
      { hex: '#76C1FF', nombre: 'Azul NorteIA claro', funcion: 'CTA (único uso)' },
      { hex: '#F5F0E8', nombre: 'Mármol', funcion: 'Texto' },
      { hex: '#9A8E7E', nombre: 'Arena', funcion: 'Texto secundario' },
    ],
    tipografia: 'Cormorant Garamond (display) · Outfit (cuerpo) · IBM Plex Mono (etiquetas)',
    firma: 'El CTA azul como "bola en juego": el único elemento frío en una página cálida — imposible no verlo.',
    pros: 'Transición suave desde lo actual + conexión visible con NorteIA en cada CTA.',
    contras: 'Riesgo de tierra de nadie: dos lenguajes conviviendo exigen ejecución muy disciplinada.',
  },
]

export default function DireccionesPage() {
  return (
    <div style={{ background: C.bg, minHeight: '100vh', color: C.white, padding: 'clamp(48px, 8vh, 96px) clamp(24px, 5vw, 64px)' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <p style={{ fontFamily: C.fontMono, fontSize: 11, letterSpacing: '0.24em', textTransform: 'uppercase', color: C.copper, marginBottom: 16 }}>
          Fase 4 · Interno — no indexado
        </p>
        <h1 style={{ fontFamily: C.fontDisplay, fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 400, lineHeight: 1.1, marginBottom: 16 }}>
          Tres direcciones visuales.<br /><em style={{ color: C.copper, fontStyle: 'italic' }}>Elige una.</em>
        </h1>
        <p style={{ fontFamily: C.fontBody, fontSize: 15, fontWeight: 300, color: C.mutedLight, lineHeight: 1.75, maxWidth: 640, marginBottom: 48 }}>
          Cada tarjeta abre la home real pintada con esa dirección. Todo el sitio está construido
          sobre variables de tema: aplicar la ganadora es un cambio de configuración, no un rediseño.
          El elemento firma se desarrolla a fondo una vez elijas.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {direcciones.map(d => (
            <article key={d.slug} style={{ border: `1px solid ${C.border}`, background: C.bgCard, padding: 'clamp(24px, 3.5vw, 40px)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16, marginBottom: 20 }}>
                <h2 style={{ fontFamily: C.fontDisplay, fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: 500 }}>{d.nombre}</h2>
                <Link href={`/direcciones/${d.slug}`} style={{ fontFamily: C.fontBody, fontSize: 12, fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', background: C.orange, color: C.ctaText, padding: '12px 28px', textDecoration: 'none' }}>
                  Ver la home así →
                </Link>
              </div>

              <p style={{ fontFamily: C.fontBody, fontSize: 14, fontWeight: 300, color: C.mutedLight, lineHeight: 1.7, maxWidth: 720, marginBottom: 24 }}>{d.concepto}</p>

              {/* Paleta */}
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 20 }}>
                {d.paleta.map(p => (
                  <div key={p.hex} style={{ display: 'flex', alignItems: 'center', gap: 10, border: `1px solid ${C.border}`, padding: '8px 14px 8px 8px' }}>
                    <span style={{ width: 28, height: 28, background: p.hex, border: '1px solid rgba(255,255,255,0.12)', display: 'inline-block' }} />
                    <span>
                      <span style={{ display: 'block', fontFamily: C.fontBody, fontSize: 12, color: C.white }}>{p.nombre}</span>
                      <span style={{ display: 'block', fontFamily: C.fontMono, fontSize: 10, color: C.muted }}>{p.hex} · {p.funcion}</span>
                    </span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(240px, 100%), 1fr))', gap: 16 }}>
                <div>
                  <p style={{ fontFamily: C.fontMono, fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: C.copper, marginBottom: 6 }}>Tipografía</p>
                  <p style={{ fontFamily: C.fontBody, fontSize: 13, fontWeight: 300, color: C.mutedLight, lineHeight: 1.6 }}>{d.tipografia}</p>
                </div>
                <div>
                  <p style={{ fontFamily: C.fontMono, fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: C.copper, marginBottom: 6 }}>Elemento firma</p>
                  <p style={{ fontFamily: C.fontBody, fontSize: 13, fontWeight: 300, color: C.mutedLight, lineHeight: 1.6 }}>{d.firma}</p>
                </div>
                <div>
                  <p style={{ fontFamily: C.fontMono, fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: C.copper, marginBottom: 6 }}>A favor</p>
                  <p style={{ fontFamily: C.fontBody, fontSize: 13, fontWeight: 300, color: C.mutedLight, lineHeight: 1.6 }}>{d.pros}</p>
                </div>
                <div>
                  <p style={{ fontFamily: C.fontMono, fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: C.copper, marginBottom: 6 }}>En contra</p>
                  <p style={{ fontFamily: C.fontBody, fontSize: 13, fontWeight: 300, color: C.mutedLight, lineHeight: 1.6 }}>{d.contras}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
