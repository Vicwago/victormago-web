// ─── Base de conocimiento del asistente ─────────────────────────────────────
// Se inyecta en el system prompt de /api/chat para que responda con la
// información REAL de la web (casos, recursos, FAQ), no con generalidades.
// Se regenera solo: importa directamente de las mismas fuentes que las páginas.
import { casos } from '@/lib/casos'
import { posts } from '@/lib/blog'

const casosTexto = casos
  .map(c => `- ${c.alias} (${c.sector}): ${c.resumen} Herramientas: ${c.herramientas.join(', ')}. Ficha completa: /casos/${c.slug}`)
  .join('\n')

const blogTexto = posts
  .map(p => `- "${p.titulo}": ${p.descripcion} → /blog/${p.slug}`)
  .join('\n')

export const CONOCIMIENTO = `
## Casos reales de Víctor (puedes citarlos y enlazarlos)
${casosTexto}

## Artículos del blog (enlázalos cuando encajen)
${blogTexto}

## Recurso gratuito
PDF "5 automatizaciones que cualquier pyme puede montar esta semana" → /recursos/automatizaciones-pymes
Cubre: clasificación automática de correo y documentos, registro de datos sin copiar y pegar,
respuestas automáticas a consultas repetitivas, avisos y seguimientos a clientes, control de plazos con alertas.

## Newsletter
"IA que Impulsa": consejos prácticos de IA para pymes, semanal. Se apuntan desde el pie de cualquier página o /blog.

## Datos de contacto y proceso
- Primera llamada: 20 minutos, gratis, sin compromiso → /contacto
- Email: victor@norteia.es
- Los proyectos se ejecutan con NorteIA (norteia.es), la agencia que cofundó Víctor con Luis Salgado (socio técnico).
- Zona: A Coruña y toda Galicia (presencial), resto de España en remoto.

## EU AI Act (datos verificados — puedes afirmarlos)
- Alfabetización en IA (Art. 4): obligatoria desde el 2 de febrero de 2025 para cualquier empresa que use IA.
- Aplicación general del Reglamento (UE) 2024/1689: 2 de agosto de 2026.
- Sanciones: hasta 35 M€ o el 7% de la facturación mundial.
- El "Digital Omnibus" solo aplazó las obligaciones de alto riesgo (Anexo III → dic 2027, Anexo I → ago 2028); NO aplazó ni la alfabetización ni la transparencia.
- Víctor imparte la formación que cubre el Art. 4 con NorteIA.

## Captura de contacto (importante)
Si la persona muestra interés real (pregunta por su caso, precios, plazos), ofrécele dos caminos:
1) Reservar los 20 minutos en /contacto (preferido).
2) Dejar su email en la conversación para que Víctor le escriba — si te lo da, confirma que Víctor le contactará en menos de 24h.
`
