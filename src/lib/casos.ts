// ─── Casos de estudio ────────────────────────────────────────────────────────
// Estructura fija del brief: problema → qué construimos → resultado → testimonio.
// REGLA: no inventar datos. Donde falta la métrica real hay un TODO-VÍCTOR y el
// texto publicado es narrativo hasta que Víctor la confirme.

export type Caso = {
  slug: string
  /** Nombre real del cliente — SOLO uso interno, no se renderiza. */
  cliente: string
  /** Nombre público (anonimizado salvo producto propio). Es lo que se muestra. */
  alias: string
  sector: string
  titulo: string
  resumen: string
  problema: string[]
  construimos: string[]
  herramientas: string[]
  resultado: string[]
  /** TODO-VÍCTOR: pedir testimonio real al cliente. null = no se muestra. */
  testimonio: { texto: string; autor: string } | null
  destacado: boolean
  /** TODO-VÍCTOR: vídeo del caso (YouTube ID) cuando exista. */
  youtubeId: string | null
}

export const casos: Caso[] = [
  {
    slug: 'sanchez-garcia-procuradores',
    cliente: 'Sánchez García Procuradores',
    alias: 'Despacho de procuradores',
    sector: 'Legal · A Coruña',
    titulo: 'Automatización de la gestión documental de un despacho de procuradores',
    resumen:
      'Un despacho de procuradores que pasaba horas cada día moviendo notificaciones y documentos a mano. Automatizamos el circuito para que el equipo trabaje sobre información ya organizada.',
    problema: [
      'El día a día de un despacho de procuradores es un flujo constante de notificaciones, plazos y documentos. Cada notificación había que descargarla, clasificarla, registrarla y comunicarla al abogado correspondiente. Todo a mano.',
      // TODO-VÍCTOR: dato concreto del problema (nº notificaciones/día, horas dedicadas)
    ],
    construimos: [
      'Diseñé con NorteIA un sistema que recoge la documentación entrante, la clasifica automáticamente por procedimiento y la deja registrada y lista para trabajar, avisando a la persona adecuada en cada caso.',
      // TODO-VÍCTOR: confirmar piezas exactas del sistema (n8n, extracción con IA, etc.)
    ],
    herramientas: ['Automatización de flujos', 'Clasificación con IA', 'Integración con el correo del despacho'],
    resultado: [
      'El despacho dejó de dedicar el principio de cada jornada a mover papeles: la información llega clasificada y el equipo empieza el día trabajando, no ordenando.',
      // TODO-VÍCTOR: métrica real (horas/semana ahorradas, % documentos auto-clasificados)
    ],
    testimonio: null,
    destacado: true,
    youtubeId: null,
  },
  {
    slug: 'fincastyle-asesor-inmobiliario',
    cliente: 'Fincastyle',
    alias: 'Inmobiliaria con asesor virtual',
    sector: 'Inmobiliario · Galicia',
    titulo: 'Un asesor virtual que responde como el mejor comercial de la inmobiliaria',
    resumen:
      'Un asistente con IA (RAG) que responde a los interesados con la información real de cada inmueble, a cualquier hora, sin inventarse nada.',
    problema: [
      'Las consultas sobre inmuebles llegan a todas horas y casi siempre preguntan lo mismo: precio, superficie, gastos de comunidad, disponibilidad. Responder tarde es perder al comprador; responder a todo a mano es imposible.',
      // TODO-VÍCTOR: dato concreto (volumen de consultas, tiempo medio de respuesta antes)
    ],
    construimos: [
      'Construimos un asesor virtual conectado a la base de datos real de inmuebles mediante RAG: el asistente solo responde con la información verificada de cada ficha, y cuando no sabe algo, lo dice y deriva a una persona.',
    ],
    herramientas: ['RAG sobre la base de inmuebles', 'Asistente conversacional con IA', 'Escalado a humano'],
    resultado: [
      'Los interesados obtienen respuesta inmediata con datos reales y el equipo comercial recibe conversaciones ya cualificadas en lugar de preguntas repetitivas.',
      // TODO-VÍCTOR: métrica real (% consultas resueltas sin humano, leads cualificados)
    ],
    testimonio: null,
    destacado: true,
    youtubeId: null,
  },
  {
    slug: 'coachdesk-saas-tenis',
    cliente: 'CoachDesk',
    alias: 'CoachDesk',
    sector: 'Producto propio · SaaS',
    titulo: 'CoachDesk: software para entrenadores de tenis, hecho por un entrenador de tenis',
    resumen:
      'Quince años en la pista me enseñaron lo que un entrenador necesita de verdad. CoachDesk es esa experiencia convertida en software: gestión de alumnos y clases sin pelearse con hojas de cálculo.',
    problema: [
      'Los entrenadores de tenis gestionan alumnos, pistas, horarios y pagos con una mezcla de WhatsApp, papel y Excel. Lo sé porque llevo más de 15 años siendo uno de ellos.',
      // TODO-VÍCTOR: dato concreto del problema que motivó CoachDesk
    ],
    construimos: [
      'Un SaaS pensado desde la pista: alta de alumnos, planificación de clases y seguimiento en un solo sitio, con la IA ayudando en las tareas repetitivas de gestión.',
      // TODO-VÍCTOR: confirmar funcionalidades publicables y estado actual del producto
    ],
    herramientas: ['React + Supabase', 'Automatización con IA'],
    resultado: [
      'Este caso cierra un círculo personal: la misma experiencia que enseñaba en pista, convertida en un producto que ahorra a otros entrenadores el trabajo que a mí me sobraba.',
      // TODO-VÍCTOR: métrica real (entrenadores/clubes usándolo, horas ahorradas)
    ],
    testimonio: null,
    destacado: true,
    youtubeId: null,
  },
  {
    slug: 'tulook-estilistas',
    cliente: 'Tulook Estilistas',
    alias: 'Salón de estilismo',
    sector: 'Comercio local · A Coruña',
    titulo: 'IA para un negocio local: menos gestión, más tiempo con el cliente',
    resumen:
      'La IA no es solo para grandes empresas. Con Tulook demostramos que un salón de estilismo puede automatizar su gestión diaria sin presupuesto de multinacional.',
    problema: [
      'En un negocio local el dueño lo hace todo: atender, gestionar citas, responder mensajes, publicar en redes. Cada minuto de gestión es un minuto sin facturar.',
      // TODO-VÍCTOR: dato concreto del problema en Tulook
    ],
    construimos: [
      'Automatizamos la parte de la gestión que no necesita a un humano, para que el equipo dedique su tiempo a lo que de verdad factura: el cliente que tiene delante.',
      // TODO-VÍCTOR: confirmar qué se automatizó exactamente (citas, mensajes, contenido)
    ],
    herramientas: ['Automatización de gestión', 'IA aplicada a comercio local'],
    resultado: [
      'Un negocio de barrio con sistemas de empresa grande, sin coste de empresa grande.',
      // TODO-VÍCTOR: métrica real
    ],
    testimonio: null,
    destacado: false,
    youtubeId: null,
  },
  {
    slug: 'nova-galega-de-danza',
    cliente: 'Nova Galega de Danza',
    alias: 'Compañía de danza',
    sector: 'Cultura · Galicia',
    titulo: 'IA en el sector cultural: tecnología al servicio de la danza',
    resumen:
      'La cultura también pierde horas en gestión. Con Nova Galega de Danza aplicamos IA en un sector donde casi nadie la está aprovechando todavía.',
    problema: [
      'Las compañías culturales viven de su arte, pero la administración, la comunicación y la gestión diaria consumen un tiempo que nadie les devuelve.',
      // TODO-VÍCTOR: dato concreto del problema en Nova Galega de Danza
    ],
    construimos: [
      'Llevamos la automatización con IA a los procesos de gestión de la compañía, adaptándola a la realidad de un proyecto cultural: presupuesto ajustado y cero perfil técnico.',
      // TODO-VÍCTOR: confirmar qué se construyó exactamente
    ],
    herramientas: ['Automatización de procesos', 'IA para gestión cultural'],
    resultado: [
      'Demostramos que la IA no entiende de sectores: entiende de procesos repetitivos, y esos existen en todas partes.',
      // TODO-VÍCTOR: métrica real
    ],
    testimonio: null,
    destacado: false,
    youtubeId: null,
  },
]

export const getCaso = (slug: string) => casos.find(c => c.slug === slug)
export const casosDestacados = () => casos.filter(c => c.destacado)
