# Historial de cambios (landing y conversión)

Notas fechadas. No sustituyen [CONVERSION_UX.md](./CONVERSION_UX.md): ese archivo es la referencia vigente a partir de **octubre 2026**.

Si una regla de este historial choca con `CONVERSION_UX.md`, prevalece `CONVERSION_UX.md`.

---

## 2026-08-23 — Landing: hero estático, franja VINBOOK, precios home

### Hero

- Se eliminó el carrusel del hero (`LandingHeroCarousel`).
- El hero queda estático solo con VINCODE: fondo, overlay, mockup de módulos, tipografía y CTAs del slide original.
- Copy de referencia en esa fecha:
  - Eyebrow: Soluciones digitales para negocios
  - H1: Convertimos problemas de negocio en soluciones digitales
  - Primaria: `Hablemos de tu proyecto` → `/contacto`
  - Secundaria: `Ver proyectos` → `#proyectos`
- Archivo: `src/components/Landing/LandingHero.astro`

### Franja VINBOOK (debajo del hero)

- Bloque estático horizontal (no slide, no carrusel), extensión visual del hero.
- Copy de referencia: “Nuevo · VINBOOK”, agenda 24/7, CTA de producto.
- Mockup: reutiliza `VinbookHeroMockup` (compacto). En mobile el mockup se oculta (`hidden md:…`); texto y CTA siguen visibles.
- En esa fecha el CTA llegó a apuntar a `/vinbook`; **después** (ver octubre 2026) el destino vigente es la app externa. No reintroducir `/vinbook` sin alinear con `CONVERSION_UX.md`.

### Precios en home

- Home muestra **máximo 4** opciones en `HomePricingSection` (no los 7 paquetes anteriores).
- Visibles en home:
  1. Presencia Digital
  2. Lanzamiento Digital
  3. Presencia Pro
  4. Solución a medida (sin precio fijo → contacto / primaria)
- Ocultos solo en home (siguen existiendo en otras superficies si aplican): Presencia Digital Pro, Starter Digital, Negocio Digital, Creador de Contenido.
- No inventar precios ni borrar paquetes del resto del proyecto.

### Orden de home (desde esta fecha)

Hero → franja VINBOOK → confianza → problemas → soluciones → proyectos → proceso → servicios → clientes → precios → CTA final.

Ese orden se mantiene en la auditoría de octubre 2026.

### TypeScript / Astro check (misma ventana)

- Se añadió `@astrojs/check` + TypeScript 5.9.x.
- Script `pnpm check` → `astro check`.
- Ajustes de tipado mínimos; `src/others/` quedó fuera del typecheck por ser legacy no enrutado.

---

## 2026-10-03 — Conversión UX (fuente de verdad actual)

- Se documentó y alineó el funnel en [CONVERSION_UX.md](./CONVERSION_UX.md).
- Primaria única: `Hablemos de tu proyecto` → `/contacto`.
- VINBOOK: un solo CTA de producto hacia `https://vinbook.vincode.dev` (texto vigente en sitio: `Empezar ahora`; no `/vinbook` intermedia).
- Contacto e identidad pública unificados vía `src/CONSTANTS.ts` (teléfono, WhatsApp, correo).
- Cualquier cambio comercial nuevo debe partir de ese documento, no de las notas de agosto.

---

## 2026-10-03 — Pricing: Software Licenciado (plan Básico)

- Precio del plan **Básico** de Software Licenciado / Instalación de Software: **S/ 49** (antes S/ 119).
- `originalPrice` se mantiene en S/ 160; etiqueta de descuento sigue siendo referencial (`Depende del software`).
- Archivos:
  - `src/content/servicios/software-licenciado.md` (ES, fuente de la ficha)
  - `src/content/services/technique-support.md` (EN, alineado)
- No afecta paquetes de home ni el funnel primario de [CONVERSION_UX.md](./CONVERSION_UX.md); el cierre del paquete sigue siendo WhatsApp con el nombre del plan.

---

## 2026-10-04 — Páginas legales

Páginas informativas. No entran al funnel de [CONVERSION_UX.md](./CONVERSION_UX.md): no cambian `/contacto`, la primaria, WhatsApp, precios, VINBOOK ni el header.

