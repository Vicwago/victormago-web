// ─── Configuración central del sitio ─────────────────────────────────────────
export const SITE_URL = 'https://victormago.com'
export const SITE_NAME = 'Víctor Mago'

// Agenda real de Víctor (Cal.com conectado a su Google Calendar).
// Todos los CTAs "Reserva 20 min gratis" del sitio apuntan aquí.
export const CAL_URL: string | null = 'https://cal.com/victor-mago-ztpkfj/20min'

export const CTA_LABEL = 'Reserva 20 min gratis'
export const ctaHref = () => CAL_URL ?? '/contacto'

export const SOCIAL = {
  linkedin: 'https://www.linkedin.com/in/victormagoheredia/',
  instagram: 'https://www.instagram.com/vicwago/',
  norteia: 'https://norteia.es',
  email: 'victor@norteia.es',
}

// NAP consistente (footer + JSON-LD + Google Business Profile)
export const NAP = {
  name: 'Víctor Mago — Consultor de IA',
  locality: 'A Coruña',
  region: 'Galicia',
  country: 'ES',
}

export const DEFAULT_DESCRIPTION =
  'Durante 15 años enseñé a jugadores de tenis a anticiparse. Ahora ayudo a empresas de A Coruña y Galicia a hacer lo mismo con la IA: automatización de procesos, formación de equipos y cumplimiento del EU AI Act.'
