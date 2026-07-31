import type { Metadata } from 'next'
import LegalLayout from '@/components/LegalLayout'

export const metadata: Metadata = {
  title: 'Mis datos',
  description: 'Ejerce tus derechos sobre tus datos personales en victormago.com: acceso, rectificación, supresión y más.',
  alternates: { canonical: '/mis-datos' },
  robots: { index: false, follow: true },
}

export default function MisDatosPage() {
  return (
    <LegalLayout titulo="Mis datos" actualizado="31 de julio de 2026">
      <p>
        Si en algún momento me has dejado tus datos (formulario, recurso, newsletter, chat o
        webinar), aquí tienes cómo ejercer tus derechos. Sin formularios raros: un email y listo.
      </p>

      <h2>Qué puedes pedirme</h2>
      <ul>
        <li><strong>Acceso:</strong> saber qué datos tuyos tengo.</li>
        <li><strong>Rectificación:</strong> corregir datos incorrectos.</li>
        <li><strong>Supresión:</strong> que borre todos tus datos.</li>
        <li><strong>Oposición y limitación:</strong> que deje de usarlos para algo concreto.</li>
        <li><strong>Portabilidad:</strong> llevarte tus datos en un formato legible.</li>
        <li><strong>Baja de la newsletter:</strong> desde el enlace del propio email, o pidiéndomelo.</li>
      </ul>

      <h2>Cómo</h2>
      <p>
        Escribe a <strong>victorwago0@gmail.com</strong> desde el email con el que te registraste,
        indicando qué derecho quieres ejercer. Respondo en un plazo máximo de 30 días
        (normalmente mucho antes).
      </p>
      <p>
        Si no quedas conforme, puedes reclamar ante la{' '}
        <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">Agencia Española de Protección de Datos</a>.
      </p>
    </LegalLayout>
  )
}
