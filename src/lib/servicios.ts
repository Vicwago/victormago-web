// ─── Páginas de servicio (GEO) ───────────────────────────────────────────────
// Una página por consulta que Víctor quiere ganar en buscadores y en las IA
// (ChatGPT, Perplexity...). La medición del 11/10/2026 mostró que las IA citan
// las páginas con datos concretos (el caso Marineda), así que cada servicio
// lleva para quién es, cómo se trabaja, qué se entrega, un caso real y FAQ.
// REGLA: igual que en casos.ts, no inventar cifras ni precios ("precios desde": NO).

import type { FaqEntry } from '@/components/Faq'

export type Servicio = {
  slug: string
  /** Etiqueta del menú y del pie. */
  nombre: string
  metaTitle: string
  metaDescription: string
  eyebrow: string
  titulo: string
  entradilla: string
  paraQuien: string[]
  queResuelvo: { titulo: string; texto: string }[]
  /** Pasos reales, en orden. */
  comoTrabajo: { titulo: string; texto: string }[]
  queRecibes: string[]
  /** slugs de casos.ts que respaldan el servicio (el primero es el principal). */
  casos: string[]
  faqs: FaqEntry[]
  /** Nombre del servicio para el JSON-LD Service. */
  serviceType: string
  areaServed: string[]
}

