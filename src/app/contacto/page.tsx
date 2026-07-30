import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'
import ContactForm from '@/components/ContactForm'
import { C } from '@/lib/theme'
import { CAL_URL, CTA_LABEL, SOCIAL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contacto — reserva 20 minutos gratis',
  description:
    'Reserva 20 minutos gratis conmigo o escríbeme. Te digo qué automatizaría primero en tu empresa y qué resultado puedes esperar. A Coruña y toda Galicia.',
  alternates: { canonical: '/contacto' },
}

export default function ContactoPage() {
  return (
    <div style={{ background: C.bg, minHeight: '100vh', color: C.white }}>
      <Navbar />

      {/* Header */}
      <section style={{ padding: 'clamp(120px, 15vh, 160px) clamp(24px, 5vw, 64px) clamp(48px, 6vw, 72px)', textAlign: 'center' }}>
        <p style={{ fontFamily: C.fontBody, fontSize: 11, fontWeight: 500, letterSpacing: '0.28em', textTransform: 'uppercase', color: C.copper, marginBottom: 20 }}>Contacto</p>
        <h1 style={{ fontFamily: C.fontDisplay, fontSize: 'clamp(38px, 6vw, 72px)', fontWeight: 400, lineHeight: 1.1, color: C.white, marginBottom: 20 }}>
          Hablemos
        </h1>
        <p style={{ fontFamily: C.fontBody, fontSize: 15, fontWeight: 300, color: C.mutedLight, lineHeight: 1.7, maxWidth: 480, margin: '0 auto' }}>
          20 minutos, gratis y sin compromiso. Me cuentas cómo trabajáis y te digo
          qué automatizaría primero.
        </p>
      </section>

      {/* Agenda (CTA primario) */}
      <section style={{ borderTop: `1px solid ${C.border}`, background: C.bgAlt, padding: 'clamp(40px, 5vw, 64px) clamp(24px, 5vw, 64px)' }}>
        <div style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center' }}>
          {CAL_URL ? (
            <>
              <p style={{ fontFamily: C.fontBody, fontSize: 14, fontWeight: 300, color: C.mutedLight, marginBottom: 24 }}>
                La forma más rápida: elige un hueco en mi agenda.
              </p>
              <a href={CAL_URL} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', fontFamily: C.fontBody, fontSize: 12, fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', background: C.orange, color: C.ctaText, padding: '16px 44px', textDecoration: 'none' }}>
                {CTA_LABEL} →
              </a>
            </>
          ) : (
            <p style={{ fontFamily: C.fontBody, fontSize: 14, fontWeight: 300, color: C.mutedLight, lineHeight: 1.7 }}>
              {/* TODO-VÍCTOR: al configurar CAL_URL en src/lib/site.ts este bloque se
                  convierte en el botón de agenda automáticamente. */}
              Escríbeme con el formulario y te propongo yo el hueco para los 20 minutos.
              Respondo en menos de 24 horas.
            </p>
          )}
        </div>
      </section>

      {/* Form + info */}
      <section style={{ padding: 'clamp(40px, 6vw, 80px) clamp(24px, 5vw, 64px)', borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: 'clamp(48px, 6vw, 80px)' }}>

          <Reveal>
            <div>
              <p style={{ fontFamily: C.fontBody, fontSize: 11, fontWeight: 500, letterSpacing: '0.24em', textTransform: 'uppercase', color: C.copper, marginBottom: 32 }}>También me encuentras en</p>
              {[
                { label: 'LinkedIn', value: 'Víctor Mago', href: SOCIAL.linkedin },
                { label: 'Instagram', value: '@vicwago', href: SOCIAL.instagram },
                { label: 'Email', value: SOCIAL.email, href: `mailto:${SOCIAL.email}` },
              ].map(l => (
                <a key={l.label} href={l.href} target={l.label !== 'Email' ? '_blank' : undefined} rel="noopener noreferrer" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 0', borderBottom: `1px solid ${C.border}`, textDecoration: 'none' }}>
                  <span style={{ fontFamily: C.fontBody, fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: C.muted }}>{l.label}</span>
                  <span style={{ fontFamily: C.fontBody, fontSize: 13, color: C.white }}>{l.value} →</span>
                </a>
              ))}

              <div style={{ marginTop: 48, padding: '24px', background: C.bgCard, border: `1px solid ${C.border}` }}>
                <p style={{ fontFamily: C.fontDisplay, fontSize: 19, fontStyle: 'italic', color: C.copper, lineHeight: 1.4, marginBottom: 12 }}>
                  "Los proyectos los ejecuto con NorteIA. Si vienes en nombre de tu empresa,
                  este sigue siendo el sitio: la primera llamada la hacemos tú y yo."
                </p>
                <a href={SOCIAL.norteia} target="_blank" rel="noopener noreferrer" style={{ fontFamily: C.fontBody, fontSize: 11, fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: C.orange, textDecoration: 'none' }}>
                  Conocer NorteIA →
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, padding: 'clamp(28px, 4vw, 48px)' }}>
              <p style={{ fontFamily: C.fontDisplay, fontSize: 26, fontWeight: 400, color: C.white, marginBottom: 28 }}>Escríbeme</p>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}
