# Animación del widget demo

Recorrido automático del mockup de reservas del landing. Un puntero elige servicio, especialista, fecha y hora, pulsa Continuar y muestra la pantalla de confirmación del widget público. El ciclo se repite.

Implementación de referencia: `components/marketing/BookingWidgetMockup.tsx` en el repo de VINBOOK.

Portado en este sitio: `src/components/Landing/VinbookHeroMockup.tsx`, montado en la franja de `src/components/Landing/LandingHero.astro` con `client:visible`. El mockup conserva su tarjeta (dos columnas desde `md`, oculta bajo `md`, pills, calendario compacto y `Continuar →`). El recorrido, la altura reservada y la confirmación siguen este documento. No cambia el widget real de VINBOOK (`components/booking/BookingFlow.tsx`, ruta `/b/[slug]`).

La pantalla de confirmación usa las piezas del éxito del widget público (`¡Reserva confirmada!`), no el paso intermedio «Confirmar reserva» ni el formulario de datos del cliente. En el demo, Continuar salta directo a esa pantalla. El tamaño tipográfico es el de esta tarjeta, no el de `BookingFlow`.

---

## Estructura del widget

Archivo: `src/components/Landing/VinbookHeroMockup.tsx`. La franja lo monta en `LandingHero.astro` dentro de un contenedor `hidden md:flex`. Bajo `md` no se ve. Desde `md` la tarjeta va en dos columnas. El CTA de la franja sigue siendo `Empezar ahora` → `https://vinbook.vincode.dev`. El mockup no crea una reserva.

Envoltura, según la prop `compact` (la franja la pasa):

- `compact`: `max-w-sm md:max-w-md`
- sin `compact`: `max-w-lg lg:max-w-none`

La tarjeta (`ref` del alto y del puntero) es `relative flex flex-col overflow-hidden`, `rounded-2xl` y desde `md` `rounded-3xl`, borde `border-white/10`, fondo blanco. Es el sistema de coordenadas. El puntero es su último hijo y no se desmonta al abrir la confirmación.

Estado: `serviceId`, `specialistId`, `selectedDate`, `selectedSlot`, `confirmed`. El calendario se muestra solo si hay servicio y especialista. El título grande es el nombre del servicio, o `Estudio Vinbook` si no hay ninguno. El subtítulo no cambia: `Reservas online · demo`.

```text
tarjeta
├── confirmación          solo si confirmed; reemplaza la grilla
├── grilla md:grid-cols-2
│   ├── panel izquierdo
│   │   ├── isotipo V + ESTUDIO BARBER
│   │   ├── título del servicio
│   │   ├── servicios: Corte 45, Barba 30, Color 90
│   │   ├── especialistas: Ana R., Luis M.  (solo el nombre)
│   │   └── Vinbook v1.0 — Desarrollado por VINCODE
│   └── panel derecho  bg-gray-50/80
│       ├── Julio 2026 + flechas ‹ ›
│       ├── calendario de 35 celdas
│       ├── horarios
│       └── Continuar →
└── puntero
```

Panel izquierdo. Los servicios son pastillas `rounded-full` con `border-2` también cuando no están activas. El activo lleva `border-gray-900`; el resto, `border-gray-200`. `data-demo="service"` va solo en Corte.

Los especialistas van en una fila, `rounded-xl`, `border-2`, solo el texto del nombre. No hay círculo de foto: no hay imagen que poner. `data-demo="specialist"` va solo en Ana R. Sin servicio, la fila sigue montada con `invisible` y encima se lee `Elige un servicio primero`.

Panel derecho. `Julio 2026` siempre se ve. Las flechas `‹ ›` están en el flujo y pasan a `invisible` hasta que hay un servicio.

El calendario son 35 botones. El número es `índice - 1`. Se pinta si cae entre 1 y 31; si no, el botón queda vacío y `disabled`. No se muestran los días mudos 28, 29 y 30 del mes anterior. `data-demo="date"` va solo en el 18. Un día sin elegir no tiene anillo: la clase es `border-0`. El día elegido es un círculo `bg-blue-600` con el número en blanco. No añadir `border-solid` suelto a estos botones.

Horarios: `09:00 AM`, `10:30 AM`, `12:00 PM`, `02:00 PM`, `04:30 PM`, `06:00 PM`, en tres columnas, `rounded-lg`. El activo es fondo `bg-blue-600`. `data-demo="slot"` va solo en `12:00 PM`. Sin fecha, la grilla sigue montada con `invisible` y el aviso `Selecciona una fecha con disponibilidad` queda encima.

