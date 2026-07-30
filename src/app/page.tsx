import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'
import CtaButton from '@/components/CtaButton'
import Faq from '@/components/Faq'
import LeadForm from '@/components/LeadForm'
import { C, mix } from '@/lib/theme'
import { casosDestacados } from '@/lib/casos'
import { DEFAULT_DESCRIPTION } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Víctor Mago — Consultor de IA y automatización en A Coruña',
  description: DEFAULT_DESCRIPTION,
  alternates: { canonical: '/' },
}

// ─── Qué resuelvo: lenguaje de cliente, no de ingeniero ─────────────────────
const resuelvo = [
  {
    titulo: 'Tu equipo pierde horas en tareas repetitivas',
    texto:
      'Copiar datos de un correo a un Excel. Clasificar documentos. Responder por enésima vez la misma pregunta. Automatizo ese circuito completo para que tu gente trabaje en lo que de verdad aporta.',
  },
  {
    titulo: 'Te llegan más consultas de las que puedes atender',
    texto:
      'Clientes que preguntan a las diez de la noche y compradores que no esperan. Monto asistentes que responden con tu información real — y solo con tu información real — a cualquier hora.',
  },
  {
    titulo: 'La IA te suena a obligación, no a ventaja',
    texto:
      'El EU AI Act ya está aquí y tu equipo todavía no la usa bien. Formo a equipos sin perfil técnico para que la IA les ahorre trabajo desde la primera semana, cumpliendo la norma.',
  },
]

const faqs = [
  {
    q: '¿Necesito saber de tecnología para trabajar contigo?',
    a: 'No. Trabajo mejor con directivos y equipos sin perfil técnico. Mi trabajo es exactamente ese: traducir la IA al lenguaje del negocio. No necesitas saber programar para aplicar la IA en tu empresa.',
  },
  {
    q: '¿Qué es el EU AI Act y por qué me afecta?',
    a: 'Es el reglamento europeo que regula el uso de la IA. Algunas obligaciones ya están vigentes desde febrero de 2025 y la aplicación general llega el 2 de agosto de 2026. Afecta a cualquier empresa que use IA en Europa, con multas de hasta 35 millones de euros o el 7% de la facturación mundial.',
  },
  {
    q: '¿Trabajas con empresas de cualquier sector?',
    a: 'Sí. Tengo especial experiencia con despachos legales (procuradores y abogados), comercio local, inmobiliario y sector cultural. La IA no entiende de sectores: entiende de procesos repetitivos, y esos existen en todas partes.',
  },
  {
    q: '¿Qué pasa después de la primera llamada?',
    a: 'En 20 minutos te digo si la IA puede ayudarte y por dónde empezaría yo. Si tiene sentido seguir, el proyecto lo ejecuto con mi equipo de NorteIA. Si no lo tiene, también te lo digo.',
  },
  {
    q: '¿Cuánto cuesta un proyecto de automatización?',
    a: 'Depende del proceso, pero mi criterio es fijo: si la automatización no se paga sola con las horas que ahorra, no te la recomiendo. Eso también me lo puedes preguntar en la primera llamada, sin compromiso.',
  },
  {
    q: '¿Cómo es la primera reunión?',
    a: 'Una llamada de 20 minutos, gratis y sin compromiso. Me cuentas cómo trabajáis y te digo qué automatizaría primero. Sin jerga técnica y sin venta agresiva.',
  },
]

