import { ArrowUp, Github, Linkedin, Mail, Phone } from "lucide-react";
import { navLinks, profile } from "@/data/portfolio";

const socials = [
  { label: "GitHub", href: profile.github, Icon: Github, external: true },
  { label: "LinkedIn", href: profile.linkedin, Icon: Linkedin, external: true },
  { label: "Email", href: `mailto:${profile.email}`, Icon: Mail, external: false },
  { label: "Phone", href: `tel:${profile.phoneHref}`, Icon: Phone, external: false },
];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-gradient-to-b from-transparent to-burgundy/10">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <a href="#home" className="inline-flex items-center gap-3" aria-label="Back to top">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-magenta to-burgundy font-display text-sm font-bold shadow-glow">
                GJ
              </span>
              <span className="font-display text-lg font-semibold">{profile.name}</span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-[var(--muted)]">
              {profile.role}. {profile.tagline}.
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
              Navigate
            </p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-white/65 transition-colors hover:text-magenta-soft"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
              Connect
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
            <p className="mt-5 text-sm text-white/55">{profile.email}</p>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/40">
          <p>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p>Built with Next.js, Tailwind CSS, Framer Motion, GSAP and React Three Fiber.</p>
          <a
            href="#home"
            className="inline-flex items-center gap-2 text-white/60 transition-colors hover:text-magenta-soft"
          >
            Back to top <ArrowUp size={14} aria-hidden />
          </a>
        </div>
      </div>
    </footer>
  );
}
