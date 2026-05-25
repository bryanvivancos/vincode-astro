import { useState } from 'react';
import toast from 'react-hot-toast';

const SERVICES = [
    'Setup & Arquitectura Web',
    'Landing Page - Pagina web',
    'Tarjeta de Presentación Digital',
    'Links in Bio',
    'Portfolio Profesional',
    'Página Web de Reservas',
    'VIN DISPLAY - Cartelería Digital',
    'Software a Medida',
    'Software Licenciado',
    'Otro'
];

    // 'E-commerce',
    // 'Punto de Venta',
    // 'VIN REST - Software para Restaurantes',

export default function SupportForm() {
    const [btnText, setBtnText] = useState("Enviar Solicitud");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);
        setBtnText("Enviando...");

        const form = event.currentTarget;
        const formData = new FormData(form);

        const data = {
            name: formData.get('name') as string,
            company: formData.get('company') as string,
            service: formData.get('service') as string,
            phone: formData.get('phone') as string,
            email: formData.get('email') as string,
            message: formData.get('message') as string,
        };

        try {
            const response = await fetch('/api/support', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok && result.success) {
                toast.success("¡Solicitud enviada exitosamente! Nuestro equipo de soporte se pondrá en contacto contigo pronto.", {
                    position: 'bottom-right',
                    duration: 5000,
                });
                form.reset();
            } else {
                toast.error(result.error || "Error al enviar la solicitud. Por favor, inténtalo de nuevo.", {
                    position: 'bottom-right',
                });
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error("Error al enviar la solicitud. Por favor, inténtalo de nuevo más tarde.", {
                position: 'bottom-right',
            });
        } finally {
            setIsSubmitting(false);
            setBtnText("Enviar Solicitud");
        }
    };

    return (
        <section className="section-spacing">
            <div className="section-container">
                
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <p className="text-sm font-semibold tracking-widest text-primary uppercase mb-4">
                        Soporte Técnico
                    </p>
                    <h2 className="sectionTitle font-bold text-text-primary mb-4">
                        ¿Necesitas Ayuda?
                    </h2>
                    <p className="text-sm md:text-lg text-text-secondary leading-relaxed">
                        Completa el formulario y nuestro equipo de soporte se pondrá en contacto contigo lo antes posible.
                    </p>
                </div>

                {/* GRID PRINCIPAL */}
                <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">

                    {/* FORM */}
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                        <div className="bg-primary px-6 py-5 text-center">
                            <h3 className="text-xl font-bold text-white uppercase tracking-wide">
                                Formulario de Soporte
                            </h3>
                        </div>

                        <form className="p-8 md:p-10 space-y-6" onSubmit={onSubmit}>
                            
                            {/* Nombre Completo */}
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-semibold text-text-primary">
                                    Nombre Completo <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="John Doe"
                                    className="w-full bg-gray-50 border border-gray-200 rounded-lg py-3 px-4 text-base text-text-primary outline-none transition-all duration-200 placeholder:text-gray-400 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/10"
                                    required
                                />
                            </div>

                            {/* Empresa */}
                            <div className="space-y-2">
                                <label htmlFor="company" className="text-sm font-semibold text-text-primary">
                                    Empresa <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    placeholder="Tu Empresa"
                                    className="w-full bg-gray-50 border border-gray-200 rounded-lg py-3 px-4 text-base text-text-primary outline-none transition-all duration-200 placeholder:text-gray-400 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/10"
                                    required
                                />
                            </div>

                            {/* Selector de Servicio */}
                            <div className="space-y-2">
                                <label htmlFor="service" className="text-sm font-semibold text-text-primary">
                                    Servicio <span className="text-red-500">*</span>
                                </label>
                                <select
                                    id="service"
                                    name="service"
                                    className="w-full bg-gray-50 border border-gray-200 rounded-lg py-3 px-4 text-base text-text-primary outline-none transition-all duration-200 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/10"
                                    required
                                >
                                    <option value="">Selecciona un servicio</option>
                                    {SERVICES.map((service) => (
                                        <option key={service} value={service}>
                                            {service}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Grid 2 columnas para teléfono y email */}
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-semibold text-text-primary">
                                        Teléfono <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        placeholder="+51 999 999 999"
                                        className="w-full bg-gray-50 border border-gray-200 rounded-lg py-3 px-4 text-base text-text-primary outline-none transition-all duration-200 placeholder:text-gray-400 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/10"
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-semibold text-text-primary">
                                        Correo Electrónico <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="john@mail.com"
                                        className="w-full bg-gray-50 border border-gray-200 rounded-lg py-3 px-4 text-base text-text-primary outline-none transition-all duration-200 placeholder:text-gray-400 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/10"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Mensaje */}
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-semibold text-text-primary">
                                    Mensaje <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Describe tu consulta o problema..."
                                    className="w-full bg-gray-50 border border-gray-200 rounded-lg py-3 px-4 text-base text-text-primary outline-none transition-all duration-200 placeholder:text-gray-400 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/10 min-h-32 resize-y"
                                    required
                                />
                            </div>

                            {/* NUEVO CAMPO */}
                            {/* <div className="space-y-2">
                                <label htmlFor="image" className="text-sm font-semibold text-text-primary">
                                    Imagen de soporte
                                </label>

                                <input
                                    type="file"
                                    id="image"
                                    name="image"
                                    accept="image/png,image/jpeg,image/webp"
                                    className="w-full bg-gray-50 border border-gray-200 rounded-lg py-3 px-4"
                                />

                                <p className="text-xs text-gray-500">
                                    Formatos permitidos: JPG, PNG, WEBP
                                </p>
                            </div> */}

                            {/* Nota */}
                            <div className="text-center">
                                <p className="text-xs text-gray-600">
                                    Tu solicitud será enviada a nuestro equipo de soporte. Te responderemos en un plazo de 24 horas.
                                </p>
                            </div>

                            {/* Botón Submit */}
                            <div className="pt-2">
                                <button
                                    type="submit"
                                    className={`
                                        w-full bg-primary text-white font-semibold rounded-lg py-4 text-base
                                        transition-all duration-200 flex items-center justify-center gap-2
                                        ${isSubmitting 
                                            ? "cursor-not-allowed opacity-70" 
                                            : "hover:bg-primary-hover hover:shadow-lg"}
                                    `}
                                    disabled={isSubmitting}
                                >
                                    <span>{btnText}</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 2L11 13"></path>
                                        <path d="M22 2L15 22L11 13L2 9L22 2Z"></path>
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* SIDEBAR */}
                    <div className="space-y-6">

                        {/* INFO CARD */}
                        <div className="relative rounded-2xl p-8 bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.37)] overflow-hidden">
                            <h3 className="text-xl font-semibold text-text-primary mb-6">
                                Información de Contacto
                            </h3>

                            <div className="space-y-5 text-text-secondary">
                                <p>
                                    <span className="block text-sm text-text-secondary/70">
                                        Email de Soporte
                                    </span>
                                    <a href="mailto:vincode.dev@gmail.com" className="text-text-primary font-medium">
                                        vincode.dev@gmail.com
                                    </a>
                                </p>

                                <p>
                                    <span className="block text-sm text-text-secondary/70">
                                        Horario de Atención
                                    </span>
                                    <span className="text-text-primary font-medium">
                                        24/7
                                    </span>
                                </p>

                                <p>
                                    <span className="block text-sm text-text-secondary/70">
                                        Tiempo de Respuesta
                                    </span>
                                    <span className="text-text-primary font-medium">
                                        24 horas como máximo
                                    </span>
                                </p>
                            </div>
                        </div>

                        {/* TIPS CARD */}
                        <div className="rounded-2xl p-8 bg-gray-900 border border-gray-800 shadow-xl">
                            <h3 className="text-xl font-bold text-white mb-5">
                                Consejos para una Respuesta Rápida
                            </h3>

                            <ul className="space-y-3 text-base font-medium text-gray-200">
                                <li>• Describe tu problema con detalle</li>
                                {/* <li>• Incluye capturas de pantalla si es posible</li> */}
                                <li>• Menciona el servicio específico</li>
                                <li>• Proporciona información de contacto válida</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
