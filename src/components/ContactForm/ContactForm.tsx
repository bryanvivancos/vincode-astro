import { useState } from 'react';
import toast from 'react-hot-toast';
import { email, phone, WHATSAPP_NUMBER } from '../../CONSTANTS';

const FORM_ACCESS_KEY = import.meta.env.PUBLIC_WEB3FORMS_KEY;

export default function ContactForm() {

    const [btnText, setBtnText] = useState("Enviar");
    const [activeTab, setActiveTab] = useState<'whatsapp' | 'email'>('whatsapp');

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setBtnText("Enviando...");

        const form = event.currentTarget;
        const formData = new FormData(form);

        if (activeTab === 'whatsapp') {
            // Enviar por WhatsApp
            const name = formData.get('name') as string;
            const phoneValue = formData.get('phone') as string;
            const company = formData.get('company') as string || 'No especificada';
            const message = formData.get('message') as string;

            const whatsappMessage = `Hola soy ${name.trim()}, 
Teléfono: ${phoneValue.trim()}, 
Empresa: ${company.trim()}, 
${message.trim()}`;
            const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;
            
            window.open(whatsappUrl, '_blank');
            toast.success("Redirigiendo a WhatsApp...", {
                position: 'bottom-right',
            });
            setBtnText("Enviar");
            form.reset();
        } else {
            // Enviar por Email (Web3Forms)
            formData.append("access_key", FORM_ACCESS_KEY);

            try {
                const response = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    body: formData,
                });

                const data: { success: boolean } = await response.json();
                if (data.success) {
                    toast.success("Mensaje enviado satisfactoriamente, pronto nos pondremos en contacto contigo", {
                    position: 'bottom-right',
                    });
                    setBtnText("Enviar");
                    form.reset();
                } else {
                    toast.error("Error al enviar el mensaje, inténtelo más tarde", {
                    position: 'bottom-right',
                    });
                    setBtnText("Enviar");
                }
            } catch (error) {
                toast.error("Error al enviar el mensaje, inténtelo más tarde");
                setBtnText("Enviar");
            }
        }
    };

    return (
  <section className="section-spacing">
    <div className="section-container max-md:!px-2">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="text-sm font-semibold tracking-widest text-primary uppercase mb-4">Contacto</p>
        <h2 className="sectionTitle font-bold text-text-primary mb-4">Contáctanos</h2>
        <p className="text-sm md:text-lg text-text-secondary leading-relaxed">
          Si tienes alguna pregunta o necesitas información sobre nuestros servicios, no dudes en contactarnos.
        </p>
      </div>

      {/* GRID PRINCIPAL */}
      <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">

        {/* FORM */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          {/* Pestañas WhatsApp / Email */}
          <div className="flex border-b border-gray-200">
            <button
              type="button"
              onClick={() => setActiveTab('whatsapp')}
              className={`w-full flex-1 py-4 px-6 text-sm font-semibold transition-all duration-200 ${
                activeTab === 'whatsapp'
                  ? 'bg-primary text-white border-b-2 border-primary'
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp
              </div>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('email')}
              className={`w-full flex-1 py-4 px-6 text-sm font-semibold transition-all duration-200 ${
                activeTab === 'email'
                  ? 'bg-primary text-white border-b-2 border-primary'
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                Email
              </div>
            </button>
          </div>

          <form className="py-8 px-4 md:px-8 md:py-10 space-y-6" onSubmit={onSubmit}>
          
          {/* Grid 2 columnas para nombre y email */}
          <div className="flex flex-col gap-6">
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

            {
              activeTab === 'email' && (
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
              )
            }
            
          </div>

          {/* Grid 2 columnas para teléfono y empresa */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-semibold text-text-primary">
                Teléfono <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="555-555-5555"
                className="w-full bg-gray-50 border border-gray-200 rounded-lg py-3 px-4 text-base text-text-primary outline-none transition-all duration-200 placeholder:text-gray-400 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/10"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="company" className="text-sm font-semibold text-text-primary">
                Empresa
              </label>
              <input
                type="text"
                id="company"
                name="company"
                placeholder="Tu Empresa"
                className="w-full bg-gray-50 border border-gray-200 rounded-lg py-3 px-4 text-base text-text-primary outline-none transition-all duration-200 placeholder:text-gray-400 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/10"
              />
            </div>
          </div>

          {/* Mensaje full width */}
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-semibold text-text-primary">
              Mensaje del Proyecto <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Cuéntanos sobre tu proyecto..."
              className="w-full bg-gray-50 border border-gray-200 rounded-lg py-3 px-4 text-base text-text-primary outline-none transition-all duration-200 placeholder:text-gray-400 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/10 min-h-32 resize-y"
              required
            />
          </div>

          {/* Nota sobre método de envío */}
          <div className="text-center">
            <p className="text-xs text-gray-600">
              {activeTab === 'whatsapp' 
                ? ' Te redirigiremos a WhatsApp para terminar de envíar el mensaje.' 
                : ' El mensaje será enviado vía Correo Electrónico.'}
            </p>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className={`
                w-full bg-primary text-white font-semibold rounded-lg py-4 text-base
                transition-all duration-200 flex items-center justify-center gap-2
                ${btnText !== "Enviar" 
                  ? "cursor-not-allowed opacity-70" 
                  : "hover:bg-primary-hover hover:shadow-lg"}
              `}
              disabled={btnText !== "Enviar"}
            >
              <span>{btnText}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13"></path><path d="M22 2L15 22L11 13L2 9L22 2Z"></path></svg>
            </button>
          </div>
        </form>
        </div>

        {/* SIDEBAR */}
        <div className="space-y-6">

          {/* CONTACT CARD */}
          <div className="
            relative rounded-2xl p-8
            bg-white/5
            backdrop-blur-2xl
            border border-white/10
            shadow-[0_8px_32px_rgba(0,0,0,0.37)]
            overflow-hidden
          ">

            <h3 className="text-xl font-semibold text-text-primary mb-6">
              Información de Contacto
            </h3>

            <div className="space-y-5 text-text-secondary">
              <p>
                <span className="block text-sm text-text-secondary/70">
                  Teléfono
                </span>
                <span className="text-text-primary font-medium">
                  {phone}
                </span>
              </p>

              <p>
                <span className="block text-sm text-text-secondary/70">
                  Instagram
                </span>
                <a href="https://www.instagram.com/vincodedev/" target="_blank" rel="noopener noreferrer" className="text-text-primary font-medium">
                  @vincodedev
                </a>
              </p>

              <p>
                <div className="block text-sm text-text-secondary/70">
                  Correo
                </div>
                <a href={`mailto:${email}`} className="text-text-primary font-medium">
                  {email}
                </a>
              </p>
            </div>
          </div>

          {/* EXTRA CARD (tipo "Service Area") */}
          <div className="rounded-2xl p-8 bg-gray-900 border border-gray-800 shadow-xl">
            <h3 className="text-xl font-bold text-white mb-5">
              ¿Por qué elegirnos?
            </h3>

            <ul className="space-y-3 text-base font-medium text-gray-200">
              <li>• Desarrollo moderno y optimizado</li>
              <li>• Enfoque en rendimiento y SEO</li>
              <li>• Experiencia UI/UX premium</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  </section>
);
}