import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import NewsletterForm from '@/components/NewsletterForm'
import { C } from '@/lib/theme'

export const metadata: Metadata = {
  title: 'IA que Impulsa — la newsletter de Víctor Mago',
  description:
    'Cada semana, una idea práctica de IA y automatización que puedes aplicar en tu negocio esa misma semana. Contada desde proyectos reales en Galicia. Gratis, baja en un clic.',
  alternates: { canonical: '/newsletter' },
}

// Landing de captación para la newsletter — destino de los CTAs de redes.
const recibes = [
  {
    t: 'Una idea aplicable, no teoría',
    d: 'Cada número trae una sola idea de IA o automatización explicada para que puedas montarla o encargarla esa misma semana.',
  },
  {
    t: 'Casos reales de Galicia',
    d: 'Lo que cuento sale de proyectos en marcha: un despacho que puso su facturación al día en el 10% del tiempo, una inmobiliaria con un 20-30% más de leads.',
  },
  {
    t: 'Lo que la ley te exige, sin susto',
    d: 'El EU AI Act ya se aplica. Te aviso de lo que obliga a una pyme como la tuya y de cómo cumplirlo aprovechándolo.',
  },
]

export default function NewsletterPage() {
  return (
    <div style={{ background: C.bg, minHeight: '100vh', color: C.white }}>
      <Navbar />
      <main style={{ padding: 'clamp(130px, 16vh, 170px) clamp(24px, 5vw, 64px) clamp(64px, 8vw, 96px)' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <p style={{ fontFamily: C.fontMono, fontSize: 12, letterSpacing: '0.22em', textTransform: 'uppercase', color: C.copper, marginBottom: 18 }}>
            IA que Impulsa · Newsletter semanal
          </p>
          <h1 style={{ fontFamily: C.fontDisplay, fontStretch: '118%' as never, fontWeight: 800, fontSize: 'clamp(32px, 5vw, 54px)', lineHeight: 1.08, letterSpacing: '-0.02em', marginBottom: 20 }}>
            Una idea de IA aplicable en tu negocio, cada semana<span style={{ color: C.copper }}>.</span>
          </h1>
          <p style={{ fontFamily: C.fontBody, fontSize: 16.5, fontWeight: 300, color: C.mutedLight, lineHeight: 1.75, marginBottom: 32, maxWidth: 560 }}>
            Sin teoría eterna y sin humo: lo que funciona, contado desde proyectos reales
            con pymes de Galicia. Gratis. Si no te sirve, la baja es un clic.
          </p>

          <div style={{ marginBottom: 48 }}>
            <NewsletterForm />
          </div>

          <div style={{ display: 'grid', gap: 18, marginBottom: 48 }}>
            {recibes.map((r, i) => (
              <div key={r.t} style={{ border: `1.5px solid ${C.border}`, borderRadius: 16, padding: '22px 24px', background: 'var(--surface)' }}>
                <p style={{ fontFamily: C.fontMono, fontSize: 11, letterSpacing: '0.18em', color: C.muted, marginBottom: 8 }}>
                  0{i + 1}
                </p>
                <h2 style={{ fontFamily: C.fontBody, fontWeight: 600, fontSize: 17, marginBottom: 8 }}>{r.t}</h2>
                <p style={{ fontFamily: C.fontBody, fontSize: 14.5, fontWeight: 300, color: C.mutedLight, lineHeight: 1.7 }}>{r.d}</p>
              </div>
            ))}
          </div>

          <p style={{ fontFamily: C.fontBody, fontSize: 14.5, fontWeight: 300, color: C.mutedLight, lineHeight: 1.75 }}>
            ¿Quieres ver el nivel antes de dejarme tu email? Lee{' '}
            <Link href="/blog/eu-ai-act-pymes" style={{ color: C.copper, textDecoration: 'underline' }}>
              el análisis del EU AI Act para pymes
            </Link>{' '}
            o{' '}
            <Link href="/blog/mission-control-crm-agentes-ia" style={{ color: C.copper, textDecoration: 'underline' }}>
              el sistema de agentes de IA con el que trabajo
            </Link>
            . Esto es lo que llega a tu bandeja.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
