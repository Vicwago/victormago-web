import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'
import DiagnosticoForm from '@/components/DiagnosticoForm'
import { C } from '@/lib/theme'

export const metadata: Metadata = {
  title: 'Diagnóstico exprés — qué automatizaría en tu empresa',
  description:
    '5 preguntas, 3 minutos: te digo qué patrón veo en tu empresa, por dónde empezaría a automatizar y cuál es el siguiente paso. Gratis y al momento.',
  alternates: { canonical: '/diagnostico' },
}

export default function DiagnosticoPage() {
  return (
    <div style={{ background: C.bg, minHeight: '100vh', color: C.white }} className="paper-grain">
      <Navbar />

      <section style={{ padding: 'clamp(120px, 15vh, 150px) clamp(24px, 5vw, 64px) clamp(64px, 8vw, 96px)' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <p style={{ fontFamily: C.fontMono, fontSize: 12, letterSpacing: '0.28em', textTransform: 'uppercase', color: C.copper, marginBottom: 20 }}>
            Diagnóstico exprés · 5 preguntas · 3 minutos
          </p>
          <h1 style={{ fontFamily: C.fontDisplay, fontWeight: 750, fontSize: 'clamp(30px, 5vw, 54px)', lineHeight: 1.03, letterSpacing: '-0.03em', marginBottom: 18 }}>
            ¿Qué automatizaría yo en tu empresa<span style={{ color: C.copper }}>?</span>
          </h1>
          <p style={{ fontFamily: C.fontBody, fontSize: 15.5, fontWeight: 300, color: C.mutedLight, lineHeight: 1.75, maxWidth: '54ch', marginBottom: 'clamp(36px, 5vw, 48px)' }}>
            Responde 5 preguntas y te devuelvo al momento una lectura de tu situación y las tres
            automatizaciones por las que empezaría, adaptadas a tu sector. Sin compromiso: el
            diagnóstico es tuyo, hagas lo que hagas después.
          </p>

          <Reveal>
            <DiagnosticoForm />
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}
