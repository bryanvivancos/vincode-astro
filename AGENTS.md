# AGENTS.md

Guía de comportamiento para agentes en este repositorio. No reemplaza `docs/`: indica qué leer, en qué orden, y cuándo el código manda sobre un documento.

Sitio comercial de VINCODE (`https://www.vincode.dev`): Astro 5, salida estática, islas React, Tailwind 4, deploy en Vercel. El paquete es `pnpm` (`packageManager` en `package.json`). No hay base de datos, autenticación, RLS, pagos ni webhooks de entrada.

## Regla fundamental

Antes de implementar, modificar, eliminar o refactorizar funcionalidad, el agente debe revisar la documentación relevante en `docs/` y la implementación existente antes de hacer suposiciones.

```text
Pedido
  → entender el cambio y su impacto
  → buscar docs/ relacionados y leerlos
  → inspeccionar la implementación y compararla con esos docs
  → planear el cambio mínimo
  → implementar
  → identificar todos los documentos afectados
  → actualizarlos
  → evaluar si AGENTS.md debe cambiar
  → validar consistencia (código, config, docs)
  → cerrar
```

## Jerarquía de fuentes

Cuando dos fuentes discrepen, usar este orden:

1. Instrucción explícita del usuario en la conversación.
2. Código y comportamiento actual (páginas, componentes, content collections, rutas).
3. Configuración real (`astro.config.mjs`, `vercel.json`, `package.json`, variables de entorno usadas en código).
4. Tests, si existen. Hoy no hay suite de tests.
5. Documentación técnica vigente en `docs/` (`CONVERSION_UX.md` para conversión).
6. `README.md` y borradores sueltos en la raíz.
7. Documentación histórica (`docs/HISTORY.md`, catálogos viejos).

Una discrepancia no se ignora. El agente debe nombrarla, decidir cuál refleja el sistema actual, no introducir un cambio incompatible con esa realidad, y actualizar el documento que quedó atrás cuando el cambio sea parte del pedido. No revertir una decisión vigente porque un archivo viejo diga otra cosa.

`docs/HISTORY.md` ya fija una regla interna: si choca con `docs/CONVERSION_UX.md`, prevalece `CONVERSION_UX.md`.

## Cómo leer `docs/`

`docs/` es plana. No hay subcarpetas. No crear `architecture/`, `features/` ni similares salvo que el usuario lo pida.

```text
docs/
├── CONVERSION_UX.md   vigente: funnel, CTAs, navegación, pricing UX, contacto
├── HISTORY.md         notas fechadas; contexto, no estado automático
└── VINI.md            texto del asistente comercial Vini; no es instrucción de Cursor
```

Búsqueda progresiva. No leer los tres archivos en cada tarea.

```text
listar docs/
  → elegir solo lo que toca la tarea
  → leer ese documento
  → seguir enlaces internos si hacen falta para entender el cambio
  → leer más solo si el cambio los afecta
```

| Tarea | Leer primero | Después, en código |
| --- | --- | --- |
| Landing, nav, CTA, pricing, formularios, copy comercial | `docs/CONVERSION_UX.md` | páginas y componentes citados ahí |
| Por qué existe una decisión o un cambio fechado | `docs/HISTORY.md`, luego el vigente | archivos nombrados en la nota |
| Conocimiento, precios o límites que dice Vini | `docs/VINI.md` | ficha en `src/content/servicios/` y `CONVERSION_UX.md` |
| Precio, alcance o ficha de un servicio | la ficha en content; `CONVERSION_UX.md` si cambia el CTA | `src/content/config.ts` si cambia el schema |
| Contacto, WhatsApp, `?servicio=` | sección de contacto en `CONVERSION_UX.md` | `src/data/contactContext.ts`, `src/CONSTANTS.ts`, `WhatsAppFloat.astro` |
| Botón flotante de WhatsApp | reglas mobile de `CONVERSION_UX.md`; nota del 2026-10-09 en `HISTORY.md` | `src/components/WhatsAppFloat/WhatsAppFloat.astro`, `MainLayout.astro` |
| Carrusel de proyectos en la home (mobile) | reglas mobile de `CONVERSION_UX.md`; nota del 2026-10-09 en `HISTORY.md` | `LandingProjectsCarousel.tsx`, `LandingFeaturedProjects.astro` |
| Correo de contacto o soporte | `CONVERSION_UX.md` (canales) | `src/pages/api/contact.ts`, `src/pages/api/support.ts` |
| Páginas legales | nota del 2026-10-04 en `HISTORY.md` | `src/pages/politica-de-privacidad/`, `src/pages/terminos-y-condiciones/` |
| Logo, isotipo, favicon | nota del 2026-10-09 en `HISTORY.md`; identidad en este archivo | `public/brand/`, `Header.tsx`, `MobileNav.tsx`, `FooterComponent.astro`, `MainLayout.astro` |
| Estilo, bug local, refactor sin cambio de comportamiento | ninguno, salvo que el archivo tocado esté citado en `docs/` | solo el código afectado |

