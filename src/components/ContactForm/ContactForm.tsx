
import { useState } from 'react';
import toast from 'react-hot-toast';
import { email, phone } from '../../CONSTANTS';

const FORM_ACCESS_KEY = import.meta.env.PUBLIC_WEB3FORMS_KEY;

export default function ContactForm() {

    const [btnText, setBtnText] = useState("Enviar");

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setBtnText("Enviando...");

        const form = event.currentTarget;
        const formData = new FormData(form);

        formData.append("access_key", FORM_ACCESS_KEY);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data: { success: boolean } = await response.json();
            // setResult(data.success ? "Success!" : "Error");
            // toast(data.success ? "Correo enviado" : "Error");
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
        }
    };

    return (
  <section className="section-spacing">
    <div className="section-container">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="text-sm font-semibold tracking-widest text-primary uppercase mb-4">Contacto</p>
        <h1 className="text-4xl md:text-5xl font-black text-text-primary mb-6">Contáctanos</h1>
        <p className="text-base md:text-lg text-text-secondary leading-relaxed">
          Si tienes alguna pregunta o necesitas información sobre nuestros servicios, no dudes en contactarnos.
        </p>
      </div>

      {/* GRID PRINCIPAL */}
      <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">

        {/* FORM */}
        <form className="bg-white rounded-2xl shadow-xl p-8 md:p-10 space-y-6 border border-gray-100" onSubmit={onSubmit}>
          
          {/* Grid 2 columnas para nombre y email */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-semibold text-text-primary">
                Nombre <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John"
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

          {/* Grid 2 columnas para teléfono y empresa */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-semibold text-text-primary">
                Teléfono
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="555-555-5555"
                className="w-full bg-gray-50 border border-gray-200 rounded-lg py-3 px-4 text-base text-text-primary outline-none transition-all duration-200 placeholder:text-gray-400 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/10"
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

        {/* SIDEBAR */}
        <div className="space-y-6">

          {/* CONTACT CARD */}
          {/* <div className="rounded-2xl p-8 bg-white/10 border border-white/10 backdrop-blur-xl shadow-xl"> */}
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