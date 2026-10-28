import Link from "next/link";
import type { Locale } from "@/i18n/config";

export function LocaleSwitcher({
  currentLocale,
  label,
}: Readonly<{
  currentLocale: Locale;
  label: string;
}>) {
  return (
    <div
      className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-[0.18em]"
      role="group"
      aria-label={label}
    >
      <Link
        href="/en"
        hrefLang="en"
        className={`px-1 transition-opacity ${
          currentLocale === "en" ? "underline underline-offset-4" : "opacity-40 hover:opacity-100"
        }`}
        aria-current={currentLocale === "en" ? "page" : undefined}
      >
        EN
      </Link>
      <span aria-hidden="true" className="text-[9px] opacity-30">
        /
      </span>
      <Link
        href="/es"
        hrefLang="es"
        className={`px-1 transition-opacity ${
          currentLocale === "es" ? "underline underline-offset-4" : "opacity-40 hover:opacity-100"
        }`}
        aria-current={currentLocale === "es" ? "page" : undefined}
      >
        ES
      </Link>
    </div>
  );
}
