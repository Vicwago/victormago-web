// FAQ de la home. Vive aquí (no en page.tsx) para que /llms.txt la reutilice.
import type { FaqEntry } from '@/components/Faq'

export const faqsHome: FaqEntry[] = [
  {
    q: '¿Necesito saber de tecnología para trabajar contigo?',
    a: 'No. Trabajo mejor con directivos y equipos sin perfil técnico. Mi trabajo es exactamente ese: traducir la IA al lenguaje del negocio. No necesitas saber programar para aplicar la IA en tu empresa.',
  },
  {
    q: '¿Qué es el EU AI Act y por qué me afecta?',
    a: 'Es el reglamento europeo que regula el uso de la IA. La obligación de formar al personal en IA está vigente desde febrero de 2025 y el Reglamento se aplica con carácter general desde el 2 de agosto de 2026. Afecta a cualquier empresa que use IA en Europa, con multas de hasta 35 millones de euros o el 7% de la facturación mundial.',
  },
  {
    q: '¿Trabajas con empresas de cualquier sector?',
    a: 'Sí. Tengo especial experiencia con despachos de procuradores, inmobiliarias y clubes deportivos. La IA no entiende de sectores: entiende de procesos repetitivos, y esos existen en todas partes.',
  },
  {
    q: '¿Qué pasa después de la primera llamada?',
    a: 'En 20 minutos te digo si la IA puede ayudarte y por dónde empezaría yo. Si tiene sentido seguir, el proyecto lo ejecuto con mi equipo de NorteIA. Si no lo tiene, también te lo digo.',
  },
  {
    q: '¿Cuánto cuesta un proyecto de automatización?',
    a: 'Depende del proceso, pero mi criterio es fijo: si la automatización no se paga sola con las horas que ahorra, no te la recomiendo. Eso también me lo puedes preguntar en la primera llamada, sin compromiso.',
  },
  {
    q: '¿Cómo es la primera reunión?',
    a: 'Una llamada de 20 minutos, gratis y sin compromiso. Me cuentas cómo trabajáis y te digo qué automatizaría primero. Sin jerga técnica y sin venta agresiva.',
  },
]
