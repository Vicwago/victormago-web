import type { Metadata } from 'next'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'
import CtaButton from '@/components/CtaButton'
import { C, mix } from '@/lib/theme'

export const metadata: Metadata = {
  title: 'Sobre mí — de la pista de tenis a la consultoría de IA',
  description:
    '15 años como entrenador de tenis me enseñaron a leer el juego y anticiparme. Hoy aplico esa misma habilidad a los procesos de las empresas con IA. Esta es mi historia.',
  alternates: { canonical: '/sobre-mi' },
}

// El tenis como antecedente profesional: metodología, lectura de patrones,
// disciplina y optimización del rendimiento → arquitectura de procesos con IA.
const capitulos = [
  {
    etapa: 'El antecedente · Alto rendimiento',
    titulo: 'Quince años optimizando rendimiento',
    parrafos: [
      'Antes de la IA, mi profesión fue el alto rendimiento deportivo: más de quince años como entrenador de tenis. Visto desde fuera parece otro mundo; visto desde dentro, es un laboratorio de metodología pura: observar cómo trabaja una persona, detectar el patrón que repite sin darse cuenta, diseñar la corrección y entrenarla hasta que el resultado es estable.',
      'De esa etapa vienen las tres cosas que hoy definen mi forma de trabajar: lectura de patrones, disciplina de proceso y obsesión por el resultado medible. En el deporte no vale "creo que mejoramos": o el rendimiento sube, o el método está mal.',
      // TODO-VÍCTOR: anécdota profesional concreta (un proceso de mejora medible con un alumno)
    ],
  },
  {
    etapa: 'La transición',
    titulo: 'El mismo método, en otro terreno',
    parrafos: [
      'Cuando la IA generativa se convirtió en herramienta de trabajo real, reconocí la escena: equipos reaccionando tarde a problemas que se podían anticipar. Tareas repetitivas comiéndose las horas, consultas sin responder, tecnología infrautilizada.',
      'La solución era metodológicamente idéntica a lo que llevaba quince años haciendo: leer el patrón, diseñar la respuesta y sistematizar la repetición. Eso es, exactamente, una automatización bien construida.',
      // TODO-VÍCTOR: cómo fue el momento real de la transición (primer proyecto, primera formación)
    ],
  },
  {
    etapa: 'Hoy · Los sistemas',
    titulo: 'NorteIA y la IA en producción',
    parrafos: [
      'Cofundé NorteIA con Luis Salgado, mi socio técnico, para llevar esto a las pymes gallegas: yo analizo el negocio y diseño la estrategia; el equipo construye y despliega. Automatización de procesos, formación de equipos sin perfil técnico y preparación para el EU AI Act.',
      'Trabajo con despachos legales, inmobiliarias, comercios locales y proyectos culturales. Sectores distintos, mismo patrón: procesos repetitivos que un sistema hace mejor, y personas que por fin pueden dedicarse a lo que un sistema no sabe hacer.',
      'Sigo vinculado al deporte cada tarde. Es el recordatorio diario de que ningún método funciona sin repetición, medición y ajuste.',
    ],
  },
]

