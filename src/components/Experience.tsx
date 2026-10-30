"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, CalendarDays } from "lucide-react";
import { experience, projects } from "@/data/portfolio";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

const titleOf = (id: string) => projects.find((p) => p.id === id)?.title ?? id;

function openProject(id: string) {
  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  // Give the scroll a moment to start, then open the detail view.
  window.setTimeout(
    () => window.dispatchEvent(new CustomEvent("open-project", { detail: id })),
    350
  );
}

export default function Experience() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 65%"],
  });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="section-pad relative">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Professional experience"
          title="A journey of"
          accent="shipping products"
          description="From corporate sites to Aadhaar-ecosystem government portals."
        />

        <ol ref={ref} className="relative space-y-12 pl-8 md:pl-14">
          <div
            aria-hidden
            className="absolute bottom-0 left-[11px] top-2 w-px bg-white/10 md:left-[19px]"
          />
          <motion.div
            aria-hidden
            style={{ height }}
            className="absolute left-[11px] top-2 w-px bg-gradient-to-b from-magenta-soft via-magenta to-burgundy shadow-glow md:left-[19px]"
          />

          {experience.map((job, i) => (
            <li key={`${job.company}-${job.period}`} className="relative">
              <span
                aria-hidden
                className="absolute -left-8 top-7 grid h-6 w-6 place-items-center rounded-full border border-magenta/60 bg-midnight md:-left-14 md:h-10 md:w-10"
              >
                <span
                  className={`h-2.5 w-2.5 rounded-full bg-magenta md:h-3.5 md:w-3.5 ${
                    job.current ? "animate-pulse shadow-glow" : ""
                  }`}
                />
              </span>

              <Reveal delay={0.05 * i}>
                <article className="glass rounded-3xl p-6 transition-colors hover:border-magenta/40 sm:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-xl font-semibold sm:text-2xl">
                        {job.role}
                      </h3>
                      <p className="mt-1 text-lg text-magenta-soft">{job.company}</p>
                    </div>
                    {job.current && (
                      <span className="rounded-full border border-magenta/40 bg-magenta/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-magenta-soft">
                        Current
                      </span>
                    )}
                  </div>

                  <p className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/60">
                    <span className="inline-flex items-center gap-2">
                      <CalendarDays size={15} aria-hidden /> {job.period}
                    </span>
                    {job.location && (
                      <span className="inline-flex items-center gap-2">
                        <MapPin size={15} aria-hidden /> {job.location}
                      </span>
                    )}
                  </p>
                  {job.note && (
                    <p className="mt-2 text-sm text-white/50">{job.note}</p>
                  )}

                  <p className="mb-3 mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                    Projects
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {job.projectIds.map((id) => (
                      <li key={id}>
                        <button
                          type="button"
                          onClick={() => openProject(id)}
                          className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-left text-[13px] text-white/80 transition-all hover:-translate-y-0.5 hover:border-magenta/60 hover:bg-magenta/10 hover:text-white"
                        >
                          {titleOf(id)}
                        </button>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
