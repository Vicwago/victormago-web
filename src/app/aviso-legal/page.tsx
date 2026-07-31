import type { Metadata } from 'next'
import LegalLayout from '@/components/LegalLayout'

export const metadata: Metadata = {
  title: 'Aviso legal',
  description: 'Aviso legal de victormago.com: identificación del titular, condiciones de uso y propiedad intelectual.',
  alternates: { canonical: '/aviso-legal' },
  robots: { index: false, follow: true },
}

export default function AvisoLegalPage() {
  return (
    <LegalLayout titulo="Aviso legal" actualizado="31 de julio de 2026">
      <h2>1. Identificación del titular</h2>
      <p>
        En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la
        Información y de Comercio Electrónico (LSSI-CE), se informa de que el titular de este
        sitio web es:
      </p>
      <ul>
        <li><strong>Titular:</strong> Víctor José Mago Heredia</li>
        <li><strong>NIF:</strong> 47436600C</li>
        <li><strong>Domicilio:</strong> A Coruña, Galicia (España)</li>
        <li><strong>Email de contacto:</strong> victorwago0@gmail.com</li>
        <li><strong>Sitio web:</strong> https://victormago.com</li>
      </ul>

      <h2>2. Objeto</h2>
      <p>
        Este sitio web tiene carácter informativo y comercial: presenta los servicios de
        consultoría de inteligencia artificial y automatización de Víctor Mago, casos de
        trabajo, artículos y recursos gratuitos. Los proyectos se ejecutan con NorteIA.
      </p>

      <h2>3. Condiciones de uso</h2>
      <p>
        El acceso a este sitio web es gratuito y atribuye la condición de usuario, que implica
        la aceptación de estas condiciones. El usuario se compromete a hacer un uso adecuado de
        los contenidos y a no emplearlos para actividades ilícitas o contrarias a la buena fe.
      </p>

      <h2>4. Propiedad intelectual e industrial</h2>
      <p>
        Todos los contenidos de este sitio (textos, imágenes, diseño, código, logotipos propios)
        son titularidad de Víctor José Mago Heredia o se usan con autorización de sus titulares.
        Quedan reservados todos los derechos. Los logotipos de terceros que aparecen en la
        sección de confianza pertenecen a sus respectivos titulares y se muestran con su
        consentimiento.
      </p>

      <h2>5. Responsabilidad</h2>
      <p>
        El titular no se hace responsable del mal uso de los contenidos de este sitio ni de los
        contenidos de sitios externos enlazados. La información publicada tiene carácter
        divulgativo y no constituye asesoramiento jurídico.
      </p>

      <h2>6. Legislación aplicable</h2>
      <p>
        La relación entre el titular y el usuario se rige por la normativa española. Para
        cualquier controversia, las partes se someten a los juzgados y tribunales de A Coruña,
        salvo que la ley disponga otro fuero.
      </p>
    </LegalLayout>
  )
}
