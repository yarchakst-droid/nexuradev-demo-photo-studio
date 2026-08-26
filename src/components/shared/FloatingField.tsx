"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface Props {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  textarea?: boolean;
  rows?: number;
}

export default function FloatingField({ label, value, onChange, type = "text", required, textarea, rows = 3 }: Props) {
  const [focused, setFocused] = useState(false);
  const floating = focused || value.length > 0;

  const shared =
    "w-full rounded-xl border border-line bg-sand px-4 pb-2.5 pt-6 text-sm text-ink outline-none transition-colors focus:border-clay";

  return (
    <div className="relative">
      {textarea ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          rows={rows}
          className={`${shared} resize-none`}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          required={required}
          className={shared}
        />
      )}
      <motion.label
        animate={{
          top: floating ? 8 : textarea ? 22 : "50%",
          y: floating ? 0 : textarea ? 0 : "-50%",
          scale: floating ? 0.8 : 1,
          color: focused ? "var(--color-clay)" : "var(--color-stone)",
        }}
        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute left-4 origin-left text-sm"
      >
        {label}
      </motion.label>
    </div>
  );
}