Referencias que sí hay que seguir cuando la tarea las cruza:

```text
CONVERSION_UX.md → HISTORY.md (contexto fechado)
CONVERSION_UX.md → VINI.md (conocimiento del asistente VINCRM)
HISTORY.md → CONVERSION_UX.md (la nota no sustituye al vigente)
VINI.md → fichas en src/content/servicios/ y la home
```

`VINI.md` es copy para el panel del CRM. La sección «Pendientes de confirmación» no se pega al conocimiento que ve el cliente. No tratar `VINI.md` como reglas de este repositorio.

## Documentación que no es fuente vigente

- `README.md` es la plantilla mínima de Astro. Comandos de `package.json` sí valen; la estructura que describe no.
- `vincode_catalogo_v3 (1).docx.md` y `vincode_catalogo_v4.md` son borradores en la raíz. Precios y oferta publicados salen de `src/content/servicios/` y de `docs/CONVERSION_UX.md`.
- `src/others/` es legacy, no está enrutado y `tsconfig.json` lo excluye del typecheck. No reactivarlo ni «arreglarlo» sin pedido.

No borrar `docs/HISTORY.md` ni los borradores de la raíz solo porque parezcan viejos. Si una frase de un documento vigente describe un comportamiento que el cambio acaba de quitar, corregirla en el mismo cambio. El historial se conserva como contexto fechado; no se reescribe para borrar lo que pasó.

## Sincronización de documentación

La documentación forma parte del sistema. Crear, modificar, eliminar o refactorizar una feature incluye una auditoría documental antes de dar la tarea por terminada.

```text
Feature / Change
  → analizar impacto
  → buscar documentación relacionada
  → implementar
  → identificar documentos afectados
  → actualizar todos los documentos afectados
  → evaluar AGENTS.md
  → validar consistencia
  → finalizar
```

Un cambio puede afectar varios documentos. Se actualizan todos los que quedarían falsos o incompletos. No basta con el documento principal.

Ejemplo real de este repo: un precio, un CTA o un siguiente paso que Vini repite toca la ficha en `src/content/servicios/`, `docs/CONVERSION_UX.md` si altera el funnel, `docs/VINI.md`, y la frase de `docs/HISTORY.md` que todavía presente ese dato como estado actual. No se abre un archivo nuevo para el mismo hecho.

`docs/` hoy no tiene `features/`, `integrations/` ni `architecture/`. No crear esas carpetas para cumplir esta regla. El criterio es el mismo cuando aparezcan más documentos: cada uno que describa el comportamiento afectado se actualiza; no se duplica.

Antes de crear un documento, buscar si ya existe uno del tema. No añadir `feature-v2.md`, `feature-final.md` ni equivalentes. Una feature nueva sigue el formato del doc que ya cubre ese tema: reglas vigentes en `CONVERSION_UX.md`, nota fechada en `HISTORY.md`, copy de asistente en `VINI.md`.

Al evaluar documentación nueva o existente, revisar si el cambio toca:

- la feature y sus reglas de negocio;
- arquitectura o decisiones que futuros agentes deban repetir;
- base de datos, migraciones o RLS (hoy no existen; si se introducen, documentarlas);
- API, integraciones, autenticación o autorización;
- configuración, workflows, deploy;
- comandos, tests o convenciones de agentes.

