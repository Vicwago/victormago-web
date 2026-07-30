import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'
import CtaButton from '@/components/CtaButton'
import { C } from '@/lib/theme'
import { casos } from '@/lib/casos'

export const metadata: Metadata = {
  title: 'Casos reales de IA y automatización',
  description:
    'Casos reales de automatización e IA en despachos legales, inmobiliarias, comercio local y cultura: el problema, lo que construimos y el resultado.',
  alternates: { canonical: '/casos' },
}

export default function CasosPage() {
  return (
    <div style={{ background: C.bg, minHeight: '100vh', color: C.white }}>
      <Navbar />

      <section style={{ padding: 'clamp(120px, 15vh, 160px) clamp(24px, 5vw, 64px) clamp(48px, 6vw, 72px)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <p style={{ fontFamily: C.fontBody, fontSize: 11, fontWeight: 500, letterSpacing: '0.28em', textTransform: 'uppercase', color: C.copper, marginBottom: 20 }}>Casos</p>
          <h1 style={{ fontFamily: C.fontDisplay, fontSize: 'clamp(36px, 5.5vw, 68px)', fontWeight: 400, lineHeight: 1.1, color: C.white, marginBottom: 24 }}>
            Qué he resuelto<br /><em style={{ fontStyle: 'italic', color: C.copper }}>y cómo.</em>
          </h1>
          <p style={{ fontFamily: C.fontBody, fontSize: 'clamp(15px, 1.7vw, 17px)', fontWeight: 300, color: C.mutedLight, lineHeight: 1.75, maxWidth: 560 }}>
            Cada caso sigue el mismo esquema: el problema, lo que construimos y el resultado.
            Sin adornos. Los proyectos los ejecuto con mi equipo de NorteIA.
          </p>
        </div>
      </section>

      <section style={{ borderTop: `1px solid ${C.border}`, padding: 'clamp(48px, 6vw, 80px) clamp(24px, 5vw, 64px) clamp(80px, 10vw, 120px)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 2 }}>
          {casos.map((caso, i) => (
            <Reveal key={caso.slug} delay={Math.min(i * 0.06, 0.2)}>
              <Link href={`/casos/${caso.slug}`} style={{ display: 'block', textDecoration: 'none' }}>
                <article style={{
                  background: C.bgCard, border: `1px solid ${C.border}`,
                  padding: 'clamp(28px, 4vw, 44px)',
                  display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(260px, 100%), 1fr))', gap: 20, alignItems: 'center',
                }}>
                  <div>
                    <p style={{ fontFamily: C.fontBody, fontSize: 10, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: C.muted, marginBottom: 12 }}>{caso.sector}</p>
                    <h2 style={{ fontFamily: C.fontDisplay, fontSize: 'clamp(22px, 2.6vw, 30px)', fontWeight: 500, color: C.white, lineHeight: 1.2, marginBottom: 10 }}>{caso.cliente}</h2>
                    <p style={{ fontFamily: C.fontBody, fontSize: 14, fontWeight: 300, color: C.mutedLight, lineHeight: 1.7 }}>{caso.resumen}</p>
                  </div>
                  <div style={{ justifySelf: 'end' }}>
                    <span style={{ fontFamily: C.fontBody, fontSize: 11, fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: C.copper }}>Leer el caso →</span>
                  </div>
                </article>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section style={{ borderTop: `1px solid ${C.border}`, background: C.bgAlt, padding: 'clamp(64px, 8vw, 96px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
        <Reveal>
          <h2 style={{ fontFamily: C.fontDisplay, fontSize: 'clamp(28px, 4vw, 46px)', fontWeight: 400, color: C.white, lineHeight: 1.15, marginBottom: 20 }}>
            ¿Tu proceso podría ser<br /><em style={{ fontStyle: 'italic', color: C.copper }}>el siguiente caso?</em>
          </h2>
          <CtaButton />
        </Reveal>
      </section>

      <Footer />
    </div>
  )
}
