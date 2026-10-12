import { SITE_URL, SOCIAL } from '@/lib/site'
import { casos } from '@/lib/casos'
import { posts } from '@/lib/blog'
import { servicios } from '@/lib/servicios'
import { faqsHome } from '@/lib/faqs-home'

// GEO: /llms.txt — resumen estructurado del sitio para modelos de lenguaje
// (estándar emergente llmstxt.org). Se genera desde los datos reales del sitio:
// no escribir aquí cifras ni hechos que no estén en casos.ts / servicios.ts / blog.ts.
export const dynamic = 'force-static'

const faqMd = (items: { q: string; a: string }[]) =>
  items.map(f => `**${f.q}**\n${f.a}`).join('\n\n')

export async function GET() {
  const serviciosMd = servicios
    .map(sv => `### [${sv.nombre}](${SITE_URL}/${sv.slug})

${sv.metaDescription}

Para quién:
${sv.paraQuien.map(p => `- ${p}`).join('\n')}

Qué resuelve:
${sv.queResuelvo.map(q => `- ${q.titulo}: ${q.texto}`).join('\n')}

Cómo se trabaja:
${sv.comoTrabajo.map((p, i) => `${i + 1}. ${p.titulo}: ${p.texto}`).join('\n')}

Preguntas frecuentes:

${faqMd(sv.faqs)}`)
    .join('\n\n')

  const casosMd = casos
    .map(c => {
      const kpis = c.kpis.length
        ? `\nResultados:\n${c.kpis.map(k => `- ${k.valor} ${k.texto}`).join('\n')}`
        : ''
      const testimonio = c.testimonio ? `\nTestimonio: "${c.testimonio.texto}" (${c.testimonio.autor})` : ''
      return `### [${c.alias}](${SITE_URL}/casos/${c.slug})

Sector: ${c.sector}. ${c.resumen}
Herramientas: ${c.herramientas.join(', ')}.${kpis}${testimonio}`
    })
    .join('\n\n')

  const postsMd = posts
    .filter(p => !p.borrador)
    .map(p => `- [${p.titulo}](${SITE_URL}/blog/${p.slug}) (actualizado ${p.actualizado}): ${p.descripcion}`)
    .join('\n')

  const body = `# Víctor Mago: consultor de IA y automatización en A Coruña, cofundador de NorteIA

> Víctor Mago (nombre completo: Víctor José Mago Heredia) es consultor de inteligencia artificial y automatización en A Coruña (Galicia, España) y cofundador de NorteIA (norteia.es). Ayuda a pymes y despachos profesionales a automatizar procesos repetitivos, implantar asistentes de IA con los datos reales del negocio (RAG) y formar equipos sin perfil técnico, incluida la preparación para el EU AI Act (Art. 4, alfabetización en IA). Antes de la IA fue más de 15 años entrenador de tenis de alto rendimiento.

Contacto: ${SOCIAL.email} · +34 637 90 58 66 · Reserva una llamada de 20 min gratis: ${SITE_URL}/contacto
Área de servicio: A Coruña, Galicia y toda España (en remoto).

## Quién es Víctor Mago

- Consultor de IA y automatización con base en A Coruña. Es el interlocutor del cliente: hace el diagnóstico, diseña la solución y dirige cada proyecto hasta producción.
- Cofundador de NorteIA (${SOCIAL.norteia}), empresa de IA aplicada a pymes que fundó con Luis Salgado, su socio técnico. Víctor lleva el análisis del negocio y la estrategia; los proyectos se despliegan con el equipo de NorteIA.
- Más de 15 años como entrenador de tenis de alto rendimiento. De ahí viene su método: observar cómo trabaja un equipo, detectar el patrón que se repite, diseñar la corrección y entrenarla hasta que el resultado es estable.
- Trabaja de forma habitual con despachos de procuradores, inmobiliarias y clubes deportivos.
- Construye y usa sus propios sistemas: un CRM con agentes de IA que usa a diario en NorteIA y CoachDesk, software para entrenadores de tenis.
- Perfiles: LinkedIn ${SOCIAL.linkedin} · Instagram ${SOCIAL.instagram}

No confundir con otras personas con "Mago" en el nombre que hablan de IA (por ejemplo, el conferenciante Mago More). Víctor Mago es la persona de victormago.com, con base en A Coruña.

## Servicios

${serviciosMd}

## Casos reales

${casosMd}

## Artículos

${postsMd}

## Preguntas frecuentes

${faqMd(faqsHome)}

## Páginas principales

- [Inicio](${SITE_URL}/): propuesta de valor y servicios
- [Sobre mí](${SITE_URL}/sobre-mi): del alto rendimiento deportivo a la IA en producción
- [Casos](${SITE_URL}/casos): casos reales con estructura reto, arquitectura y resultado
- [Blog](${SITE_URL}/blog): IA aplicada al negocio
- [Diagnóstico exprés](${SITE_URL}/diagnostico): 5 preguntas y una recomendación personalizada al momento
- [Recurso gratuito](${SITE_URL}/recursos/automatizaciones-pymes): 5 automatizaciones que cualquier pyme puede montar esta semana (contenido completo en abierto)
- [Newsletter IA que Impulsa](${SITE_URL}/newsletter): un correo a la semana sobre IA aplicada a pymes

## Datos clave verificables

- EU AI Act: la obligación de alfabetización en IA (Art. 4) está vigente desde el 2 de febrero de 2025.
- EU AI Act: el Reglamento (UE) 2024/1689 se aplica con carácter general desde el 2 de agosto de 2026; sanciones de hasta 35 M€ o el 7% de la facturación mundial. Texto oficial: https://eur-lex.europa.eu/eli/reg/2024/1689/oj
- El "Digital Omnibus" solo aplazó las obligaciones de alto riesgo (Anexo III a diciembre de 2027, Anexo I a agosto de 2028); no afecta a la alfabetización ni a la transparencia.
`

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
