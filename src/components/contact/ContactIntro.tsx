"use client";

import Reveal from "@/components/shared/Reveal";
import { useLang } from "@/i18n/LangContext";

export default function ContactIntro() {
  const { t } = useLang();

  return (
    <Reveal>
      <span className="text-xs uppercase tracking-[0.25em] text-clay">{t.contact.eyebrow}</span>
      <h1 className="mt-4 font-display text-4xl leading-[1.08] text-ink sm:text-5xl">{t.contact.title}</h1>
      <p className="mt-6 max-w-sm text-sm leading-relaxed text-stone">{t.contact.description}</p>

      <div className="mt-10 flex flex-col gap-2 text-sm text-ink-soft">
        <a href="mailto:hello@loom.studio" className="transition-colors hover:text-clay">
          hello@loom.studio
        </a>
        <a href="https://instagram.com" className="transition-colors hover:text-clay">
          @loom.studio
        </a>
        <span className="text-stone">{t.contact.visits}</span>
      </div>
    </Reveal>
  );
}
