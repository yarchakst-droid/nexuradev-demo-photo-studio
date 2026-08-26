"use client";

import { motion } from "framer-motion";
import { useLang } from "@/i18n/LangContext";
import { LANG_LABELS, type Lang } from "@/i18n/dictionary";

const OPTIONS: Lang[] = ["en", "uk", "ru"];

export default function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLang();

  return (
    <div className={`flex items-center gap-0.5 ${className}`}>
      {OPTIONS.map((option) => {
        const active = option === lang;
        return (
          <button
            key={option}
            onClick={() => setLang(option)}
            className={`relative rounded-full px-2.5 py-1 text-xs tracking-wide transition-colors ${
              active ? "text-sand" : "text-stone hover:text-ink"
            }`}
          >
            {active && (
              <motion.span
                layoutId="lang-pill"
                className="absolute inset-0 rounded-full bg-ink"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
            )}
            <span className="relative">{LANG_LABELS[option]}</span>
          </button>
        );
      })}
    </div>
  );
}
