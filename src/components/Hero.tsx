"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  ArrowDown,
  Atom,
  Cloud,
  Database,
  Download,
  FileCode2,
  Github,
  Layers,
  Linkedin,
  Mail,
  Server,
  Sparkles,
} from "lucide-react";
import { profile } from "@/data/portfolio";
import { useReducedMotion } from "@/lib/hooks";
import MagneticButton from "./ui/MagneticButton";

const ThreeScene = dynamic(() => import("./ThreeScene"), {
  ssr: false,
  loading: () => null,
});

const chips = [
  { label: "React.js", Icon: Atom, pos: "top-[7%] -left-3 sm:-left-12", z: 90, delay: "0s" },
  { label: "Next.js", Icon: Layers, pos: "top-[26%] -right-3 sm:-right-8", z: 110, delay: "-1.2s" },
  { label: "TypeScript", Icon: FileCode2, pos: "top-[48%] -left-3 sm:-left-14", z: 70, delay: "-2.4s" },
  { label: "Node.js", Icon: Server, pos: "bottom-[26%] -right-3 sm:-right-8", z: 100, delay: "-3.1s" },
  { label: "MongoDB", Icon: Database, pos: "-bottom-5 left-8", z: 80, delay: "-4s" },
  { label: "AWS", Icon: Cloud, pos: "-top-4 right-10", z: 60, delay: "-5s" },
];

const socials = [
  { label: "GitHub", href: profile.github, Icon: Github, external: true },
  { label: "LinkedIn", href: profile.linkedin, Icon: Linkedin, external: true },
  { label: "Email", href: `mailto:${profile.email}`, Icon: Mail, external: false },
];

const nameWords = profile.name.split(" ");

