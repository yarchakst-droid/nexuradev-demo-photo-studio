"use client";

import Image from "next/image";
import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";
import { useLang } from "@/i18n/LangContext";

const INTERIOR_DETAIL_IMAGES = [
  "https://images.unsplash.com/photo-1643783618238-cf60bed60ab9?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1558423039-2d4b02e50953?auto=format&fit=crop&w=900&q=80",
];

export default function AboutContent() {
  const { t } = useLang();

  return (
    <div>
      <div className="mx-auto max-w-7xl px-6 pt-40 lg:px-10">
        <SectionHeading
          eyebrow={t.about.eyebrow}
          title={t.about.title}
          description={t.about.description}
          className="max-w-2xl"
        />
      </div>

      <Reveal className="mx-6 mt-16 overflow-hidden rounded-3xl lg:mx-10">
        <Image
          src="https://images.unsplash.com/photo-1627917932033-74123f070958?auto=format&fit=crop&w=1800&q=80"
          alt="Loom Studio interior"
          width={1800}
          height={900}
          className="h-[320px] w-full object-cover sm:h-[460px]"
        />
      </Reveal>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 py-28 lg:grid-cols-[1fr_1.1fr] lg:px-10">
        <Reveal>
          <h2 className="font-display text-3xl italic leading-snug text-ink">&ldquo;{t.about.quote}&rdquo;</h2>
          <p className="mt-6 text-sm leading-relaxed text-stone">{t.about.paragraph1}</p>
          <p className="mt-4 text-sm leading-relaxed text-stone">{t.about.paragraph2}</p>
        </Reveal>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {INTERIOR_DETAIL_IMAGES.map((src) => (
            <Reveal key={src}>
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                <Image src={src} alt="Loom Studio interior detail" fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="border-t border-line bg-sand-deep/40">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
          <SectionHeading eyebrow={t.about.valuesEyebrow} title={t.about.valuesTitle} className="mb-16" />
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
            {t.about.values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.1}>
                <h3 className="font-display text-xl text-ink">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone">{v.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
