// import styles from './Hero.module.css';

// import { useNavigate } from "react-router-dom";
import { navigate } from "astro:transitions/client";
import { HERO_SUBTITLE, HERO_TITLE }  from "../../CONSTANTS";;


export default function Hero() {
  // const navigate = useNavigate()

  return (
    // <section className="mt-16 py-6 sm:py-9 px-0 place-items-center">
    <div className="mt-16 md:mt-16 w-full sectionContainer animate-slide-in-top">
      {/* <div className="relative overflow-hidden min-h-[300px] sm:min-h-[400px] md:h-[480px] flex flex-col items-center justify-center bg-[linear-gradient(90deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.6)_100%),url('/hero-bg-00.webp')] bg-cover bg-center bg-no-repeat"> */}

      <div className="relative overflow-hidden min-h-75 sm:min-h-100 md:h-120 flex flex-col items-center justify-center w-full">
  
        <img 
          src="/hero-bg-00.webp" 
          alt="Descripción de la imagen"
          fetchPriority="high"
          loading="eager"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.6)_100%)] -z-10"></div>

        <div className="flex flex-col items-center gap-2 sm:gap-3 text-center px-4 sm:px-8 md:px-12 py-12 sm:py-16 max-w-200 w-full">
          <h1 className="font-extrabold leading-tight sm:leading-10 md:leading-15 tracking-[-1px] sm:tracking-[-2px] text-text-primary text-3xl md:text-5xl">
            {HERO_TITLE}
          </h1>
          <p className="text-sm sm:text-base md:text-lg font-medium text-text-primary mb-4 sm:mb-6 md:mb-8">
            {HERO_SUBTITLE}
          </p>
          <a className="py-2.5 sm:py-3 px-5 sm:px-6 bg-primary rounded-lg text-sm sm:text-base font-bold text-text-primary transition-all duration-300 ease-in-out transform hover:bg-[#0090c7] hover:-translate-y-0.5" href="/services">Ver Servicios</a>
        </div>
      </div>
    </div>
    // </section>
  );
}