Hecho comercial que Vini repite (precio, inclusión, siguiente paso, límite): alinear ficha, funnel y `VINI.md`. No dar por existente una oferta solo porque un doc o un catálogo la nombre: comprobar content collection, página y, si aplica, `contactContext.ts`.

### AGENTS.md

Después de cada cambio significativo, decidir en voz alta si este archivo cambia. Actualizarlo cuando el cambio introduzca o modifique reglas globales, convenciones, arquitectura general, estructura relevante del repo, áreas o categorías nuevas en `docs/`, comandos, workflows, seguridad, reglas para agentes, integraciones que exijan otro comportamiento, restricciones nuevas, o la forma de consultar la documentación.

No registrar aquí el nombre de cada feature. Este archivo dice cómo trabajar. `docs/` dice qué hace el producto.

### Auditoría antes de cerrar

Responder estas preguntas. Cualquier «sí» obliga a actualizar el documento correspondiente en la misma tarea:

- ¿Cambió una regla de negocio, una feature o la arquitectura?
- ¿Cambió la base de datos, RLS u otra regla de seguridad?
- ¿Cambió una API, una integración, la configuración o un workflow?
- ¿Cambiaron comandos, tooling o una convención que otro agente necesita?
- ¿Algún documento vigente quedó incorrecto o incompleto?
- ¿Hace falta un documento nuevo?
- ¿Hace falta tocar `AGENTS.md`?

### Definition of done

Una feature no está terminada hasta que el código, la configuración, los tests que existan y la documentación dicen lo mismo. Hoy no hay suite de tests: la consistencia exigible es código + configuración + documentación. Si se agrega un test runner, el comando entra en la sección Comandos de este archivo. La documentación no queda para después.

## Conversión

Antes de tocar páginas comerciales, landing, navegación, CTAs, pricing o formularios, leer `docs/CONVERSION_UX.md` y comprobar que el cambio mantiene o mejora el flujo.

La conversión primaria es `Hablemos de tu proyecto` → `/contacto`. VINBOOK es un funnel aparte hacia `https://vinbook.vincode.dev`. Jerarquía de CTAs, excepciones y estado implementado viven solo en ese documento.

## Código: mapa corto

```text
src/pages/                 rutas; español es el canon comercial
src/pages/api/             POST contact y support (prerender = false)
src/content/servicios/     fichas ES (colección servicios)
src/content/services/      fichas EN (colección services)
src/content/config.ts      schema Zod de ambas colecciones
src/components/            UI; React solo donde hay isla
src/layouts/MainLayout.astro   header, footer y WhatsAppFloat
src/components/WhatsAppFloat/  botón fijo de WhatsApp
src/components/Landing/LandingProjectsCarousel.tsx  carrusel de proyectos, solo bajo md
src/data/contactContext.ts mensajes, contactPath() y whatsappUrl()
src/data/landing.ts
src/CONSTANTS.ts           teléfono, WhatsApp, correo, nav, proyectos
src/global.css             Tailwind 4
public/brand/              logo horizontal e isotipo
```

Rutas comerciales en español: `/`, `/servicios`, `/servicios/{slug}`, `/contacto`, `/nuestros-proyectos`, `/sobre-nosotros`, `/soporte`. `/contact` redirige a `/contacto` en `astro.config.mjs`. Siguen publicadas `/services`, `/projects` y `/about-us`.

VINCRM (`vincrm-crm-whatsapp-con-ia`) no usa `ServicePageTemplate`; la página es `VincrmServicePage.astro`. El schema de `pricing` es opcional a propósito.

Islas: `client:load` en header y menú móvil; `client:visible` en formularios y bloques bajo el fold. Páginas estáticas declaran `prerender = true`. APIs y `/soporte` declaran `prerender = false` (`output: "static"` + adapter Vercel).

Identidad pública (teléfono, WhatsApp, correo) sale de `src/CONSTANTS.ts`. No hardcodear otra en la UI. `ServiceSchema.astro` repite el teléfono en otro formato: si cambia `phone`, actualizar el schema en el mismo cambio.

Logo horizontal e isotipo (desde 2026-10-09). No volver al wordmark `Vin<0de`.

