import type { Metadata, Viewport } from 'next'
import { Archivo, Public_Sans, Chivo_Mono } from 'next/font/google'
import JsonLd from '@/components/JsonLd'
import ChatWidget from '@/components/ChatWidget'
import CookieConsent from '@/components/CookieConsent'
import { SITE_URL, SITE_NAME, DEFAULT_DESCRIPTION, SOCIAL, NAP } from '@/lib/site'
import './globals.css'

// Sistema "El punto": Archivo variable (display, con eje de anchura),
// Public Sans (cuerpo), Chivo Mono (marcador y etiquetas)
const archivo = Archivo({
  subsets: ['latin'],
  axes: ['wdth'],
  variable: '--font-archivo',
  display: 'swap',
})

const publicSans = Public_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  variable: '--font-public',
  display: 'swap',
})

const chivoMono = Chivo_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-chivo',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Víctor Mago — Consultor de IA y automatización en A Coruña',
    template: '%s · Víctor Mago',
  },
  description: DEFAULT_DESCRIPTION,
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Víctor Mago — Consultor de IA y automatización en A Coruña',
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'es_ES',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Víctor Mago — Consultor de IA' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Víctor Mago — Consultor de IA y automatización',
    description: DEFAULT_DESCRIPTION,
  },
  robots: { index: true, follow: true },
}

// TODO-VÍCTOR: crea la propiedad GA4 en analytics.google.com y añade
// NEXT_PUBLIC_GA_ID=G-XXXXXXX en Vercel (Settings → Environment Variables).
// Después: dar de alta el dominio en Google Search Console y Bing Webmaster.
const GA_ID = process.env.NEXT_PUBLIC_GA_ID

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${archivo.variable} ${publicSans.variable} ${chivoMono.variable}`}>
      <body>
        <JsonLd data={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Person',
              '@id': `${SITE_URL}/#person`,
              name: 'Víctor Mago',
              url: SITE_URL,
              image: `${SITE_URL}/victor-mago.webp`,
              jobTitle: 'Consultor de IA y automatización',
              description: DEFAULT_DESCRIPTION,
              sameAs: [SOCIAL.linkedin, SOCIAL.instagram],
              worksFor: {
                '@type': 'Organization',
                name: 'NorteIA',
                url: SOCIAL.norteia,
              },
              address: {
                '@type': 'PostalAddress',
                addressLocality: NAP.locality,
                addressRegion: NAP.region,
                addressCountry: NAP.country,
              },
            },
            {
              '@type': 'ProfessionalService',
              '@id': `${SITE_URL}/#service`,
              name: NAP.name,
              url: SITE_URL,
              founder: { '@id': `${SITE_URL}/#person` },
              areaServed: ['A Coruña', 'Galicia', 'España'],
              address: {
                '@type': 'PostalAddress',
                addressLocality: NAP.locality,
                addressRegion: NAP.region,
                addressCountry: NAP.country,
              },
            },
          ],
        }} />
        {children}
        <ChatWidget />
        {/* GA4 solo se carga si el usuario acepta cookies en el banner */}
        <CookieConsent gaId={GA_ID} />
      </body>
    </html>
  )
}
