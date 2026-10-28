import Link from "next/link";
import { defaultLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { Arrow } from "@/components/arrow";

export default function NotFound() {
  const dict = getDictionary(defaultLocale).notFound;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <span className="text-[19px] font-bold uppercase leading-none tracking-[-0.06em]">
        {dict.brand}
        <span className="text-lime-deep">.</span>
      </span>
      <h1 className="mt-8 text-[clamp(3rem,10vw,7rem)] font-bold leading-[0.9] tracking-[-0.05em]">
        {dict.title}
      </h1>
      <p className="mt-6 max-w-md text-sm leading-relaxed text-ink/70">{dict.body}</p>
      <Link
        href={`/${defaultLocale}`}
        className="mt-10 inline-flex items-center gap-2 rounded-full bg-lime px-6 py-4 text-xs font-bold transition-transform duration-200 hover:-translate-y-0.5"
      >
        {dict.cta}
        <Arrow />
      </Link>
    </main>
  );
}
