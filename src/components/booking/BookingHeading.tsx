"use client";

import SectionHeading from "@/components/shared/SectionHeading";
import { useLang } from "@/i18n/LangContext";

export default function BookingHeading() {
  const { t } = useLang();
  return (
    <SectionHeading
      eyebrow={t.booking.eyebrow}
      title={t.booking.title}
      description={t.booking.description}
      align="center"
      className="mb-16"
    />
  );
}
