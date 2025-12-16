
import toast from 'react-hot-toast';
// import styles from './ContactForm.module.css';

const FORM_ACCESS_KEY = import.meta.env.VITE_FORM_ACCESS_KEY;

export default function ContactForm() {

  // const [result, setResult] = useState<string>("");
  // const [formData, setFormData] = useState<({
  //   name: '',
  //   email: '',
  //   message: '',
  // });

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

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
        toast.success("Correo enviado satisfactoriamente", {
          position: 'bottom-right',
        });
        form.reset();
      }
    } catch (error) {
      console.error(error);
      toast.error("Error");
    }
  };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log('Form submitted:', formData);
  //   setFormData({
  //   name: '',
  //   email: '',
  //   message: '',})
  // };

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  return (
    <section id="contact" className="py-10 sm:py-12 md:py-15 place-items-center">
      <div className="max-w-[960px] flex items-center flex-col w-full">
        <h2 className="sectionTitle text-center">Contáctanos</h2>

        <form className="flex flex-col gap-6 sm:gap-8 w-full md:max-w-lg" onSubmit={onSubmit}>
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-base font-normal text-text-primary">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Tu nombre"
              className=" bg-input-background border-none rounded-lg py-4 px-5 text-base font-normal text-text-primary outline-none transition-all duration-300 ease-in-out placeholder:text-text-secondary focus:bg-[#2a4a56]"
              // value={formData.name}
              // onChange={handleChange}
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
              // value={formData.email}
              // onChange={handleChange}
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
              // value={formData.message}
              // onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="self-center py-3 px-6 bg-primary rounded-lg text-sm font-bold text-text-primary transition-all duration-300 ease-in-out transform hover:bg-[#0090c7] hover:-translate-y-0.5">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}
