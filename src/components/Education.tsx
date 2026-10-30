import { Award, GraduationCap } from "lucide-react";
import { certification, education } from "@/data/portfolio";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import TiltCard from "./ui/TiltCard";

export default function Education() {
  return (
    <section id="education" className="section-pad relative">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Education & certification"
          title="Where it"
          accent="started"
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <TiltCard className="glass rounded-3xl p-8 sm:p-10" intensity={6}>
              <div className="flex items-start justify-between gap-4">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-burgundy to-magenta shadow-glow">
                  <GraduationCap size={26} aria-hidden />
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-sm text-white/70">
                  {education.period}
                </span>
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold leading-snug sm:text-2xl">
                {education.degree}
              </h3>
              <p className="mt-3 text-magenta-soft">
                <a
                  href={education.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-offset-4 hover:underline"
                >
                  {education.school}
                </a>
              </p>
              <p className="mt-1 text-white/60">{education.college}</p>
              <p className="mt-6 inline-flex items-baseline gap-2 rounded-2xl border border-magenta/30 bg-magenta/10 px-5 py-3">
                <span className="font-display text-3xl font-bold text-gradient">
                  {education.cgpa}
                </span>
                <span className="text-sm text-white/60">CGPA</span>
              </p>
            </TiltCard>
          </Reveal>

          <Reveal delay={0.1}>
            <TiltCard className="glass rounded-3xl p-8 sm:p-10" intensity={6}>
              <div className="flex items-start justify-between gap-4">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-burgundy to-magenta shadow-glow">
                  <Award size={26} aria-hidden />
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-sm text-white/70">
                  {certification.year}
                </span>
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold sm:text-2xl">
                {certification.title}
              </h3>
              <p className="mt-3 text-magenta-soft">{certification.issuer}</p>
              <p className="mt-1 text-white/60">{certification.duration}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {certification.technologies.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-sm text-white/80"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </TiltCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
