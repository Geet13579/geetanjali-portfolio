"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useFinePointer, useReducedMotion } from "@/lib/hooks";

type Props = {
  children: React.ReactNode;
  className?: string;
  /** Max tilt in degrees. */
  intensity?: number;
  glare?: boolean;
};

/** 3D tilt-on-hover glass card with a cursor-following glare. */
export default function TiltCard({
  children,
  className = "",
  intensity = 10,
  glare = true,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const fine = useFinePointer();
  const reduced = useReducedMotion();
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const spx = useSpring(px, { stiffness: 200, damping: 20 });
  const spy = useSpring(py, { stiffness: 200, damping: 20 });
  const rotateY = useTransform(spx, [0, 1], [-intensity, intensity]);
  const rotateX = useTransform(spy, [0, 1], [intensity, -intensity]);
  const glareBg = useTransform(
    [spx, spy],
    ([lx, ly]: number[]) =>
      `radial-gradient(420px circle at ${lx * 100}% ${ly * 100}%, rgba(255,95,168,0.16), transparent 55%)`
  );
  const enabled = fine && !reduced;

  const onMove = (e: React.PointerEvent) => {
    if (!enabled || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
  };
  const reset = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <div style={{ perspective: 1100 }} className="h-full">
      <motion.div
        ref={ref}
        onPointerMove={onMove}
        onPointerLeave={reset}
        style={enabled ? { rotateX, rotateY, transformStyle: "preserve-3d" } : undefined}
        className={`relative h-full ${className}`}
      >
        {children}
        {glare && enabled && (
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[inherit]"
            style={{ background: glareBg }}
          />
        )}
      </motion.div>
    </div>
  );
}
