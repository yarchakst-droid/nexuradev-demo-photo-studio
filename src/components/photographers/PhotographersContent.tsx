"use client";

import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";
import PhotographerCard from "./PhotographerCard";
import { useLang } from "@/i18n/LangContext";
import { photographers } from "@/data/photographers";

export default function PhotographersContent() {
  const { t } = useLang();

  return (
    <>
      <SectionHeading
        eyebrow={t.photographers.eyebrow}
        title={t.photographers.title}
        description={t.photographers.description}
        className="mb-16 max-w-2xl"
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {photographers.map((p, i) => (
          <Reveal key={p.id} delay={i * 0.1}>
            <PhotographerCard photographer={p} />
          </Reveal>
        ))}
      </div>
    </>
  );
}
