import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Cormorant_Garamond, Outfit } from 'next/font/google'
import JsonLd from '@/components/JsonLd'
import { SITE_URL, SITE_NAME, DEFAULT_DESCRIPTION, SOCIAL, NAP } from '@/lib/site'
import './globals.css'

// Pesos reducidos (antes 5+itálicas): menos payload de fuentes
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-outfit',
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
    <html lang="es" className={`${cormorant.variable} ${outfit.variable}`}>
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
        {GA_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
            <Script id="ga4" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  )
}
