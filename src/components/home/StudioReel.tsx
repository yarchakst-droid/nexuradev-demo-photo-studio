"use client";

import { useRef } from "react";
import Reveal from "@/components/shared/Reveal";
import { useLang } from "@/i18n/LangContext";
import { useAutoplayVideo } from "@/lib/useAutoplayVideo";

const REEL_VIDEO = "https://videos.pexels.com/video-files/7205347/7205347-uhd_2560_1440_25fps.mp4";

export default function StudioReel() {
  const { t } = useLang();
  const videoRef = useRef<HTMLVideoElement>(null);

  useAutoplayVideo(videoRef);

  return (
    <section className="border-y border-line bg-sand-deep/40">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-28 lg:grid-cols-2 lg:px-10">
        <div className="flex flex-col gap-4">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.25em] text-clay">{t.home.reel.eyebrow}</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="max-w-md font-display text-4xl leading-[1.08] text-ink sm:text-5xl">
              {t.home.reel.title}
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="max-w-sm text-base leading-relaxed text-stone">{t.home.reel.description}</p>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="overflow-hidden rounded-3xl shadow-[0_30px_60px_-30px_rgba(23,20,15,0.35)]">
          <video
            ref={videoRef}
            className="aspect-[4/5] w-full object-cover sm:aspect-[16/10]"
            src={REEL_VIDEO}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden
          />
        </Reveal>
      </div>
    </section>
  );
}