export default function Hero() {
  const reduced = useReducedMotion();
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const sx = useSpring(rx, { stiffness: 120, damping: 16 });
  const sy = useSpring(ry, { stiffness: 120, damping: 16 });

  // Portrait frame tilts toward the mouse position anywhere in the viewport.
  useEffect(() => {
    if (reduced) return;
    const onMove = (e: PointerEvent) => {
      const nx = e.clientX / window.innerWidth - 0.5;
      const ny = e.clientY / window.innerHeight - 0.5;
      ry.set(nx * 22);
      rx.set(-ny * 18);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [reduced, rx, ry]);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pb-20 pt-32"
    >
      {/* Atmosphere */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-10 h-[34rem] w-[34rem] rounded-full bg-burgundy/40 blur-[140px]" />
        <div className="absolute -right-32 bottom-0 h-[30rem] w-[30rem] rounded-full bg-magenta/20 blur-[140px]" />
        <div className="grid-bg absolute inset-0" />
      </div>
      <div className="absolute inset-0 opacity-60 md:opacity-100">
        <ThreeScene />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Copy */}
        <div>
          <motion.p
            initial={reduced ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-magenta/30 bg-magenta/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-magenta-soft"
          >
            <Sparkles size={14} aria-hidden /> Welcome to my world
          </motion.p>

          <h1 className="font-display text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl xl:text-7xl">
            <span className="sr-only">{profile.name}</span>
            <span aria-hidden className="block">
              {nameWords.map((word, i) => (
                <span key={word} className="mr-4 inline-block overflow-hidden align-bottom">
                  <motion.span
                    className={`inline-block ${i === 1 ? "text-gradient-animated" : ""}`}
                    initial={reduced ? false : { y: "110%", rotate: 4 }}
                    animate={{ y: 0, rotate: 0 }}
                    transition={{ delay: 0.35 + i * 0.12, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </span>
          </h1>

          <div className="mt-4 overflow-hidden">
            <motion.h2
              initial={reduced ? false : { y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.7, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-2xl font-semibold text-white/85 sm:text-3xl"
            >
              {profile.role}
            </motion.h2>
          </div>

          <motion.p
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-6 max-w-xl border-l-2 border-magenta/60 pl-5 text-lg italic leading-relaxed text-white/80 sm:text-xl"
          >
            &ldquo;{profile.tagline}&rdquo;
          </motion.p>

          <motion.p
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.8 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-[var(--muted)]"
          >
            {profile.yearsExperience} years of professional experience in full stack web
            development, REST API development, database management and cloud deployment.
          </motion.p>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <MagneticButton href="#projects">View My Work</MagneticButton>
            <MagneticButton
              href={profile.resumePath}
              download="Geetanjali-Jangde-Resume.pdf"
              variant="ghost"
            >
              <Download size={16} aria-hidden /> Download Resume
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="mt-12 flex flex-wrap gap-x-14 gap-y-6"
          >
            <div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/45">
                Find with me
              </p>
              <ul className="flex gap-3">
                {socials.map(({ label, href, Icon, external }) => (
                  <li key={label}>
                    <a
                      href={href}
                      aria-label={label}
                      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="glass grid h-12 w-12 place-items-center rounded-xl text-white/80 transition-all hover:-translate-y-1 hover:border-magenta/60 hover:text-magenta-soft hover:shadow-glow"
                    >
                      <Icon size={19} aria-hidden />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/45">
                Best skills on
              </p>
              <ul className="flex flex-wrap gap-2">
                {["React.js", "Next.js", "TypeScript"].map((s) => (
                  <li
                    key={s}
                    className="glass rounded-xl px-4 py-3 text-xs font-semibold text-white/85"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Portrait */}
        <motion.div
          initial={reduced ? false : { opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          style={{ perspective: 1200 }}
          className="mx-auto w-full max-w-[26rem] sm:max-w-md"
        >
          <motion.div
            style={{ rotateX: sx, rotateY: sy, transformStyle: "preserve-3d" }}
            className="relative aspect-[4/5] w-full"
          >
            {/* depth layers */}
            <div
              aria-hidden
              className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-magenta/50 via-burgundy/50 to-transparent blur-2xl"
              style={{ transform: "translateZ(-90px)" }}
            />
            <div
              aria-hidden
              className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] border border-magenta/30"
              style={{ transform: "translateZ(-40px) translate(18px, 18px)" }}
            />

            <div className="btn-glow absolute inset-0 rounded-[2rem] p-[1.5px]">
              <div className="relative h-full w-full overflow-hidden rounded-[calc(2rem-1.5px)] bg-ink">
                <Image
                  src={profile.portrait}
                  alt="Portrait of Geetanjali Jangde, Full Stack Developer"
                  fill
                  priority
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 28rem, 30vw"
                  className="object-cover object-center"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-midnight/85 via-transparent to-transparent"
                />
                <div className="glass absolute inset-x-4 bottom-4 rounded-2xl px-5 py-4">
                  <p className="font-display text-base font-semibold">{profile.name}</p>
                  <p className="mt-0.5 flex items-center gap-2 text-xs text-white/70">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-magenta opacity-70" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-magenta" />
                    </span>
                    Software Developer (L6) · Arceus Infotech
                  </p>
                </div>
              </div>
            </div>

            {/* floating technology icons */}
            {chips.map(({ label, Icon, pos, z, delay }) => (
              <div
                key={label}
                className={`absolute ${pos}`}
                style={{ transform: `translateZ(${z}px)` }}
              >
                <div
                  className="flex animate-float items-center gap-2 rounded-2xl border border-magenta/30 bg-ink/90 px-3 py-2 text-xs font-medium text-white shadow-glow"
                  style={{ animationDelay: delay }}
                >
                  <Icon size={15} className="text-magenta-soft" aria-hidden />
                  {label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-white/40 transition-colors hover:text-magenta-soft md:flex"
      >
        Scroll
        <ArrowDown size={16} className="animate-bounce" aria-hidden />
      </a>
    </section>
  );
}
