import { SlideItems } from "../atoms/SlideItems";
import { FAQAccordion, type FaqData } from "../FAQAccordion/FAQAccordion";
import type { IconName } from "../icons";

interface ServicesPageProps {
  title: string
  subtitles: string
  description: string
  demos: string
  profits: Profits[]
  projects: Project[]
  faqsItems: FaqData[]
}

type Profits = {
  icon: IconName
  id: number
  title: string
  description: string
}

type Project = {
  title: string
  description: string
  img?: string
}



export const ServicesPageTemplate = ({ 
  title, 
  description, 
  subtitles, 
  profits, 
  projects, 
  faqsItems, 
  demos 
}: ServicesPageProps) => {

  return (
    <>
    <section className="mt-16 py-9 max-w-240 px-4 space-y-8">

      <h2 className="text-3xl md:text-4xl font-extrabold leading-11 -tracking-[0.5px] text-text-primary animate-slide-in-top">{title}</h2>

      <p className="text-sm md:text-base font-medium leading-5 text-text-secondary">
        {subtitles}
      </p>

      <p className="text-base md:text-lg font-medium leading-6 text-text-primary">
        {description}
      </p>

      <div className={`${profits.length == 4 ? "lg:grid-cols-2" : "lg:grid-cols-3"} grid gap-2 sm:grid-cols-1 grid-cols-1`}>
        {profits.map((profit) => (
          <SlideItems
            icon={profit.icon}
            key={profit.id}
            title={profit.title}
            description={profit.description}
            classNames="cursor-default animate-slide-in-top"
          />
        ))}
      </div>


      {projects.map((project, index) => (
        project.img &&
        <>
          <h3 className="text-2xl md:text-3xl font-bold">{demos}</h3>
          {/* <img 
                src="/portfolio-mockups.svg" 
                alt="Portfolio mockups showcasing our work" 
                className={styles.portfolioImage}/> */}
          <div className="flex gap-4 items-center justify-center">
            <a key={index} className="p-4 flex flex-col gap-3 transition-all transform duration-300 ease-in-out hover:border-primary hover:-translate-y-1">
              <div className="flex flex-col gap-1">
                <img src={project.img} alt="project image" className="w-full h-auto rounded-lg" />
                <div className="pt-4 space-y-3">
                  <h4 className="text-xl font-bold leading-5 text-text-primary text-balance">{project.title}</h4>
                  <p className="text-lg font-medium leading-5 text-text-secondary">{project.description}</p>
                </div>
              </div>
            </a>
          </div>
        </>
      ))}

      <h3 className="text-2xl md:text-3xl font-bold">Preguntas Frecuentes</h3>

      <FAQAccordion
        faqs={faqsItems}
      />

      <div className="flex justify-center">
        <a href="/#contact" className="py-2 md:py-3 px-3 sm:px-4 md:px-5 bg-primary rounded-lg text-base sm:text-sm font-bold text-text-primary transition-all duration-300 ease-in-out hover:bg-[#0090c7] hover:transform hover:-translate-y-0.5">Contáctanos</a>
      </div>

    </section>
    </>
  );
}
