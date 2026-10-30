import {
  LayoutDashboard,
  LayoutTemplate,
  Layers,
  MapPin,
  PenTool,
  Server,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/data/portfolio";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import TiltCard from "./ui/TiltCard";

const iconMap: Record<string, LucideIcon> = {
  layout: LayoutTemplate,
  layers: Layers,
  dashboard: LayoutDashboard,
  server: Server,
  map: MapPin,
  pen: PenTool,
};

export default function Services() {
  return (
    <section id="services" className="section-pad relative">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Services"
          title="What I can"
          accent="build for you"
          description="Areas I have delivered in across my projects."
        />

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon] ?? Layers;
            return (
              <Reveal key={s.title} as="li" delay={0.06 * i}>
                <TiltCard className="glass group rounded-3xl p-8" intensity={9}>
                  <span
                    className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-burgundy to-magenta shadow-glow transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                    style={{ transform: "translateZ(40px)" }}
                  >
                    <Icon size={24} aria-hidden />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-semibold">{s.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-[var(--muted)]">
                    {s.text}
                  </p>
                  <span
                    aria-hidden
                    className="absolute bottom-0 left-8 right-8 h-px scale-x-0 bg-gradient-to-r from-transparent via-magenta to-transparent transition-transform duration-500 group-hover:scale-x-100"
                  />
                </TiltCard>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