export const servicios: Servicio[] = [
  {
    slug: 'ia-para-procuradores',
    nombre: 'IA para despachos de procuradores',
    metaTitle: 'IA para despachos de procuradores en A Coruña y Galicia',
    metaDescription:
      'Automatización con IA para despachos de procuradores: notificaciones de LexNET, correo, control de plazos y facturación, sin cambiar vuestro programa de gestión. Caso real en A Coruña.',
    eyebrow: 'Despachos de procuradores',
    titulo: 'IA para despachos de procuradores',
    entradilla:
      'Ayudo a despachos de procuradores a quitarse el trabajo mecánico de LexNET, el correo y la facturación sin cambiar su programa de gestión. Lo he hecho en un despacho de A Coruña que recibe unas 100 notificaciones de LexNET al día.',
    paraQuien: [
      'Despachos que reciben decenas o cientos de notificaciones de LexNET cada día.',
      'Equipos que dedican horas diarias a leer, clasificar y repartir correo y notificaciones.',
      'Despachos con años de facturación o cobros sin conciliar en su programa de gestión.',
      'Procuradores que quieren usar IA sin poner en riesgo un solo plazo.',
    ],
    queResuelvo: [
      { titulo: 'Notificaciones y correo', texto: 'Clasificación y reparto automático de lo que entra. Lo que el sistema no clasifica con seguridad se queda en una bandeja de revisión manual.' },
      { titulo: 'Control de plazos', texto: 'Plazos centralizados con alertas que insisten y escalan si nadie reacciona, para que nada dependa de que una persona se acuerde.' },
      { titulo: 'Facturación y cobros', texto: 'Puesta al día del histórico de facturación, detección de lo pendiente de cobro y preparación de las reclamaciones.' },
      { titulo: 'Formación del equipo', texto: 'Formación práctica para usar la IA bien en el despacho, que además cubre la obligación de alfabetización en IA del artículo 4 del EU AI Act.' },
    ],
    comoTrabajo: [
      { titulo: 'Diagnóstico del cuello de botella', texto: 'Primero miramos dónde se va el tiempo: LexNET, el correo, la redacción o la facturación. En una llamada de 20 minutos te digo por dónde empezaría.' },
      { titulo: 'Primer proyecto de riesgo bajo', texto: 'Se empieza por algo con impacto claro que no toque plazos críticos. Nunca meto una automatización en medio de un procedimiento como primer proyecto.' },
      { titulo: 'Sobre lo que ya usáis', texto: 'Los sistemas se conectan a vuestro correo, vuestras carpetas y vuestro programa de gestión. Se añade una capa; no se sustituye nada.' },
      { titulo: 'La IA propone, la persona decide', texto: 'Las decisiones con relevancia procesal pasan siempre por una persona. Es lo que permite que el equipo se fíe del sistema.' },
    ],
    queRecibes: [
      'Un diagnóstico de dónde pierde horas el despacho y qué automatizar primero.',
      'El primer sistema funcionando sobre vuestras herramientas actuales.',
      'Formación para el equipo, sin jerga técnica.',
      'Seguimiento para medir el tiempo que de verdad se ahorra.',
    ],
    casos: ['sanchez-garcia-procuradores'],
    faqs: [
      { q: '¿Es seguro automatizar con IA la documentación de un despacho?', a: 'Sí, si se diseña bien. El sistema clasifica, organiza y prepara; las decisiones con relevancia procesal siguen pasando siempre por una persona. Lo que el sistema no clasifica con seguridad se queda en una bandeja de revisión manual.' },
      { q: '¿Tengo que cambiar el programa de gestión del despacho?', a: 'No. Las automatizaciones se conectan a lo que ya usáis: correo, carpetas y programa de gestión. Nadie del equipo tiene que aprender un software nuevo desde cero.' },
      { q: '¿Qué obligación tiene el despacho con el EU AI Act?', a: 'La alfabetización en IA del artículo 4 está vigente desde el 2 de febrero de 2025 y el Reglamento se aplica con carácter general desde el 2 de agosto de 2026. Si el personal usa herramientas de IA, el despacho debe formarlo.' },
      { q: '¿Trabajas solo con despachos de A Coruña?', a: 'No. Estoy en A Coruña y trabajo con despachos del resto de Galicia y de España en remoto.' },
    ],
    serviceType: 'Automatización con IA para despachos de procuradores',
    areaServed: ['A Coruña', 'Galicia', 'España'],
  },
  {
    slug: 'consultor-ia-a-coruna',
    nombre: 'Consultor de IA en A Coruña',
    metaTitle: 'Consultor de IA para pymes en A Coruña',
    metaDescription:
      'Víctor Mago, consultor de inteligencia artificial y automatización en A Coruña y cofundador de NorteIA. Automatización de procesos, asistentes con IA y formación para pymes de Galicia.',
    eyebrow: 'A Coruña · Galicia',
    titulo: 'Consultor de IA para pymes en A Coruña',
    entradilla:
      'Soy Víctor Mago, consultor de inteligencia artificial y automatización en A Coruña y cofundador de NorteIA. Ayudo a pymes de A Coruña y Galicia a quitarse trabajo repetitivo con IA, y lo construyo con mi equipo: no me quedo en la recomendación.',
    paraQuien: [
      'Pymes y despachos de A Coruña y Galicia sin perfil técnico en el equipo.',
      'Dueños que hacen de todo y no llegan a lo que de verdad factura.',
      'Equipos que pierden horas copiando datos, contestando lo mismo o persiguiendo seguimientos.',
      'Empresas que tienen que formar a su plantilla en IA por el EU AI Act.',
    ],
    queResuelvo: [
      { titulo: 'Automatización de procesos', texto: 'Correo que se clasifica solo, datos que no se teclean dos veces y seguimientos que no se olvidan.' },
      { titulo: 'Asistentes con tus datos reales', texto: 'Asistentes que responden a clientes con la información real del negocio (RAG), a cualquier hora, y que dicen “no lo sé” antes que inventar.' },
      { titulo: 'Apps a medida', texto: 'Herramientas propias cuando no hay una que encaje, como la app de rankings y torneos de la Escuela de Tenis Marineda.' },
      { titulo: 'Formación y EU AI Act', texto: 'Formación práctica para equipos sin perfil técnico, que cubre la alfabetización en IA del artículo 4.' },
    ],
    comoTrabajo: [
      { titulo: 'Llamada de 20 minutos', texto: 'Gratis y sin compromiso. Me cuentas cómo trabajáis y te digo si la IA puede ayudarte y por dónde empezaría yo.' },
      { titulo: 'Diagnóstico del proceso', texto: 'Buscamos el proceso que más horas os come. Mi criterio es fijo: si la automatización no se paga sola con las horas que ahorra, no te la recomiendo.' },
      { titulo: 'Primer sistema funcionando', texto: 'Lo construyo con el equipo de NorteIA, se usa durante unas semanas y se mide.' },
      { titulo: 'Formación y seguimiento', texto: 'El equipo aprende a usarlo y a sacarle partido, y seguimos ajustando lo que no funcione.' },
    ],
    queRecibes: [
      'Un interlocutor que entiende el negocio, no solo la tecnología.',
      'Un diagnóstico claro de qué automatizar primero y qué no.',
      'Sistemas en producción, documentados y mantenidos.',
      'Formación para que el equipo use la IA sin depender de mí.',
    ],
    casos: ['app-tenis-marineda', 'sanchez-garcia-procuradores', 'fincastyle-asesor-inmobiliario'],
    faqs: [
      { q: '¿Qué diferencia hay entre Víctor Mago y NorteIA?', a: 'Yo soy tu interlocutor: hago el diagnóstico y dirijo el proyecto. La ejecución la hago con el equipo de NorteIA, la empresa de IA que cofundé.' },
      { q: '¿Necesito saber de tecnología para trabajar contigo?', a: 'No. Trabajo mejor con directivos y equipos sin perfil técnico. Mi trabajo es traducir la IA al lenguaje del negocio.' },
      { q: '¿Cuánto cuesta un proyecto?', a: 'Depende del proceso. Si la automatización no se paga sola con las horas que ahorra, no te la recomiendo. Lo vemos en la primera llamada, sin compromiso.' },
      { q: '¿Trabajas fuera de A Coruña?', a: 'Sí. Estoy en A Coruña y trabajo con empresas del resto de Galicia y de España en remoto.' },
    ],
    serviceType: 'Consultoría de inteligencia artificial y automatización para pymes',
    areaServed: ['A Coruña', 'Galicia', 'España'],
  },
  {
    slug: 'automatizacion-ia-pymes-galicia',
    nombre: 'Automatización con IA para pymes',
    metaTitle: 'Automatización con IA para pymes en Galicia',
    metaDescription:
      'Automatización de procesos con IA para pymes de Galicia: correo, registro de datos, consultas repetitivas, seguimientos y control de plazos. Con casos reales y sin cambiar tus herramientas.',
    eyebrow: 'Pymes de Galicia',
    titulo: 'Automatización con IA para pymes en Galicia',
    entradilla:
      'Automatizo los procesos repetitivos de pymes gallegas: el correo que hay que clasificar, los datos que se copian a mano, las consultas que se repiten y los seguimientos que se olvidan. Primero lo más aburrido; después lo vistoso.',
    paraQuien: [
      'Pymes donde alguien pasa horas copiando datos de correos o PDF a un Excel o a un programa.',
      'Negocios que reciben las mismas preguntas una y otra vez.',
      'Equipos que pierden presupuestos y citas por falta de seguimiento.',
      'Empresas con plazos que dependen de la memoria de una persona.',
    ],
    queResuelvo: [
      { titulo: 'Clasificación del correo y los documentos', texto: 'Cada correo entrante se clasifica y llega a quien toca. Entras y cada cosa está donde tiene que estar.' },
      { titulo: 'Registro de datos sin copiar y pegar', texto: 'Facturas, pedidos y formularios que pasan solos al Excel o al programa. La persona que tecleaba pasa a revisar.' },
      { titulo: 'Respuestas a las consultas repetitivas', texto: 'Un asistente conectado a tus datos responde a lo repetitivo 24/7 y deja a las personas lo que necesita criterio.' },
      { titulo: 'Avisos y seguimientos automáticos', texto: 'Recordatorios de cita y seguimientos de presupuesto que salen solos, sin perseguir a nadie a mano.' },
      { titulo: 'Control de plazos con alertas', texto: 'Plazos en un único sitio, con avisos que insisten y escalan cuando nadie reacciona.' },
    ],
    comoTrabajo: [
      { titulo: 'Detectar dónde se va el tiempo', texto: 'Durante unos días se apunta qué tareas se repiten. Lo que sale repetido es el proyecto.' },
      { titulo: 'Elegir lo más repetitivo y menos crítico', texto: 'No lo más complejo: lo más aburrido. Es lo que antes se paga solo.' },
      { titulo: 'Montarlo sobre tus herramientas', texto: 'Con n8n o Make, modelos de IA y lo que ya usas (Gmail u Outlook, Google Sheets, tu programa). No hay que cambiar de software.' },
      { titulo: 'Usarlo y medir', texto: 'Se usa un par de semanas y se mide. Si no ahorra tiempo real, no sirve, por moderno que suene.' },
    ],
    queRecibes: [
      'La automatización funcionando con tus herramientas actuales.',
      'Documentación de cómo funciona y qué hacer si algo falla.',
      'Formación para el equipo que la va a usar.',
      'La medición del tiempo ahorrado.',
    ],
    casos: ['fincastyle-asesor-inmobiliario', 'sanchez-garcia-procuradores', 'app-tenis-marineda'],
    faqs: [
      { q: '¿Qué conviene automatizar primero en una pyme?', a: 'Lo más repetitivo y menos crítico. Suele ser la clasificación del correo, el registro de datos o los recordatorios de cita: impacto claro y riesgo bajo.' },
      { q: '¿Tengo que cambiar mis programas?', a: 'No. Las automatizaciones se conectan a lo que ya usas. Se añade una capa por encima, no se sustituye nada.' },
      { q: '¿Qué herramientas usas?', a: 'n8n y Make para conectar sistemas, modelos de IA de Anthropic y OpenAI, y Supabase cuando hace falta una base de datos propia. Elijo según el caso y el presupuesto.' },
      { q: '¿Puedo empezar por mi cuenta?', a: 'Sí. En la guía gratuita “5 automatizaciones que cualquier pyme puede montar esta semana” están explicadas paso a paso, con herramientas gratuitas o casi.' },
    ],
    serviceType: 'Automatización de procesos con IA para pymes',
    areaServed: ['Galicia', 'A Coruña', 'España'],
  },
]

export const getServicio = (slug: string) => servicios.find(s => s.slug === slug)
