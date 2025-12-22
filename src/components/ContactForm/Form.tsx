import { useState } from 'react';
import toast from 'react-hot-toast';

const FORM_ENDPOINT = "https://api.web3forms.com/submit";
const SUBJECT = "Nuevo mensaje desde la web";
const FORM_KEY = import.meta.env.PUBLIC_WEB3FORMS_KEY;

export default function Form() {

    const [btnText, setBtnText] = useState("Enviar");

    const onSubmit = async (event: any) => {
        event.preventDefault();
        setBtnText("Enviando...");

        const form = event.target;
        const formData = new FormData(form);

        formData.append("access_key", FORM_KEY);
        formData.append("subject", SUBJECT);


        try {
            const res = await fetch(FORM_ENDPOINT, {
            method: "POST",
            body: formData,
            });

            const data = await res.json();

            if (data.success) {
            toast.success("Mensaje enviado satisfactoriamente", {
                position: "bottom-right",
            });
            setBtnText("Enviar");
            form.reset();
            } 
        } catch (error) {
            console.error(error);
            toast.error("Error al enviar el mensaje.");
        }
    };

    return (

        <form className="flex flex-col gap-6 sm:gap-8 w-full md:max-w-lg" onSubmit={onSubmit}>
            <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-base font-normal text-text-primary">Nombre</label>
                <input
                type="text"
                id="name"
                name="name"
                placeholder="Tu nombre"
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
                placeholder="Tu correo"
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
                ${btnText !== "Enviar" ? "cursor-not-allowed opacity-50 pointer-events-none" : ""}
                `}>
                {btnText}
            </button>
        </form>
    );
}
