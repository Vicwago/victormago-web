import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'
import LeadForm from '@/components/LeadForm'
import { C } from '@/lib/theme'
import { automatizaciones } from '@/lib/automatizaciones'

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

      {/* ── Contenido completo en abierto (SEO/AEO): las 5 desarrolladas ── */}
      <section style={{ borderTop: `1.5px solid ${C.border}`, padding: 'clamp(64px, 8vw, 110px) clamp(24px, 5vw, 64px)' }}>
        <div style={{ maxWidth: 780, margin: '0 auto' }}>
          <Reveal>
            <h2 style={{ fontFamily: C.fontDisplay, fontWeight: 750, fontSize: 'clamp(26px, 3.6vw, 40px)', letterSpacing: '-0.02em', lineHeight: 1.05, marginBottom: 12 }}>
              Las cinco, al detalle<span style={{ color: C.copper }}>.</span>
            </h2>
            <p style={{ fontFamily: C.fontBody, fontSize: 15, fontWeight: 300, color: C.mutedLight, lineHeight: 1.75, marginBottom: 'clamp(36px, 5vw, 56px)', maxWidth: '58ch' }}>
              Aquí lo tienes todo en abierto — el PDF es lo mismo, maquetado para guardar y compartir.
              Si al leerlas piensas "esto en mi empresa", ya sabes dónde está la{' '}
              <Link href="/contacto" style={{ color: C.copper, textDecoration: 'underline', textUnderlineOffset: 3 }}>llamada de 20 minutos</Link>.
            </p>
          </Reveal>

          {automatizaciones.map(a => (
            <Reveal key={a.n}>
              <article style={{ borderTop: `1.5px solid ${C.border}`, padding: 'clamp(28px, 4vw, 44px) 0' }}>
                <p style={{ fontFamily: C.fontMono, fontSize: 13, color: C.copper, marginBottom: 12 }}>{a.n} /</p>
                <h3 style={{ fontFamily: C.fontDisplay, fontWeight: 700, fontSize: 'clamp(20px, 2.6vw, 28px)', letterSpacing: '-0.015em', lineHeight: 1.15, marginBottom: 14 }}>
                  {a.titulo}
                </h3>
                <p style={{ fontFamily: C.fontBody, fontSize: 15, fontWeight: 300, color: C.mutedLight, lineHeight: 1.8, marginBottom: 20, maxWidth: '62ch' }}>
                  {a.dolor}
                </p>

                <p style={{ fontFamily: C.fontMono, fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: C.muted, marginBottom: 10 }}>Cómo se monta</p>
                <ol style={{ paddingLeft: 22, marginBottom: 20 }}>
                  {a.proceso.map((p, i) => (
                    <li key={i} style={{ fontFamily: C.fontBody, fontSize: 14.5, fontWeight: 300, color: C.mutedLight, lineHeight: 1.75, marginBottom: 8, maxWidth: '60ch' }}>{p}</li>
                  ))}
                </ol>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(240px, 100%), 1fr))', gap: 14, marginBottom: 18 }}>
                  <div style={{ background: C.bgCard, border: `1.5px solid ${C.border}`, borderRadius: 'var(--radius-card)', padding: '18px 20px' }}>
                    <p style={{ fontFamily: C.fontMono, fontSize: 10.5, letterSpacing: '0.18em', textTransform: 'uppercase', color: C.copper, marginBottom: 8 }}>Herramientas</p>
                    <p style={{ fontFamily: C.fontBody, fontSize: 13.5, fontWeight: 300, color: C.mutedLight, lineHeight: 1.65 }}>{a.herramientas}</p>
                  </div>
                  <div style={{ background: C.bgCard, border: `1.5px solid ${C.border}`, borderRadius: 'var(--radius-card)', padding: '18px 20px' }}>
                    <p style={{ fontFamily: C.fontMono, fontSize: 10.5, letterSpacing: '0.18em', textTransform: 'uppercase', color: C.copper, marginBottom: 8 }}>Qué puedes esperar</p>
                    <p style={{ fontFamily: C.fontBody, fontSize: 13.5, fontWeight: 300, color: C.mutedLight, lineHeight: 1.65 }}>{a.resultado}</p>
                  </div>
                </div>

                <p style={{ fontFamily: C.fontBody, fontSize: 13.5, fontWeight: 300, color: C.mutedLight, lineHeight: 1.7, borderLeft: 'none', background: 'color-mix(in srgb, var(--accent) 6%, transparent)', border: `1.5px solid ${C.borderCu}`, borderRadius: 'var(--radius-card)', padding: '14px 18px', maxWidth: '62ch' }}>
                  <strong style={{ color: C.white, fontWeight: 600 }}>Consejo práctico:</strong> {a.consejo}
                </p>
              </article>
            </Reveal>
          ))}

          <div style={{ borderTop: `1.5px solid ${C.border}`, paddingTop: 'clamp(32px, 4vw, 48px)', textAlign: 'center' }}>
            <p style={{ fontFamily: C.fontBody, fontSize: 14.5, fontWeight: 300, color: C.mutedLight, marginBottom: 16 }}>
              ¿Quieres ver cómo funciona en una empresa real?
            </p>
            <Link href="/casos" style={{ fontFamily: C.fontMono, fontSize: 13, letterSpacing: '0.12em', textTransform: 'uppercase', color: C.copper, textDecoration: 'none' }}>
              Ver los casos →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
