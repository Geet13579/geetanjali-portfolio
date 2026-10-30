"use client";

import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/portfolio";
import TiltCard from "./ui/TiltCard";
import ProjectMockup from "./ProjectMockup";

type Props = {
  project: Project;
  index: number;
  onOpen: (id: string) => void;
};

/** Reusable project card. Opens the detail view when activated. */
export default function ProjectCard({ project, index, onOpen }: Props) {
  return (
    <TiltCard className="rounded-3xl" intensity={7}>
      <button
        type="button"
        onClick={() => onOpen(project.id)}
        aria-label={`View details for ${project.title}`}
        className="glass group flex h-full w-full flex-col rounded-3xl p-4 text-left transition-colors hover:border-magenta/40"
      >
        <ProjectMockup motif={project.motif} />

        <div className="flex flex-1 flex-col px-2 pb-2 pt-5">
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-white/40">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <span className="rounded-full border border-magenta/30 bg-magenta/10 px-2.5 py-0.5 text-[10px] tracking-widest text-magenta-soft">
              {project.category}
            </span>
            <span className="normal-case tracking-normal">{project.company}</span>
          </p>
          <h3 className="mt-2 font-display text-lg font-semibold leading-snug">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-magenta-soft/90">{project.subtitle}</p>
          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-[var(--muted)]">
            {project.summary}
          </p>

          <ul className="mt-4 flex flex-wrap gap-1.5">
            {project.tags.slice(0, 3).map((t) => (
              <li
                key={t}
                className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] text-white/65"
              >
                {t}
              </li>
            ))}
          </ul>

          <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-white/80 transition-colors group-hover:text-magenta-soft">
            View details
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden
            />
          </span>
        </div>
      </button>
    </TiltCard>
  );
}
