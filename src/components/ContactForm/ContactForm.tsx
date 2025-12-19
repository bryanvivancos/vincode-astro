// import toast from 'react-hot-toast';

// export default function ContactForm() {

//   // const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//   //   event.preventDefault();

//   //   const form = event.currentTarget;
//   //   const formData = new FormData(form);

//   //   try {
//   //       const res = await fetch("/api/contact", {
//   //         method: "POST",
//   //         headers: {
//   //           "Content-Type": "application/json",
//   //         },
//   //         body: formData,
//   //       });

//   //       const data: { success: boolean } = await res.json();

//   //       if (data.success) {
//   //         toast.success("Mensaje enviado satisfactoriamente", {
//   //           position: "bottom-right",
//   //         });
//   //         form.reset();
//   //       } else {
//   //         toast.error("Error al enviar el mensaje");
//   //       }
//   //     } catch (error) {
//   //       console.error(error);
//   //       toast.error("Error de red");
//   //     }
//   //   };


//   return (
//     <section id="contact" className="py-10 sm:py-12 md:py-15 place-items-center">
//       <div className="max-w-240 flex items-center flex-col w-full">
//         <h2 className="sectionTitle text-center">Contáctanos</h2>

//         <form className="flex flex-col gap-6 sm:gap-8 w-full md:max-w-lg" onSubmit={onSubmit}>
//           <div className="flex flex-col gap-2">
//             <label htmlFor="name" className="text-base font-normal text-text-primary">Nombre</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               placeholder="Tu nombre"
//               className=" bg-input-background border-none rounded-lg py-4 px-5 text-base font-normal text-text-primary outline-none transition-all duration-300 ease-in-out placeholder:text-text-secondary focus:bg-[#2a4a56]"
//               // value={formData.name}
//               // onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="flex flex-col gap-2">
//             <label htmlFor="email" className="text-base font-normal text-text-primary">Correo</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               placeholder="Tu correo"
//               className="bg-input-background border-none rounded-lg py-4 px-5 text-base font-normal text-text-primary outline-none transition-all duration-300 ease-in-out placeholder:text-text-secondary focus:bg-[#2a4a56]"
//               // value={formData.email}
//               // onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="flex flex-col gap-2">
//             <label htmlFor="message" className="text-base font-normal text-text-primary">Mensaje</label>
//             <textarea
//               id="message"
//               name="message"
//               placeholder="Deja tu mensaje..."
//               className="bg-input-background border-none rounded-lg py-4 px-5 text-base font-normal text-text-primary outline-none transition-all duration-300 ease-in-out placeholder:text-text-secondary focus:bg-[#2a4a56] min-h-36 resize-y"
//               // value={formData.message}
//               // onChange={handleChange}
//               required
//             />
//           </div>

//           <button type="submit" className="self-center py-3 px-6 bg-primary rounded-lg text-sm font-bold text-text-primary transition-all duration-300 ease-in-out transform hover:bg-[#0090c7] hover:-translate-y-0.5">
//             Enviar
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }
