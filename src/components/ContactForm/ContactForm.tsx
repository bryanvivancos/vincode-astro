
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
        <section className="section-spacing w-full flex justify-center">
        <div className="section-container flex items-center flex-col w-full gap-4">
            <div className="text-center max-w-2xl mb-6">
                <p className="text-sm sm:text-base font-semibold tracking-wider text-primary uppercase mb-3">Contacto</p>
                <h2 className="sectionTitle text-4xl md:text-5xl text-center">Contáctanos</h2>
                <p className='text-base md:text-lg text-text-secondary leading-relaxed'>Si tienes alguna pregunta o necesitas información sobre nuestros servicios, no dudes en contactarnos. Completa el formulario a continuación y te responderemos lo antes posible.</p>
            </div>

            <form className="flex flex-col gap-6 w-full md:max-w-xl my-6" onSubmit={onSubmit}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-semibold text-text-primary">Nombre</label>
                    <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Tu nombre completo"
                    className="bg-input-background border border-border rounded-xl py-4 px-5 text-base font-normal text-text-primary outline-none transition-all duration-300 ease-out placeholder:text-text-secondary/60 focus:border-primary focus:bg-[#2a4a56] focus:shadow-[0_0_0_3px_rgba(0,168,232,0.15)]"
                    required
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-semibold text-text-primary">Correo</label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Tu correo electrónico"
                    className="bg-input-background border border-border rounded-xl py-4 px-5 text-base font-normal text-text-primary outline-none transition-all duration-300 ease-out placeholder:text-text-secondary/60 focus:border-primary focus:bg-[#2a4a56] focus:shadow-[0_0_0_3px_rgba(0,168,232,0.15)]"
                    required
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm font-semibold text-text-primary">Mensaje</label>
                    <textarea
                    id="message"
                    name="message"
                    placeholder="Deja tu mensaje..."
                    className="bg-input-background border border-border rounded-xl py-4 px-5 text-base font-normal text-text-primary outline-none transition-all duration-300 ease-out placeholder:text-text-secondary/60 focus:border-primary focus:bg-[#2a4a56] focus:shadow-[0_0_0_3px_rgba(0,168,232,0.15)] min-h-40 resize-y"
                    required
                    />
                </div>

                <button type="submit" 
                    className={`btn-primary self-center mt-2
                    ${btnText !== "Enviar" ? "cursor-not-allowed opacity-70 pointer-events-none" : ""}
                    `}>
                    {btnText}
                </button>
            </form>
                        
            <div className="divider my-8"></div>
            
            <div className='flex flex-col gap-4 text-center'>
                <h3 className='text-xl text-primary font-bold'>Información de Contacto</h3>
                <div className="flex flex-col gap-2 text-text-secondary">
                    <p className="flex items-center justify-center gap-2">
                        <span className="font-semibold text-text-primary">Teléfono:</span> {phone}
                    </p>
                    <p className="flex items-center justify-center gap-2">
                        <span className="font-semibold text-text-primary">Correo:</span> {email}
                    </p>
                </div>
            </div>

        </div>
        </section>
    );
}