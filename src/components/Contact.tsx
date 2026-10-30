"use client";

import { useState } from "react";
import { ArrowUpRight, Github, Linkedin, Mail, Phone, Send } from "lucide-react";
import { profile } from "@/data/portfolio";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

const channels = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    Icon: Mail,
    external: false,
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phoneHref}`,
    Icon: Phone,
    external: false,
  },
  {
    label: "LinkedIn",
    value: "geetanjali-jangde",
    href: profile.linkedin,
    Icon: Linkedin,
    external: true,
  },
  {
    label: "GitHub",
    value: "Geet13579",
    href: profile.github,
    Icon: Github,
    external: true,
  },
];

const field =
  "w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-[15px] text-white placeholder:text-white/30 transition-colors focus:border-magenta/70 focus:bg-white/[0.06] focus:outline-none";

export default function Contact() {
  const [status, setStatus] = useState("");

  // No backend: the form composes an email in the visitor's own mail app.
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n${name}\n${email}`);
    setStatus("Opening your email app…");
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section-pad relative">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something"
          accent="together"
          description="Have a project, role or idea in mind? Reach out through any of the channels below."
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <ul className="min-w-0 space-y-4">
            {channels.map(({ label, value, href, Icon, external }, i) => (
              <Reveal key={label} as="li" delay={0.06 * i}>
                <a
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="glass group flex items-center gap-4 rounded-2xl p-5 transition-all hover:-translate-y-1 hover:border-magenta/50 hover:shadow-glow"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-burgundy to-magenta">
                    <Icon size={20} aria-hidden />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs uppercase tracking-[0.2em] text-white/40">
                      {label}
                    </span>
                    <span className="block truncate text-[15px] font-medium text-white/90">
                      {value}
                    </span>
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-white/40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-magenta-soft"
                    aria-hidden
                  />
                </a>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.1} className="min-w-0">
            <form onSubmit={onSubmit} className="glass space-y-5 rounded-3xl p-7 sm:p-9">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm text-white/70">
                    Your name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    placeholder="Jane Doe"
                    className={field}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm text-white/70">
                    Your email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="jane@company.com"
                    className={field}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm text-white/70">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell me about your project…"
                  className={`${field} resize-none`}
                />
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  className="btn-glow inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03] active:scale-95"
                >
                  Send message <Send size={16} aria-hidden />
                </button>
                <p role="status" aria-live="polite" className="text-sm text-white/50">
                  {status || "This opens a draft in your email app."}
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
