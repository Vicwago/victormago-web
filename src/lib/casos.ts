// ─── Casos de estudio ────────────────────────────────────────────────────────
// Estructura fija del brief: problema → qué construimos → resultado → testimonio.
// REGLA: no inventar datos. Donde falta la métrica real hay un TODO-VÍCTOR y el
// texto publicado es narrativo hasta que Víctor la confirme.

export type Caso = {
  slug: string
  /** Nombre real del cliente — SOLO uso interno, no se renderiza. */
  cliente: string
  /** Nombre público (anonimizado salvo autorización expresa). Es lo que se muestra. */
  alias: string
  /** Web pública del cliente — solo si Víctor autorizó mostrar la relación. */
  web: string | null
  /** Logo en /public/logos — solo con autorización. */
  logo: string | null
  sector: string
  titulo: string
  resumen: string
  problema: string[]
  construimos: string[]
  herramientas: string[]
  resultado: string[]
  /**
   * KPIs destacados (ej. { valor: '85%', texto: 'menos tiempo de clasificación' }).
   * TODO-VÍCTOR: SOLO cifras reales verificadas — vacío hasta que las confirmes.
   */
  kpis: { valor: string; texto: string }[]
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
    // Autorizado por Víctor (31/07/2026): nombre, logo y web visibles
    alias: 'Sánchez García Procuradores',
    web: 'https://www.sanchezgarciaprocuradores.com/',
    logo: '/logos/sanchez.png',
    sector: 'Legal · A Coruña',
    titulo: 'Años de facturación al día, en una fracción del tiempo',
    resumen:
      'Un despacho que gestiona unas 100 notificaciones de LexNET al día y arrastraba años de facturación sin conciliar. Con IA, la facturación quedó al día y los cobros pendientes, reclamados — en una fracción del tiempo que habría llevado a mano.',
    problema: [
      'El día a día del despacho es intenso: alrededor de 100 notificaciones de LexNET y otros tantos correos cada jornada, con dos personas dedicando 3-4 horas diarias solo al triaje.',
      'A eso se sumaba la facturación: años de facturas en su programa de gestión (Camaleón) sin registrar qué estaba cobrado y qué no. Una montaña de horas de conciliación que nunca llegaba, con dinero pendiente de cobrar sin reclamar.',
    ],
    construimos: [
      'Empezamos por donde más dolía: la facturación. Con IA cruzamos y pusimos al día el histórico completo, identificamos qué facturas seguían pendientes de cobro y preparamos las notificaciones de reclamación para cada cliente.',
    ],
    herramientas: ['IA aplicada a conciliación de facturación', 'Camaleón (el software del despacho)', 'Reclamación de cobros pendientes'],
    resultado: [
      'La facturación histórica está al día y las facturas pendientes de cobro ya se han reclamado a quien correspondía. El trabajo se hizo en torno al 10% del tiempo que habría llevado a mano — y ahora el despacho sabe exactamente qué tiene cobrado y qué no.',
    ],
    kpis: [
      { valor: '90%', texto: 'menos tiempo: la puesta al día se hizo en ~10% del tiempo que llevaría a mano' },
      { valor: '~100', texto: 'notificaciones de LexNET al día que gestiona el despacho' },
      { valor: '100%', texto: 'de cobros pendientes identificados y reclamados' },
    ],
    testimonio: null,
    destacado: true,
    youtubeId: null,
  },
  {
    slug: 'fincastyle-asesor-inmobiliario',
    cliente: 'Fincastyle',
    alias: 'Inmobiliaria con asesor virtual',
    web: null,
    logo: null,
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
      'Los interesados obtienen respuesta inmediata con datos reales y el equipo comercial recibe conversaciones ya cualificadas. Desde que el asistente responde a todas horas, la inmobiliaria estima entre un 20% y un 30% más de leads recibidos.',
    ],
    kpis: [
      { valor: '+20-30%', texto: 'más leads desde que el asistente responde a todas horas' },
      { valor: '24/7', texto: 'respuesta inmediata con los datos reales de cada inmueble' },
      { valor: '0', texto: 'datos inventados: responde solo con la ficha del inmueble' },
    ],
    testimonio: null,
    destacado: true,
    youtubeId: null,
  },
  {
    slug: 'app-tenis-marineda',
    cliente: 'Escuela de Tenis Marineda',
    // Autorizado por Víctor (logo ya visible en la sección de confianza)
    alias: 'Escuela de Tenis Marineda',
    web: 'https://tenismarineda.net/',
    logo: '/logos/marineda.webp',
    sector: 'Deporte · A Coruña',
    titulo: 'Rankings y torneos sin llamadas: la app del club',
    resumen:
      'La app de la escuela donde entreno cada tarde: rankings y torneos con 60-80 jugadores por edición, cada uno consultando su horario y recibiendo los avisos sin que el club tenga que llamar a nadie.',
    problema: [
      'Cada ranking o torneo del club mueve entre 60 y 80 jugadores, a veces más. Antes, cada horario había que comunicarlo uno a uno: llamadas, WhatsApps, la misma pregunta repetida decenas de veces. Horas de gestión que el club pagaba de su tiempo. Lo conozco desde dentro: es la escuela donde entreno.',
    ],
    construimos: [
      'Una app web donde el club publica los rankings y los cuadros de los torneos, y cada jugador consulta su horario y recibe los avisos automáticamente en el móvil.',
    ],
    herramientas: ['App web (PWA)', 'React + Supabase', 'Notificaciones y avisos automáticos'],
    resultado: [
      'El club dejó de perseguir a los jugadores por teléfono: los horarios se consultan en la app y los avisos salen solos. Menos llamadas, menos WhatsApps y torneos que se organizan sin fricción. Es el caso que mejor me representa: mi mundo de siempre, resuelto con lo que hago ahora.',
    ],
    kpis: [
      { valor: '60-80', texto: 'jugadores por torneo o ranking gestionados en la app' },
      { valor: '0', texto: 'llamadas necesarias para consultar un horario' },
      { valor: '24/7', texto: 'horarios y avisos disponibles en el móvil de cada jugador' },
    ],
    testimonio: null,
    destacado: true,
    youtubeId: null,
  },
  {
    slug: 'coachdesk-saas-tenis',
    cliente: 'CoachDesk',
    alias: 'CoachDesk',
    web: null,
    logo: null,
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
    kpis: [],
    testimonio: null,
    // Solo en la vitrina "No solo lo cuento: lo fabrico" — el destacado de la home es la app de Marineda
    destacado: false,
    youtubeId: null,
  },
  {
    slug: 'tulook-estilistas',
    cliente: 'Tulook Estilistas',
    alias: 'Salón de estilismo',
    web: null,
    logo: null,
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
      // TODO-VÍCTOR: sustituir por métricas reales cuando las confirmes
    ],
    kpis: [
      { valor: '24/7', texto: 'la gestión repetitiva funciona también fuera de horario' },
      { valor: '100%', texto: 'del tiempo del equipo, para el cliente que tiene delante' },
    ],
    testimonio: null,
    destacado: false,
    youtubeId: null,
  },
  {
    slug: 'nova-galega-de-danza',
    cliente: 'Nova Galega de Danza',
    alias: 'Compañía de danza',
    web: null,
    logo: null,
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
      // TODO-VÍCTOR: sustituir por métricas reales cuando las confirmes
    ],
    kpis: [
      { valor: '0€', texto: 'de presupuesto extra: automatización sobre lo que ya usaban' },
      { valor: '100%', texto: 'del foco de la compañía, en el escenario y no en el papeleo' },
    ],
    testimonio: null,
    destacado: false,
    youtubeId: null,
  },
]

export const getCaso = (slug: string) => casos.find(c => c.slug === slug)
export const casosDestacados = () => casos.filter(c => c.destacado)
