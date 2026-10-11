import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'
import CtaButton from '@/components/CtaButton'
import JsonLd from '@/components/JsonLd'
import Faq from '@/components/Faq'
import { C } from '@/lib/theme'
import { getCaso, type Caso } from '@/lib/casos'
import { servicios, type Servicio } from '@/lib/servicios'
import { SITE_URL } from '@/lib/site'

export const servicioMetadata = (s: Servicio): Metadata => ({
  title: s.metaTitle,
  description: s.metaDescription,
  alternates: { canonical: `/${s.slug}` },
  openGraph: { title: s.metaTitle, description: s.metaDescription, type: 'website' },
})

const Etiqueta = ({ children }: { children: React.ReactNode }) => (
  <p style={{ fontFamily: C.fontMono, fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: C.copper, marginBottom: 18 }}>{children}</p>
)

const Seccion = ({ children, alt = false }: { children: React.ReactNode; alt?: boolean }) => (
  <section style={{ borderTop: `1px solid ${C.border}`, background: alt ? C.bgAlt : undefined, padding: 'clamp(48px, 6vw, 72px) clamp(24px, 5vw, 64px)' }}>
    <div style={{ maxWidth: 900, margin: '0 auto' }}>{children}</div>
  </section>
)

const CasoResumen = ({ caso, principal }: { caso: Caso; principal: boolean }) => (
  <Link href={`/casos/${caso.slug}`} style={{ textDecoration: 'none' }}>
    <article style={{ background: C.bgCard, border: `1px solid ${principal ? C.borderCu : C.border}`, padding: '28px 26px', height: '100%', display: 'flex', flexDirection: 'column', gap: 12 }}>
      <p style={{ fontFamily: C.fontBody, fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: C.muted }}>{caso.sector}</p>
      <h3 style={{ fontFamily: C.fontDisplay, fontSize: 20, fontWeight: 700, letterSpacing: '-0.015em', color: C.white, lineHeight: 1.25 }}>{caso.alias}</h3>
      <p style={{ fontFamily: C.fontBody, fontSize: 14, fontWeight: 300, color: C.mutedLight, lineHeight: 1.7 }}>{caso.resumen}</p>
      {caso.kpis.length > 0 && (
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
          {caso.kpis.slice(0, 2).map(k => (
            <li key={k.texto} style={{ fontFamily: C.fontBody, fontSize: 13, color: C.mutedLight, lineHeight: 1.5 }}>
              <strong style={{ fontFamily: C.fontDisplay, color: C.copper, fontSize: 16, marginRight: 6 }}>{k.valor}</strong>{k.texto}
            </li>
          ))}
        </ul>
      )}
      <span style={{ fontFamily: C.fontBody, fontSize: 11, fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: C.copper, marginTop: 'auto' }}>Leer el caso →</span>
    </article>
  </Link>
)

