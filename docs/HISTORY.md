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

---

## 2026-10-09 — Logo e isotipo

El wordmark de texto `Vin<0de` deja de ser la marca en pantalla. Los archivos quedan en `public/brand/`. El enlace del logo va a `/` y no es un CTA.

- Navbar, fondo claro: `public/brand/logo.png` en `src/components/Header/Header.tsx`
- Footer y menú móvil, fondo oscuro: `public/brand/logo-light.png` (mismo lockup, palabra en blanco) en `src/components/Footer/FooterComponent.astro` y `src/components/Header/MobileNav.tsx`
- Favicon: isotipo `public/brand/isotipo.png`, servido como `favicon.ico`, `favicon-32.png`, `favicon-192.png`, `apple-touch-icon.png` y `favicon.svg`. Los enlaces están en `src/layouts/MainLayout.astro`
- `Organization.logo` en `src/pages/index.astro` y en `src/components/Schema/ServiceSchema.astro` apunta a `https://www.vincode.dev/brand/logo.png`
- `public/vincode-icon.ico` sigue existiendo con el isotipo nuevo, por si algo externo aún pide esa ruta. El `<head>` ya no lo usa.

La regla vigente de navegación (el logo no compite con la primaria) está en [CONVERSION_UX.md](./CONVERSION_UX.md). Dónde viven los archivos, en `AGENTS.md`.

---

## 2026-10-09 — Botón flotante de WhatsApp

Acceso fijo para escribir por WhatsApp sin bajar al footer. No cambia la primaria ni el cierre de paquetes.

- Componente: `src/components/WhatsAppFloat/WhatsAppFloat.astro`, montado en `src/layouts/MainLayout.astro`.
- Destino: `whatsappUrl(DEFAULT_WHATSAPP_MESSAGE)` → `https://wa.me/51986966477` con el texto `Hola, quiero hablar sobre un proyecto para mi negocio.`
- Número: `WHATSAPP_NUMBER` en `src/CONSTANTS.ts`. Enlace `<a target="_blank">`, sin `window.open`.
- Posición: abajo a la derecha, `z-index: 45`. El header queda en `z-50` y el menú móvil en `z-10000`, así el botón no cubre `Hablemos de tu proyecto`.
- `/politica-de-privacidad` nombra ese botón como otro enlace externo de WhatsApp, con el mismo mensaje general. No entra al funnel.

---

## 2026-10-09 — Carrusel de proyectos en mobile

En home, bajo `md`, `LandingProjectsCarousel` ya rotaba solo y con los puntos. Ahora también se pasa arrastrando la tarjeta, con dedo o con mouse.

- Archivo: `src/components/Landing/LandingProjectsCarousel.tsx`.
- Un desplazamiento horizontal de al menos 48px cambia de caso. Un gesto vertical sigue haciendo scroll de la página.
- El clic en el CTA del caso (`Explorar VINBOOK`, `Conocer VIN DISPLAY`, `Ver proyecto`) se conserva si no hubo deslizamiento.
- Desde `md` los casos siguen apilados en `LandingFeaturedProjects.astro`. No hay carrusel ahí.
- No cambia la primaria ni `Ver todos los proyectos` → `/nuestros-proyectos`.

---

## 2026-10-18 — Ficha VINCRM, relato y conversión

La página sigue en `/servicios/vincrm-crm-whatsapp-con-ia` y en `VincrmServicePage.astro`. No usa `ServicePageTemplate`. El slug, el título `VINCRM | CRM WhatsApp con IA | VINCODE` y el schema de servicio sin `Offer` se mantienen.

### Qué cambió en la página

- Hero con mockup HTML/CSS de un chat de ejemplo (centro de masajes) y una tarjeta que se mueve en el pipeline. En móvil el mockup va debajo del texto. Hay un solo `h1`.
- El problema pasa de seis tarjetas a tres fugas: fuera de horario, respuesta que no avanza, lead sin seguimiento. Sin cifras.
- Bloque de ejemplo «Así se ve en un centro de masajes y estética», marcado como ejemplo, de la consulta a la cita.
- «Agente de IA», «Beneficios» y «Cómo funciona» quedan en un solo bloque «Cómo trabaja», de cuatro pasos. El límite «La IA atiende, filtra y agenda; tu equipo cierra» se dice una vez.
- «VINCRM no te asigna un número» queda solo en la FAQ.
- Precio: título `Precio según tu operación`. Sin monto y sin «desde». Incluye bandeja, pipeline, agenda y agente. Depende del volumen, de los usuarios y de la configuración. No incluye OpenRouter ni los mensajes de Meta.

### CTAs

