"use client";

import Link from "next/link";
import Image from "next/image";
import SectionHeading from "@/components/shared/SectionHeading";
import TiltCard from "@/components/shared/TiltCard";
import Reveal from "@/components/shared/Reveal";
import { useLang } from "@/i18n/LangContext";
import { photographers } from "@/data/photographers";

export default function TeamTeaser() {
  const { lang, t } = useLang();

  return (
    <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
      <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
        <SectionHeading
          eyebrow={t.home.team.eyebrow}
          title={t.home.team.title}
          description={t.home.team.description}
        />
        <Reveal delay={0.2}>
          <Link
            href="/photographers"
            className="hidden shrink-0 rounded-full border border-ink/15 px-6 py-3 text-sm text-ink transition-colors hover:border-clay hover:text-clay md:block"
          >
            {t.home.team.viewAll}
          </Link>
        </Reveal>
      </div>

      <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {photographers.map((p, i) => (
          <Reveal key={p.id} delay={i * 0.08}>
            <TiltCard className="overflow-hidden rounded-2xl">
              <div className="relative aspect-[3/4]">
                <Image src={p.image} alt={p.name} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="font-display text-lg text-sand">{p.name}</p>
                  <p className="text-xs text-sand/70">{p.role[lang]}</p>
                </div>
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
