// ─── Registro de artículos del blog ─────────────────────────────────────────
// Cada artículo vive en src/app/blog/<slug>/page.mdx. Este registro alimenta
// el índice /blog y el sitemap. Mantener sincronizado al añadir artículos.

export type Post = {
  slug: string
  titulo: string
  descripcion: string
  fecha: string // ISO — fecha de publicación
  keywords: string[]
  /** Portada del artículo (ruta en /public). Alt descriptivo aparte. */
  imagen: string
  imagenAlt: string
  /** true mientras el contenido esté en esqueleto pendiente de Víctor */
  borrador: boolean
}

export const posts: Post[] = [
  {
    slug: 'automatizar-gestion-documental-procuradores',
    titulo: 'Cómo un despacho de procuradores puede automatizar el 70% de su gestión documental',
    descripcion:
      'Guía práctica para despachos de procuradores: qué tareas documentales se pueden automatizar con IA, por dónde empezar y qué resultados esperar.',
    fecha: '2026-07-31',
    keywords: ['IA para despachos de procuradores', 'automatizar LexNET', 'automatización despacho procuradores'],
    imagen: '/blog/foto-procuradores.webp',
    imagenAlt: 'Portada: automatizar el 70% de la gestión documental de un despacho',
    borrador: true,
  },
  {
    slug: 'de-la-pista-de-tenis-a-la-ia',
    titulo: 'De la pista de tenis a la consultoría de IA',
    descripcion:
      '15 años enseñando a jugadores a anticiparse. Esta es la historia de cómo esa misma habilidad se convirtió en mi trabajo con la inteligencia artificial.',
    fecha: '2026-07-31',
    keywords: ['IA para entrenadores de tenis', 'consultor IA A Coruña', 'marca personal IA'],
    imagen: '/blog/foto-tenis.webp',
    imagenAlt: 'Portada: de la pista de tenis a la consultoría de IA',
    borrador: true,
  },
  {
    slug: 'eu-ai-act-pymes',
    titulo: 'EU AI Act: qué te obliga YA y qué llega el 2 de agosto de 2026',
    descripcion:
      'Lo que el Reglamento europeo de IA exige hoy a tu pyme (sí, ya hay obligaciones vigentes), qué llega el 2 de agosto de 2026 y qué aplazó el Digital Omnibus.',
    fecha: '2026-07-31',
    keywords: ['EU AI Act pymes qué hacer', 'reglamento IA 2026', 'alfabetización IA artículo 4'],
    imagen: '/blog/foto-euaiact.webp',
    imagenAlt: 'Portada: EU AI Act, qué te obliga ya y qué llega el 2 de agosto de 2026',
    borrador: true,
  },
  {
    slug: 'mission-control-crm-agentes-ia',
    titulo: 'Así trabaja un CRM con agentes de IA: Mission Control',
    descripcion:
      'Documentamos el sistema que usamos en NorteIA: un CRM donde agentes de IA prospectan, contactan y hacen seguimiento de forma casi automática.',
    fecha: '2026-07-31',
    keywords: ['CRM con agentes IA', 'automatizar prospección con IA', 'agentes IA empresa'],
    imagen: '/blog/foto-missioncontrol.webp',
    imagenAlt: 'Portada: así trabaja un CRM con agentes de IA',
    borrador: true,
  },
]

export const getPost = (slug: string) => posts.find(p => p.slug === slug)
