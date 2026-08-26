"use client";

import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";
import { useLang } from "@/i18n/LangContext";

export default function Approach() {
  const { t } = useLang();

  return (
    <section className="border-y border-line bg-sand-deep/40">
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
        <SectionHeading eyebrow={t.home.approach.eyebrow} title={t.home.approach.title} className="mb-16" />

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {t.home.approach.steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.1}>
              <span className="font-display text-sm italic text-clay">{step.n}</span>
              <h3 className="mt-4 font-display text-2xl text-ink">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-stone">{step.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
