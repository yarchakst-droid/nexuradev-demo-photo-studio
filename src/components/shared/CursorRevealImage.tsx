"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { useLang } from "@/i18n/LangContext";

interface Props {
  src: string;
  revealSrc: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
}

export default function CursorRevealImage({ src, revealSrc, alt, sizes, priority, className = "" }: Props) {
  const { t } = useLang();
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const x = useMotionValue(50);
  const y = useMotionValue(50);
  const radius = useSpring(0, { stiffness: 140, damping: 22, mass: 0.6 });
  const clipPath = useMotionTemplate`circle(${radius}% at ${x}% ${y}%)`;

  function updatePointer(clientX: number, clientY: number) {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    x.set(((clientX - rect.left) / rect.width) * 100);
    y.set(((clientY - rect.top) / rect.height) * 100);
  }

  function activate(clientX: number, clientY: number) {
    updatePointer(clientX, clientY);
    setActive(true);
    radius.set(60);
  }

  function deactivate() {
    setActive(false);
    radius.set(0);
  }

  return (
    <div
      ref={containerRef}
      className={`group relative overflow-hidden bg-sand-deep ${className}`}
      onPointerEnter={(e) => activate(e.clientX, e.clientY)}
      onPointerMove={(e) => (active ? updatePointer(e.clientX, e.clientY) : undefined)}
      onPointerDown={(e) => activate(e.clientX, e.clientY)}
      onPointerLeave={deactivate}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes ?? "(min-width: 1024px) 33vw, 50vw"}
        priority={priority}
        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
      />
      <motion.div className="absolute inset-0" style={{ clipPath }}>
        <Image
          src={revealSrc}
          alt=""
          fill
          aria-hidden
          sizes={sizes ?? "(min-width: 1024px) 33vw, 50vw"}
          className="object-cover"
        />
      </motion.div>
      <motion.span
        animate={{ opacity: active ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        className="pointer-events-none absolute bottom-4 left-4 rounded-full bg-ink/70 px-3 py-1 text-[11px] uppercase tracking-widest text-sand backdrop-blur-sm"
      >
        {t.common.hoverToReveal}
      </motion.span>
    </div>
  );
}
