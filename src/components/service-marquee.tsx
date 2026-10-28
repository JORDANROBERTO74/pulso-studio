import { Fragment } from "react";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { Asterisk } from "@/components/arrow";

export function ServiceMarquee({ content }: Readonly<{ content: Dictionary["marquee"] }>) {
  return (
    <section aria-label={content.label} className="overflow-hidden bg-ink py-[22px] text-cream">
      <div className="flex w-max animate-marquee items-center gap-8 whitespace-nowrap pl-8">
        {[0, 1].map((copy) => (
          <div
            key={copy}
            className="flex items-center gap-8"
            aria-hidden={copy === 1 ? "true" : undefined}
          >
            {content.items.map((item) => (
              <Fragment key={`${copy}-${item}`}>
                <span className="text-[13px] font-bold tracking-[0.02em]">{item}</span>
                <Asterisk className="shrink-0 text-lime" />
              </Fragment>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
