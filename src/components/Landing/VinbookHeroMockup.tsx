import { useLayoutEffect, useRef, useState } from "react";

const SERVICES = [
  { id: "corte", name: "Corte", duration: 45 },
  { id: "barba", name: "Barba", duration: 30 },
  { id: "color", name: "Color", duration: 90 },
] as const;

const SPECIALISTS = [
  { id: "ana", name: "Ana R." },
  { id: "luis", name: "Luis M." },
] as const;

const WEEKDAYS = ["DOM", "LUN", "MAR", "MIÉ", "JUE", "VIE", "SÁB"];

const SLOTS = ["09:00 AM", "10:30 AM", "12:00 PM", "02:00 PM", "04:30 PM", "06:00 PM"];

const DEMO_SERVICE = "corte";
const DEMO_SPECIALIST = "ana";
const DEMO_DATE = 18;
const DEMO_SLOT = "12:00 PM";
const DEMO_EMAIL = "cliente@correo.com";

const MOVE_MS = 580;
const SETTLE_MS = 80;
const DWELL_MS = 320;
const CONFIRM_MS = 2800;
const GAP_MS = 520;
const CURSOR_EASE = `transform ${MOVE_MS}ms cubic-bezier(0.22, 0.61, 0.36, 1), opacity 140ms linear`;

type TourStatus = "ok" | "halt" | "hidden" | "retry";

type Props = {
  compact?: boolean;
};

function sleep(ms: number, timers: Set<number>) {
  return new Promise<void>((resolve) => {
    const id = window.setTimeout(() => {
      timers.delete(id);
      resolve();
    }, ms);
    timers.add(id);
  });
}

function nextFrame() {
  return new Promise<void>((resolve) => {
    requestAnimationFrame(() => resolve());
  });
}

