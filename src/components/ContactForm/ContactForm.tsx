
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
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="eyebrow">Contacto</p>
        <h1 className="sectionTitle mb-6">Contáctanos</h1>
        <p className="section-subtitle mx-auto">
          Si tienes alguna pregunta o necesitas información sobre nuestros servicios, no dudes en contactarnos.
        </p>
      </div>

      {/* GRID PRINCIPAL */}
      <div className="grid lg:grid-cols-3 gap-10 items-start">

        {/* FORM */}
        <form 
          onSubmit={onSubmit}
          className="lg:col-span-2 space-y-6"
        >
          {/* Nombre */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-text-primary">
              Nombre
            </label>
            <input
              type="text"
              name="name"
              placeholder="Tu nombre completo"
              required
              className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-5 text-text-primary placeholder:text-text-secondary/50 outline-none transition-all duration-300 focus:border-primary focus:bg-white/10 focus:ring-2 focus:ring-primary/20"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-text-primary">
              Correo
            </label>
            <input
              type="email"
              name="email"
              placeholder="Tu correo electrónico"
              required
              className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-5 text-text-primary placeholder:text-text-secondary/50 outline-none transition-all duration-300 focus:border-primary focus:bg-white/10 focus:ring-2 focus:ring-primary/20"
            />
          </div>

          {/* Mensaje */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-text-primary">
              Mensaje
            </label>
            <textarea
              name="message"
              placeholder="Cuéntanos sobre tu proyecto..."
              required
              className="w-full min-h-[160px] resize-none bg-white/5 border border-white/10 rounded-xl py-4 px-5 text-text-primary placeholder:text-text-secondary/50 outline-none transition-all duration-300 focus:border-primary focus:bg-white/10 focus:ring-2 focus:ring-primary/20"
            />
          </div>

          {/* BOTÓN */}
          <div className="pt-4">
            <button
              type="submit"
              className={`
                w-full btn-primary py-4 text-base
                transition-all duration-300 flex items-center justify-center gap-2
                ${btnText !== "Enviar" 
                  ? "cursor-not-allowed opacity-70 pointer-events-none" 
                  : "hover:scale-[1.02]"}
              `}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-send"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
              <span>{btnText}</span>
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
          <div className="rounded-2xl p-8 bg-gradient-to-br from-primary/30 to-primary/10 border border-primary/20 shadow-xl">
            <h3 className="text-lg font-semibold text-text-primary mb-4">
              ¿Por qué elegirnos?
            </h3>

            <ul className="space-y-2 text-sm text-text-secondary">
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