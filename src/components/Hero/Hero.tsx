import { HERO_SUBTITLE, HERO_TITLE } from "../../CONSTANTS";
import { ChevronDownIcon } from "../icons";

export default function Hero() {
    return (
        <>
        <header className="sticky-parallax-hero">
            {/* Imagen */}
            <img
                src="/hero-bg-00.webp"
                alt="Hero background"
                fetchPriority="high"
                loading="eager"
                className="absolute inset-0 w-full h-full object-cover -z-10"
            />

            {/* Overlay oscuro */}
            <div className="absolute inset-0 bg-gradient-to-b from-background-dark/60 via-background-dark/70 to-background-dark -z-10" />

            {/* Contenido */}
            <div className="flex h-full flex-col items-center justify-center text-center px-6">
                <div className="section-container flex flex-col items-center">
                    {/* Badge/Pill */}
                    <div className="badge badge-primary mb-8">
                        Agencia de Desarrollo Digital
                    </div>

                    {/* H1 */}
                    <h1 className="font-extrabold leading-[1.1] tracking-[-2px] text-text-primary text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl">
                        {HERO_TITLE}
                    </h1>

                    {/* Subtítulo */}
                    <p className="mt-6 text-base md:text-lg font-normal text-text-secondary max-w-xl leading-relaxed">
                        {HERO_SUBTITLE}
                    </p>

                    {/* Botones duales */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 mt-10">
                        <a
                            href="/services"
                            className="btn-primary text-base"
                        >
                            Ver Servicios
                        </a>
                        <a
                            href="/projects"
                            className="btn-secondary text-base"
                        >
                            Ver Proyectos
                        </a>
                    </div>
                </div>
            </div>

        </header>
            
        <ChevronDownIcon width={28} height={28} className="absolute bottom-10 left-1/2 -translate-x-1/2 z-50 animate-bounce text-white/50"/>

        </>

        // // <section className="mt-16 py-6 sm:py-9 px-0 place-items-center">
        // <div className="mt-16 md:mt-16 w-full sectionContainer animate-slide-in-top">
        //   {/* <div className="relative overflow-hidden min-h-[300px] sm:min-h-[400px] md:h-[480px] flex flex-col items-center justify-center bg-[linear-gradient(90deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.6)_100%),url('/hero-bg-00.webp')] bg-cover bg-center bg-no-repeat"> */}

        //   <div className="relative overflow-hidden min-h-75 sm:min-h-100 md:h-120 flex flex-col items-center justify-center w-full">

        //     <img
        //       src="/hero-bg-00.webp"
        //       alt="Descripción de la imagen"
        //       fetchPriority="high"
        //       loading="eager"
        //       className="absolute inset-0 w-full h-full object-cover -z-10"
        //     />

        //     <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.6)_100%)] -z-10"></div>

        //     <div className="flex flex-col items-center gap-2 sm:gap-3 text-center px-4 sm:px-8 md:px-12 py-12 sm:py-16 max-w-200 w-full">
        //       <h1 className="font-extrabold leading-tight sm:leading-10 md:leading-15 tracking-[-1px] sm:tracking-[-2px] text-text-primary text-3xl md:text-5xl">
        //         {HERO_TITLE}
        //       </h1>
        //       <p className="text-sm sm:text-base md:text-lg font-medium text-text-primary mb-4 sm:mb-6 md:mb-8">
        //         {HERO_SUBTITLE}
        //       </p>
        //       <a className="py-2.5 sm:py-3 px-5 sm:px-6 bg-primary rounded-lg text-sm sm:text-base font-bold text-text-primary transition-all duration-300 ease-in-out transform hover:bg-[#0090c7] hover:-translate-y-0.5" href="/services">Ver Servicios</a>
        //     </div>
        //   </div>
        // </div>
        // // </section>
    );
}
