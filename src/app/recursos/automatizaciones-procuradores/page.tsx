import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'
import LeadForm from '@/components/LeadForm'
import { C, mix } from '@/lib/theme'

export const metadata: Metadata = {
  title: '5 automatizaciones que cualquier despacho de procuradores puede montar esta semana',
  description:
    'PDF gratuito: 5 automatizaciones concretas para despachos de procuradores — el proceso, la herramienta y el resultado de cada una. Sin teoría, para montar esta semana.',
  alternates: { canonical: '/recursos/automatizaciones-procuradores' },
}

// TODO-VÍCTOR: el contenido del PDF. Cuando esté maquetado, subirlo a
// public/recursos/5-automatizaciones-procuradores.pdf (ver api/lead-magnet).
const contenido = [
  'Clasificación automática de notificaciones entrantes',
  'Registro de documentos sin copiar y pegar',
  'Avisos automáticos a abogados y clientes',
  'Control de plazos con alertas',
  'Respuestas a las consultas repetitivas del despacho',
]

export default function RecursoProcuradoresPage() {
  return (
    <div style={{ background: C.bg, minHeight: '100vh', color: C.white }}>
      <Navbar />

      <section style={{ position: 'relative', padding: 'clamp(120px, 15vh, 160px) clamp(24px, 5vw, 64px) clamp(64px, 8vw, 96px)', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse at 75% 25%, ${mix(7)} 0%, transparent 55%)`, pointerEvents: 'none' }} />
        <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))', gap: 'clamp(40px, 5vw, 72px)', alignItems: 'center' }}>

          <div>
            <p style={{ fontFamily: C.fontBody, fontSize: 11, fontWeight: 500, letterSpacing: '0.28em', textTransform: 'uppercase', color: C.copper, marginBottom: 20 }}>PDF gratuito</p>
            <h1 style={{ fontFamily: C.fontDisplay, fontSize: 'clamp(30px, 4.5vw, 52px)', fontWeight: 400, lineHeight: 1.12, color: C.white, marginBottom: 20 }}>
              5 automatizaciones que cualquier despacho de procuradores puede montar <em style={{ fontStyle: 'italic', color: C.copper }}>esta semana</em>
            </h1>
            <p style={{ fontFamily: C.fontBody, fontSize: 15, fontWeight: 300, color: C.mutedLight, lineHeight: 1.75, marginBottom: 28 }}>
              Sin teoría. Cada automatización viene con el proceso que resuelve, la herramienta
              con la que se monta y el resultado que puedes esperar. Sale de proyectos reales
              con despachos de Galicia.
            </p>
            <ul style={{ listStyle: 'none', marginBottom: 8 }}>
              {contenido.map((c, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 12 }}>
                  <span style={{ fontFamily: C.fontMono, fontSize: 12, color: C.copper }}>0{i + 1}</span>
                  <span style={{ fontFamily: C.fontBody, fontSize: 14, fontWeight: 300, color: C.mutedLight }}>{c}</span>
                </li>
              ))}
            </ul>
          </div>

          <Reveal delay={0.1}>
            <div style={{ background: C.bgCard, border: `1px solid ${C.borderCu}`, padding: 'clamp(28px, 4vw, 40px)' }}>
              <p style={{ fontFamily: C.fontDisplay, fontSize: 22, fontWeight: 500, color: C.white, marginBottom: 8 }}>Te lo mando ahora</p>
              <p style={{ fontFamily: C.fontBody, fontSize: 13, fontWeight: 300, color: C.mutedLight, lineHeight: 1.7, marginBottom: 24 }}>
                Déjame tu email y lo tienes en un minuto en tu bandeja.
              </p>
              <LeadForm recurso="automatizaciones-procuradores" />
            </div>
          </Reveal>
        </div>
      </section>

      <section style={{ borderTop: `1px solid ${C.border}`, background: C.bgAlt, padding: 'clamp(48px, 6vw, 72px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
        <p style={{ fontFamily: C.fontBody, fontSize: 14, fontWeight: 300, color: C.mutedLight, marginBottom: 16 }}>
          ¿Quieres ver cómo funciona en un despacho real?
        </p>
        <Link href="/casos/sanchez-garcia-procuradores" style={{ fontFamily: C.fontBody, fontSize: 12, fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: C.copper, textDecoration: 'none' }}>
          Leer el caso de Sánchez García Procuradores →
        </Link>
      </section>

      <Footer />
    </div>
  )
}
