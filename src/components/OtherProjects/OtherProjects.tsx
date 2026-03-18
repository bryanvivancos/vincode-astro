import { others_projects }  from "../../CONSTANTS";
import Carrousel from "../atoms/Carrousel"

export default function OtherProjects() {



  return (
    <section id="other-projects" className="section-spacing w-full flex justify-center">
      <div className="section-container flex items-center flex-col">
        <p className="text-sm sm:text-base font-semibold tracking-wider text-primary uppercase mb-3">Explora Más</p>
        <h2 className="sectionTitle text-3xl md:text-4xl text-center">Más de nuestros Proyectos</h2>

        <Carrousel
          items={others_projects}
        // autoPlay={true} 
        // interval={3500}
        />

      </div>
    </section>
  )
}
