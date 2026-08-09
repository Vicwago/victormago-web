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
    titulo: 'IA en un despacho de procuradores: por dónde empezar de verdad',
    descripcion:
      'Cómo encontrar tu cuello de botella real (LexNET, correo o redacción), por dónde empezar con IA en un despacho de procuradores y qué resultados esperar. Con un caso real de A Coruña.',
    fecha: '2026-08-07',
    keywords: ['IA para despachos de procuradores', 'automatizar LexNET', 'automatización despacho procuradores', 'IA despachos legales Galicia'],
    imagen: '/blog/foto-procuradores.webp',
    imagenAlt: 'Manos firmando documentos en un despacho profesional',
    borrador: false,
  },
  {
    slug: 'de-la-pista-de-tenis-a-la-ia',
    titulo: 'De la pista de tenis a la IA: 15 años detectando patrones',
    descripcion:
      'Quince años entrenando tenis me enseñaron que las personas repiten patrones donde se sienten cómodas. Las empresas hacen exactamente lo mismo. Cómo pasé de la pista a automatizar procesos con IA.',
    fecha: '2026-08-07',
    keywords: ['cambiar de sector a la IA', 'consultor IA A Coruña', 'aprender inteligencia artificial sin ser ingeniero', 'marca personal IA'],
    imagen: '/blog/foto-tenis.webp',
    imagenAlt: 'Jugador de tenis sacando en una pista de tierra batida, vista cenital',
    borrador: false,
  },
  {
    slug: 'eu-ai-act-pymes',
    titulo: 'El EU AI Act ya se aplica: qué significa para tu pyme',
    descripcion:
      'El Reglamento europeo de IA entró en aplicación general el 2 de agosto de 2026 y la alfabetización obligatoria lleva vigente desde febrero de 2025. Qué te obliga hoy, qué se aplazó y qué hacer esta semana.',
    fecha: '2026-08-07',
    keywords: ['EU AI Act pymes qué hacer', 'reglamento IA 2026', 'alfabetización IA artículo 4', 'sanciones EU AI Act', 'cumplimiento IA empresas España'],
    imagen: '/blog/foto-euaiact.webp',
    imagenAlt: 'Hemiciclo de un parlamento europeo durante una sesión',
    borrador: false,
  },
  {
    slug: 'mission-control-crm-agentes-ia',
    titulo: 'El sistema con el que trabajo: un CRM con agentes de IA',
    descripcion:
      'Mission Control prospecta, hace seguimiento y hasta construye webs de demostración solo. Qué hace sin que yo toque nada, qué decido yo a mano y qué parte puedes copiar en tu negocio.',
    fecha: '2026-08-08',
    keywords: ['CRM con agentes IA', 'automatizar prospección con IA', 'agentes IA empresa', 'automatizar seguimiento comercial'],
    imagen: '/productos/mission-control-dashboard.webp',
    imagenAlt: 'Panel general de Mission Control con el pipeline comercial y los leads en cartera',
    borrador: false,
  },
]

export const getPost = (slug: string) => posts.find(p => p.slug === slug)
