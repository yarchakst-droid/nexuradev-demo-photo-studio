"use client";

import SectionHeading from "@/components/shared/SectionHeading";
import { useLang } from "@/i18n/LangContext";

export default function GalleryHeading() {
  const { t } = useLang();
  return (
    <SectionHeading
      eyebrow={t.gallery.eyebrow}
      title={t.gallery.title}
      description={t.gallery.description}
      className="mb-16 max-w-2xl"
    />
  );
}
