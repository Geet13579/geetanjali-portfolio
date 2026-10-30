"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects, type Project } from "@/data/portfolio";
import SectionHeading from "./ui/SectionHeading";
import ProjectCard from "./ProjectCard";
import ProjectDetail from "./ProjectDetail";

const filters = ["All", "Government", "Platform", "Corporate", "Design"] as const;
type Filter = (typeof filters)[number];

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("All");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const list = useMemo<Project[]>(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  const selected = selectedId ? projects.find((p) => p.id === selectedId) ?? null : null;

  // Lets the Experience timeline open a project's detail view.
  useEffect(() => {
    const onOpen = (e: Event) => {
      const id = (e as CustomEvent<string>).detail;
      if (projects.some((p) => p.id === id)) {
        setFilter("All");
        setSelectedId(id);
      }
    };
    window.addEventListener("open-project", onOpen);
    return () => window.removeEventListener("open-project", onOpen);
  }, []);

  const step = useCallback(
    (dir: 1 | -1) => {
      if (!selectedId) return;
      const pool = list.some((p) => p.id === selectedId) ? list : projects;
      const i = pool.findIndex((p) => p.id === selectedId);
      setSelectedId(pool[(i + dir + pool.length) % pool.length].id);
    },
    [list, selectedId]
  );

  const close = useCallback(() => setSelectedId(null), []);
  const prev = useCallback(() => step(-1), [step]);
  const next = useCallback(() => step(1), [step]);

  return (
    <section id="projects" className="section-pad relative">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Featured projects"
          title="Work I've"
          accent="shipped"
          description="Government portals, booking platforms, admin panels and corporate websites from my roles at Arceus Infotech, Beaming India, Programmics Technology and Prixso Software."
        />

        <div
          role="tablist"
          aria-label="Filter projects by category"
          className="mb-10 flex flex-wrap gap-2"
        >
          {filters.map((f) => {
            const count = f === "All" ? projects.length : projects.filter((p) => p.category === f).length;
            const active = filter === f;
            return (
              <button
                key={f}
                role="tab"
                aria-selected={active}
                type="button"
                onClick={() => setFilter(f)}
                className={`relative rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                  active ? "text-white" : "text-white/55 hover:text-white"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="project-filter"
                    className="btn-glow absolute inset-0 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10">
                  {f} <span className="ml-1 text-xs opacity-60">{count}</span>
                </span>
              </button>
            );
          })}
        </div>

        <motion.div layout className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {list.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.45, delay: Math.min(i * 0.04, 0.3) }}
                className="h-full"
              >
                <ProjectCard project={project} index={i} onOpen={setSelectedId} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && (
          <ProjectDetail
            project={selected}
            onClose={close}
            onPrev={prev}
            onNext={next}
            hasNav={projects.length > 1}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
