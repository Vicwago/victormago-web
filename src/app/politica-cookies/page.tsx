import type { Metadata } from 'next'
import LegalLayout from '@/components/LegalLayout'
import CookiePrefsButton from '@/components/CookiePrefsButton'

export const metadata: Metadata = {
  title: 'Política de cookies',
  description: 'Qué cookies usa victormago.com y cómo gestionarlas.',
  alternates: { canonical: '/politica-cookies' },
  robots: { index: false, follow: true },
}

export default function CookiesPage() {
  return (
    <LegalLayout titulo="Política de cookies" actualizado="31 de julio de 2026">
      <h2>1. Qué son las cookies</h2>
      <p>
        Las cookies son pequeños archivos que un sitio web guarda en tu navegador. Este sitio
        hace un uso mínimo de ellas.
      </p>

      <h2>2. Cookies que usa este sitio</h2>
      <ul>
        <li>
          <strong>Técnicas (necesarias):</strong> preferencia de consentimiento de cookies
          (almacenamiento local de tu navegador). No requieren consentimiento.
        </li>
        <li>
          <strong>Analítica (Google Analytics 4):</strong> solo si la aceptas en el aviso de
          cookies. Sirve para entender cómo se usa la web (páginas vistas, origen de la visita)
          de forma agregada. Proveedor: Google LLC (EE. UU.).
        </li>
      </ul>
      <p>
        No se usan cookies publicitarias ni de perfilado. Los vídeos incrustados usan el dominio
        youtube-nocookie.com y no cargan nada hasta que pulsas reproducir.
      </p>

      <h2>3. Cómo cambiar tu elección</h2>
      <p>
        Puedes cambiar tu preferencia en cualquier momento:
      </p>
      <CookiePrefsButton />
      <p>
        También puedes borrar las cookies desde la configuración de tu navegador.
      </p>
    </LegalLayout>
  )
}
