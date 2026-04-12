import { HERO_SUBTITLE, HERO_TITLE } from "../../CONSTANTS";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
            {/* Imagen de fondo aesthetic */}
            <div className="absolute inset-0">
                <img 
                    src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920&h=1080&fit=crop&q=80"
                    alt="Background"
                    className="w-full h-full object-cover"
                />
                {/* Overlay oscuro para contraste */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
            </div>
            
            {/* Contenido centrado con whitespace masivo */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-16 md:py-20">
                <div className="flex flex-col items-center text-center">
                    
                    {/* Badge minimalista */}
                    <div className="inline-flex items-center px-4 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-md mb-8">
                        <span className="text-xs font-semibold tracking-wider uppercase text-white">
                            Agencia de Desarrollo Digital
                        </span>
                    </div>

                    {/* Título MASIVO - Tipografía Brutalista */}
                    <h1 className="font-black leading-[0.9] tracking-[-0.04em] text-white mb-6">
                        <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                            {HERO_TITLE.split(' ')[0]}
                        </span>
                        <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-1">
                            {HERO_TITLE.split(' ').slice(1).join(' ')}
                        </span>
                    </h1>

                    {/* Subtítulo limpio y espaciado */}
                    <p className="text-base md:text-lg font-normal text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8">
                        {HERO_SUBTITLE}
                    </p>

                    {/* Botones con mucho espacio */}
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        <a
                            href="/services"
                            className="px-10 py-5 bg-primary text-white font-semibold rounded-full text-lg transition-all duration-200 hover:bg-primary-hover hover:scale-105 hover:shadow-xl"
                        >
                            Ver Servicios
                        </a>
                        <a
                            href="/projects"
                            className="px-10 py-5 border-2 border-white/30 text-white font-semibold rounded-full text-lg transition-all duration-200 hover:border-white hover:bg-white/10 hover:scale-105 backdrop-blur-sm"
                        >
                            Ver Proyectos
                        </a>
                    </div>

                    {/* Scroll indicator minimalista */}
                    <div className="flex flex-col items-center gap-2 animate-bounce opacity-60 mt-12">
                        <span className="text-xs font-medium text-white/70 uppercase tracking-wider">Scroll</span>
                        <svg className="w-5 h-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
}
