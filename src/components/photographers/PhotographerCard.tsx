"use client";

import Image from "next/image";
import TiltCard from "@/components/shared/TiltCard";
import { useLang } from "@/i18n/LangContext";
import type { Photographer } from "@/data/photographers";

export default function PhotographerCard({ photographer }: { photographer: Photographer }) {
  const { lang } = useLang();

  return (
    <TiltCard className="overflow-hidden rounded-3xl bg-sand-deep/50">
      <div className="relative aspect-[4/5]">
        <Image
          src={photographer.image}
          alt={photographer.name}
          fill
          sizes="(min-width: 1024px) 25vw, 50vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6">
          <p className="font-display text-2xl text-sand">{photographer.name}</p>
          <p className="mt-1 text-xs uppercase tracking-widest text-clay">{photographer.role[lang]}</p>
          <p className="mt-3 text-sm leading-relaxed text-sand/80">{photographer.bio[lang]}</p>
        </div>
      </div>
    </TiltCard>
  );
}
