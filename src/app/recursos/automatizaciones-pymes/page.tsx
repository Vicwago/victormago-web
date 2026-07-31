import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'
import LeadForm from '@/components/LeadForm'
import { C } from '@/lib/theme'

export const metadata: Metadata = {
  title: '5 automatizaciones que cualquier pyme puede montar esta semana',
  description:
    'PDF gratuito: 5 automatizaciones concretas para pymes — el proceso que resuelve cada una, la herramienta con la que se monta y el resultado que puedes esperar. Sin teoría.',
  alternates: { canonical: '/recursos/automatizaciones-pymes' },
}

// TODO-VÍCTOR: el contenido del PDF. Cuando esté maquetado, subirlo a
// public/recursos/5-automatizaciones-pymes.pdf (ver api/lead-magnet).
const contenido = [
  'Clasificación automática del correo y los documentos que entran',
  'Registro de datos sin copiar y pegar (facturas, pedidos, formularios)',
  'Respuestas automáticas a las consultas repetitivas',
  'Avisos y seguimientos a clientes sin perseguirlos a mano',
  'Control de plazos y tareas con alertas',
]

export default function RecursoPymesPage() {
  return (
    <div style={{ background: C.bg, minHeight: '100vh', color: C.white }} className="paper-grain">
      <Navbar />

      <section style={{ position: 'relative', padding: 'clamp(120px, 15vh, 160px) clamp(24px, 5vw, 64px) clamp(64px, 8vw, 96px)', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', position: 'relative', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))', gap: 'clamp(40px, 5vw, 72px)', alignItems: 'center' }}>

          <div>
            <p style={{ fontFamily: C.fontMono, fontSize: 12, letterSpacing: '0.28em', textTransform: 'uppercase', color: C.copper, marginBottom: 20 }}>PDF gratuito</p>
            <h1 style={{ fontFamily: C.fontDisplay, fontWeight: 750, fontSize: 'clamp(30px, 4.5vw, 52px)', lineHeight: 1.05, letterSpacing: '-0.025em', color: C.white, marginBottom: 20 }}>
              5 automatizaciones que cualquier pyme puede montar esta semana<span style={{ color: C.copper }}>.</span>
            </h1>
            <p style={{ fontFamily: C.fontBody, fontSize: 15, fontWeight: 300, color: C.mutedLight, lineHeight: 1.75, marginBottom: 28, maxWidth: '52ch' }}>
              Sin teoría. Cada automatización viene con el proceso que resuelve, la herramienta
              con la que se monta y el resultado que puedes esperar. Sale de proyectos reales
              con empresas de Galicia.
            </p>
            <ul style={{ listStyle: 'none', marginBottom: 8 }}>
              {contenido.map((c, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 12 }}>
                  <span style={{ fontFamily: C.fontMono, fontSize: 12, color: C.copper }}>0{i + 1}</span>
                  <span style={{ fontFamily: C.fontBody, fontSize: 14.5, fontWeight: 300, color: C.mutedLight }}>{c}</span>
                </li>
              ))}
            </ul>
          </div>

          <Reveal delay={0.1}>
            <div style={{ background: C.bgCard, border: `1.5px solid ${C.borderCu}`, borderRadius: 'var(--radius-card)', padding: 'clamp(28px, 4vw, 40px)' }}>
              <p style={{ fontFamily: C.fontDisplay, fontWeight: 750, fontSize: 22, color: C.white, marginBottom: 8 }}>Te lo mando ahora</p>
              <p style={{ fontFamily: C.fontBody, fontSize: 13.5, fontWeight: 300, color: C.mutedLight, lineHeight: 1.7, marginBottom: 24 }}>
                Déjame tu email y lo tienes en un minuto en tu bandeja.
              </p>
              <LeadForm recurso="automatizaciones-pymes" />
            </div>
          </Reveal>
        </div>
      </section>

      <section style={{ borderTop: `1.5px solid ${C.border}`, background: C.bgAlt, padding: 'clamp(48px, 6vw, 72px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
        <p style={{ fontFamily: C.fontBody, fontSize: 14.5, fontWeight: 300, color: C.mutedLight, marginBottom: 16 }}>
          ¿Quieres ver cómo funciona en una empresa real?
        </p>
        <Link href="/casos" style={{ fontFamily: C.fontMono, fontSize: 13, letterSpacing: '0.12em', textTransform: 'uppercase', color: C.copper, textDecoration: 'none' }}>
          Ver los casos →
        </Link>
      </section>

      <Footer />
    </div>
  )
}