`Continuar →` existe desde que el calendario está montado. Está `disabled` hasta que hay fecha y hora. `data-demo="continue"`. Debajo: `Tu reserva se confirmará al instante.`

Sin servicio, el bloque del calendario (días, horas y Continuar) está `invisible` y se lee `Selecciona un servicio para continuar`. Con servicio y sin especialista, el mismo bloque sigue oculto y el aviso pasa a `Elige un especialista para ver fechas disponibles`.

Bordes de botón. `src/global.css` pone `button { border: none }`. Ese atajo deja el grosor en `medium` y el estilo en `none`. Una utilidad posterior `border-solid`, sin ancho, vuelve a pintar el anillo (el de las fechas). Los servicios, especialistas, horarios y Continuar que sí llevan borde declaran ancho (`border-2` o `border`) y `border-solid`. Las fechas declaran `border-0`.

Confirmación. Reemplaza la grilla, no la tarjeta. Círculo `size-14` `bg-blue-600` con check, título `¡Reserva confirmada!`, cuerpo `Enviamos los detalles a cliente@correo.com`, ubicación `Local Principal` y botón `Nueva reserva` (`rounded-xl`, el mismo azul que Continuar). `data-demo="confirmed"`.

---

## Qué se ve

Nada está elegido al empezar, pero la tarjeta ya mide la altura del calendario con horarios. Esos bloques no se desmontan: se ocultan con `visibility: hidden` (`invisible` en Tailwind) y el aviso va en un `absolute inset-0` encima. `getBoundingClientRect` sigue viendo los botones ocultos, así el puntero no depende de que el nodo acabe de montarse.

| Estado | Especialistas | Fechas | Horarios |
|--------|---------------|--------|----------|
| Sin servicio | Aviso «Elige un servicio primero». La lista ocupa el alto, oculta. | Aviso «Selecciona un servicio para continuar». El calendario ocupa el alto, oculto. Las flechas del mes también están ocultas. | Van dentro del calendario oculto. |
| Servicio, sin especialista | Lista visible. | Aviso «Elige un especialista para ver fechas disponibles». Flechas del mes visibles. | Siguen dentro del calendario oculto. |
| Especialista, sin fecha | Lista visible. | Calendario visible. | Aviso «Selecciona una fecha con disponibilidad». La grilla de horas ocupa el alto, oculta. Continuar sigue deshabilitado. |
| Fecha elegida | Lista visible. | Día marcado. | Horas visibles. Continuar se habilita al elegir una. |

Los bordes de servicio y especialista son `border-2` también cuando no están activos. Si el activo pasa de `border` a `border-2`, el alto cambia un par de píxeles.

`useLayoutEffect` escribe `min-height` con `offsetHeight` de esa tarjeta antes del primer paint, en cualquier ancho. No se borra al pulsar «Nueva reserva». La confirmación no encoge la caja.

Patrón de cada aviso. El contenido real queda en el flujo; el texto queda centrado encima:

```html
<div class="relative">
  <div class="invisible" aria-hidden="true">
    <!-- lista, calendario o grilla de horas, según el bloque -->
  </div>
  <p class="absolute inset-0 flex items-center justify-center text-center text-sm">
    Selecciona una fecha con disponibilidad
  </p>
</div>
```

Quitar `invisible` y el `<p>` cuando ese paso ya se cumplió. No sustituir el bloque por el párrafo: eso devuelve el salto de altura.

Recorrido fijo, en este orden:

| Paso | Objetivo | `data-demo` | Qué queda elegido |
|------|----------|-------------|-------------------|
| 1 | Servicio Corte, 45 min | `service` | `corte`. Se limpian especialista, fecha y hora |
| 2 | Especialista Ana R. | `specialist` | `ana`. Fecha y hora siguen vacías. El calendario, que ya ocupaba su alto, pasa a verse |
| 3 | Día 18 | `date` | `18`. La hora sigue vacía hasta el clic. Recién ahí se ven los horarios |
| 4 | 12:00 PM | `slot` | `12:00 PM`. Continuar deja de estar deshabilitado |
| 5 | Continuar | `continue` | Se oculta el puntero y entra la confirmación |
| 6 | Pausa | `confirmed` | Se sostiene la pantalla y el ciclo vuelve al paso 1 |