export default function Home() {
  const destacados = casosDestacados()
  return (
    <div style={{ background: C.bg, minHeight: '100vh', color: C.white }}>
      <Navbar />

      {/* ══════════ HERO — el gancho que nadie más tiene ══════════ */}
      <section style={{ position: 'relative', minHeight: '92vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse at 20% 20%, ${mix(7)} 0%, transparent 55%), radial-gradient(ellipse at 85% 80%, ${mix(5)} 0%, transparent 50%)`, pointerEvents: 'none' }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: 1000, margin: '0 auto', padding: 'clamp(120px, 16vh, 160px) clamp(24px, 5vw, 64px) 80px' }}>
          <p className="hero-eyebrow" style={{ fontFamily: C.fontBody, fontSize: 11, fontWeight: 500, letterSpacing: '0.30em', textTransform: 'uppercase', color: C.copper, marginBottom: 32 }}>
            Consultor de IA y automatización · A Coruña
          </p>

          <h1 style={{ fontFamily: C.fontDisplay, fontSize: 'clamp(38px, 6.5vw, 76px)', fontWeight: 400, lineHeight: 1.08, color: C.white, marginBottom: 28, letterSpacing: '-0.02em', maxWidth: 900 }}>
            Durante 15 años enseñé a jugadores de tenis a <em style={{ fontStyle: 'italic', color: C.copper }}>anticiparse</em>.
            <br />
            Ahora enseño a las empresas a hacer lo mismo con la IA.
          </h1>

          <p style={{ fontFamily: C.fontBody, fontSize: 'clamp(15px, 1.7vw, 18px)', fontWeight: 300, color: C.mutedLight, lineHeight: 1.75, maxWidth: 560, marginBottom: 44 }}>
            Automatizo procesos y formo equipos en A Coruña. Sin humo, sin slides eternas:
            sistemas que funcionan el lunes por la mañana.
          </p>

          <div className="cta-buttons" style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <CtaButton />
            <Link href="/casos" style={{ fontFamily: C.fontBody, fontSize: 12, fontWeight: 400, letterSpacing: '0.16em', textTransform: 'uppercase', color: C.white, border: `1px solid ${C.border}`, padding: '15px 36px', textDecoration: 'none' }}>
              Ver casos reales →
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════ PRUEBA SOCIAL ══════════ */}
      <section style={{ borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`, background: C.bgAlt }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', padding: 'clamp(32px, 4vw, 48px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <p style={{ fontFamily: C.fontDisplay, fontSize: 'clamp(18px, 2.2vw, 24px)', fontStyle: 'italic', color: C.white, lineHeight: 1.5, maxWidth: 720, margin: '0 auto 12px' }}>
            Trabajo con el colegio profesional de los procuradores de A Coruña, despachos legales,
            inmobiliarias y comercios de Galicia.
          </p>
          <p style={{ fontFamily: C.fontBody, fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.muted }}>
            {/* TODO-VÍCTOR: testimonio real con nombre para sustituir esta línea */}
            Proyectos ejecutados con NorteIA
          </p>
        </div>
      </section>

      {/* ══════════ QUÉ RESUELVO ══════════ */}
      <section style={{ padding: 'clamp(80px, 10vw, 120px) clamp(24px, 5vw, 64px)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <Reveal>
            <p style={{ fontFamily: C.fontBody, fontSize: 11, fontWeight: 500, letterSpacing: '0.28em', textTransform: 'uppercase', color: C.copper, marginBottom: 16 }}>Qué resuelvo</p>
            <h2 style={{ fontFamily: C.fontDisplay, fontSize: 'clamp(30px, 4vw, 52px)', fontWeight: 400, color: C.white, maxWidth: 640, lineHeight: 1.12, marginBottom: 56 }}>
              Si te suena alguna de estas tres,<br /><em style={{ color: C.copper }}>hablemos.</em>
            </h2>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: 2 }}>
            {resuelvo.map((r, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, padding: 'clamp(28px, 3.5vw, 44px) clamp(22px, 2.8vw, 36px)', height: '100%' }}>
                  <p style={{ fontFamily: C.fontMono, fontSize: 12, color: C.copper, marginBottom: 18 }}>0{i + 1}</p>
                  <h3 style={{ fontFamily: C.fontDisplay, fontSize: 'clamp(20px, 2.2vw, 26px)', fontWeight: 500, color: C.white, lineHeight: 1.25, marginBottom: 14 }}>{r.titulo}</h3>
                  <p style={{ fontFamily: C.fontBody, fontSize: 14, fontWeight: 300, color: C.mutedLight, lineHeight: 1.75 }}>{r.texto}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ CASOS DESTACADOS ══════════ */}
      <section style={{ borderTop: `1px solid ${C.border}`, padding: 'clamp(80px, 10vw, 120px) clamp(24px, 5vw, 64px)', background: C.bgAlt }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <Reveal>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16, marginBottom: 56 }}>
              <div>
                <p style={{ fontFamily: C.fontBody, fontSize: 11, fontWeight: 500, letterSpacing: '0.28em', textTransform: 'uppercase', color: C.copper, marginBottom: 16 }}>Casos</p>
                <h2 style={{ fontFamily: C.fontDisplay, fontSize: 'clamp(30px, 4vw, 52px)', fontWeight: 400, color: C.white, lineHeight: 1.12 }}>
                  Problemas reales,<br /><em style={{ color: C.copper }}>resultados medibles.</em>
                </h2>
              </div>
              <Link href="/casos" style={{ fontFamily: C.fontBody, fontSize: 12, fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: C.copper, textDecoration: 'none' }}>
                Todos los casos →
              </Link>
            </div>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: 2 }}>
            {destacados.map((caso, i) => (
              <Reveal key={caso.slug} delay={i * 0.08}>
                <Link href={`/casos/${caso.slug}`} style={{ display: 'block', height: '100%', textDecoration: 'none' }}>
                  <article style={{ background: C.bgCard, border: `1px solid ${C.border}`, padding: 'clamp(28px, 3.5vw, 40px) clamp(22px, 2.8vw, 32px)', height: '100%', transition: 'border-color 0.25s' }}>
                    <p style={{ fontFamily: C.fontBody, fontSize: 10, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: C.muted, marginBottom: 14 }}>{caso.sector}</p>
                    <h3 style={{ fontFamily: C.fontDisplay, fontSize: 'clamp(19px, 2vw, 24px)', fontWeight: 500, color: C.white, lineHeight: 1.25, marginBottom: 12 }}>{caso.cliente}</h3>
                    <p style={{ fontFamily: C.fontBody, fontSize: 13.5, fontWeight: 300, color: C.mutedLight, lineHeight: 1.7, marginBottom: 20 }}>{caso.resumen}</p>
                    <span style={{ fontFamily: C.fontBody, fontSize: 11, fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: C.copper }}>Leer el caso →</span>
                  </article>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ SOBRE MÍ (corto) ══════════ */}
      <section style={{ borderTop: `1px solid ${C.border}`, padding: 'clamp(80px, 10vw, 120px) clamp(24px, 5vw, 64px)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: 'clamp(40px, 5vw, 72px)', alignItems: 'center' }}>
          <Reveal>
            <div className="photo-frame" style={{ position: 'relative', aspectRatio: '3/4', maxWidth: 340 }}>
              <div style={{ position: 'absolute', inset: 0, border: `1px solid ${C.borderCu}`, zIndex: 2 }} />
              <div style={{ position: 'absolute', top: 12, left: 12, right: -12, bottom: -12, border: `1px solid ${C.border}`, zIndex: 0 }} />
              <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 1 }}>
                <Image
                  src="/victor-mago.webp"
                  alt="Víctor Mago, consultor de IA en A Coruña"
                  fill
                  sizes="(max-width: 768px) 90vw, 340px"
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div>
              <p style={{ fontFamily: C.fontBody, fontSize: 11, fontWeight: 500, letterSpacing: '0.24em', textTransform: 'uppercase', color: C.copper, marginBottom: 20 }}>Quién soy</p>
              <h2 style={{ fontFamily: C.fontDisplay, fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 400, lineHeight: 1.15, color: C.white, marginBottom: 20 }}>
                Entrenador de tenis.<br /><em style={{ fontStyle: 'italic', color: C.copper }}>Consultor de IA.</em><br />La misma habilidad.
              </h2>
              <p style={{ fontFamily: C.fontBody, fontSize: 15, fontWeight: 300, color: C.mutedLight, lineHeight: 1.8, marginBottom: 12 }}>
                Quince años enseñando a leer al rival y anticiparse. Hoy hago lo mismo con procesos de empresa:
                ver la jugada antes de que llegue y preparar el sistema que la responde.
              </p>
              <p style={{ fontFamily: C.fontBody, fontSize: 15, fontWeight: 300, color: C.mutedLight, lineHeight: 1.8, marginBottom: 28 }}>
                Cofundé NorteIA para que las pymes gallegas adopten la IA sin humo y cumpliendo el EU AI Act.
              </p>
              <Link href="/sobre-mi" style={{ fontFamily: C.fontBody, fontSize: 12, fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: C.copper, border: `1px solid ${C.borderCu}`, padding: '12px 28px', textDecoration: 'none', display: 'inline-block' }}>
                Mi historia completa →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════ LEAD MAGNET ══════════ */}
      <section style={{ borderTop: `1px solid ${C.border}`, background: C.bgAlt, padding: 'clamp(64px, 8vw, 100px) clamp(24px, 5vw, 64px)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <Reveal>
            <p style={{ fontFamily: C.fontBody, fontSize: 11, fontWeight: 500, letterSpacing: '0.24em', textTransform: 'uppercase', color: C.copper, marginBottom: 16 }}>Recurso gratis</p>
            <h2 style={{ fontFamily: C.fontDisplay, fontSize: 'clamp(26px, 3.2vw, 40px)', fontWeight: 400, color: C.white, lineHeight: 1.2, marginBottom: 14 }}>
              5 automatizaciones que cualquier despacho de procuradores puede montar esta semana
            </h2>
            <p style={{ fontFamily: C.fontBody, fontSize: 14, fontWeight: 300, color: C.mutedLight, lineHeight: 1.75, marginBottom: 28 }}>
              PDF directo al grano: el proceso, la herramienta y el resultado de cada una.
              Si no tienes despacho, te sirve igual — los procesos repetitivos son los mismos en casi todos los sectores.
            </p>
            <LeadForm recurso="automatizaciones-procuradores" />
          </Reveal>
        </div>
      </section>

      {/* ══════════ FAQ ══════════ */}
      <section style={{ padding: 'clamp(80px, 10vw, 120px) clamp(24px, 5vw, 64px)', borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <Reveal>
            <div style={{ marginBottom: 48, textAlign: 'center' }}>
              <p style={{ fontFamily: C.fontBody, fontSize: 11, fontWeight: 500, letterSpacing: '0.24em', textTransform: 'uppercase', color: C.copper, marginBottom: 16 }}>Preguntas frecuentes</p>
              <h2 style={{ fontFamily: C.fontDisplay, fontSize: 'clamp(28px, 3.5vw, 46px)', fontWeight: 400, color: C.white }}>
                Lo que más me preguntan
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Faq items={faqs} />
          </Reveal>
        </div>
      </section>

      {/* ══════════ CTA FINAL ══════════ */}
      <section style={{ position: 'relative', padding: 'clamp(80px, 10vw, 120px) clamp(24px, 5vw, 64px)', textAlign: 'center', overflow: 'hidden', background: C.bgAlt, borderTop: `1px solid ${C.border}` }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 800, height: 500, background: `radial-gradient(ellipse, ${mix(7)} 0%, transparent 60%)`, pointerEvents: 'none' }} />
        <Reveal>
          <div style={{ maxWidth: 680, margin: '0 auto', position: 'relative' }}>
            <h2 style={{ fontFamily: C.fontDisplay, fontSize: 'clamp(32px, 5vw, 58px)', fontWeight: 400, lineHeight: 1.12, color: C.white, marginBottom: 20 }}>
              20 minutos.<br /><em style={{ fontStyle: 'italic', color: C.copper }}>Gratis. Sin compromiso.</em>
            </h2>
            <p style={{ fontFamily: C.fontBody, fontSize: 15, fontWeight: 300, color: C.mutedLight, lineHeight: 1.75, maxWidth: 520, margin: '0 auto 40px' }}>
              Me cuentas cómo trabajáis y te digo qué automatizaría primero y qué resultado puedes esperar.
              Si la IA no te va a ayudar, también te lo digo.
            </p>
            <CtaButton />
          </div>
        </Reveal>
      </section>

      <Footer />
    </div>
  )
}
