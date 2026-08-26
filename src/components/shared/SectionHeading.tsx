import Reveal from "./Reveal";

interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({ eyebrow, title, description, align = "left", className = "" }: Props) {
  const isCenter = align === "center";
  return (
    <div className={`flex flex-col gap-4 ${isCenter ? "items-center text-center" : "items-start text-left"} ${className}`}>
      {eyebrow && (
        <Reveal>
          <span className="text-xs uppercase tracking-[0.25em] text-clay">{eyebrow}</span>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2 className={`font-display text-4xl leading-[1.08] text-ink sm:text-5xl ${isCenter ? "mx-auto max-w-2xl" : "max-w-xl"}`}>
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p className={`text-base leading-relaxed text-stone ${isCenter ? "mx-auto max-w-md" : "max-w-md"}`}>
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