export default function SobreMiPage() {
  return (
    <div style={{ background: C.bg, minHeight: '100vh', color: C.white }}>
      <Navbar />

      {/* Header */}
      <section style={{ padding: 'clamp(120px, 15vh, 160px) clamp(24px, 5vw, 64px) clamp(48px, 6vw, 72px)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse at 80% 20%, ${mix(6)} 0%, transparent 55%)`, pointerEvents: 'none' }} />
        <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative' }}>
          <p style={{ fontFamily: C.fontBody, fontSize: 11, fontWeight: 500, letterSpacing: '0.28em', textTransform: 'uppercase', color: C.copper, marginBottom: 20 }}>Sobre mí</p>
          <h1 style={{ fontFamily: C.fontDisplay, fontWeight: 750, fontSize: 'clamp(34px, 5.5vw, 66px)', lineHeight: 1.02, letterSpacing: '-0.03em', color: C.white, marginBottom: 24 }}>
            De la pista de tenis<br /><span style={{ color: C.copper }}>a la IA en producción.</span>
          </h1>
          <p style={{ fontFamily: C.fontBody, fontSize: 'clamp(15px, 1.7vw, 17px)', fontWeight: 300, color: C.mutedLight, lineHeight: 1.75, maxWidth: 560 }}>
            No vengo de la ingeniería. Vengo de quince años enseñando a la gente a anticiparse.
            Resulta que es la misma habilidad.
          </p>
        </div>
      </section>

      {/* Foto + capítulos */}
      <section style={{ borderTop: `1px solid ${C.border}`, padding: 'clamp(64px, 8vw, 100px) clamp(24px, 5vw, 64px)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: 'clamp(40px, 5vw, 72px)', alignItems: 'start', marginBottom: 'clamp(56px, 7vw, 88px)' }}>
            <Reveal>
              <div className="photo-frame" style={{ position: 'relative', aspectRatio: '3/4', maxWidth: 360 }}>
                <div style={{ position: 'absolute', inset: 0, border: `1px solid ${C.borderCu}`, zIndex: 2 }} />
                <div style={{ position: 'absolute', top: 12, left: 12, right: -12, bottom: -12, border: `1px solid ${C.border}`, zIndex: 0 }} />
                <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 1 }}>
                  <Image
                    src="/victor-mago.webp"
                    alt="Víctor Mago"
                    fill
                    sizes="(max-width: 768px) 90vw, 360px"
                    style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  />
                </div>
              </div>
              {/* TODO-VÍCTOR: foto en pista de tenis para reforzar la narrativa (sustituir o añadir) */}
            </Reveal>
            <Reveal delay={0.1}>
              <blockquote style={{ borderLeft: `2px solid ${C.borderCu}`, paddingLeft: 24 }}>
                <p style={{ fontFamily: C.fontDisplay, fontSize: 'clamp(20px, 2.5vw, 28px)', fontStyle: 'italic', color: C.copperLight, lineHeight: 1.5 }}>
                  "El alto rendimiento me enseñó la regla que aplico a cada proceso: quien
                  reacciona tarde, pierde. Quien se anticipa con método, gana."
                </p>
              </blockquote>
            </Reveal>
          </div>

          {capitulos.map((cap, i) => (
            <Reveal key={i} delay={0.05}>
              <div style={{ marginBottom: 'clamp(48px, 6vw, 72px)', maxWidth: 680 }}>
                <p style={{ fontFamily: C.fontMono, fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: C.copper, marginBottom: 12 }}>{cap.etapa}</p>
                <h2 style={{ fontFamily: C.fontDisplay, fontWeight: 750, fontSize: 'clamp(24px, 3.2vw, 36px)', letterSpacing: '-0.02em', color: C.white, lineHeight: 1.1, marginBottom: 20 }}>{cap.titulo}</h2>
                {cap.parrafos.map((p, j) => (
                  <p key={j} style={{ fontFamily: C.fontBody, fontSize: 16, fontWeight: 300, color: C.mutedLight, lineHeight: 1.85, marginBottom: 18 }}>{p}</p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ borderTop: `1px solid ${C.border}`, background: C.bgAlt, padding: 'clamp(64px, 8vw, 96px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
        <Reveal>
          <h2 style={{ fontFamily: C.fontDisplay, fontWeight: 750, fontSize: 'clamp(28px, 4vw, 46px)', letterSpacing: '-0.025em', color: C.white, lineHeight: 1.05, marginBottom: 20 }}>
            No dejes que tu rival<br /><span style={{ color: C.copper }}>se adelante.</span>
          </h2>
          <p style={{ fontFamily: C.fontBody, fontSize: 15, fontWeight: 300, color: C.mutedLight, marginBottom: 36 }}>
            20 minutos, gratis. Me cuentas cómo trabajáis y te digo qué automatizaría primero.
          </p>
          <CtaButton />
        </Reveal>
      </section>

      <Footer />
    </div>
  )
}
