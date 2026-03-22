import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Outfit } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-outfit',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  title: 'Víctor Mago — Consultor y Formador de IA',
  description: 'Ayudo a directivos de pymes a entender, aplicar y cumplir la Inteligencia Artificial. Especialista en EU AI Act. Co-fundador de NorteIA.',
  keywords: ['formación IA empresas', 'EU AI Act pymes', 'consultor inteligencia artificial España', 'Victor Mago'],
  openGraph: {
    title: 'Víctor Mago — Consultor y Formador de IA',
    description: 'La IA no te va a quitar el trabajo, si aprendes a gobernarla.',
    url: 'https://victormago.com',
    siteName: 'Víctor Mago',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Víctor Mago — Consultor y Formador de IA',
    description: 'La IA no te va a quitar el trabajo, si aprendes a gobernarla.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${cormorant.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  )
}
