import { useCallback, useEffect, useState } from "react";
import {
  LANDING_FEATURED_PROJECTS,
  type FeaturedProject,
} from "../../data/landing";

const AUTOPLAY_MS = 5500;

function ProjectCard({ project }: { project: FeaturedProject }) {
  return (
    <article className="flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-border bg-background-card shadow-md">
      <figure className="overflow-hidden border-b border-border">
        <img
          src={project.image}
          alt={project.imageAlt}
          className="aspect-video w-full object-cover"
          loading="lazy"
          decoding="async"
          width={800}
          height={450}
        />
      </figure>
      <div className="flex flex-1 flex-col gap-4 p-5">
        <div>
          <span className="mb-2 inline-block rounded-full border border-primary/20 bg-primary-light px-2.5 py-0.5 text-[10px] font-semibold text-primary">
            {project.category}
          </span>
          <h3 className="text-xl font-bold text-text-primary">{project.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-text-secondary">
            {project.description}
          </p>
        </div>
        <div className="space-y-3 rounded-xl border border-border bg-background-dark p-4 text-sm">
          <div>
            <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-wider text-text-muted">
              Problema
            </p>
            <p className="leading-relaxed text-text-secondary">{project.problem}</p>
          </div>
          <div className="h-px bg-border" />
          <div>
            <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-wider text-text-muted">
              Solución
            </p>
            <p className="leading-relaxed text-text-secondary">{project.solution}</p>
          </div>
        </div>
        <a
          href={project.cta.href}
          target={project.cta.external ? "_blank" : undefined}
          rel={project.cta.external ? "noopener noreferrer" : undefined}
          className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-primary"
        >
          {project.cta.label}
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  );
}

export default function LandingProjectsCarousel() {
  const projects = LANDING_FEATURED_PROJECTS;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      setActive((index + projects.length) % projects.length);
    },
    [projects.length],
  );

  const next = useCallback(() => goTo(active + 1), [active, goTo]);

  useEffect(() => {
    if (paused) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    const timer = window.setInterval(next, AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [next, paused]);

  return (
    <div
      className="relative"
      aria-roledescription="carousel"
      aria-label="Proyectos destacados"
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {projects.map((project) => (
            <div
              key={project.name}
              className="w-full shrink-0 px-0.5"
              role="group"
              aria-roledescription="slide"
              aria-label={project.name}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-2">
        {projects.map((project, i) => (
          <button
            key={project.name}
            type="button"
            aria-label={`Ver ${project.name}`}
            aria-current={active === i}
            onClick={() => goTo(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              active === i
                ? "w-7 bg-primary"
                : "w-2 bg-border hover:bg-text-muted"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
