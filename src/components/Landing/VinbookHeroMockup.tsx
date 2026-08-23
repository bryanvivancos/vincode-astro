type Props = {
  compact?: boolean;
};

export default function VinbookHeroMockup({ compact = false }: Props) {
  return (
    <div
      className={`relative mx-auto w-full min-w-0 ${
        compact ? "max-w-sm md:max-w-md" : "max-w-lg lg:max-w-none"
      }`}
      aria-hidden="true"
    >
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white shadow-2xl md:rounded-3xl">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Panel izquierdo — servicio */}
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
              Corte
            </h3>
            <p className="mt-1 text-xs text-gray-400">Reservas online · demo</p>

            <p className="mt-5 text-[10px] font-semibold uppercase tracking-wider text-gray-400">
              Seleccione el servicio
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              <span className="rounded-full border-2 border-gray-900 px-3 py-1.5 text-xs font-medium text-gray-900">
                Corte <span className="text-gray-400">45 min</span>
              </span>
              <span className="rounded-full border border-gray-200 px-3 py-1.5 text-xs text-gray-500">
                Barba <span className="text-gray-400">30 min</span>
              </span>
              <span className="rounded-full border border-gray-200 px-3 py-1.5 text-xs text-gray-500">
                Color <span className="text-gray-400">90 min</span>
              </span>
            </div>

            <p className="mt-5 text-[10px] font-semibold uppercase tracking-wider text-gray-400">
              Especialista
            </p>
            <div className="mt-2 flex gap-2">
              <span className="flex items-center gap-2 rounded-xl border-2 border-gray-900 px-3 py-2 text-xs font-medium">
                <span className="size-6 rounded-full bg-gray-100" />
                Ana R.
              </span>
              <span className="flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-2 text-xs text-gray-500">
                <span className="size-6 rounded-full bg-gray-100" />
                Luis M.
              </span>
            </div>

            <p className="mt-6 text-[10px] text-gray-400">
              Vinbook v1.0 — Desarrollado por{" "}
              <span className="font-semibold text-gray-600">VINCODE</span>
            </p>
          </div>

          {/* Panel derecho — calendario */}
          <div className="bg-gray-50/80 p-5 md:p-6">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm font-semibold text-gray-900">Julio 2026</p>
              <div className="flex gap-1 text-gray-300">
                <span className="text-xs">‹</span>
                <span className="text-xs">›</span>
              </div>
            </div>
            <div className="mb-1 grid grid-cols-7 gap-1 text-center text-[9px] font-medium text-gray-400">
              {["DOM", "LUN", "MAR", "MIÉ", "JUE", "VIE", "SÁB"].map((d) => (
                <span key={d}>{d}</span>
              ))}
            </div>
            <div className="mb-5 grid grid-cols-7 gap-1 text-center text-[10px] text-gray-400">
              {Array.from({ length: 35 }, (_, i) => {
                const day = i - 1;
                const isActive = day === 18;
                return (
                  <span
                    key={i}
                    className={`flex size-6 items-center justify-center rounded-full ${
                      isActive
                        ? "bg-blue-600 font-semibold text-white"
                        : day > 0 && day <= 31
                          ? "text-gray-600"
                          : "text-gray-300"
                    }`}
                  >
                    {day > 0 && day <= 31 ? day : ""}
                  </span>
                );
              })}
            </div>

            <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-gray-400">
              Horarios disponibles — 18 jul
            </p>
            <div className="grid grid-cols-3 gap-1.5">
              {["09:00 AM", "10:30 AM", "12:00 PM", "02:00 PM", "04:30 PM", "06:00 PM"].map(
                (time) => (
                  <span
                    key={time}
                    className={`rounded-lg border px-1 py-1.5 text-center text-[10px] ${
                      time === "12:00 PM"
                        ? "border-blue-600 bg-blue-600 font-medium text-white"
                        : "border-gray-200 bg-white text-gray-600"
                    }`}
                  >
                    {time}
                  </span>
                ),
              )}
            </div>
            <button
              type="button"
              className="mt-4 w-full rounded-xl bg-blue-600 py-2.5 text-xs font-semibold text-white"
              tabIndex={-1}
            >
              Continuar →
            </button>
            <p className="mt-2 text-center text-[10px] text-gray-400">
              Tu reserva se confirmará al instante.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
