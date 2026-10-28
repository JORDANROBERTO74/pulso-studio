import Link from "next/link";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { Arrow } from "@/components/arrow";

export function Insights({ content }: Readonly<{ content: Dictionary["insights"] }>) {
  return (
    <section
      id="insights"
      className="px-[clamp(22px,8vw,120px)] py-[clamp(4.5rem,9vw,9rem)]"
    >
      <p className="m-0 mb-10 text-[10px] font-bold uppercase tracking-[0.12em] text-muted">
        {content.eyebrow}
      </p>

      <div className="grid gap-9 md:grid-cols-[1.6fr_0.8fr_auto] md:items-end md:gap-[5vw]">
        <h2 className="m-0 text-[clamp(2.9rem,5.6vw,5.25rem)] font-bold leading-[0.87] tracking-[-0.055em]">
          {content.titleLead}
          <br />
          {content.titlePrefix}{" "}
          <em className="font-serif font-normal italic tracking-[-0.03em]">
            {content.titleEmphasis}
          </em>
        </h2>

        <p className="m-0 max-w-[230px] text-sm leading-relaxed text-ink/70">{content.body}</p>

        <Link
          href="#contact"
          className="inline-flex w-fit items-center gap-2 rounded-full bg-ink px-6 py-4 text-xs font-bold text-cream transition-transform duration-200 hover:-translate-y-0.5"
        >
          {content.cta}
          <Arrow />
        </Link>
      </div>
    </section>
  );
}
