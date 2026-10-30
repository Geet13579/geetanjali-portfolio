"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  LayoutTemplate,
  Plug,
  Server,
  ShieldCheck,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { skillGroups } from "@/data/portfolio";
import { useReducedMotion } from "@/lib/hooks";
import SectionHeading from "./ui/SectionHeading";
import TiltCard from "./ui/TiltCard";

const groupIcons: Record<string, LucideIcon> = {
  "Programming Languages": Code2,
  "Frontend Development": LayoutTemplate,
  "Backend Development": Server,
  Databases: Database,
  "Cloud & DevOps": Cloud,
  "Tools & Platforms": Wrench,
  "Core Concepts": BrainCircuit,
  Security: ShieldCheck,
  "Third-Party Integrations": Plug,
};

// Core stack called out in the resume's expertise overview.
const marquee = [
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "Redux",
  "AWS",
  "Firebase",
];

export default function Skills() {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".skill-card", {
        opacity: 0,
        y: 60,
        duration: 0.9,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: { trigger: ".skill-grid", start: "top 82%", once: true },
      });

      gsap.from(".skill-chip", {
        opacity: 0,
        scale: 0.6,
        duration: 0.5,
        stagger: 0.015,
        ease: "back.out(1.8)",
        scrollTrigger: { trigger: ".skill-grid", start: "top 78%", once: true },
      });

      if (track.current) {
        gsap.to(track.current, {
          xPercent: -50,
          duration: 32,
          ease: "none",
          repeat: -1,
        });
      }

      // Parallax drift on the background glow.
      gsap.to(".skills-glow", {
        yPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, root);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section ref={root} id="skills" className="section-pad relative overflow-hidden">
      <div
        aria-hidden
        className="skills-glow pointer-events-none absolute -right-40 top-1/3 h-[28rem] w-[28rem] rounded-full bg-burgundy/30 blur-[130px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Technical skills"
          title="The toolkit behind"
          accent="the work"
          description="Frontend, backend, databases, cloud and security: the technologies I use to take products from interface to deployment."
        />
      </div>

      <div
        aria-hidden
        className="relative mb-14 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]"
      >
        <div ref={track} className="flex w-max gap-4 will-change-transform">
          {[...marquee, ...marquee].map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="glass whitespace-nowrap rounded-full px-6 py-3 font-display text-sm font-semibold text-white/80"
            >
              {name}
            </span>
          ))}
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <ul className="skill-grid grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = groupIcons[group.title] ?? Code2;
            return (
              <li key={group.title} className="skill-card h-full">
                <TiltCard className="glass rounded-3xl p-6" intensity={8}>
                  <div className="mb-5 flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-burgundy to-magenta shadow-glow">
                      <Icon size={20} aria-hidden />
                    </span>
                    <h3 className="font-display text-base font-semibold">{group.title}</h3>
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="skill-chip rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[13px] text-white/80 transition-colors hover:border-magenta/50 hover:bg-magenta/10 hover:text-white"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </TiltCard>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
