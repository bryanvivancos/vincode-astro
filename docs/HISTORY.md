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
