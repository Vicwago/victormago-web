import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'
import { C } from '@/lib/theme'
import { posts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Blog — IA aplicada, sin humo',
  description:
    'IA y automatización explicadas desde casos reales: despachos legales, pymes gallegas, EU AI Act y lo que aprendí llevando la anticipación de la pista de tenis a la empresa.',
  alternates: { canonical: '/blog' },
}

export default function BlogPage() {
  const ordenados = [...posts].sort((a, b) => b.fecha.localeCompare(a.fecha))
  return (
    <div style={{ background: C.bg, minHeight: '100vh', color: C.white }}>
      <Navbar />

      <section style={{ padding: 'clamp(120px, 15vh, 160px) clamp(24px, 5vw, 64px) clamp(48px, 6vw, 72px)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p style={{ fontFamily: C.fontBody, fontSize: 11, fontWeight: 500, letterSpacing: '0.28em', textTransform: 'uppercase', color: C.copper, marginBottom: 20 }}>Blog</p>
          <h1 style={{ fontFamily: C.fontDisplay, fontWeight: 750, fontSize: 'clamp(34px, 5.5vw, 66px)', lineHeight: 1.02, letterSpacing: '-0.03em', color: C.white, marginBottom: 24 }}>
            IA aplicada,<br /><span style={{ color: C.copper }}>sin humo.</span>
          </h1>
          <p style={{ fontFamily: C.fontBody, fontSize: 'clamp(15px, 1.7vw, 17px)', fontWeight: 300, color: C.mutedLight, lineHeight: 1.75, maxWidth: 560 }}>
            Lo que aprendo automatizando empresas reales, contado para que lo puedas aplicar.
          </p>
        </div>
      </section>

      <section style={{ borderTop: `1px solid ${C.border}`, padding: 'clamp(48px, 6vw, 80px) clamp(24px, 5vw, 64px) clamp(80px, 10vw, 120px)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 2 }}>
          {ordenados.map((post, i) => (
            <Reveal key={post.slug} delay={Math.min(i * 0.06, 0.2)}>
              <Link href={`/blog/${post.slug}`} style={{ display: 'block', textDecoration: 'none' }}>
                <article style={{
                  background: C.bgCard, border: `1.5px solid ${C.border}`, borderRadius: 'var(--radius-card)', overflow: 'hidden',
                  display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(260px, 100%), 1fr))', alignItems: 'stretch',
                }}>
                  <div style={{ position: 'relative', minHeight: 200 }}>
                    <Image src={post.imagen} alt={post.imagenAlt} fill sizes="(max-width: 768px) 92vw, 420px" style={{ objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: 'clamp(24px, 3.5vw, 36px)' }}>
                    <p style={{ fontFamily: C.fontMono, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.muted, marginBottom: 12 }}>
                      {new Date(post.fecha).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}
                      {post.borrador && ' · Borrador'}
                    </p>
                    <h2 style={{ fontFamily: C.fontDisplay, fontSize: 'clamp(20px, 2.4vw, 26px)', fontWeight: 700, letterSpacing: '-0.015em', color: C.white, lineHeight: 1.2, marginBottom: 12 }}>
                      {post.titulo}
                    </h2>
                    <p style={{ fontFamily: C.fontBody, fontSize: 14, fontWeight: 300, color: C.mutedLight, lineHeight: 1.7, marginBottom: 18 }}>
                      {post.descripcion}
                    </p>
                    <span style={{ fontFamily: C.fontMono, fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.copper }}>Leer →</span>
                  </div>
                </article>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
