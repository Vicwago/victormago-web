import type { Metadata } from 'next'
import LegalLayout from '@/components/LegalLayout'

export const metadata: Metadata = {
  title: 'Política de privacidad',
  description: 'Cómo trata victormago.com tus datos personales: responsable, finalidades, destinatarios y tus derechos.',
  alternates: { canonical: '/politica-privacidad' },
  robots: { index: false, follow: true },
}

export default function PrivacidadPage() {
  return (
    <LegalLayout titulo="Política de privacidad" actualizado="31 de julio de 2026">
      <h2>1. Responsable del tratamiento</h2>
      <ul>
        <li><strong>Responsable:</strong> Víctor José Mago Heredia</li>
        <li><strong>NIF:</strong> 47436600C</li>
        <li><strong>Domicilio:</strong> A Coruña, Galicia (España)</li>
        <li><strong>Email:</strong> victorwago0@gmail.com</li>
      </ul>

      <h2>2. Qué datos se recogen y para qué</h2>
      <p>Este sitio recoge datos personales únicamente cuando tú los facilitas:</p>
      <ul>
        <li>
          <strong>Formulario de contacto</strong> (nombre, email, empresa, mensaje): para responder
          a tu consulta y, si procede, preparar la primera llamada. Base jurídica: consentimiento
          y medidas precontractuales.
        </li>
        <li>
          <strong>Descarga de recursos</strong> (nombre, email): para enviarte el recurso solicitado
          y comunicaciones relacionadas. Base jurídica: consentimiento.
        </li>
        <li>
          <strong>Newsletter "IA que Impulsa"</strong> (email): para enviarte el boletín. Puedes darte
          de baja en cualquier momento desde el propio email. Base jurídica: consentimiento.
        </li>
        <li>
          <strong>Asistente de chat</strong>: las conversaciones se procesan con inteligencia
          artificial para generar las respuestas. Si facilitas tu email en la conversación, se
          usará para que Víctor te contacte. No introduzcas datos sensibles en el chat.
        </li>
        <li>
          <strong>Registro del webinar</strong> (nombre, email, empresa): para gestionar tu plaza
          y enviarte el acceso.
        </li>
      </ul>

      <h2>3. Destinatarios y encargados de tratamiento</h2>
      <p>Los datos se tratan con proveedores que actúan como encargados del tratamiento:</p>
      <ul>
        <li><strong>Vercel Inc.</strong> (EE. UU.): alojamiento del sitio web.</li>
        <li><strong>Resend</strong> (EE. UU.): envío de emails transaccionales y newsletter.</li>
        <li><strong>Anthropic</strong> (EE. UU.): procesamiento de las conversaciones del asistente de chat.</li>
        <li><strong>Sistema de gestión interno (CRM)</strong>: los datos de contacto pueden registrarse en el CRM de NorteIA para el seguimiento comercial.</li>
      </ul>
      <p>
        Las transferencias internacionales a EE. UU. se amparan en el Marco de Privacidad de
        Datos UE-EE. UU. (Data Privacy Framework) o en cláusulas contractuales tipo, según el proveedor.
      </p>

      <h2>4. Conservación</h2>
      <p>
        Los datos se conservan mientras dure la relación o hasta que solicites su supresión, y
        después únicamente el tiempo exigido por obligaciones legales.
      </p>

      <h2>5. Tus derechos</h2>
      <p>
        Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación y
        portabilidad escribiendo a <strong>victorwago0@gmail.com</strong> o desde la página{' '}
        <a href="/mis-datos">Mis datos</a>. También puedes reclamar ante la Agencia Española de
        Protección de Datos (aepd.es).
      </p>

      <h2>6. Seguridad</h2>
      <p>
        El sitio se sirve bajo HTTPS y los datos se tratan con proveedores que aplican medidas de
        seguridad técnicas y organizativas apropiadas.
      </p>
    </LegalLayout>
  )
}
