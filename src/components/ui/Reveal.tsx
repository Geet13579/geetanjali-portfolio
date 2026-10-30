"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/lib/hooks";

type Props = {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  x?: number;
  className?: string;
  as?: "div" | "li" | "section" | "article";
};

/** Fades and slides children in once they scroll into view. */
export default function Reveal({
  children,
  delay = 0,
  y = 36,
  x = 0,
  className,
  as = "div",
}: Props) {
  const reduced = useReducedMotion();
  const Comp = motion[as];

  return (
    <Comp
      className={className}
      initial={reduced ? false : { opacity: 0, y, x, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, x: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Comp>
  );
}
