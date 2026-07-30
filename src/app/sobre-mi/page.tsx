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

// Estructura 50/50: mitad trayectoria de tenis, mitad llegada a la IA.
const capitulos = [
  {
    etapa: 'Primera parte · La pista',
    titulo: 'Quince años leyendo el juego',
    parrafos: [
      'Llevo más de quince años entrenando a jugadores de tenis. Cada tarde, en el club, el trabajo es el mismo: mirar cómo juega la persona que tienes delante, detectar el patrón que repite sin darse cuenta y entrenar la respuesta hasta que sale sola.',
      'El tenis tiene una regla que no perdona: cuando la bola llega, ya es tarde. Todo lo que importa pasa antes — la lectura del rival, la posición, la preparación del golpe. A eso se le llama anticipación, y es lo que separa a un jugador que corre detrás de la bola de uno que la espera.',
      // TODO-VÍCTOR: anécdota personal concreta de la etapa de entrenador (un alumno, un momento, un aprendizaje)
    ],
  },
  {
    etapa: 'El punto de giro',
    titulo: 'La misma jugada, en otro terreno',
    parrafos: [
      'Cuando la IA generativa se convirtió en herramienta de trabajo real, vi la misma escena que veía cada tarde en la pista: empresas corriendo detrás de la bola. Tareas repetitivas comiéndose las horas, consultas sin responder, tecnología usada tarde y mal.',
      'Y la solución era la que ya conocía: leer el patrón, preparar la respuesta, entrenar la repetición hasta que sale sola. Eso es exactamente lo que hace una automatización bien montada.',
      // TODO-VÍCTOR: cómo fue el momento real de la transición (primer proyecto, primera formación)
    ],
  },
  {
    etapa: 'Segunda parte · Los sistemas',
    titulo: 'NorteIA y el trabajo de hoy',
    parrafos: [
      'Cofundé NorteIA con Luis Salgado, mi socio técnico, para llevar esto a las pymes gallegas: yo leo el negocio y traduzco; él construye los sistemas. Automatización de procesos, formación de equipos sin perfil técnico y cumplimiento del EU AI Act.',
      'Trabajo con despachos de procuradores, inmobiliarias, comercios locales y proyectos culturales. Sectores distintos, mismo patrón: procesos repetitivos que una máquina hace mejor, y personas que por fin pueden dedicarse a lo que una máquina no sabe hacer.',
      'Sigo entrenando por las tardes. No pienso dejarlo: la pista es donde mejor se entiende todo lo que hago por las mañanas.',
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
          <h1 style={{ fontFamily: C.fontDisplay, fontSize: 'clamp(36px, 5.5vw, 68px)', fontWeight: 400, lineHeight: 1.1, color: C.white, marginBottom: 24 }}>
            De la pista de tenis<br /><em style={{ fontStyle: 'italic', color: C.copper }}>a la consultoría de IA.</em>
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
                  "En el tenis, cuando la bola llega, ya es tarde. En las empresas pasa lo mismo:
                  el que espera a que el problema llegue, pierde el punto."
                </p>
              </blockquote>
            </Reveal>
          </div>

          {capitulos.map((cap, i) => (
            <Reveal key={i} delay={0.05}>
              <div style={{ marginBottom: 'clamp(48px, 6vw, 72px)', maxWidth: 680 }}>
                <p style={{ fontFamily: C.fontMono, fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: C.copper, marginBottom: 12 }}>{cap.etapa}</p>
                <h2 style={{ fontFamily: C.fontDisplay, fontSize: 'clamp(26px, 3.2vw, 38px)', fontWeight: 400, color: C.white, lineHeight: 1.2, marginBottom: 20 }}>{cap.titulo}</h2>
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
          <h2 style={{ fontFamily: C.fontDisplay, fontSize: 'clamp(28px, 4vw, 46px)', fontWeight: 400, color: C.white, lineHeight: 1.15, marginBottom: 20 }}>
            ¿Vemos qué jugada<br /><em style={{ fontStyle: 'italic', color: C.copper }}>te está llegando?</em>
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
