import { others_projects } from "../../CONSTANTS";

export default function OtherProjects() {
  return (
    <section id="other-projects" className="section-alt">
      <div className="section-container section-spacing">
        <div className="text-center mb-12">
          <h2 className="sectionTitle">Más de nuestros Proyectos</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {others_projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="badge badge-primary absolute top-3 left-3 z-10">
                  {project.title}
                </div>
              </div>
              <div className="p-5 space-y-2">
                <h4 className="text-base font-bold text-text-primary group-hover:text-primary transition-colors duration-200">
                  {project.title}
                </h4>
                <p className="text-sm text-text-secondary">
                  {project.description}
                </p>
                <p className="text-sm font-semibold text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
                  Echa un Vistazo <span>→</span>
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