Al elegir un especialista no se rellenan fecha ni hora. Si se rellenan solas, el puntero no tiene un día ni una hora que seleccionar.

---

## Tiempos

Un solo temporizador por espera. No hay `requestAnimationFrame` continuo.

| Constante | ms | Uso |
|-----------|----|-----|
| `GAP_MS` | 520 | Pausa con el formulario vacío al empezar cada ciclo |
| `MOVE_MS` | 580 | Duración del `transform` del puntero |
| `SETTLE_MS` | 80 | El puntero ya llegó y aún no pulsa |
| espera del press | 70 | Mitad del scale de 150 ms; ahí se aplica la selección |
| `DWELL_MS` | 320 | La selección se queda visible antes del siguiente movimiento |
| `CONFIRM_MS` | 2800 | Tiempo con la pantalla de confirmación |
| reintento fuera de vista | 400 | El bucle duerme mientras la tarjeta no está en pantalla o la pestaña está oculta |

Curva del puntero:

```text
transform 580ms cubic-bezier(0.22, 0.61, 0.36, 1), opacity 140ms linear
```

El scale del clic dura 150 ms, `ease-out`, de `scale(1)` a `scale(0.96)` y otra vez a `scale(1)`. Se aplica al botón y al SVG del puntero con la Web Animations API. La confirmación entra con opacidad de 0 a 1 en 180 ms, `ease-out`. Con `prefers-reduced-motion: reduce` ese fundido no se ejecuta.

---

## Contrato del DOM

La tarjeta que contiene el mockup es el sistema de coordenadas. Tiene que ser `position: relative` y `overflow: hidden`. El puntero es el último hijo de esa tarjeta, para que siga montado cuando el formulario se reemplaza por la confirmación.

Atributos, uno por objetivo:

```html
<button type="button" data-demo="service">Corte 45 min</button>
<button type="button" data-demo="specialist">Ana R.</button>
<button type="button" data-demo="date">18</button>
<button type="button" data-demo="slot">12:00 PM</button>
<button type="button" data-demo="continue">Continuar →</button>
<div data-demo="confirmed">…pantalla de éxito…</div>
```

`date` va solo en el 18 del mes, no en una celda vacía de las 35. `slot` va solo en `12:00 PM`. `continue` existe en cuanto el calendario está montado; puede estar `disabled` hasta que haya fecha y hora. El puntero lo pulsa cuando ya está habilitado. El texto visible del botón es `Continuar →`.

El puntero:

```html
<div aria-hidden="true" class="pointer-events-none absolute left-0 top-0 z-30 opacity-0 will-change-transform">
  <svg width="20" height="20" viewBox="0 0 20 20">
    <path
      d="M1 1 L1 14.5 L4.8 11.3 L7.6 17.2 L10 16.1 L7.1 10.3 L12.2 10 Z"
      fill="#ffffff"
      stroke="#0c0f14"
      stroke-width="1.3"
      stroke-linejoin="round"
    />
  </svg>
</div>
```

La punta del path está en `(1, 1)`. No hace falta imagen ni filtro. El trazo oscuro se lee sobre blanco y el relleno blanco se lee sobre el botón azul.

---

## Cómo se mueve el puntero

La posición se escribe en `style.transform` como `translate3d(x, y, 0)`. No se animan `top` ni `left`.

`x` e `y` salen de `getBoundingClientRect` del botón menos el de la tarjeta, menos `clientLeft` / `clientTop` (el borde). El ancla dentro del botón es:

```text
x += min(ancho * 0.42, 36)
y += min(alto * 0.46, 20)
```

Los valores se redondean a píxeles.

Antes del primer movimiento de cada ciclo el puntero se coloca sin transición 28 px por encima del servicio, con opacidad 0. Hay que forzar reflow (`getBoundingClientRect`) antes de restaurar la transición. Si no, el navegador junta los dos `transform` y el puntero aparece ya encima del botón.

Cada clic:

1. Buscar el nodo. Sigue montado aunque esté `visibility: hidden`; reintentar hasta 10 frames solo si el query no lo encuentra.
2. Mover con transición y poner opacidad 1.
3. Esperar `MOVE_MS + SETTLE_MS`.
4. Lanzar el scale de 150 ms.
5. A los 70 ms, aplicar el estado de selección.
6. Esperar `DWELL_MS`.