### Rutas

- `/politica-de-privacidad` — `src/pages/politica-de-privacidad/index.astro`
- `/terminos-y-condiciones` — `src/pages/terminos-y-condiciones/index.astro`
- Plantilla compartida: `src/components/Legal/LegalDocument.astro`
- SEO por `MainLayout` (canonical, `index, follow`). `robots.txt` las permite. El sitemap las incluye.

### Footer

En `FooterComponent.astro`, debajo del copyright, sin rediseño:

`Política de privacidad · Términos y condiciones`

### Titular publicado

- Titular: Bryan Vivanco Silva
- RUC: 1072865225
- Domicilio: Piura, Perú
- Contacto: los de `src/CONSTANTS.ts` (`vincodedev@gmail.com`, `+51 986966477`)

No hay cláusula de fuero. La legislación aplicable queda como la de la República del Perú. El sitio no publica pagos, reembolsos, plazos de conservación ni banner de cookies: el texto legal no los inventa.

---

## 2026-10-04 — VINCRM y conocimiento de Vini

Ficha comercial nueva. No es VINBOOK ni la Página Web de Reservas. No publica precio. El funnel primario no cambia: sigue siendo `Hablemos de tu proyecto` → `/contacto`. La excepción de precio está en [CONVERSION_UX.md](./CONVERSION_UX.md).

### Ruta y archivos

- URL: `/servicios/vincrm-crm-whatsapp-con-ia`
- Ficha: `src/content/servicios/vincrm-crm-whatsapp-con-ia.md` (categoría `software`, id 13)
- Presentación propia: `src/components/Services/VincrmServicePage.astro`, ramificada en `src/pages/servicios/[id].astro` cuando el slug es `vincrm-crm-whatsapp-con-ia`
- No usa `ServicePageTemplate`: esa plantilla exige paquetes con precio numérico y un `Ver precios` hacia `#pricing`
- Schema sin `Offer` y sin `priceCurrency` (`pricing` no se pasa)
- Alias de contacto: `vincrm` en `src/data/contactContext.ts`
- Mensaje de WhatsApp: `Hola, estoy interesado en VINCRM, el CRM WhatsApp con IA de VINCODE.`

No existen `/servicios/vincrm` ni `/vincrm-crm-whatsapp-con-ia`.

### Qué dice la ficha

- CRM de WhatsApp: bandeja, pipeline, agenda y agente de IA que responde, califica y ayuda a agendar.
- El negocio conecta su propio número de WhatsApp Business. VINCRM no entrega un número.
- El costo de la IA no está incluido: se paga en la cuenta de OpenRouter del negocio.
- El costo de los mensajes de Meta o WhatsApp no está incluido: lo paga el negocio.
- No hay alta, checkout ni onboarding en este sitio.

### CTAs

- Hero y cierre: `Hablemos de tu proyecto` → `/contacto?servicio=vincrm`
- Bloque de precio: botón `Consultar por precio` → el mismo destino. No hay monto ni `S/`.
- Home: la tarjeta destacada usa el slug completo, así el enlace es `/servicios/vincrm-crm-whatsapp-con-ia`. Archivo: `src/components/Landing/LandingServices.astro`.
- El footer no se modificó. VINCRM no se metió a la fuerza en esa lista.

### Vini

`docs/VINI.md` es el texto para pegar en el panel del CRM. En esta fecha se añadió VINCRM a instrucciones, agrupación de sistemas, siguiente paso, pase a una persona, tres preguntas (chats perdidos, costos de IA y mensajes, precio), cómo elegir, precios y contacto.

Hechos que el agente debe repetir: sin precio publicado; siguiente paso `https://www.vincode.dev/contacto?servicio=vincrm`; ficha `https://www.vincode.dev/servicios/vincrm-crm-whatsapp-con-ia`; número propio; OpenRouter y Meta los paga el negocio; no mandar ese caso a `https://vinbook.vincode.dev`.

La sección “Pendientes de confirmación” de `VINI.md` no se pega al conocimiento que ve el cliente.