- `public/brand/logo.png`: navbar y cualquier fondo claro. Lo usa `src/components/Header/Header.tsx`.
- `public/brand/logo-light.png`: mismo lockup con la palabra en blanco. Footer (`FooterComponent.astro`) y menú móvil (`MobileNav.tsx`).
- `public/brand/isotipo.png`: origen del favicon. El `<head>` de `MainLayout.astro` enlaza `favicon.ico`, `favicon-32.png`, `favicon-192.png` y `apple-touch-icon.png`.
- El enlace del logo va a `/`. No es un CTA y no reemplaza `Hablemos de tu proyecto`.
- `Organization.logo` (home y `ServiceSchema.astro`) apunta a `https://www.vincode.dev/brand/logo.png`.
- `public/vincode-icon.ico` conserva el isotipo nuevo por si una URL vieja lo pide. El `<head>` ya no lo referencia.

Botón flotante de WhatsApp (desde 2026-10-09). No sustituye `Hablemos de tu proyecto`.

- Componente: `src/components/WhatsAppFloat/WhatsAppFloat.astro`, montado en `MainLayout.astro`. Sale en todas las páginas que usan ese layout.
- Enlace: `whatsappUrl(DEFAULT_WHATSAPP_MESSAGE)` en `src/data/contactContext.ts`. Número: `WHATSAPP_NUMBER` en `src/CONSTANTS.ts`. No hardcodear otro `wa.me` ni usar `window.open`.
- Mensaje general: `Hola, quiero hablar sobre un proyecto para mi negocio.`
- Posición: abajo a la derecha, `z-index: 45`. El header está en `z-50` y el menú móvil en `z-10000`. No subirlo por encima del menú ni tapar la primaria.
- Los avisos de envío en `/contacto` y `/soporte` quedan por encima del botón (`containerStyle` del `Toaster`).

Carrusel de proyectos en la home (desde 2026-10-09). Solo bajo `md`.

- Archivo: `src/components/Landing/LandingProjectsCarousel.tsx`, usado en `LandingFeaturedProjects.astro`.
- Se pasa con el dedo o arrastrando con el mouse. Un desplazamiento horizontal de al menos 48px cambia de caso. Un gesto vertical sigue siendo scroll de la página.
- Los puntos siguen eligiendo el caso. El autoplay se pausa durante el gesto.
- El CTA del caso (`Explorar VINBOOK`, `Conocer VIN DISPLAY`, `Ver proyecto`) se conserva si el gesto no fue un deslizamiento.
- Desde `md` los casos siguen apilados. No convertir ese bloque en carrusel.
- `Ver todos los proyectos` sigue yendo a `/nuestros-proyectos`.

## Datos, correo, pagos, webhooks

Este repo no tiene tablas, migraciones, RLS, RPC, auth ni Supabase. No añadirlos para «completar» una tarea.

Antes de modificar `src/pages/api/contact.ts`, `src/pages/api/support.ts`, variables de entorno o integraciones:

- leer el doc relacionado (contacto en `CONVERSION_UX.md`);
- leer la ruta y quién la llama;
- mantener validación de campos en el servidor;
- no desactivar validaciones para que un envío pase;
- no loguear el cuerpo del mensaje, correo, teléfono ni la API key;
- escapar datos de usuario antes de interpolarlos en HTML de correo.

Secretos: `RESEND_API_KEY` solo en servidor (`import.meta.env`). No commitear `.env`. El schema de `astro.config.mjs` declara `WEB3FORMS_KEY` (cliente, público). `.env.example` también nombra `PUBLIC_WEB3FORMS_KEY`. Antes de tocar env, leer `astro.config.mjs` y los call sites; no asumir que el example y el schema coinciden.

No hay cobros ni webhooks de entrada. No inventar checkout, cuotas, IGV ni firma de webhook. Si en el futuro se agregan pagos o webhooks, el cambio debe cubrir idempotencia, verificación de firma, reintentos, estados, eventos duplicados, errores, logs sin datos sensibles y consistencia, y documentarse en `docs/`.

## Cambio mínimo

