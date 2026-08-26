"use client";

import CursorRevealImage from "@/components/shared/CursorRevealImage";
import Reveal from "@/components/shared/Reveal";
import { useLang } from "@/i18n/LangContext";
import type { GalleryItem } from "@/data/gallery";

const RATIO_CLASS: Record<GalleryItem["ratio"], string> = {
  portrait: "aspect-[3/4]",
  square: "aspect-square",
  tall: "aspect-[2/3]",
  landscape: "aspect-[4/3]",
};

export default function MasonryGallery({ items }: { items: GalleryItem[] }) {
  const { lang, t } = useLang();

  return (
    <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
      {items.map((item, i) => (
        <Reveal key={item.id} delay={(i % 6) * 0.06} className="mb-5 break-inside-avoid">
          <CursorRevealImage
            src={item.image}
            revealSrc={item.revealImage}
            alt={item.title[lang]}
            className={`rounded-2xl ${RATIO_CLASS[item.ratio]}`}
          />
          <div className="mt-3 flex items-center justify-between">
            <p className="text-sm text-ink-soft">{item.title[lang]}</p>
            <span className="text-xs uppercase tracking-widest text-stone">{t.gallery.categories[item.category]}</span>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
