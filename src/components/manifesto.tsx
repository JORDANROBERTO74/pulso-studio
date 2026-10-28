import Link from "next/link";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { Arrow } from "@/components/arrow";

export function Manifesto({ content }: Readonly<{ content: Dictionary["manifesto"] }>) {
  return (
    <section
      id="studio"
      className="grid gap-10 px-[clamp(22px,8vw,120px)] py-[clamp(5rem,10vw,10.5rem)] md:grid-cols-3 md:gap-[5vw]"
    >
      <p className="m-0 text-[10px] font-bold uppercase tracking-[0.12em] text-muted">
        {content.eyebrow}
      </p>

      <div className="md:col-span-2">
        <h2 className="m-0 text-[clamp(2.9rem,5.6vw,5.25rem)] font-bold leading-[0.9] tracking-[-0.055em]">
          {content.titleLead}
          <br />
          {content.titlePrefix}{" "}
          <em className="font-serif font-normal italic tracking-[-0.03em]">
            {content.titleEmphasis}
          </em>
        </h2>

        <div className="mt-12 flex max-w-[650px] flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <p className="m-0 max-w-[340px] text-sm leading-relaxed text-ink/70">{content.body}</p>
          <Link
            href="#contact"
            className="inline-flex shrink-0 items-center gap-2 border-b border-ink pb-1.5 text-xs font-bold transition-opacity hover:opacity-60"
          >
            {content.link}
            <Arrow />
          </Link>
        </div>
      </div>
    </section>
  );
}