Si en cualquier espera la tarjeta dejó de verse, la pestaña está oculta, el efecto se desmontó o el usuario pulsó un control, no se aplica el siguiente estado.

---

## Bucle, pausa y clic real

`IntersectionObserver` sobre la tarjeta, `threshold: 0.2`. `visible` empieza en `false`. El observer es quien lo pone en `true`. Si se arranca con «cualquier píxel visible», el primer ciclo corre con la tarjeta casi fuera de pantalla, fija una altura enorme y el usuario no ve el recorrido.

Mientras no hay intersección, o `document.hidden` es verdadero, el bucle solo espera 400 ms. No hace falta listener de `visibilitychange`: cada espera lee `document.hidden`.

Al salir de pantalla a mitad de ciclo se limpia la selección, se oculta el puntero y se espera a volver a entrar para empezar de cero.

Un clic en un control del mockup pone `halt = true`, oculta el puntero y el bucle termina. A partir de ahí el widget queda manual. «Nueva reserva» también para el recorrido y limpia la selección. El `min-height` se queda.

`prefers-reduced-motion: reduce`: no hay puntero ni bucle. El estado inicial pasa a ser Corte, Ana R., día 18 y 12:00 PM. Continuar sigue abriendo la confirmación si la persona pulsa.

Al desmontar: marcar el ciclo como cancelado, desconectar el observer y limpiar los `setTimeout`. Si se limpia un timeout sin resolver su promesa, el ciclo anterior queda colgado; en producción el efecto corre una vez.

---

## Confirmación

Mismas piezas que el éxito de `BookingFlow`: círculo azul con check, título, correo, ubicación y botón. En esta tarjeta el círculo es `size-14`, el título `text-2xl` y el botón `rounded-xl`.

Copy del demo:

- Título: `¡Reserva confirmada!`
- Cuerpo: `Enviamos los detalles a cliente@correo.com`
- Ubicación: `Local Principal`
- Botón: `Nueva reserva`

Desde el primer frame se guarda `min-height` de la tarjeta con la altura del calendario y los horarios ya montados, en cualquier ancho. Así el hero no salta ni al elegir especialista ni al abrir la confirmación. Si el panel de confirmación no cabe en el viewport, se hace `scrollIntoView({ block: 'center' })`. Con movimiento reducido, `behavior: 'auto'`.

El puntero baja a opacidad 0 al abrir la confirmación. Después de `CONFIRM_MS` el ciclo limpia todo y espera `GAP_MS` con el formulario vacío.

---

## Qué no copiar

- No usar una librería de motion. El widget público usa Motion para esta pantalla; el demo no.
- No animar altura, `box-shadow` ni `filter`.
- No dejar un `rAF` encendido entre ciclos.
- No desmontar especialistas, calendario u horarios para mostrar el aviso. Ocultarlos con `visibility: hidden` y superponer el texto.
- No preseleccionar fecha y hora al elegir especialista.
- No montar el formulario de cliente ni el resumen «Confirmar reserva» en este recorrido.
- No aplicar esta lógica al widget de `/b/[slug]`.
- No poner un círculo de foto en Ana R. ni en Luis M.
- No poner `border-solid` sin ancho en los días. El anillo negro sale de ahí. El círculo azul es solo `bg-blue-600` en el día elegido.

---

## Checklist al portarlo

1. El mockup arranca sin nada elegido y con la altura final. Especialistas, calendario y horarios están montados y ocultos, con su aviso encima.
2. Sin servicio se leen «Elige un servicio primero» y «Selecciona un servicio para continuar». Con servicio y sin especialista, «Elige un especialista para ver fechas disponibles». Con especialista y sin fecha, «Selecciona una fecha con disponibilidad».
3. Existen los seis `data-demo` y el puntero es hijo de la tarjeta, no del bloque que se desmonta.
4. El puntero entra desde arriba del servicio, pulsa Corte, Ana R., 18, 12:00 PM y Continuar. La altura no cambia entre esos pasos.
5. La confirmación muestra el check, el título, el correo, la ubicación y Nueva reserva, dentro de la misma altura.
6. El ciclo se repite solo mientras la tarjeta está en pantalla.
7. Un clic real lo detiene.
8. Con `prefers-reduced-motion: reduce` se ve la selección completa y no hay puntero.
