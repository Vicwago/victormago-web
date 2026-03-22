'use client'
import Link from 'next/link'

const directions = [
  {
    id: 'luxury',
    name: 'Dark Luxury',
    subtitle: 'Aesop · Premium oscuro',
    desc: 'Fondo negro profundo, acento naranja cobre, tipografía elegante. Autoridad silenciosa.',
    colors: ['#0F0E0C', '#F97316', '#C4956A', '#94A3B8'],
  },
  {
    id: 'editorial',
    name: 'Editorial Bold',
    subtitle: 'The Atlantic · Revista premium',
    desc: 'Serif de alto contraste, layout de revista, blanco y negro con naranja como único color.',
    colors: ['#FAFAF5', '#111111', '#F97316', '#6B6B6B'],
  },
  {
    id: 'minimal',
    name: 'Swiss Minimal',
    subtitle: 'Dieter Rams · Funcional',
    desc: 'Máxima sobriedad. Tipografía grotesk, mucho espacio, naranja solo en CTA.',
    colors: ['#FFFFFF', '#111111', '#F97316', '#E5E5E5'],
  },
  {
    id: 'kinfolk',
    name: 'Warm Human',
    subtitle: 'Kinfolk · Personal y cercano',
    desc: 'Fondo hueso cálido, serif elegante, fotografía protagonista. El más personal.',
    colors: ['#F5F2ED', '#2C2825', '#F97316', '#8B7355'],
  },
  {
    id: 'brutalist',
    name: 'Neo-Brutalist',
    subtitle: 'Gumroad · Sin filtros',
    desc: 'Bordes gruesos, sombras duras, tipografía monospace. Directo y sin artificios.',
    colors: ['#FFFDF7', '#0A0A0A', '#F97316', '#FFE600'],
  },
  {
    id: 'playful',
    name: 'Modern Gradient',
    subtitle: 'Linear · Tech premium',
    desc: 'Fondo oscuro con gradientes sutiles, glassmorphism, animaciones fluidas.',
    colors: ['#0C0C0C', '#F97316', '#FB923C', '#1E293B'],
  },
  {
    id: 'corporate',
    name: 'Corporate Bold',
    subtitle: 'Accenture · Autoridad B2B',
    desc: 'Navy y naranja, grilla rígida, muy estructurado. Máxima credibilidad empresarial.',
    colors: ['#0F172A', '#F97316', '#FFFFFF', '#334155'],
  },
  {
    id: 'retro',
    name: 'Dark Terminal',
    subtitle: 'Stripe CLI · Hacker premium',
    desc: 'Estética de terminal, monoespaciado, naranja ámbar. Para quien quiere ser diferente.',
    colors: ['#0D1117', '#F97316', '#FFB000', '#30363D'],
  },
]

export default function DemoIndex() {
  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh', padding: '60px 40px', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <p style={{ color: '#F97316', fontSize: 13, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 12 }}>victormago.com</p>
        <h1 style={{ color: '#FFFFFF', fontSize: 42, fontWeight: 700, marginBottom: 8, lineHeight: 1.1 }}>Elige tu dirección visual</h1>
        <p style={{ color: '#94A3B8', fontSize: 16, marginBottom: 56 }}>8 estilos radicalmente distintos. Haz clic en cada uno para verlo completo.</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(480px, 1fr))', gap: 20 }}>
          {directions.map((d, i) => (
            <Link key={d.id} href={`/demo/${d.id}`} style={{ textDecoration: 'none' }}>
              <div style={{
                background: '#161616', border: '1px solid #222', borderRadius: 12,
                padding: '24px', cursor: 'pointer', transition: 'border-color 0.2s',
                display: 'flex', flexDirection: 'column', gap: 16,
              }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = '#F97316')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = '#222')}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <span style={{ color: '#444', fontSize: 12, fontWeight: 600 }}>0{i + 1}</span>
                    <h2 style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 700, margin: '4px 0 2px' }}>{d.name}</h2>
                    <p style={{ color: '#F97316', fontSize: 12, fontWeight: 500 }}>{d.subtitle}</p>
                  </div>
                  <span style={{ color: '#F97316', fontSize: 20 }}>→</span>
                </div>
                <p style={{ color: '#94A3B8', fontSize: 14, lineHeight: 1.5, margin: 0 }}>{d.desc}</p>
                <div style={{ display: 'flex', gap: 8 }}>
                  {d.colors.map((c, ci) => (
                    <div key={ci} style={{ width: 28, height: 28, borderRadius: 6, background: c, border: '1px solid #333' }} />
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <p style={{ color: '#333', fontSize: 13, marginTop: 48, textAlign: 'center' }}>
          Generado por Business Launcher · NorteIA
        </p>
      </div>
    </div>
  )
}
