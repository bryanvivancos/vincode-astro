// import styles from './Portfolio.module.css';

import { projects } from "../../CONSTANTS";

export default function Projects() {
  return (
    <section id="projects" className="py-10 sm:py-12 md:py-15 place-items-center">
      <div className="max-w-[960px]">
        <h2 className="sectionTitle">Proyectos de Clientes</h2>
        {/* <img 
          src="/portfolio-mockups.svg" 
          alt="Portfolio mockups showcasing our work" 
          className={styles.portfolioImage}/> */}
        <div
          // className="grid lg:grid-cols-4 gap-3 sm:grid-cols-2 grid-cols-1"
          className="grid gap-3 grid-cols-[repeat(auto-fit,minmax(210px,1fr))] place-items-center"
        >
          {projects.map((project, index) => (
            <a href={project.link} target="_blank" key={index} className="bg-background-card border-1 border-border rounded-lg p-4 flex flex-col gap-3 transition-all transform duration-300 ease-in-out hover:border-primary hover:-translate-y-1 animate-slide-in-top h-full">
              <div className="flex flex-col gap-1">
                <img src={project.img} alt="project image" className="w-full h-auto rounded-lg" />
                <div className="pt-4 space-y-2">
                  <h4 className="text-base font-bold leading-5 text-text-primary">{project.title}</h4>
                  <p className="text-sm font-medium leading-5 text-text-secondary">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}