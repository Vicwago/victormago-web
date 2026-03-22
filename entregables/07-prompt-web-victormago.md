# Prompt Multiagente — Web victormago.com
> Usa este prompt en Claude Code para construir la web personal de Víctor Mago completa.
> Pégalo directamente en el chat de Claude Code en la carpeta del proyecto.

---

## CONTEXTO PARA CLAUDE CODE

Eres el arquitecto de una web personal premium para **Víctor Mago**, consultor y formador de Inteligencia Artificial con base en España. La web tiene un doble objetivo:

1. **Posicionar a Víctor** como referente en IA práctica y EU AI Act para directivos de pymes
2. **Captar leads** que se deriven a su empresa NorteIA (norteia.es)

La web de referencia de estilo es **salgadoia.com**: oscura, minimalista, profesional, tipografía bold para nombre, acento cálido (naranja). No es la web de NorteIA — es la voz personal de Víctor.

---

## STACK TÉCNICO

- **Framework:** Next.js 14+ (App Router)
- **Estilos:** Tailwind CSS v4
- **Animaciones:** Framer Motion (transiciones suaves, nada excesivo)
- **Formulario contacto:** Resend API (o Formspree como fallback)
- **Deploy:** Vercel
- **Dominio:** victormago.com (ya adquirido)

---

## IDENTIDAD VISUAL

```
Paleta:
  bg-primary:    #0F172A  (navy profundo — fondo principal)
  bg-secondary:  #1E293B  (navy medio — cards, secciones alternas)
  accent:        #F97316  (naranja — CTA, nombre, énfasis)
  text-primary:  #FFFFFF  (blanco — texto principal)
  text-muted:    #94A3B8  (gris azulado — subtítulos, meta)
  border:        #1E293B  (separadores sutiles)

Tipografía:
  Display:  Bricolage Grotesque (Bold para nombre y titulares grandes)
  Body:     Instrument Sans (Regular / Medium — legible y cálido)
  Mono:     Geist Mono (solo para datos técnicos o código)

Logotipo:
  Símbolo: estrella norte naranja de 4 puntas + "VICTOR" blanco + "MAGO" naranja
  Archivo: /public/logo-victor-mago.png
```

---

## ESTRUCTURA DE PÁGINAS

### `/` — Home

#### Hero (pantalla completa)
- Fondo: `#0F172A` con textura muy sutil (ruido, grid punteado o nada)
- Texto grande (Bricolage Bold):
  ```
  La IA no te va a
  quitar el trabajo.
  ```
  Subtítulo en gris: `Si aprendes a gobernarla.`
- Descripción breve (max 2 líneas): _Consultor y formador de IA. Ayudo a directivos de pymes a entender, aplicar y cumplir la inteligencia artificial sin perder el norte._
- CTA principal: **"Únete al webinar gratuito"** (naranja, grande)
- CTA secundario: **"Conoce NorteIA →"** (outline, link a norteia.es)
- Foto de Víctor (placeholder div por ahora — `/public/victor-foto.jpg`)

#### Social Proof / Números
- 3–4 métricas en una fila:
  - `+500` personas formadas
  - `4` sectores especializados
  - `EU AI Act` núcleo del programa
  - `norteia.es` empresa fundada
- Tipografía: número grande naranja + descripción gris debajo

#### Sobre Víctor (sección oscura media)
- Título: "Quién soy"
- Párrafo 1: _Empecé a explorar la IA cuando se convirtió en una herramienta de negocio real. No soy ingeniero — soy alguien que ha aprendido a usarla, a enseñarla y a cumplirla._
- Párrafo 2: _Co-fundé NorteIA para llevar la formación en IA y el cumplimiento del EU AI Act a pymes españolas que lo necesitan y no saben por dónde empezar._
- Link sutil: "Ver NorteIA →"

#### Temas sobre los que escribo / enseño
- Grid de 4–6 pills / tags: `EU AI Act` · `Automatización` · `Agentes IA` · `Formación corporativa` · `Gobernanza ética` · `IA para no técnicos`

#### Últimas publicaciones (opcional fase 2)
- 3 cards con publicaciones recientes de LinkedIn o artículos del blog
- Placeholder estático por ahora

#### CTA final
- Banner oscuro con: "¿Tu empresa está preparada para agosto 2026?"
- Subtexto: "El EU AI Act entra en plena aplicación. Multas de hasta el 7% de facturación."
- Botón: **"Habla con nosotros en NorteIA"** → link a norteia.es/contacto

