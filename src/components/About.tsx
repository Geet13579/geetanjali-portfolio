import { Briefcase, Building2, FolderKanban, GraduationCap, ShieldCheck, Gauge, Cloud, Smartphone } from "lucide-react";
import { education, experience, profile, projects } from "@/data/portfolio";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import TiltCard from "./ui/TiltCard";

const stats = [
  { label: "Years of experience", value: profile.yearsExperience, Icon: Briefcase },
  { label: "Companies", value: String(experience.length), Icon: Building2 },
  { label: "Projects delivered", value: String(projects.length), Icon: FolderKanban },
  { label: "B.Tech CGPA", value: education.cgpa.replace("/10", ""), Icon: GraduationCap },
];

const strengths = [
  { label: "Authentication & API security", Icon: ShieldCheck },
  { label: "Performance optimization", Icon: Gauge },
  { label: "Cloud deployment", Icon: Cloud },
  { label: "Responsive web design", Icon: Smartphone },
];

export default function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="About me" title="Code, craft and" accent="clear thinking" />

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <div className="glass rounded-3xl p-7 sm:p-10">
              <div className="space-y-5 text-base leading-relaxed text-white/80 sm:text-lg">
                {profile.summary.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>

              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {strengths.map(({ label, Icon }) => (
                  <li
                    key={label}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/85"
                  >
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-burgundy to-magenta/70">
                      <Icon size={17} aria-hidden />
                    </span>
                    {label}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <ul className="grid grid-cols-2 gap-4">
            {stats.map(({ label, value, Icon }, i) => (
              <Reveal key={label} as="li" delay={0.08 * i}>
                <TiltCard className="glass flex h-full flex-col justify-between rounded-3xl p-6">
                  <Icon size={22} className="text-magenta-soft" aria-hidden />
                  <div className="mt-8">
                    <p className="font-display text-4xl font-bold text-gradient sm:text-5xl">
                      {value}
                    </p>
                    <p className="mt-2 text-sm text-[var(--muted)]">{label}</p>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