Hacer el cambio más pequeño que cumpla el pedido. No refactorizar al lado, no cambiar arquitectura, dependencias, UI ni contratos (rutas, query `?servicio=`, shape de content, respuestas JSON) sin una razón que salga del pedido. `src/others/` y las páginas EN no se migran «de paso».

## Flujo del agente

1. **Understand.** Qué debe quedar distinto para el usuario o para el negocio.
2. **Discover.** Estructura del área tocada y listado de `docs/`.
3. **Read.** Solo los documentos de la tabla de arriba.
4. **Inspect.** Código, content y config que implementan esa función.
5. **Dependencies.** CTAs, slugs, alias de contacto, fichas EN, schema, APIs, Vini.
6. **Plan.** Diff acotado. Si doc y código chocan, decir cuál se sigue.
7. **Implement.**
8. **Validate.** Comandos reales de abajo. En UI, recorrer el flujo afectado.
9. **Security.** Inputs, secretos, HTML de correo, sin aflojar checks.
10. **Docs.** Auditoría de la sección anterior. Actualizar todos los documentos afectados y corregir comportamiento vigente que ya no exista.
11. **AGENTS.md.** Actualizarlo solo si cambió una regla global, un comando, el mapa del repo o la forma de leer `docs/`.
12. **Summarize.** Formato de cierre de esta guía.

## Comandos

Definidos en `package.json`. No hay `lint`, `test`, migraciones ni script de generación de tipos.

| Comando | Acción |
| --- | --- |
| `pnpm install` | Dependencias |
| `pnpm dev` | Dev server (`astro dev --host`, puerto 4321) |
| `pnpm build` | Build a `./dist/` |
| `pnpm preview` | Servir el build |
| `pnpm check` | `astro check` (diagnósticos Astro y TypeScript) |
| `pnpm astro ...` | CLI de Astro (`astro add`, etc.) |

Los tipos de `.astro/` los genera Astro al correr `pnpm dev` o `pnpm check`. No hay otro generador.

Tras cambios en `.astro`, `.ts`, `.tsx` o schema de content, correr `pnpm check`. No inventar `pnpm test` ni `pnpm lint`.

## Convenciones observadas

- TypeScript estricto (`astro/tsconfigs/strict`). JSX React en componentes `.tsx`.
- Páginas y layout en `.astro`. Interacción en `.tsx` con directiva `client:*`.
- Fichas como Markdown de content collections, validadas por Zod en `src/content/config.ts`. Colección ES `servicios`, EN `services`.
- Slug de archivo = segmento de `/servicios/{slug}` o `/services/{slug}`.
- Alias de `?servicio=` solo si está en `src/data/contactContext.ts`; otro valor cae al mensaje general.
- Estilos con utilidades Tailwind en `src/global.css` (Tailwind 4 por Vite, sin `tailwind.config`).
- Estado de menú: nanostores en `src/store/menuStore.ts`.
- Copys y datos de negocio en español. No renombrar CTAs primarios fuera de lo que permita `CONVERSION_UX.md`.
- Errores de API: JSON `{ success: false, error }` con 400 si faltan campos y 500 si falta config de correo.

## Seguridad

- No exponer secretos ni pegarlos en código, docs, logs o commits.
- No hardcodear API keys. Usar variables de entorno.
- Validar inputs en la ruta de servidor, no solo en el formulario.
- Autorización de una acción sensible no puede quedar solo en el cliente. Hoy las rutas públicas son formularios de correo.
- No interpolar input crudo en HTML.
- No ampliar logs con datos personales.
- No debilitar validación, redirects ni prerender para «que funcione».

## Cierre de cada tarea

### Changed

Archivos y comportamiento modificados.

### Why

Qué pedido cumple.

### Documentation

```text
Created:
- ...

Updated:
- ...

Reviewed:
- ...

AGENTS.md:
- Updated / No changes required

Reason:
- ...
```

Si no hubo cambio documental, escribirlo igual y decir por qué. `Reviewed` lista lo que se leyó para la auditoría, aunque no se haya editado.

### Validation

Comandos corridos y rutas revisadas. Si no se pudo correr alguno, decirlo.

### Risks / Notes

Discrepancias doc/código, follow-ups, y lo que quedó fuera a propósito.
