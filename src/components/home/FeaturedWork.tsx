"use client";

import Link from "next/link";
import SectionHeading from "@/components/shared/SectionHeading";
import CursorRevealImage from "@/components/shared/CursorRevealImage";
import Reveal from "@/components/shared/Reveal";
import { useLang } from "@/i18n/LangContext";
import { galleryItems } from "@/data/gallery";

const featured = galleryItems.slice(0, 4);

export default function FeaturedWork() {
  const { lang, t } = useLang();

  return (
    <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
      <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
        <SectionHeading
          eyebrow={t.home.featured.eyebrow}
          title={t.home.featured.title}
          description={t.home.featured.description}
        />
        <Reveal delay={0.2}>
          <Link
            href="/gallery"
            className="hidden shrink-0 rounded-full border border-ink/15 px-6 py-3 text-sm text-ink transition-colors hover:border-clay hover:text-clay md:block"
          >
            {t.home.featured.viewAll}
          </Link>
        </Reveal>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {featured.map((item, i) => (
          <Reveal key={item.id} delay={i * 0.08}>
            <CursorRevealImage
              src={item.image}
              revealSrc={item.revealImage}
              alt={item.title[lang]}
              className="aspect-[4/5] rounded-2xl"
            />
            <p className="mt-3 text-sm text-stone">{item.title[lang]}</p>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.3} className="mt-10 md:hidden">
        <Link
          href="/gallery"
          className="inline-block rounded-full border border-ink/15 px-6 py-3 text-sm text-ink transition-colors hover:border-clay hover:text-clay"
        >
          {t.home.featured.viewAll}
        </Link>
      </Reveal>
    </section>
  );
}
