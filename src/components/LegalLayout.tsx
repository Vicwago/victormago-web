import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { C } from '@/lib/theme'

// Envoltorio común de las páginas legales.
export default function LegalLayout({ titulo, actualizado, children }: { titulo: string; actualizado: string; children: React.ReactNode }) {
  return (
    <div style={{ background: C.bg, minHeight: '100vh', color: C.white }} className="paper-grain">
      <Navbar />
      <article style={{ padding: 'clamp(120px, 15vh, 150px) clamp(24px, 5vw, 64px) clamp(64px, 8vw, 96px)' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <h1 style={{ fontFamily: C.fontDisplay, fontWeight: 750, fontSize: 'clamp(28px, 4.5vw, 48px)', lineHeight: 1.05, letterSpacing: '-0.025em', marginBottom: 10 }}>
            {titulo}<span style={{ color: C.copper }}>.</span>
          </h1>
          <p style={{ fontFamily: C.fontMono, fontSize: 12, letterSpacing: '0.1em', color: C.muted, marginBottom: 40 }}>
            Última actualización: {actualizado}
          </p>
          <div className="article-prose">{children}</div>
        </div>
      </article>
      <Footer />
    </div>
  )
}
