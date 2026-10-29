import Image from "next/image";
import Link from "next/link";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { Arrow } from "@/components/arrow";

export function Hero({ content }: Readonly<{ content: Dictionary["hero"] }>) {
  return (
    <section
      id="top"
      className="px-[clamp(22px,8vw,120px)] pb-[clamp(4rem,9vw,7rem)] pt-[clamp(7rem,13vw,9.5rem)]"
    >
      <div className="grid items-center gap-[5vw] lg:grid-cols-[1.15fr_1fr]">
        <div>
          <p className="eyebrow m-0 mb-8 text-[10px] font-bold uppercase tracking-[0.12em] text-muted animate-rise">
            {content.eyebrow}
          </p>

          <h1
            className="m-0 text-[clamp(2.75rem,6.2vw,6.75rem)] font-bold leading-[0.86] tracking-[-0.05em] animate-rise"
            style={{ animationDelay: "80ms" }}
          >
            {content.titleLead}
            <br />
            <em className="font-serif font-normal italic tracking-[-0.03em]">
              {content.titleEmphasis}
            </em>{" "}
            {content.titleTail}
          </h1>

          <p
            className="mb-7 mt-9 max-w-[355px] text-sm leading-relaxed text-ink/70 animate-rise"
            style={{ animationDelay: "160ms" }}
          >
            {content.intro}
          </p>

          <Link
            href="#work"
            className="inline-flex items-center gap-2 rounded-full bg-lime px-6 py-4 text-xs font-bold transition-transform duration-200 hover:-translate-y-0.5 animate-rise"
            style={{ animationDelay: "240ms" }}
          >
            {content.cta}
            <Arrow />
          </Link>
        </div>

        <div className="relative mt-4 h-[330px] sm:h-[420px] lg:mt-0 lg:h-[480px]">
          <div
            className="absolute inset-0 left-[8%] overflow-hidden bg-lime-deep/30"
            style={{ borderRadius: "46% / 35%", transform: "rotate(7deg)" }}
          >
            <Image
              src="/images/hero.jpg"
              alt={content.imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 92vw, 46vw"
              className="object-cover object-[25%_50%]"
            />
          </div>

          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-[7%] left-[-7%] right-[3%] top-[3%] rotate-[-22deg] rounded-full border border-ink/90"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-[3%] left-[3%] -right-[7%] -top-[7%] rotate-[26deg] rounded-full border border-ink/65"
          />

          <p className="absolute -bottom-9 right-0 m-0 hidden rotate-[-8deg] text-right lg:block">
            <span className="block text-[11px] font-bold uppercase tracking-[0.08em]">
              {content.noteTop}
            </span>
            <span className="font-serif text-3xl italic leading-none">{content.noteBottom}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
