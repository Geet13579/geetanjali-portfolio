import Reveal from "./Reveal";

type Props = {
  eyebrow: string;
  title: string;
  accent?: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
  align = "left",
}: Props) {
  const center = align === "center";
  return (
    <Reveal className={`mb-14 max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <p
        className={`mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-magenta-soft ${
          center ? "justify-center" : ""
        }`}
      >
        <span className="h-px w-8 bg-gradient-to-r from-transparent to-magenta" />
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
        {title} {accent && <span className="text-gradient-animated">{accent}</span>}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-[var(--muted)] sm:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  );
}