---

### `/sobre` — Sobre Víctor

- Bio más larga (300 palabras)
- Formación y trayectoria (timeline visual simple)
- Valores: honestidad · practicidad · ética en IA
- Foto + cita personal
- Link a LinkedIn + NorteIA

---

### `/webinar` — Webinar Gratuito

- Título: "Webinar gratuito mensual: IA y EU AI Act para pymes"
- Descripción del webinar
- Fecha próxima (placeholder: "Próxima fecha — inscríbete para recibir aviso")
- Formulario de registro (nombre + email + empresa)
- "¿Por qué asistir?" — 3 bullets
- Testimonios (placeholder)

---

### `/contacto` — Contacto

- Formulario: nombre, email, empresa, mensaje
- Texto: "Para proyectos con NorteIA visita norteia.es"
- Links: LinkedIn / Email / norteia.es

---

## COMPONENTES CLAVE A CREAR

```
src/
  components/
    Navbar.tsx          — Logo + links Home / Sobre / Webinar / Contacto + CTA "NorteIA →"
    Hero.tsx            — Sección principal
    Stats.tsx           — Números / social proof
    AboutSection.tsx    — Mini bio
    TagCloud.tsx        — Pills de temas
    CTABanner.tsx       — Banner EU AI Act
    Footer.tsx          — Logo + links + "Powered by NorteIA"
    ContactForm.tsx     — Formulario con validación
    WebinarForm.tsx     — Formulario de registro webinar
```

---

## COMPORTAMIENTOS Y ANIMACIONES

- **Navbar:** sticky, se oscurece al hacer scroll
- **Hero:** fade-in del texto al cargar (Framer Motion, sutil)
- **Stats:** counter up animado al entrar en viewport
- **Cards:** hover: ligero lift (translateY -4px, sombra naranja muy sutil)
- **CTA botón:** pulse muy sutil en el botón principal
- **Page transitions:** fade entre páginas (0.3s)
- **Sin autoplay, sin parallax pesado, sin exceso de movimiento**

---

## SEO Y META

```typescript
// metadata para /
export const metadata = {
  title: "Víctor Mago — Consultor y Formador de IA",
  description: "Ayudo a directivos de pymes a entender, aplicar y cumplir la Inteligencia Artificial. Especialista en EU AI Act. Co-fundador de NorteIA.",
  keywords: ["formación IA empresas", "EU AI Act pymes", "consultor inteligencia artificial España", "Victor Mago"],
  openGraph: {
    title: "Víctor Mago — Consultor y Formador de IA",
    description: "La IA no te va a quitar el trabajo, si aprendes a gobernarla.",
    url: "https://victormago.com",
  }
}
```

---

## ORDEN DE IMPLEMENTACIÓN

### Fase 1 — MVP (lanzar en < 1 semana)
1. `npx create-next-app@latest victormago --typescript --tailwind --app`
2. Instalar Framer Motion: `npm install framer-motion`
3. Configurar paleta en `tailwind.config.ts`
4. Crear layout con Navbar y Footer
5. Implementar página Home con Hero + Stats + AboutSection + CTABanner
6. Página de Webinar con formulario básico
7. Página de Contacto
8. Deploy en Vercel: `vercel --prod`
9. Conectar dominio victormago.com en Vercel Dashboard

### Fase 2 — Mejoras post-lanzamiento
- Integrar Resend para emails del formulario
- Añadir blog/publicaciones
- Conectar con lista de email (ConvertKit / Mailchimp)
- Analytics: Plausible o Vercel Analytics
- A/B test del CTA del Hero

---

## NOTAS IMPORTANTES

- **No usar images de IA** — placeholder divs de color hasta tener foto real de Víctor
- **El texto es personal, no corporativo** — primera persona, tono cercano pero con autoridad
- **victormago.com alimenta norteia.es** — todos los CTA importantes llevan ahí
- **Mobile first** — el 70% del tráfico será móvil
- **Sin cookies agresivas** — solo analytics básico con aviso mínimo
- **EU AI Act es el gancho principal** — mencionarlo en Hero y en CTABanner con urgencia real

---

## RESULTADO ESPERADO

Una web personal de una sola página extendida (o multi-página con navegación limpia) que cuando alguien la visite piense:

> _"Este tío sabe de IA y me va a ayudar a no quedarme atrás."_

Y que haga clic en "Habla con nosotros en NorteIA."

---

*Generado por Business Launcher — NorteIA / Víctor Mago · Marzo 2026*
