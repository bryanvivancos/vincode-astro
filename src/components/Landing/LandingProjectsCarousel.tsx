import { useCallback, useEffect, useRef, useState } from "react";
import type { MouseEvent, PointerEvent } from "react";
import {
  LANDING_FEATURED_PROJECTS,
  type FeaturedProject,
} from "../../data/landing";

const AUTOPLAY_MS = 5500;
const SWIPE_LOCK_PX = 8;
const SWIPE_COMMIT_PX = 48;

type Gesture = {
  id: number | null;
  startX: number;
  startY: number;
  axis: "x" | "y" | null;
};

function ProjectCard({ project }: { project: FeaturedProject }) {
  return (
    <article className="flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-border bg-background-card shadow-md">
      <figure className="overflow-hidden border-b border-border">
        <img
          src={project.image}
          alt={project.imageAlt}
          className="pointer-events-none aspect-video w-full object-cover"
          draggable={false}
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

function trackTransform(index: number, px: number) {
  return `translate3d(calc(-${index * 100}% + ${px}px), 0, 0)`;
}

export default function LandingProjectsCarousel() {
  const projects = LANDING_FEATURED_PROJECTS;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [dragPx, setDragPx] = useState(0);
  const [snap, setSnap] = useState(true);
  const trackRef = useRef<HTMLDivElement>(null);
  const suppressClick = useRef(false);
  const reduceMotion = useRef(false);
  const gesture = useRef<Gesture>({
    id: null,
    startX: 0,
    startY: 0,
    axis: null,
  });

  const goTo = useCallback(
    (index: number) => {
      setDragPx(0);
      setSnap(true);
      setActive((index + projects.length) % projects.length);
    },
    [projects.length],
  );

  const next = useCallback(() => goTo(active + 1), [active, goTo]);

  useEffect(() => {
    reduceMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
  }, []);

  useEffect(() => {
    if (paused || reduceMotion.current) return;

    const timer = window.setInterval(next, AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [next, paused]);

  function resetGesture() {
    gesture.current = { id: null, startX: 0, startY: 0, axis: null };
  }

  function onPointerDown(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    gesture.current = {
      id: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      axis: null,
    };
    setPaused(true);
    setSnap(false);
    if (trackRef.current) trackRef.current.style.transitionDuration = "0ms";
  }

  function onPointerMove(event: PointerEvent<HTMLDivElement>) {
    const current = gesture.current;
    if (current.id !== event.pointerId) return;

    const dx = event.clientX - current.startX;
    const dy = event.clientY - current.startY;

    if (!current.axis) {
      if (Math.abs(dx) < SWIPE_LOCK_PX && Math.abs(dy) < SWIPE_LOCK_PX) return;
      current.axis = Math.abs(dx) > Math.abs(dy) ? "x" : "y";
      if (current.axis === "y") {
        setSnap(true);
        resetGesture();
        if (event.pointerType !== "mouse") setPaused(false);
        return;
      }
      event.currentTarget.setPointerCapture(event.pointerId);
    }

    if (current.axis !== "x") return;
    setDragPx(dx);
  }

  function finishPointer(event: PointerEvent<HTMLDivElement>) {
    const current = gesture.current;
    if (current.id !== event.pointerId) return;

    const dx = event.clientX - current.startX;
    const dy = event.clientY - current.startY;
    const horizontal =
      current.axis === "x" ||
      (current.axis !== "y" &&
        Math.abs(dx) >= SWIPE_COMMIT_PX &&
        Math.abs(dx) > Math.abs(dy));
    resetGesture();

    const commit = horizontal && Math.abs(dx) >= SWIPE_COMMIT_PX;
    const nextIndex = commit
      ? (active + (dx < 0 ? 1 : -1) + projects.length) % projects.length
      : active;

    if (commit) suppressClick.current = true;

    const duration = reduceMotion.current ? "0ms" : "500ms";
    if (trackRef.current) {
      trackRef.current.style.transitionDuration = duration;
      trackRef.current.style.transform = trackTransform(nextIndex, 0);
    }

    setDragPx(0);
    setSnap(true);
    if (nextIndex !== active) setActive(nextIndex);
    if (event.pointerType !== "mouse") setPaused(false);
  }

  function onClickCapture(event: MouseEvent<HTMLDivElement>) {
    if (!suppressClick.current) return;
    event.preventDefault();
    event.stopPropagation();
    suppressClick.current = false;
  }

  return (
    <div
      className="relative"
      aria-roledescription="carousel"
      aria-label="Proyectos destacados"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className={`overflow-hidden ${dragPx !== 0 ? "cursor-grabbing select-none" : "cursor-grab"}`}
        style={{ touchAction: "pan-y", overscrollBehaviorX: "contain" }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={finishPointer}
        onPointerCancel={finishPointer}
        onClickCapture={onClickCapture}
      >
        <div
          ref={trackRef}
          className="flex ease-out"
          style={{
            transform: trackTransform(active, dragPx),
            transitionProperty: "transform",
            transitionDuration: snap && !reduceMotion.current ? "500ms" : "0ms",
          }}
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
            aria-current={active === i ? "true" : undefined}
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
