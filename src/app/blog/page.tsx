import type { Metadata } from 'next'
import Link from 'next/link'
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
          <h1 style={{ fontFamily: C.fontDisplay, fontSize: 'clamp(36px, 5.5vw, 68px)', fontWeight: 400, lineHeight: 1.1, color: C.white, marginBottom: 24 }}>
            IA aplicada,<br /><em style={{ fontStyle: 'italic', color: C.copper }}>sin humo.</em>
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
                <article style={{ background: C.bgCard, border: `1px solid ${C.border}`, padding: 'clamp(28px, 4vw, 40px)' }}>
                  <p style={{ fontFamily: C.fontBody, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.muted, marginBottom: 12 }}>
                    {new Date(post.fecha).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}
                    {post.borrador && ' · Borrador'}
                  </p>
                  <h2 style={{ fontFamily: C.fontDisplay, fontSize: 'clamp(21px, 2.6vw, 28px)', fontWeight: 500, color: C.white, lineHeight: 1.25, marginBottom: 12 }}>
                    {post.titulo}
                  </h2>
                  <p style={{ fontFamily: C.fontBody, fontSize: 14, fontWeight: 300, color: C.mutedLight, lineHeight: 1.7, marginBottom: 18 }}>
                    {post.descripcion}
                  </p>
                  <span style={{ fontFamily: C.fontBody, fontSize: 11, fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: C.copper }}>Leer →</span>
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
