import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'

// GEO: bots de IA permitidos EXPLÍCITAMENTE. Que ChatGPT, Claude, Perplexity,
// Gemini y Copilot puedan leer y citar la web es parte de la estrategia de
// captación — no bloquear nunca sin decisión consciente de Víctor.
const AI_BOTS = [
  'GPTBot',            // ChatGPT / OpenAI
  'OAI-SearchBot',     // ChatGPT Search
  'ChatGPT-User',      // navegación en vivo de ChatGPT
  'ClaudeBot',         // Anthropic / Claude
  'Claude-User',       // navegación en vivo de Claude
  'PerplexityBot',     // Perplexity
  'Perplexity-User',   // navegación en vivo de Perplexity
  'Google-Extended',   // Gemini
  'Bingbot',           // Bing / Copilot
  'Applebot',          // Siri / Apple Intelligence
  'Amazonbot',         // Alexa
  'CCBot',             // Common Crawl (datasets de entrenamiento)
  'meta-externalagent', // Meta AI
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      ...AI_BOTS.map(bot => ({
        userAgent: bot,
        allow: '/',
        disallow: ['/api/'],
      })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
