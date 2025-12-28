
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
        <section className="py-10 sm:py-12 md:py-15 place-items-center mx-auto">
        <div className="max-w-240 flex items-center flex-col w-full gap-2 px-4 py-8">
            <h2 className="sectionTitle text-center">Contáctanos</h2>
            <p className='text-sm md:text-base'>Si tienes alguna pregunta o necesitas información sobre nuestros servicios, no dudes en contactarnos. Completa el formulario a continuación y te responderemos lo antes posible.</p>

            <form className="flex flex-col gap-6 sm:gap-8 w-full md:max-w-lg my-8" onSubmit={onSubmit}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-base font-normal text-text-primary">Nombre</label>
                    <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Tu nombre completo"
                    className=" bg-input-background border-none rounded-lg py-4 px-5 text-base font-normal text-text-primary outline-none transition-all duration-300 ease-in-out placeholder:text-text-secondary focus:bg-[#2a4a56]"
                    required
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-base font-normal text-text-primary">Correo</label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Tu correo electrónico"
                    className="bg-input-background border-none rounded-lg py-4 px-5 text-base font-normal text-text-primary outline-none transition-all duration-300 ease-in-out placeholder:text-text-secondary focus:bg-[#2a4a56]"
                    required
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-base font-normal text-text-primary">Mensaje</label>
                    <textarea
                    id="message"
                    name="message"
                    placeholder="Deja tu mensaje..."
                    className="bg-input-background border-none rounded-lg py-4 px-5 text-base font-normal text-text-primary outline-none transition-all duration-300 ease-in-out placeholder:text-text-secondary focus:bg-[#2a4a56] min-h-36 resize-y"
                    required
                    />
                </div>

                <button type="submit" 
                    className={`self-center py-3 px-6 bg-primary rounded-lg text-sm font-bold text-text-primary transition-all duration-300 ease-in-out transform hover:bg-[#0090c7] hover:-translate-y-0.5
                    ${btnText !== "Enviar" ? "cursor-not-allowed opacity-70 pointer-events-none" : ""}
                    `}>
                    {btnText}
                </button>
            </form>
                        
            <div className='flex flex-col gap-2 text-center'>
                <h3 className='text-xl text-primary font-extrabold mb-4'>Información de Contacto</h3>
                <p>Teléfono: {phone}</p>
                <p>Correo Electrónico: {email}</p>
            </div>

        </div>
        </section>
    );
}