import type { Metadata } from 'next'
import { Space_Grotesk, IBM_Plex_Mono } from 'next/font/google'

// Fuentes extra SOLO para las demos de dirección visual — no afectan al
// rendimiento del sitio público (esta ruta está fuera de indexación).
const grotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-grotesk',
  display: 'swap',
})

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-plex-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Direcciones visuales (interno)',
  robots: { index: false, follow: false },
}

export default function DireccionesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${grotesk.variable} ${plexMono.variable}`}>
      {children}
    </div>
  )
}
