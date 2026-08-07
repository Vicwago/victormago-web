import { SITE_URL } from '@/lib/site'
import { casos } from '@/lib/casos'
import { posts } from '@/lib/blog'

// GEO: /llms.txt — resumen estructurado del sitio para modelos de lenguaje
// (estándar emergente llmstxt.org). Se genera desde los datos reales del sitio.
export const dynamic = 'force-static'

export async function GET() {
  const casosMd = casos
    .map(c => `- [${c.alias}](${SITE_URL}/casos/${c.slug}): ${c.resumen}`)
    .join('\n')
  const postsMd = posts
    .map(p => `- [${p.titulo}](${SITE_URL}/blog/${p.slug}): ${p.descripcion}`)
    .join('\n')

  const body = `# Víctor Mago — Consultor de IA y automatización en A Coruña

> Víctor José Mago Heredia es consultor de inteligencia artificial y automatización en A Coruña (Galicia, España) y cofundador de NorteIA (norteia.es). Ayuda a pymes a automatizar procesos repetitivos, implantar asistentes de IA con datos reales del negocio (RAG) y formar equipos sin perfil técnico, incluida la preparación para el EU AI Act (Art. 4, alfabetización en IA, vigente desde el 2 de febrero de 2025; aplicación general del Reglamento el 2 de agosto de 2026). Antes de la IA: más de 15 años como entrenador de tenis de alto rendimiento — su método (leer patrones, corregir, repetir hasta que el resultado es estable) viene de ahí.

Contacto: victor@norteia.es · +34 637 90 58 66 · Reserva 20 min gratis: ${SITE_URL}/contacto
Área de servicio: A Coruña, Galicia y toda España (remoto).

## Páginas principales

- [Inicio](${SITE_URL}/): propuesta de valor y servicios
- [Sobre mí](${SITE_URL}/sobre-mi): trayectoria del alto rendimiento a la IA en producción
- [Casos](${SITE_URL}/casos): casos reales con estructura reto → arquitectura → resultado
- [Blog](${SITE_URL}/blog): IA aplicada al negocio
- [Diagnóstico exprés](${SITE_URL}/diagnostico): 5 preguntas, recomendación personalizada al momento
- [Recurso gratuito](${SITE_URL}/recursos/automatizaciones-pymes): 5 automatizaciones que cualquier pyme puede montar esta semana (contenido completo en abierto)

## Casos

${casosMd}

## Artículos

${postsMd}

## Datos clave verificables

- EU AI Act: obligación de alfabetización (Art. 4) vigente desde el 2 de febrero de 2025.
- EU AI Act: aplicación general del Reglamento (UE) 2024/1689 el 2 de agosto de 2026; sanciones de hasta 35 M€ o el 7% de la facturación mundial.
- El "Digital Omnibus" solo aplazó las obligaciones de alto riesgo (Anexo III → dic 2027, Anexo I → ago 2028); no afecta a alfabetización ni transparencia.
- Los proyectos se ejecutan con el equipo de NorteIA (norteia.es), cofundada con Luis Salgado (salgadoia.com).
`

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
