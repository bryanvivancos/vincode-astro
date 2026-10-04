# VINCODE Conversion UX Rules

Referencia oficial para landing, navegación, CTAs, pricing y formularios de [vincode.dev](https://www.vincode.dev).

Auditoría de origen: octubre 2026. El funnel descrito abajo es el que el sitio implementa a partir de esa fecha. El mapeo de servicios permitidos vive en `src/data/contactContext.ts`.

Historial fechado (agosto 2026 y notas posteriores, sin sustituir este documento): [HISTORY.md](./HISTORY.md).

## Objetivo principal

La conversión principal de VINCODE es una conversación comercial sobre un proyecto.

El visitante debe poder:

1. Contactar a VINCODE para hablar de su proyecto (conversión primaria).
2. Entrar al producto VINBOOK cuando su intención es reservas online (conversión de producto, separada).

Éxito de la primaria: el visitante llega a `/contacto`, deja su caso por WhatsApp o por correo, y VINCODE puede responder.

Éxito de VINBOOK: el visitante sale hacia `https://vinbook.vincode.dev` con un solo clic, sin pasar por el formulario de la agencia.

Camino más corto para quien ya quiere comprar un servicio de VINCODE:

```text
/  →  "Hablemos de tu proyecto"  →  /contacto  →  WhatsApp o correo
```

Camino más corto para VINBOOK:

```text
/  →  módulo VINBOOK  →  "Empezar ahora"  →  https://vinbook.vincode.dev
```

## Jerarquía de CTAs

Una sola acción ocupa el nivel primario en cada pantalla. Las demás bajan de peso visual.

### Primary

| Campo | Regla |
| --- | --- |
| Texto | `Hablemos de tu proyecto` |
| Destino | `/contacto` |
| Dónde | Header (desktop y mobile), hero, cierre de home, cierre de páginas comerciales |
| Resultado que el usuario debe anticipar | Una página para contar el proyecto y continuar por WhatsApp o por correo |

Variantes prohibidas para esa misma acción: `Empecemos`, `Empecemos Ahora`, `Contáctanos`, `Conversemos`, `Solicitar una reunión`, `Solicitar Cotización`, `Enviar`.

En `/contacto`, el botón de envío sí puede ser específico del canal:

- pestaña WhatsApp: `Continuar por WhatsApp`
- pestaña correo: `Enviar por correo`

### Secondary

Exploración. Nunca compite en color, tamaño o posición con la primaria.

| Texto | Destino | Uso |
| --- | --- | --- |
| `Ver proyectos` | `#proyectos` en `/`, o `/nuestros-proyectos` si el clic sale de la home | Prueba social |
| `Ver servicios` | `/servicios` | Catálogo |
| `Ver detalles` | `/servicios/{slug}` | Ficha de un servicio |
| `Ver precios` | `#precios` en `/`, o `#pricing` en la ficha | Solo si esa ancla existe en la página |

### Product

| Producto | Texto | Destino |
| --- | --- | --- |
| VINBOOK | Un solo texto en todo el sitio. Hoy el sitio dice `Empezar ahora`. Pasar a `Empezar gratis` solo cuando el alta de VINBOOK sea realmente gratis | `https://vinbook.vincode.dev` |
| VIN DISPLAY y otros productos de servicio | CTA de ficha de servicio, luego primaria o WhatsApp del paquete | `/servicios/sistema-carteleria-digital` y equivalentes en español |

VINBOOK no usa `/contacto`. Un lead de reservas que quiere el SaaS no debe llenar el formulario de la agencia.

### Paquetes con precio

El botón de un paquete con precio cierra por WhatsApp con el nombre del paquete ya escrito:

`Solicitar {nombre del paquete}` → `https://wa.me/51986966477?text=...`

Ese atajo es válido porque el visitante ya eligió una oferta. El texto `Solicitar` a secas no dice qué pasa después.

El paquete sin precio fijo (`Solución a medida`) usa la primaria y va a `/contacto`.

## Funnel principal

```text
Landing /
  ↓
Hero: qué hace VINCODE, para quién, CTA primaria
  ↓
Confianza: prueba (métricas y clientes)
  ↓
Problema que el visitante reconoce
  ↓
Solución enlazada a un servicio o a contacto
  ↓
Proyecto como evidencia (opcional)
  ↓
Cómo se trabaja (opcional)
  ↓
Qué se puede contratar / precio si ya compara
  ↓
CTA primaria
  ↓
/contacto
  ↓
WhatsApp (canal por defecto) o correo
  ↓
Conversación. No hay página de gracias hoy; el toast no sustituye un siguiente paso claro
```

Orden recomendado de la home:

1. Hero — promesa + primaria `Hablemos de tu proyecto` + secundaria `Ver proyectos`.
2. Confianza — números y, en cuanto existan, logos.
3. Problemas — cada problema con un siguiente paso (servicio o contacto).
4. Soluciones — cada bloque enlaza a servicios concretos.
5. Proyectos — casos con CTA de evidencia; el cierre de la sección sigue siendo secundaria.
6. Proceso — cómo se trabaja, con la primaria al final del bloque.
7. Servicios — tarjetas a `/servicios/{slug}`.
8. Clientes.
9. Precios — paquetes; WhatsApp con contexto, o `/contacto` si no hay precio.
10. Cierre — la misma primaria.

El módulo VINBOOK vive como bloque de producto, con estilo distinto y CTA de producto. No reemplaza el hero ni se coloca como segunda decisión antes de que el visitante entienda VINCODE.

## Funnel VINBOOK

```text
/  →  bloque VINBOOK (producto, no agencia)
  →  "Empezar ahora"  (o "Empezar gratis" si el alta lo es)
  →  https://vinbook.vincode.dev
  →  registro / onboarding del producto
```

Reglas:

- Un solo destino y un solo texto para VINBOOK en home, proyectos y footer.
- `Explorar VINBOOK` y `Empezar ahora` no pueden apuntar al mismo URL con intenciones distintas. Si ambos abren la app, usan el mismo texto.
- La ficha `/servicios/pagina-web-de-reservas` es un servicio a medida (desde S/ 1,099). No es el alta de VINBOOK. El copy de esa ficha debe decir que es una página de reservas hecha para el cliente, y ofrecer VINBOOK como alternativa de producto si aplica.
- No crear una página intermedia `/vinbook` en este sitio salvo que esa página cierre el alta. Hoy no existe y el atajo externo es el camino corto.

## Funnel servicios

```text
/  →  tarjeta o /servicios  →  /servicios/{slug}
  →  CTA primaria "Hablemos de tu proyecto"  →  /contacto
```

Atajo cuando la ficha ya muestra precio:

```text
/servicios/{slug}  →  "Solicitar {paquete}"  →  WhatsApp
```

La ficha responde tres cosas arriba del fold: qué es, para quién es, cuál es el siguiente paso. `Ver precios` solo aparece si la ficha renderiza `#pricing`.

## Funnel proyectos

```text
/  →  #proyectos o /nuestros-proyectos  →  caso
  →  CTA primaria  →  /contacto
```

Ver un caso externo (`Visitar el sitio`) es exploración. La página `/nuestros-proyectos` cierra con la primaria. Un caso no puede ser la última acción de esa página.

## Funnel pricing

```text
/  →  #precios
  →  paquete con precio  →  WhatsApp con el nombre del paquete
  →  solución a medida  →  /contacto
```

`#precios` debe poder alcanzarse desde la navegación secundaria (ancla), sin obligar a recorrer toda la home. No crear una página `/precios` intermedia.

## Reglas de navegación

- Cada página comercial tiene un CTA primario visible sin depender del menú: `/`, `/servicios`, `/servicios/{slug}`, `/nuestros-proyectos`, `/sobre-nosotros`.
- `/contacto` es el único destino interno de la primaria. `/contact` responde 301 hacia `/contacto` (`redirects` en `astro.config.mjs`). Los enlaces internos apuntan a `/contacto`.
- Las fichas viven en `/servicios/{slug}` en español. El caso VIN DISPLAY enlaza a `/servicios/sistema-carteleria-digital`, no a `/services/vin-display`.
- No agregar pasos antes de `/contacto`: quizzes, páginas “elige tu solución”, landings puente.
- No crear páginas intermedias sin una decisión comercial que el home no pueda resolver.
- El header muestra `Hablemos de tu proyecto` desde 640px (`sm`). Por debajo de ese ancho el mismo texto y el mismo destino están en el menú móvil (`MobileNav.tsx`). No hace falta un segundo botón en la barra.
- Nav principal: Servicios, Proyectos, Sobre nosotros, más el botón primario. VINBOOK puede ser un ítem de producto, visualmente aparte, hacia el bloque o hacia la app.
- Soporte (`/soporte`) permanece en el footer. Es postventa, no un CTA de venta.
- Los enlaces del footer de servicios cubren la oferta que se quiere vender, no los primeros cinco slugs alfabéticos.
- Un enlace externo (cliente, Instagram, caso) no sustituye el CTA de la página.
- Precios con ancla rota (`#pricing` sin sección) no se publican.

## Reglas de landing

Propósito de cada bloque:

| Sección | Pregunta que responde | CTA permitido |
| --- | --- | --- |
| Hero | Qué hace VINCODE y para quién, en una frase concreta | Primaria + `Ver proyectos` |
| VINBOOK | Producto de reservas, separado de la agencia | Solo CTA de producto |
| Confianza | Por qué creer | Ninguno, o primaria suave si el bloque queda largo |
| Problemas | Qué dolor resuelve | Primaria, o enlace al servicio de ese dolor |
| Soluciones | Qué se puede construir | Enlace a servicios del grupo |
| Proyectos | Prueba de trabajo | CTA del caso + `Ver todos los proyectos` |
| Proceso | Cómo se trabaja | Primaria al cierre |
| Servicios | Qué se contrata | `Ver detalles` + `Ver servicios` |
| Clientes | Quién ya confió | Ninguno que saque al usuario como única acción de la zona |
| Precios | Cuánto cuesta empezar | WhatsApp del paquete o primaria |
| Cierre | Siguiente paso | Primaria, el mismo texto del hero |

La promesa del hero tiene que nombrar el resultado de negocio (vender, reservar, operar) y el tipo de cliente. “Soluciones digitales” solo no alcanza.

Las métricas de confianza se sostienen con prueba visible (clientes, casos). Un número solo, antes de los casos, no cierra la objeción.

## Reglas de contacto y WhatsApp

`/contacto` continúa la frase del CTA. Título alineado con `Hablemos de tu proyecto`. El cuerpo pide el caso, no “cualquier consulta”.

Canal por defecto: WhatsApp, como enlace `<a href="https://wa.me/51986966477?text=...">` con el texto `Continuar por WhatsApp`. No usa `window.open` y no pide el formulario. Correo es la segunda pestaña, con el botón `Enviar por correo` y `POST /api/contact`.

Campos del correo: nombre, teléfono, empresa (opcional), mensaje y correo. No alargar el formulario.

`?servicio=` solo cambia el mensaje si el valor está en `src/data/contactContext.ts`. Cualquier otro valor se ignora y se usa el mensaje general: `Hola, quiero hablar sobre un proyecto para mi negocio.`

Placeholders en español, con ejemplo de negocio real.

No hay página de confirmación. Tras el correo, el mensaje de éxito dice qué sigue y en qué plazo. Tras WhatsApp, el usuario debe ver el hilo abierto con el texto ya armado.

### Datos de contacto

Una sola identidad. Footer, `/contacto`, `/soporte`, WhatsApp y el schema de la home leen `src/CONSTANTS.ts`. No hardcodear otro teléfono ni otro correo en la UI.

| Dato | Valor | Constante |
| --- | --- | --- |
| Teléfono visible | `+51 986966477` | `phone` |
| WhatsApp | `51986966477` → `https://wa.me/51986966477` | `WHATSAPP_NUMBER` |
| Correo visible y `mailto:` | `vincodedev@gmail.com` | `email` |

`ServiceSchema.astro` repite el teléfono como `+51-986-966-477`. Si cambia `phone`, hay que actualizar ese schema en el mismo cambio.

El teléfono del sidebar de `/contacto` sigue siendo texto, sin `tel:`.

Los formularios llegan a `vincodedev@gmail.com`. El remitente del envío sigue siendo `leads@notificaciones.vincode.dev` (contacto) y `soporte@notificaciones.vincode.dev` (soporte). Esas direcciones no se muestran al visitante.

## Reglas mobile

Mobile es un funnel propio.

- Desde 640px la primaria está en el header. Por debajo, está en el menú móvil, con el mismo texto y destino.
- El botón de header y los CTA de sección usan al menos el tamaño de `.btn-primary` (`py-3 px-7`) y ocupan el ancho útil en pantallas estrechas.
- WhatsApp es alcanzable sin scroll hasta el footer: header, `/contacto`, o un acceso fijo que no tape la primaria.
- El menú móvil incluye la primaria como última acción. Desde 640px el header también la muestra.
- Pricing con 3 o más paquetes usa carrusel (`PricingCardsLayout`). En mobile, el primer paquete visible y el nombre del paquete deben entenderse sin adivinar que hay más slides. Los dots y las flechas no sustituyen un precio legible.
- El mockup de VINBOOK puede ocultarse bajo `md`. El texto y el CTA de producto no.
- Formularios: una columna, teclado adecuado (`type="tel"`, `type="email"`), sin campos extra respecto a desktop.
- Ninguna página comercial termina en un bloque que solo enlace hacia fuera.

## Reglas de copy

El CTA dice la acción y el resultado.

| Intención | Texto |
| --- | --- |
| Hablar del proyecto | `Hablemos de tu proyecto` |
| Seguir por WhatsApp | `Continuar por WhatsApp` |
| Pedir un paquete ya visto | `Solicitar {paquete}` |
| Ver trabajo | `Ver proyectos` |
| Entrar a VINBOOK | Un solo texto de producto, coherente con si el alta es gratis o no |

Evitar `Enviar`, `Solicitar`, `Contáctanos` y `Empecemos` cuando el destino es empezar una conversación de proyecto.

## Regla para futuras modificaciones

Antes de modificar cualquier página comercial, componente de navegación, CTA, pricing o formulario, revisar este documento y verificar que el cambio mantenga o mejore el flujo de conversión.

Comprobar en concreto:

1. ¿La primaria sigue diciendo `Hablemos de tu proyecto` y sigue yendo a `/contacto`?
2. ¿VINBOOK sigue en un clic hacia la app, sin mezclarse con el formulario de la agencia?
3. ¿El cambio suma clics, una página intermedia o una decisión que el visitante no necesita?
4. ¿La página comercial sigue teniendo un siguiente paso visible, también en mobile?
5. ¿El texto del botón dice qué ocurre después del clic?

Si alguna respuesta empeora el funnel, el cambio no se publica así.

## Estado implementado (octubre 2026)

- Home (`src/pages/index.astro`): Hero → franja VINBOOK → confianza → problemas → soluciones → proyectos → proceso → servicios → clientes → precios → CTA final.
- Primaria `Hablemos de tu proyecto` → `/contacto` en hero, cierre, problemas, header (desde 640px), menú móvil, `/servicios`, fichas, `/sobre-nosotros`, `/nuestros-proyectos` y la tarjeta `Solución a medida`.
- Franja VINBOOK: `Empezar ahora` → `https://vinbook.vincode.dev`. El caso destacado sigue diciendo `Explorar VINBOOK` y abre el mismo dominio. Ese funnel no se modificó.
- Soluciones y proceso siguen sin enlaces propios.
- Fichas: primaria → `/contacto?servicio={slug}` vía `contactPath()`. `Ver precios` sigue apuntando a `#pricing`. Los paquetes dicen `Solicitar {nombre}` y abren WhatsApp.
- VIN DISPLAY en `CONSTANTS.projects` apunta a `/servicios/sistema-carteleria-digital`.
- `/contact` es un redirect 301 a `/contacto`. La página duplicada se eliminó.
- `/contacto`: pestaña WhatsApp abre `wa.me` con un `<a>`. Pestaña Email envía el formulario a `/api/contact`.
- No existe `/vinbook` ni página de confirmación.
- Siguen publicadas `/services`, `/projects` y `/about-us`. Sus CTAs de contacto apuntan a `/contacto`.
- Contacto público: teléfono `+51 986966477`, WhatsApp `51986966477`, correo `vincodedev@gmail.com`, definidos en `src/CONSTANTS.ts`. Footer, `/contacto` y `/soporte` usan esas constantes. El teléfono del sidebar no es un enlace `tel:`.
- 2026-10-04: `/politica-de-privacidad` y `/terminos-y-condiciones` están en el footer, junto al copyright. Son informativas. No llevan la primaria ni forman parte del funnel. Detalle en [HISTORY.md](./HISTORY.md).
