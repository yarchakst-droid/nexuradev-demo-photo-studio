"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/shared/Reveal";
import { useLang } from "@/i18n/LangContext";

export default function CtaBanner() {
  const { t } = useLang();

  return (
    <section className="relative mx-6 mb-28 overflow-hidden rounded-3xl lg:mx-10">
      <Image
        src="https://images.unsplash.com/photo-1612883833766-7930d960e16f?auto=format&fit=crop&w=1800&q=80"
        alt="Wedding couple in golden light"
        width={1800}
        height={900}
        className="h-[420px] w-full object-cover sm:h-[480px]"
      />
      <div className="absolute inset-0 bg-ink/45" />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
        <Reveal>
          <h2 className="max-w-xl font-display text-4xl italic leading-tight text-sand sm:text-5xl">
            {t.home.cta.title}
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <Link
            href="/booking"
            className="mt-8 inline-block rounded-full bg-sand px-8 py-3.5 text-sm font-medium text-ink transition-transform hover:scale-[1.03]"
          >
            {t.home.cta.button}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
