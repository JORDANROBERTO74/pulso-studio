import Link from "next/link";
import type { Dictionary } from "@/i18n/dictionaries/en";
import type { Locale } from "@/i18n/config";
import { Arrow } from "@/components/arrow";

export function Footer({
  content,
  locale,
}: Readonly<{
  content: Dictionary["footer"];
  locale: Locale;
}>) {
  return (
    <footer
      id="contact"
      className="rounded-t-[30px] bg-ink px-[clamp(22px,8vw,120px)] pb-6 pt-[clamp(4rem,8vw,6rem)] text-cream"
    >
      <div className="border-b border-cream/15 pb-[clamp(3.5rem,7vw,6rem)] text-center">
        <p className="m-0 mb-7 text-[10px] font-bold uppercase tracking-[0.12em] text-cream/50">
          {content.eyebrow}
        </p>

        <h2 className="mx-auto mb-11 max-w-[14ch] text-[clamp(3rem,7vw,6.5rem)] font-bold leading-[0.87] tracking-[-0.055em]">
          {content.titleLead}
          <br />
          <em className="font-serif font-normal italic tracking-[-0.03em]">
            {content.titleTail}
          </em>
        </h2>

        <a
          href={`mailto:${content.email}`}
          className="inline-flex items-center gap-2 rounded-full bg-cream px-7 py-4 text-xs font-bold text-ink transition-transform duration-200 hover:-translate-y-0.5"
        >
          {content.email}
          <Arrow />
        </a>
      </div>

      <div className="grid gap-8 pt-8 text-[11px] sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_auto]">
        <Link
          href={`/${locale}`}
          className="text-[19px] font-bold uppercase leading-none tracking-[-0.06em] text-cream"
        >
          {content.brand}
          <span className="text-lime">.</span>
        </Link>

        <div>
          <p className="m-0 mb-2 text-cream/50">{content.locations}</p>
          <a href={`mailto:${content.email}`} className="text-cream hover:underline">
            {content.email}
          </a>
        </div>

        <ul className="m-0 flex list-none gap-5 p-0">
          {content.socials.map((social) => (
            <li key={social.label}>
              <a href={social.href} className="text-cream hover:underline">
                {social.label}
              </a>
            </li>
          ))}
        </ul>

        <small className="text-cream/50 lg:text-right">{content.copyright}</small>
      </div>
    </footer>
  );
}
