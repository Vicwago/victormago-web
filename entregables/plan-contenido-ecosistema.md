# Plan de contenido — ecosistema victormago.com + redes (agosto–octubre 2026)

> Objetivo: que web, redes y vídeo cuenten UNA sola historia — "el entrenador que enseña
> a las empresas a anticiparse con IA" — y que todo el tráfico termine en victormago.com,
> y de ahí los leads en Mission Control.

## El circuito (ya montado en la web)

```
Vlog/Reel/Post  →  victormago.com (blog/casos)  →  Lead magnet o "Reserva 20 min"
                                                          ↓
                              Resend (email automático) + Mission Control (CRM)
```

- Cada formulario de la web ya notifica a Mission Control vía `MISSION_CONTROL_WEBHOOK_URL` (pendiente de conectar — sesión aparte con Luis).
- Los casos y artículos admiten vídeo embebido (`VideoEmbed`): cada vlog que grabes se incrusta en su página, no compite con ella.

## Pilares de contenido (los 4 artículos ya creados marcan los 4 pilares)

| Pilar | Artículo ancla en la web | Formato en redes |
|---|---|---|
| Nicho legal (procuradores) | /blog/automatizar-gestion-documental-procuradores | Carrusel LinkedIn + Reel "1 automatización en 60s" |
| Historia personal (tenis→IA) | /blog/de-la-pista-de-tenis-a-la-ia | Vlog + Reels desde el club (el más compartible) |
| Urgencia normativa (EU AI Act) | /blog/eu-ai-act-pymes | Posts LinkedIn con fechas concretas; pico en julio 2026 |
| Prueba de sistema (Mission Control) | /blog/mission-control-crm-agentes-ia | Vlog "así trabaja mi CRM solo" + capturas |

## Cadencia realista (compatible con las tardes de club)

- **1 vlog/semana** (grabado con móvil, sin producción): se corta en 2-3 Reels con la pipeline Content Factory.
- **2 posts LinkedIn/semana**: uno del pilar de la semana, uno de caso/resultado.
- **1 artículo/mes terminado**: dictas el contenido sobre los esqueletos ya creados (los H2 ya están puestos).
- Programación: Buffer (3 canales ya conectados).

## Reglas de coherencia

1. Todo CTA de redes apunta a victormago.com (lead magnet o artículo), nunca a "link en bio" genérico.
2. Los casos de cliente en redes usan los mismos nombres y datos que la web — nada de inventar métricas para un Reel.
3. NorteIA se menciona como "mi equipo" — el catálogo vive en norteia.es.
4. Voz: primera persona, directo, sin humo. Igual en web y redes.

## Primeras 4 semanas (propuesta)

| Semana | Acción |
|---|---|
| 1 | Dictar contenido del artículo procuradores + PDF lead magnet. Vlog: "por qué un entrenador de tenis automatiza despachos" |
| 2 | Publicar artículo procuradores. Reel del vlog. Post LinkedIn con el caso Sánchez García |
| 3 | Dictar artículo tenis→IA. Vlog desde el club. Activar GA4 + Search Console (IDs pendientes) |
| 4 | Publicar tenis→IA (nativo LinkedIn también). Vlog Mission Control enseñando el CRM |

## TODO-VÍCTOR (bloqueos de este plan)

- [ ] Cuenta Cal.com + URL en `src/lib/site.ts`
- [ ] Contenido real del PDF de procuradores (5 automatizaciones)
- [ ] IDs de GA4 (variable `NEXT_PUBLIC_GA_ID` en Vercel) + alta en Search Console y Bing
- [ ] Webhook Mission Control (sesión con Luis / n8n)
- [ ] Métricas y permisos de los 5 casos (marcados TODO-VÍCTOR en `src/lib/casos.ts`)
- [ ] Google Business Profile con el NAP del footer
