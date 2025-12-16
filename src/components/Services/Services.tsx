import { services, SERVICES_SUBTITLE, SERVICES_TITLE } from '../../CONSTANTS';
// import styles from './Services.module.css';



export default function Services() {
  return (
    // <section  className="py-10 sm:py-12 md:py-15 place-items-center">
    <div id="services" className="max-w-[960px] py-10 sm:py-12 md:py-15">
      <h2 className="text-lg sm:text-xl font-bold leading-6 sm:leading-7 text-text-primary mb-6 sm:mb-8 md:mb-10">Nuestros Servicios</h2>

      <div className="flex flex-col gap-6 sm:gap-8 md:gap-10">
        <div className="flex flex-col gap-2 sm:gap-3">
          <h3 className="sectionTitle">{SERVICES_TITLE}</h3>
          <p className="text-sm sm:text-base font-medium leading-5 sm:leading-6 text-text-primary">
            {SERVICES_SUBTITLE}
          </p>
        </div>

        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-2 sm:gap-4">
          {services.map((service, index) => (
            <a
              href={service.page}
              key={index}
              className={`bg-background-card  border-border rounded-lg p-4 flex flex-col gap-3 transition-all transform duration-300 ease-in-out relative animate-slide-in-top ${service.available ? "hover:border-primary hover:-translate-y-1 border-1" : ""}`}
              onClick={service.available === false ? (e) => e.preventDefault() : undefined}
            >
              <service.icon width={24} height={24} color="#FFFFFF" />
              <div className="flex flex-col gap-1">
                <h4 className="text-base font-bold leading-5 text-text-primary">{service.title}</h4>
                <p className="text-sm font-medium leading-5 text-text-secondary">{service.description}</p>
              </div>

              {service.available === false && (
                <>
                  {/* Badge */}
                  <div className="p-1.5 rounded-lg absolute bg-[#0090c7] -top-1 -right-1 z-50">
                    <p className="text-xs font-semibold">PROXIMAMENTE</p>
                  </div>

                  {/* Overlay que sí bloquea clics */}
                  <div className="absolute top-0 left-0 w-full h-full bg-black/50 bg-opacity-50 z-40 pointer-events-auto rounded-lg" />
                </>
              )}
            </a>
          ))}
        </div>
      </div>
    </div>
    // </section >
  );
}
