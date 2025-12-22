import { items }  from "../../CONSTANTS";
import Carrousel from "../atoms/Carrousel"

export default function OtherProjects() {



  return (
    <section className="py-15 place-items-center">
      <div className="max-w-240 flex items-center flex-col">
        <h2 className="sectionTitle text-center">Otros Proyectos de Nosotros</h2>

        <Carrousel
          items={items}
        // autoPlay={true} 
        // interval={3500}
        />

      </div>
    </section>
  )
}