- Siguen `Hablemos de tu proyecto` (hero y cierre) y `Consultar por precio` (bloque de precio), ambos a `/contacto?servicio=vincrm`.
- `Pruébalo en WhatsApp` no se publica. No hay número de demo. No se usa `WHATSAPP_NUMBER`. El hueco está en `VINCRM_DEMO_NUMBER` dentro de `VincrmServicePage.astro`.

### FAQ y schema

- La ficha Markdown conserva las tres preguntas (OpenRouter, Meta, número propio).
- No se publicaron las cuatro preguntas nuevas: tiempo de puesta en marcha, app de WhatsApp en el celular, toma de la conversación por el equipo, y qué pasa si la IA no sabe. Faltan las respuestas.
- `[id].astro` emite `FAQPage` solo para este slug, además del `Service` sin `Offer`.

### Pendiente de confirmar

- Número de demo con código de país.
- Si «incluye» del precio es exactamente bandeja, pipeline, agenda y agente.
- Plazo de respuesta al escribir (no se publicó «24 h»).
- Monto «desde», si llega a existir.
- Respuestas de las cuatro FAQ nuevas.

---

## 2026-10-18 — Mockup animado de VINBOOK en la home

La franja sigue debajo del hero. El CTA sigue siendo `Empezar ahora` → `https://vinbook.vincode.dev`. El mockup no reserva y no sustituye ese CTA.

- Archivo: `src/components/Landing/VinbookHeroMockup.tsx`. Isla `client:visible` en `LandingHero.astro`.
- Recorre solo Corte, Ana R., día 18, 12:00 PM y Continuar, y muestra `¡Reserva confirmada!`. El ciclo se repite mientras la tarjeta está en pantalla.
- Arranca sin selección. Especialistas, calendario y horarios ocupan su alto ocultos, con el aviso encima. La altura de la tarjeta no salta.
- Un clic en el mockup detiene el recorrido y lo deja manual. `Nueva reserva` también lo para.
- Con `prefers-reduced-motion: reduce` se ve la selección completa y no hay puntero.
- Sigue oculto bajo `md`. La tarjeta conserva su tamaño y sus dos columnas desde `md`. No se ensanchó la columna del mockup.
- Estructura de la tarjeta y recorrido: [widget-demo-animacion.md](./widget-demo-animacion.md). Los especialistas no llevan círculo de foto. Los días no llevan anillo; el círculo azul es solo el día elegido.

---

## 2026-10-18 — Datos confirmados de VINCRM

Cierra los pendientes de la nota anterior, salvo el número de demo. No hay monto ni `Offer`. La primaria no cambia.

- Número de demo: sigue sin existir. `Pruébalo en WhatsApp` no se publica. `VINCRM_DEMO_NUMBER` queda en `null`.
- Al escribir: `Te respondemos en 24 h hábiles`. Está en el bloque de precio y en el cierre.
- No hay «desde» en soles. La frase publicada es `El precio depende de cuántos chats recibes y cuántas personas atienden. Cuéntanos y te lo damos en menos de 24 horas hábiles.`.
- El paquete incluye la bandeja, el pipeline, la agenda y la configuración del agente.
- El límite del agente queda así: tú defines en qué casos te pasa la conversación. No dice que la pase siempre que no sepa.
- La ficha `vincrm-crm-whatsapp-con-ia.md` suma cuatro FAQ: tiempo de puesta en marcha (conectar el número toma unos 5 minutos; el total depende de los datos del negocio), la app de WhatsApp no convive con el mismo número, hasta 2 personas además de ti, y qué hace el agente cuando no sabe. `FAQPage` las incluye porque salen de `faqData`.

---

## 2026-10-22 — Dependencias parcheadas (Astro 7)

No cambia el funnel, los CTAs ni los precios. El sitio sigue en salida estática con el adapter de Vercel.

- Astro `5.16.6` pasa a `7.4.2`, con `@astrojs/react` `7.1.1`, `@astrojs/vercel` `11.0.16`, `@astrojs/sitemap` `3.7.4` y Tailwind `4.3.3`. Node mínimo `22.12.0` (`engines` en `package.json`).
- El adapter se importa desde `@astrojs/vercel`. `compressHTML: true` conserva la compresión de espacios anterior.
- Las fichas pasan al content layer: `src/content.config.ts`. El segmento de URL es `entry.id`, el nombre del archivo.
- `RESEND_API_KEY` se lee con `process.env` en las APIs. Los textos del formulario se escapan con `src/lib/escapeHtml.ts` antes del HTML del correo.
- `pnpm.overrides` fija `tar@7.5.22`, `fast-uri@3.1.9` y `source-map-js@1.2.2`. Después del cambio, `pnpm audit` no reporta avisos.
