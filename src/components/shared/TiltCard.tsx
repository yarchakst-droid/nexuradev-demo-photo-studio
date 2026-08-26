"use client";

import { useRef, type ReactNode } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function TiltCard({ children, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useSpring(0, { stiffness: 220, damping: 22 });
  const rotateY = useSpring(0, { stiffness: 220, damping: 22 });
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);
  const glow = useMotionTemplate`radial-gradient(220px circle at ${glowX}% ${glowY}%, rgba(255,255,255,0.18), transparent 70%)`;

  function handleMove(e: React.PointerEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    rotateY.set((px - 0.5) * 12);
    rotateX.set((0.5 - py) * 12);
    glowX.set(px * 100);
    glowY.set(py * 100);
  }

  function reset() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className={`relative ${className}`}
    >
      {children}
      <motion.div className="pointer-events-none absolute inset-0 rounded-[inherit]" style={{ backgroundImage: glow }} />
    </motion.div>
  );
}
