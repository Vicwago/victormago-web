import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CtaButton from '@/components/CtaButton'
import JsonLd from '@/components/JsonLd'
import LeadForm from '@/components/LeadForm'
import { C } from '@/lib/theme'
import { getPost } from '@/lib/blog'
import { SITE_URL } from '@/lib/site'

// Envoltorio común de los artículos MDX del blog.
// Uso en page.mdx:  <ArticleLayout slug="mi-slug"> ...contenido... </ArticleLayout>
export default function ArticleLayout({ slug, children }: { slug: string; children: React.ReactNode }) {
  const post = getPost(slug)

  return (
    <div style={{ background: C.bg, minHeight: '100vh', color: C.white }}>
      {post && (
        <>
          <JsonLd data={{
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: post.titulo,
            description: post.descripcion,
            datePublished: post.fecha,
            inLanguage: 'es',
            author: { '@type': 'Person', name: 'Víctor Mago', url: SITE_URL },
            mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
          }} />
          <JsonLd data={{
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Inicio', item: SITE_URL },
              { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
              { '@type': 'ListItem', position: 3, name: post.titulo, item: `${SITE_URL}/blog/${post.slug}` },
            ],
          }} />
        </>
      )}
      <Navbar />

      <article style={{ padding: 'clamp(120px, 15vh, 150px) clamp(24px, 5vw, 64px) clamp(64px, 8vw, 96px)' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <nav aria-label="Miga de pan" style={{ marginBottom: 28 }}>
            <Link href="/blog" style={{ fontFamily: C.fontBody, fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: C.muted, textDecoration: 'none' }}>
              ← Blog
            </Link>
          </nav>

          {post && (
            <header style={{ marginBottom: 'clamp(36px, 5vw, 56px)' }}>
              <p style={{ fontFamily: C.fontBody, fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: C.muted, marginBottom: 16 }}>
                {new Date(post.fecha).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}
                {post.borrador && ' · Borrador'}
              </p>
              <h1 style={{ fontFamily: C.fontDisplay, fontSize: 'clamp(30px, 4.5vw, 50px)', fontWeight: 400, lineHeight: 1.15, color: C.white, marginBottom: 16 }}>
                {post.titulo}
              </h1>
              <p style={{ fontFamily: C.fontDisplay, fontSize: 'clamp(16px, 1.9vw, 20px)', fontStyle: 'italic', color: C.mutedLight, lineHeight: 1.6 }}>
                {post.descripcion}
              </p>
            </header>
          )}

          <div className="article-prose">
            {children}
          </div>

          {/* CTA lead magnet al final de cada artículo (estructura del brief) */}
          <div style={{ marginTop: 'clamp(48px, 6vw, 72px)', padding: 'clamp(28px, 4vw, 40px)', background: 'var(--surface)', border: `1px solid ${C.borderCu}` }}>
            <h2 style={{ fontFamily: C.fontDisplay, fontSize: 'clamp(20px, 2.5vw, 26px)', fontWeight: 750, letterSpacing: '-0.015em', color: C.white, lineHeight: 1.25, marginBottom: 10 }}>
              5 automatizaciones que cualquier pyme puede montar esta semana
            </h2>
            <p style={{ fontFamily: C.fontBody, fontSize: 14, fontWeight: 300, color: C.mutedLight, lineHeight: 1.7, marginBottom: 20 }}>
              PDF gratuito y directo al grano. Déjame tu email y te lo mando ahora.
            </p>
            <LeadForm recurso="automatizaciones-pymes" />
          </div>

          <div style={{ marginTop: 40, textAlign: 'center' }}>
            <CtaButton variant="outline" />
          </div>
        </div>
      </article>

      <Footer />
    </div>
  )
}