// Plantilla común de las páginas de servicio: para quién → qué resuelvo →
// cómo trabajo → qué recibes → casos reales → FAQ → CTA.
export default function ServicioPage({ s }: { s: Servicio }) {
  const url = `${SITE_URL}/${s.slug}`
  const casos = s.casos.map(getCaso).filter((c): c is Caso => Boolean(c))
  const otros = servicios.filter(o => o.slug !== s.slug)

  return (
    <div style={{ background: C.bg, minHeight: '100vh', color: C.white }}>
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        '@id': `${url}#service`,
        name: s.titulo,
        serviceType: s.serviceType,
        description: s.metaDescription,
        url,
        provider: { '@id': `${SITE_URL}/#person` },
        areaServed: s.areaServed.map(name => ({ '@type': 'Place', name })),
        availableLanguage: ['es', 'gl'],
      }} />
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Inicio', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: s.nombre, item: url },
        ],
      }} />
      <Navbar />

      {/* Cabecera */}
      <section style={{ padding: 'clamp(120px, 15vh, 150px) clamp(24px, 5vw, 64px) clamp(40px, 5vw, 56px)' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <p style={{ fontFamily: C.fontBody, fontSize: 11, fontWeight: 500, letterSpacing: '0.24em', textTransform: 'uppercase', color: C.copper, marginBottom: 16 }}>{s.eyebrow}</p>
          <h1 style={{ fontFamily: C.fontDisplay, fontWeight: 750, fontSize: 'clamp(30px, 5vw, 56px)', lineHeight: 1.04, letterSpacing: '-0.025em', color: C.white, marginBottom: 20, textWrap: 'balance' }}>
            {s.titulo}
          </h1>
          <p style={{ fontFamily: C.fontBody, fontSize: 'clamp(17px, 2vw, 20px)', fontWeight: 300, color: C.mutedLight, lineHeight: 1.65, maxWidth: '62ch', marginBottom: 32 }}>
            {s.entradilla}
          </p>
          <CtaButton />
        </div>
      </section>

      <Seccion>
        <Reveal>
          <Etiqueta>Para quién es</Etiqueta>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(260px, 100%), 1fr))', gap: 14 }}>
            {s.paraQuien.map(p => (
              <li key={p} style={{ fontFamily: C.fontBody, fontSize: 15, fontWeight: 300, color: C.mutedLight, lineHeight: 1.7, borderTop: `1px solid ${C.border}`, paddingTop: 12 }}>{p}</li>
            ))}
          </ul>
        </Reveal>
      </Seccion>

      <Seccion alt>
        <Reveal>
          <Etiqueta>Qué resuelvo</Etiqueta>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(240px, 100%), 1fr))', gap: 2 }}>
            {s.queResuelvo.map(q => (
              <div key={q.titulo} style={{ background: C.bgCard, border: `1px solid ${C.border}`, padding: '24px 22px' }}>
                <h2 style={{ fontFamily: C.fontDisplay, fontSize: 19, fontWeight: 700, letterSpacing: '-0.01em', color: C.white, lineHeight: 1.3, marginBottom: 10 }}>{q.titulo}</h2>
                <p style={{ fontFamily: C.fontBody, fontSize: 14, fontWeight: 300, color: C.mutedLight, lineHeight: 1.7 }}>{q.texto}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Seccion>

      <Seccion>
        <Reveal>
          <Etiqueta>Cómo trabajo</Etiqueta>
          <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 22 }}>
            {s.comoTrabajo.map((p, i) => (
              <li key={p.titulo} style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '4px 20px' }}>
                <span style={{ fontFamily: C.fontDisplay, fontSize: 30, fontWeight: 800, color: C.copper, lineHeight: 1, gridRow: 'span 2' }}>{i + 1}</span>
                <h3 style={{ fontFamily: C.fontDisplay, fontSize: 18, fontWeight: 700, color: C.white }}>{p.titulo}</h3>
                <p style={{ fontFamily: C.fontBody, fontSize: 15, fontWeight: 300, color: C.mutedLight, lineHeight: 1.7, maxWidth: '64ch' }}>{p.texto}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </Seccion>

      <Seccion alt>
        <Reveal>
          <Etiqueta>Qué recibes</Etiqueta>
          <ul style={{ paddingLeft: 20, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {s.queRecibes.map(r => (
              <li key={r} style={{ fontFamily: C.fontBody, fontSize: 15, fontWeight: 300, color: C.mutedLight, lineHeight: 1.7 }}>{r}</li>
            ))}
          </ul>
        </Reveal>
      </Seccion>

      {casos.length > 0 && (
        <Seccion>
          <Reveal>
            <Etiqueta>{casos.length > 1 ? 'Casos reales' : 'Caso real'}</Etiqueta>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(260px, 100%), 1fr))', gap: 2 }}>
              {casos.map((c, i) => <CasoResumen key={c.slug} caso={c} principal={i === 0} />)}
            </div>
          </Reveal>
        </Seccion>
      )}

      <Seccion alt>
        <Reveal>
          <Etiqueta>Preguntas frecuentes</Etiqueta>
          <Faq items={s.faqs} />
        </Reveal>
      </Seccion>

      {/* CTA */}
      <section style={{ borderTop: `1px solid ${C.border}`, padding: 'clamp(56px, 7vw, 88px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
        <Reveal>
          <h2 style={{ fontFamily: C.fontDisplay, fontSize: 'clamp(26px, 3.5vw, 42px)', fontWeight: 400, color: C.white, lineHeight: 1.15, marginBottom: 16 }}>
            ¿Por dónde empezarías<br /><em style={{ fontStyle: 'italic', color: C.copper }}>en tu caso?</em>
          </h2>
          <p style={{ fontFamily: C.fontBody, fontSize: 14, fontWeight: 300, color: C.mutedLight, marginBottom: 32 }}>
            En 20 minutos te digo qué automatizaría primero y qué puedes esperar.
          </p>
          <CtaButton />
          <p style={{ fontFamily: C.fontBody, fontSize: 13, color: C.muted, marginTop: 28 }}>
            También te puede interesar:{' '}
            {otros.map((o, i) => (
              <span key={o.slug}>
                {i > 0 && ' · '}
                <Link href={`/${o.slug}`} style={{ color: C.mutedLight, textUnderlineOffset: 3 }}>{o.nombre}</Link>
              </span>
            ))}
          </p>
        </Reveal>
      </section>

      <Footer />
    </div>
  )
}
