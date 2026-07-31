import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'
import CtaButton from '@/components/CtaButton'
import JsonLd from '@/components/JsonLd'
import VideoEmbed from '@/components/VideoEmbed'
import { C } from '@/lib/theme'
import { casos, getCaso } from '@/lib/casos'
import { SITE_URL } from '@/lib/site'

export function generateStaticParams() {
  return casos.map(c => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const caso = getCaso(slug)
  if (!caso) return {}
  return {
    title: `${caso.alias} — caso de automatización con IA`,
    description: caso.resumen,
    alternates: { canonical: `/casos/${caso.slug}` },
    openGraph: { title: caso.titulo, description: caso.resumen, type: 'article' },
  }
}

const Bloque = ({ etiqueta, parrafos }: { etiqueta: string; parrafos: string[] }) => (
  <div style={{ marginBottom: 'clamp(40px, 5vw, 56px)' }}>
    <p style={{ fontFamily: C.fontMono, fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: C.copper, marginBottom: 14 }}>{etiqueta}</p>
    {parrafos.map((p, i) => (
      <p key={i} style={{ fontFamily: C.fontBody, fontSize: 16, fontWeight: 300, color: C.mutedLight, lineHeight: 1.85, marginBottom: 16 }}>{p}</p>
    ))}
  </div>
)

export default async function CasoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const caso = getCaso(slug)
  if (!caso) notFound()

  const otros = casos.filter(c => c.slug !== caso.slug).slice(0, 2)

  return (
    <div style={{ background: C.bg, minHeight: '100vh', color: C.white }}>
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: caso.titulo,
        description: caso.resumen,
        author: { '@type': 'Person', name: 'Víctor Mago', url: SITE_URL },
        mainEntityOfPage: `${SITE_URL}/casos/${caso.slug}`,
      }} />
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Inicio', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Casos', item: `${SITE_URL}/casos` },
          { '@type': 'ListItem', position: 3, name: caso.alias, item: `${SITE_URL}/casos/${caso.slug}` },
        ],
      }} />
      <Navbar />

      {/* Header */}
      <section style={{ padding: 'clamp(120px, 15vh, 150px) clamp(24px, 5vw, 64px) clamp(40px, 5vw, 56px)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <nav aria-label="Miga de pan" style={{ marginBottom: 28 }}>
            <Link href="/casos" style={{ fontFamily: C.fontBody, fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: C.muted, textDecoration: 'none' }}>
              ← Todos los casos
            </Link>
          </nav>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap', marginBottom: 16 }}>
            <p style={{ fontFamily: C.fontBody, fontSize: 11, fontWeight: 500, letterSpacing: '0.24em', textTransform: 'uppercase', color: C.copper }}>{caso.sector}</p>
            {caso.web && (
              <a href={caso.web} target="_blank" rel="noopener noreferrer" style={{ fontFamily: C.fontMono, fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: C.mutedLight, textDecoration: 'underline', textUnderlineOffset: 3 }}>
                Cliente real: visitar su web ↗
              </a>
            )}
          </div>
          <h1 style={{ fontFamily: C.fontDisplay, fontWeight: 750, fontSize: 'clamp(28px, 4.5vw, 50px)', lineHeight: 1.06, letterSpacing: '-0.025em', color: C.white, marginBottom: 18 }}>
            {caso.titulo}
          </h1>
          <p style={{ fontFamily: C.fontDisplay, fontSize: 'clamp(17px, 2vw, 21px)', fontStyle: 'italic', color: C.mutedLight, lineHeight: 1.6 }}>
            {caso.resumen}
          </p>
        </div>
      </section>

      {/* Cuerpo: problema → construimos → resultado */}
      <section style={{ borderTop: `1px solid ${C.border}`, padding: 'clamp(48px, 6vw, 72px) clamp(24px, 5vw, 64px)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <Reveal><Bloque etiqueta="El problema" parrafos={caso.problema} /></Reveal>
          <Reveal><Bloque etiqueta="Qué construimos" parrafos={caso.construimos} /></Reveal>

          {/* Herramientas */}
          <Reveal>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 'clamp(40px, 5vw, 56px)' }}>
              {caso.herramientas.map(h => (
                <span key={h} style={{ fontFamily: C.fontBody, fontSize: 12, fontWeight: 400, letterSpacing: '0.06em', color: C.mutedLight, border: `1px solid ${C.border}`, background: C.bgCard, padding: '7px 14px' }}>
                  {h}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal><Bloque etiqueta="El resultado" parrafos={caso.resultado} /></Reveal>

          {caso.youtubeId && (
            <Reveal>
              <div style={{ marginBottom: 'clamp(40px, 5vw, 56px)' }}>
                <VideoEmbed id={caso.youtubeId} title={`Vídeo del caso: ${caso.alias}`} />
              </div>
            </Reveal>
          )}

          {caso.testimonio && (
            <Reveal>
              <blockquote style={{ borderLeft: `2px solid ${C.borderCu}`, paddingLeft: 24, marginBottom: 'clamp(40px, 5vw, 56px)' }}>
                <p style={{ fontFamily: C.fontDisplay, fontSize: 'clamp(18px, 2.2vw, 24px)', fontStyle: 'italic', color: C.copperLight, lineHeight: 1.55, marginBottom: 12 }}>
                  "{caso.testimonio.texto}"
                </p>
                <cite style={{ fontFamily: C.fontBody, fontSize: 13, fontStyle: 'normal', color: C.muted }}>— {caso.testimonio.autor}</cite>
              </blockquote>
            </Reveal>
          )}
        </div>
      </section>

      {/* CTA */}
      <section style={{ borderTop: `1px solid ${C.border}`, background: C.bgAlt, padding: 'clamp(56px, 7vw, 88px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
        <Reveal>
          <h2 style={{ fontFamily: C.fontDisplay, fontSize: 'clamp(26px, 3.5vw, 42px)', fontWeight: 400, color: C.white, lineHeight: 1.15, marginBottom: 16 }}>
            ¿Tienes un proceso parecido<br /><em style={{ fontStyle: 'italic', color: C.copper }}>comiéndote horas?</em>
          </h2>
          <p style={{ fontFamily: C.fontBody, fontSize: 14, fontWeight: 300, color: C.mutedLight, marginBottom: 32 }}>
            En 20 minutos te digo si se puede automatizar y qué resultado puedes esperar.
          </p>
          <CtaButton />
        </Reveal>
      </section>

      {/* Otros casos */}
      <section style={{ borderTop: `1px solid ${C.border}`, padding: 'clamp(48px, 6vw, 72px) clamp(24px, 5vw, 64px)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p style={{ fontFamily: C.fontBody, fontSize: 11, fontWeight: 500, letterSpacing: '0.24em', textTransform: 'uppercase', color: C.copper, marginBottom: 24 }}>Más casos</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(260px, 100%), 1fr))', gap: 2 }}>
            {otros.map(o => (
              <Link key={o.slug} href={`/casos/${o.slug}`} style={{ textDecoration: 'none' }}>
                <article style={{ background: C.bgCard, border: `1px solid ${C.border}`, padding: '28px 26px', height: '100%' }}>
                  <p style={{ fontFamily: C.fontBody, fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: C.muted, marginBottom: 10 }}>{o.sector}</p>
                  <h3 style={{ fontFamily: C.fontDisplay, fontSize: 20, fontWeight: 700, letterSpacing: '-0.015em', color: C.white, lineHeight: 1.25, marginBottom: 10 }}>{o.alias}</h3>
                  <span style={{ fontFamily: C.fontBody, fontSize: 11, fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: C.copper }}>Leer →</span>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
