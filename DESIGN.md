# DESIGN.md — victormago.com

## Estrategia de color: Committed
El azul eléctrico carga el 30-50% de la superficie (CTAs, sección casos en azul noche,
bloque lead magnet drenched, acentos). Base papel cálido. Sin negros ni blancos puros.

## Paleta (tokens en globals.css)
| Token | Valor | Función |
|---|---|---|
| --bg | #F5F3EB | Papel crema (fondo) |
| --surface | #FCFBF6 | Tarjetas/paneles claros |
| --surface-alt | #EDEAE0 | Franjas alternas |
| --accent | #2C03F3 | Azul eléctrico NorteIA — CTAs y acentos |
| --accent-light | #76C1FF | Azul claro — solo sobre fondos noche |
| --night | #071233 | Azul noche (sección Golpes/marcador) |
| --night-2 | #00193F | Navy NorteIA (gradientes de noche) |
| --text | #14122A | Tinta (azulada, nunca #000) |
| --text-muted | #4E4C60 | Secundario |
| --text-faint | #8B889A | Etiquetas |
| --border | #DCD8C8 | Líneas sobre papel |
| --chalk | #F2F6FB | Línea de cal (sobre noche) |

## Tipografía
- Display: **Archivo** variable (wdth 125, weights 500-900). Titulares enormes, tracking apretado.
- Cuerpo: **Public Sans** 300/400/600. Máx 70ch.
- Marcador: **Chivo Mono** 400/500. SOLO para etiquetas verticales, números de sección y marcador.
- Escala fluida clamp(), ratio ≥1.3 entre pasos.

## Elemento firma
1. **Geometría de pista**: SVG de media pista (líneas de cal) en el hero + la doble línea
   del pasillo de dobles como separador de secciones (2 líneas paralelas a 6px).
2. **Etiqueta vertical** por sección: "PUNTO 01 · LECTURA" en Chivo Mono girado 90°.
3. **Marcador**: los casos se presentan como filas de un marcador (Chivo Mono, tabular).

## Componentes
- Botón primario: pill (radius 999px) azul #2C03F3, texto crema, Archivo 600.
- Botón secundario: pill con borde tinta 1.5px, transparente.
- Sin tarjetas icono-título-texto. Listas numeradas asimétricas y filas de marcador.
- Ticker/marquee horizontal con frases separadas por "·" (pausado con reduced-motion).

## Motion
Entrada del hero: choreografía escalonada (clip-path/translate, ease-out-quint).
Trazo del arco de bola en SVG (stroke-dashoffset) una vez al cargar.
Reduced-motion: todo estático (ya global).

## Secciones noche
.section-night sobreescribe tokens localmente (bg noche, texto cal, accent azul claro).
Art direction por sección permitida; voz constante.
