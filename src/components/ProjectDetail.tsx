"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import type { Project } from "@/data/portfolio";
import ProjectMockup from "./ProjectMockup";

type Props = {
  project: Project;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasNav: boolean;
};

/** Modal detail view for a single project. */
export default function ProjectDetail({ project, onClose, onPrev, onNext, hasNav }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = "";
      previous?.focus?.();
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (hasNav && e.key === "ArrowLeft") onPrev();
      if (hasNav && e.key === "ArrowRight") onNext();
      if (e.key === "Tab" && panelRef.current) {
        const focusable = panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])'
        );
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onNext, onPrev, hasNav]);

  // Portal to <body> so the dialog sits above the fixed navbar, which lives
  // outside <main>'s stacking context.
  return createPortal(
    <motion.div
      className="fixed inset-0 z-[80] flex items-end justify-center p-3 sm:items-center sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <div
        aria-hidden
        onClick={onClose}
        className="absolute inset-0 bg-black/75 backdrop-blur-md"
      />
      <motion.div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-detail-title"
        initial={{ y: 60, opacity: 0, scale: 0.96 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 40, opacity: 0, scale: 0.97 }}
        transition={{ type: "spring", stiffness: 260, damping: 28 }}
        className="glass relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-ink/95 p-5 sm:p-8"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          className="glass absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full transition-colors hover:border-magenta/60"
        >
          <X size={18} />
        </button>

        <ProjectMockup motif={project.motif} className="mb-6" />

        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-magenta-soft">
          {project.category} · {project.company}
        </p>
        <h3
          id="project-detail-title"
          className="mt-3 font-display text-2xl font-bold leading-tight sm:text-3xl"
        >
          {project.title}
        </h3>
        <p className="mt-1 text-base text-white/70">{project.subtitle}</p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <li
              key={t}
              className="rounded-full border border-magenta/30 bg-magenta/10 px-3 py-1 text-xs text-magenta-soft"
            >
              {t}
            </li>
          ))}
        </ul>

        <h4 className="mb-3 mt-8 text-sm font-semibold uppercase tracking-widest text-white/50">
          What I did
        </h4>
        <ul className="space-y-3">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-3 text-[15px] leading-relaxed text-white/80">
              <span
                aria-hidden
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-magenta shadow-glow"
              />
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white"
            >
              {project.liveLabel ?? "Visit live site"}
              <ArrowUpRight size={16} aria-hidden />
            </a>
          ) : (
            <span className="text-sm text-white/45">
              No public link listed on the resume for this project.
            </span>
          )}

          {hasNav && (
            <div className="flex gap-2">
              <button
                type="button"
                onClick={onPrev}
                aria-label="Previous project"
                className="glass grid h-11 w-11 place-items-center rounded-full transition-colors hover:border-magenta/60"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={onNext}
                aria-label="Next project"
                className="glass grid h-11 w-11 place-items-center rounded-full transition-colors hover:border-magenta/60"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>,
    document.body
  );
}
