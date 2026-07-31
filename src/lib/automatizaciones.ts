// ─── Las 5 automatizaciones — contenido real del recurso ────────────────────
// FUENTE ÚNICA: automatizaciones.json. Lo consumen la página
// /recursos/automatizaciones-pymes y el generador del PDF
// (scripts/generar-pdf.py). Editar el JSON y regenerar el PDF.

import data from './automatizaciones.json'

export type Automatizacion = {
  n: string
  titulo: string
  dolor: string
  proceso: string[]
  herramientas: string
  resultado: string
  consejo: string
}

export const automatizaciones: Automatizacion[] = data