export default function VinbookHeroMockup({ compact = false }: Props) {
  const [serviceId, setServiceId] = useState<string | null>(null);
  const [specialistId, setSpecialistId] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);

  const cardRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const haltRef = useRef(false);

  const service = SERVICES.find((item) => item.id === serviceId) ?? null;
  const showCalendar = Boolean(serviceId && specialistId);

  function stopTour() {
    haltRef.current = true;
    if (cursorRef.current) cursorRef.current.style.opacity = "0";
  }

  function lockCardHeight() {
    const card = cardRef.current;
    if (!card || card.style.minHeight || card.offsetHeight <= 0) return;
    card.style.minHeight = `${card.offsetHeight}px`;
  }

  function openConfirmation() {
    lockCardHeight();
    if (cursorRef.current) cursorRef.current.style.opacity = "0";
    setConfirmed(true);
    requestAnimationFrame(() => {
      const panel = cardRef.current?.querySelector<HTMLElement>('[data-demo="confirmed"]');
      if (!panel) return;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (!reduce) {
        panel.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 180, easing: "ease-out" });
      }
      const box = panel.getBoundingClientRect();
      if (box.top < 0 || box.bottom > window.innerHeight) {
        panel.scrollIntoView({ block: "center", behavior: reduce ? "auto" : "smooth" });
      }
    });
  }

  function resetBooking() {
    stopTour();
    setConfirmed(false);
    setServiceId(null);
    setSpecialistId(null);
    setSelectedDate(null);
    setSelectedSlot(null);
  }

  useLayoutEffect(() => {
    const card = cardRef.current;
    const cursor = cursorRef.current;
    if (!card || !cursor) return;

    if (!card.style.minHeight && card.offsetHeight > 0) {
      card.style.minHeight = `${card.offsetHeight}px`;
    }

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setServiceId(DEMO_SERVICE);
      setSpecialistId(DEMO_SPECIALIST);
      setSelectedDate(DEMO_DATE);
      setSelectedSlot(DEMO_SLOT);
      return;
    }

    let cancelled = false;
    let visible = false;
    const timers = new Set<number>();

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
      },
      { threshold: 0.2 },
    );
    observer.observe(card);
    cursor.style.transition = CURSOR_EASE;

    const wait = async (ms: number): Promise<TourStatus> => {
      await sleep(ms, timers);
      if (cancelled || haltRef.current) return "halt";
      if (!visible || document.hidden) return "hidden";
      return "ok";
    };

    const findEl = async (selector: string) => {
      for (let i = 0; i < 10; i++) {
        const el = card.querySelector<HTMLElement>(selector);
        if (el) return el;
        await nextFrame();
        if (cancelled || haltRef.current) return null;
      }
      return null;
    };

    const moveCursor = (el: HTMLElement, animate: boolean) => {
      const cardBox = card.getBoundingClientRect();
      const box = el.getBoundingClientRect();
      const x = Math.round(
        box.left - cardBox.left - card.clientLeft + Math.min(box.width * 0.42, 36),
      );
      const y = Math.round(
        box.top - cardBox.top - card.clientTop + Math.min(box.height * 0.46, 20),
      );
      if (!animate) cursor.style.transition = "none";
      cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      if (!animate) {
        cursor.getBoundingClientRect();
        cursor.style.transition = CURSOR_EASE;
      }
    };

    const press = (el: HTMLElement) => {
      const frames = [
        { transform: "scale(1)" },
        { transform: "scale(0.96)" },
        { transform: "scale(1)" },
      ];
      el.animate(frames, { duration: 150, easing: "ease-out" });
      cursor.querySelector("svg")?.animate(frames, { duration: 150, easing: "ease-out" });
    };

    const clickTarget = async (selector: string, select: () => void): Promise<TourStatus> => {
      const el = await findEl(selector);
      if (!el) return cancelled || haltRef.current ? "halt" : "retry";
      moveCursor(el, true);
      cursor.style.opacity = "1";
      let status = await wait(MOVE_MS + SETTLE_MS);
      if (status !== "ok") return status;
      press(el);
      status = await wait(70);
      if (status !== "ok") return status;
      select();
      return wait(DWELL_MS);
    };

    const clearBooking = () => {
      cursor.style.opacity = "0";
      setConfirmed(false);
      setServiceId(null);
      setSpecialistId(null);
      setSelectedDate(null);
      setSelectedSlot(null);
    };

    const playOnce = async (): Promise<TourStatus> => {
      clearBooking();
      let status = await wait(GAP_MS);
      if (status !== "ok") return status;

      const serviceEl = await findEl('[data-demo="service"]');
      if (!serviceEl) return "retry";
      const cardBox = card.getBoundingClientRect();
      const box = serviceEl.getBoundingClientRect();
      const approachX = Math.round(box.left - cardBox.left - card.clientLeft + 8);
      const approachY = Math.round(box.top - cardBox.top - card.clientTop - 28);
      cursor.style.opacity = "0";
      cursor.style.transition = "none";
      cursor.style.transform = `translate3d(${approachX}px, ${approachY}px, 0)`;
      cursor.getBoundingClientRect();
      cursor.style.transition = CURSOR_EASE;

      status = await clickTarget('[data-demo="service"]', () => {
        setServiceId(DEMO_SERVICE);
        setSpecialistId(null);
        setSelectedDate(null);
        setSelectedSlot(null);
      });
      if (status !== "ok") return status;

      status = await clickTarget('[data-demo="specialist"]', () => {
        setSpecialistId(DEMO_SPECIALIST);
        setSelectedDate(null);
        setSelectedSlot(null);
      });
      if (status !== "ok") return status;

      status = await clickTarget('[data-demo="date"]', () => {
        setSelectedDate(DEMO_DATE);
        setSelectedSlot(null);
      });
      if (status !== "ok") return status;

      status = await clickTarget('[data-demo="slot"]', () => {
        setSelectedSlot(DEMO_SLOT);
      });
      if (status !== "ok") return status;

      status = await clickTarget('[data-demo="continue"]', () => {
        openConfirmation();
      });
      if (status !== "ok") return status;

      return wait(CONFIRM_MS);
    };

    const loop = async () => {
      while (!cancelled && !haltRef.current) {
        if (!visible || document.hidden) {
          await sleep(400, timers);
          continue;
        }
        const status = await playOnce();
        if (cancelled || haltRef.current || status === "halt") break;
        if (status === "hidden") clearBooking();
      }
    };

    void loop();

    return () => {
      cancelled = true;
      observer.disconnect();
      timers.forEach((id) => window.clearTimeout(id));
    };
  }, []);

  return (
    <div
      className={`relative mx-auto w-full min-w-0 ${
        compact ? "max-w-sm md:max-w-md" : "max-w-lg lg:max-w-none"
      }`}
    >
      <div
        ref={cardRef}
        className="relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white shadow-2xl md:rounded-3xl"
      >
        {confirmed ? (
          <div
            data-demo="confirmed"
            className="flex w-full flex-1 flex-col items-center justify-center bg-white px-6 py-8 text-center"
          >
            <div className="mb-4 flex size-14 items-center justify-center rounded-full bg-blue-600 text-white">
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>
            <h3 className="font-serif text-2xl font-bold text-gray-900">¡Reserva confirmada!</h3>
            <p className="mt-2 max-w-xs text-sm text-gray-500">
              Enviamos los detalles a {DEMO_EMAIL}
            </p>
            <p className="mt-4 flex items-center justify-center gap-1.5 text-xs text-gray-500">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="text-blue-600"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Local Principal
            </p>
            <button
              type="button"
              onClick={resetBooking}
              className="mt-6 w-full max-w-xs rounded-xl border-solid bg-blue-600 py-2.5 text-xs font-semibold text-white"
            >
              Nueva reserva
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="border-b border-gray-100 p-5 md:border-b-0 md:border-r md:p-6">
              <div className="mb-4 flex items-center gap-2">
                <span className="flex size-7 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                  V
                </span>
                <span className="text-xs font-semibold tracking-wide text-blue-600">
                  ESTUDIO BARBER
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 md:text-3xl">
                {service?.name ?? "Estudio Vinbook"}
              </h3>
              <p className="mt-1 text-xs text-gray-400">Reservas online · demo</p>

              <p className="mt-5 text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                Seleccione el servicio
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {SERVICES.map((item) => {
                  const active = serviceId === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      data-demo={item.id === DEMO_SERVICE ? "service" : undefined}
                      onClick={() => {
                        stopTour();
                        setServiceId(item.id);
                        setSpecialistId(null);
                        setSelectedDate(null);
                        setSelectedSlot(null);
                      }}
                      className={`rounded-full border-2 border-solid px-3 py-1.5 text-xs ${
                        active
                          ? "border-gray-900 font-medium text-gray-900"
                          : "border-gray-200 text-gray-500"
                      }`}
                    >
                      {item.name} <span className="text-gray-400">{item.duration} min</span>
                    </button>
                  );
                })}
              </div>

              <p className="mt-5 text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                Especialista
              </p>
              <div className="relative mt-2">
                <div className={serviceId ? undefined : "invisible"} aria-hidden={serviceId ? undefined : true}>
                  <div className="flex gap-2">
                    {SPECIALISTS.map((specialist) => {
                      const active = specialistId === specialist.id;
                      return (
                        <button
                          key={specialist.id}
                          type="button"
                          data-demo={specialist.id === DEMO_SPECIALIST ? "specialist" : undefined}
                          onClick={() => {
                            stopTour();
                            setSpecialistId(specialist.id);
                            setSelectedDate(null);
                            setSelectedSlot(null);
                          }}
                          className={`rounded-xl border-2 border-solid px-3 py-2 text-xs ${
                            active
                              ? "border-gray-900 font-medium text-gray-900"
                              : "border-gray-200 text-gray-500"
                          }`}
                        >
                          {specialist.name}
                        </button>
                      );
                    })}
                  </div>
                </div>
                {!serviceId && (
                  <p className="absolute inset-0 flex items-center text-xs text-gray-400">
                    Elige un servicio primero
                  </p>
                )}
              </div>

              <p className="mt-6 text-[10px] text-gray-400">
                Vinbook v1.0 — Desarrollado por{" "}
                <span className="font-semibold text-gray-600">VINCODE</span>
              </p>
            </div>

            <div className="bg-gray-50/80 p-5 md:p-6">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-sm font-semibold text-gray-900">Julio 2026</p>
                <div
                  className={`flex gap-1 text-gray-300 ${serviceId ? "" : "invisible"}`}
                  aria-hidden={serviceId ? undefined : true}
                >
                  <span className="text-xs">‹</span>
                  <span className="text-xs">›</span>
                </div>
              </div>

              <div className="relative">
                <div className={showCalendar ? undefined : "invisible"} aria-hidden={showCalendar ? undefined : true}>
                  <div className="mb-1 grid grid-cols-7 gap-1 text-center text-[9px] font-medium text-gray-400">
                    {WEEKDAYS.map((day) => (
                      <span key={day}>{day}</span>
                    ))}
                  </div>
                  <div className="mb-5 grid grid-cols-7 gap-1 text-center text-[10px] text-gray-400">
                    {Array.from({ length: 35 }, (_, index) => {
                      const day = index - 1;
                      const inMonth = day > 0 && day <= 31;
                      const selected = inMonth && day === selectedDate;
                      return (
                        <button
                          key={index}
                          type="button"
                          disabled={!inMonth}
                          data-demo={inMonth && day === DEMO_DATE ? "date" : undefined}
                          onClick={() => {
                            if (!inMonth) return;
                            stopTour();
                            setSelectedDate(day);
                            setSelectedSlot(null);
                          }}
                          className={`flex size-6 items-center justify-center rounded-full border-0 text-[10px] ${
                            selected
                              ? "bg-blue-600 font-semibold text-white"
                              : inMonth
                                ? "text-gray-600"
                                : "cursor-default text-gray-300"
                          }`}
                        >
                          {inMonth ? day : ""}
                        </button>
                      );
                    })}
                  </div>

                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                    Horarios disponibles{selectedDate ? ` — ${selectedDate} jul` : ""}
                  </p>
                  <div className="relative">
                    <div
                      className={selectedDate ? undefined : "invisible"}
                      aria-hidden={selectedDate ? undefined : true}
                    >
                      <div className="grid grid-cols-3 gap-1.5">
                        {SLOTS.map((slot) => {
                          const active = selectedSlot === slot;
                          return (
                            <button
                              key={slot}
                              type="button"
                              data-demo={slot === DEMO_SLOT ? "slot" : undefined}
                              onClick={() => {
                                stopTour();
                                setSelectedSlot(slot);
                              }}
                              className={`rounded-lg border border-solid px-1 py-1.5 text-center text-[10px] ${
                                active
                                  ? "border-blue-600 bg-blue-600 font-medium text-white"
                                  : "border-gray-200 bg-white text-gray-600"
                              }`}
                            >
                              {slot}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                    {!selectedDate && (
                      <p className="absolute inset-0 flex items-center justify-center px-2 text-center text-[10px] text-gray-400">
                        Selecciona una fecha con disponibilidad
                      </p>
                    )}
                  </div>

                  <button
                    type="button"
                    data-demo="continue"
                    disabled={!selectedDate || !selectedSlot}
                    onClick={() => {
                      if (!selectedDate || !selectedSlot) return;
                      stopTour();
                      openConfirmation();
                    }}
                    className="mt-4 w-full rounded-xl border-solid bg-blue-600 py-2.5 text-xs font-semibold text-white disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Continuar →
                  </button>
                  <p className="mt-2 text-center text-[10px] text-gray-400">
                    Tu reserva se confirmará al instante.
                  </p>
                </div>
                {!showCalendar && (
                  <p className="absolute inset-0 flex items-center justify-center px-4 text-center text-xs text-gray-400">
                    {!serviceId
                      ? "Selecciona un servicio para continuar"
                      : "Elige un especialista para ver fechas disponibles"}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        <div
          ref={cursorRef}
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 z-30 opacity-0 will-change-transform"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" className="block">
            <path
              d="M1 1 L1 14.5 L4.8 11.3 L7.6 17.2 L10 16.1 L7.1 10.3 L12.2 10 Z"
              fill="#ffffff"
              stroke="#0c0f14"
              strokeWidth="1.3"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
