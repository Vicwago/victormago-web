'use client'
import { useState } from 'react'
import Link from 'next/link'

export type Producto = {
  tag: string
  nombre: string
  texto: string
  /** Capturas en /public/productos/. Con imágenes, la tarjeta abre la galería. */
  imagenes: string[]
  /** Sin imágenes, la tarjeta enlaza aquí (ruta interna). */
  href: string | null
  estado?: string
}

// Vitrina de productos propios (equivalente a la "Biblioteca" de salgadoia.com).
export default function ProductShowcase({ productos }: { productos: Producto[] }) {
  const [galeria, setGaleria] = useState<{ p: Producto; i: number } | null>(null)

  return (
    <>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(260px, 100%), 1fr))', gap: 'clamp(14px, 2vw, 24px)' }}>
        {productos.map(p => {
          const inner = (
            <div className="scale-in" style={{
              background: 'var(--surface)', border: '1.5px solid var(--border)', borderRadius: 'var(--radius-card)',
              padding: 'clamp(24px, 3vw, 34px)', height: '100%', display: 'flex', flexDirection: 'column',
              transition: 'border-color 0.25s, transform 0.25s',
            }}>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 14 }}>
                {p.tag}{p.estado ? ` · ${p.estado}` : ''}
              </p>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 750, fontSize: 'clamp(20px, 2.3vw, 26px)', letterSpacing: '-0.015em', lineHeight: 1.12, color: 'var(--text)', marginBottom: 12 }}>
                {p.nombre}
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: 14.5, color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: 18, flex: 1 }}>
                {p.texto}
              </p>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent)' }}>
                {p.imagenes.length > 0 ? 'Ver capturas →' : 'Saber más →'}
              </span>
            </div>
          )
          if (p.imagenes.length > 0) {
            return (
              <button key={p.nombre} onClick={() => setGaleria({ p, i: 0 })} style={{ background: 'none', border: 'none', padding: 0, textAlign: 'left', cursor: 'pointer' }}>
                {inner}
              </button>
            )
          }
          return p.href
            ? <Link key={p.nombre} href={p.href} style={{ display: 'block' }}>{inner}</Link>
            : <div key={p.nombre}>{inner}</div>
        })}
      </div>

      {/* Galería (lightbox) */}
      {galeria && (
        <div
          role="dialog"
          aria-label={`Capturas de ${galeria.p.nombre}`}
          onClick={() => setGaleria(null)}
          style={{ position: 'fixed', inset: 0, zIndex: 200, background: 'rgba(7, 18, 51, 0.92)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}
        >
          <div onClick={e => e.stopPropagation()} style={{ maxWidth: 960, width: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#76C1FF' }}>
                {galeria.p.nombre} · {galeria.i + 1}/{galeria.p.imagenes.length}
              </p>
              <button onClick={() => setGaleria(null)} aria-label="Cerrar galería" style={{ background: 'none', border: 'none', color: '#F2F6FB', fontSize: 26, lineHeight: 1 }}>×</button>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={galeria.p.imagenes[galeria.i]} alt={`Captura ${galeria.i + 1} de ${galeria.p.nombre}`} style={{ width: '100%', height: 'auto', borderRadius: 14, border: '1.5px solid rgba(118,193,255,0.35)' }} />
            {galeria.p.imagenes.length > 1 && (
              <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginTop: 16 }}>
                <button onClick={() => setGaleria({ p: galeria.p, i: (galeria.i - 1 + galeria.p.imagenes.length) % galeria.p.imagenes.length })} aria-label="Anterior" style={{ background: 'rgba(118,193,255,0.15)', border: '1.5px solid rgba(118,193,255,0.4)', color: '#F2F6FB', borderRadius: 999, padding: '10px 22px', fontFamily: 'var(--font-mono)', fontSize: 14 }}>←</button>
                <button onClick={() => setGaleria({ p: galeria.p, i: (galeria.i + 1) % galeria.p.imagenes.length })} aria-label="Siguiente" style={{ background: 'rgba(118,193,255,0.15)', border: '1.5px solid rgba(118,193,255,0.4)', color: '#F2F6FB', borderRadius: 999, padding: '10px 22px', fontFamily: 'var(--font-mono)', fontSize: 14 }}>→</button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
