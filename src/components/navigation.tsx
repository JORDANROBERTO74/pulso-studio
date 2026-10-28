"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Dictionary } from "@/i18n/dictionaries/en";
import type { Locale } from "@/i18n/config";
import { Arrow } from "@/components/arrow";
import { LocaleSwitcher } from "@/components/locale-switcher";

export function Navigation({
  content,
  locale,
}: Readonly<{
  content: Dictionary["navigation"];
  locale: Locale;
}>) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  const links = [
    { label: content.links.work, href: "#work" },
    { label: content.links.studio, href: "#studio" },
    { label: content.links.insights, href: "#insights" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        isOpen
          ? "border-b border-ink/10 bg-cream"
          : scrolled
            ? "border-b border-ink/10 bg-cream/90 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="flex h-[92px] items-center justify-between px-[clamp(22px,5vw,72px)] max-md:h-[74px]">
        <Link
          href={`/${locale}`}
          className="text-[19px] font-bold uppercase leading-none tracking-[-0.06em]"
        >
          {content.brand}
          <span className="text-lime-deep">.</span>
        </Link>

        <nav aria-label={content.links.work} className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-bold transition-opacity hover:opacity-60"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-8 md:flex">
          <LocaleSwitcher currentLocale={locale} label={content.localeLabel} />
          <Link
            href="#contact"
            className="inline-flex items-center gap-1.5 border-b border-ink pb-1 text-xs font-bold transition-opacity hover:opacity-60"
          >
            {content.cta}
            <Arrow />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? content.closeMenu : content.openMenu}
          className="-mr-1 flex h-10 w-10 items-center justify-center md:hidden"
        >
          <span aria-hidden="true" className="relative block h-3 w-6">
            <span
              className={`absolute left-0 h-0.5 w-6 bg-ink transition-transform duration-300 ${
                isOpen ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 h-0.5 w-6 bg-ink transition-opacity duration-200 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 h-0.5 w-6 bg-ink transition-transform duration-300 ${
                isOpen ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </div>

      {isOpen && (
        <div id="mobile-menu" className="border-t border-ink/10 px-[clamp(22px,5vw,72px)] pb-8 pt-6 md:hidden">
          <nav aria-label={content.links.work} className="flex flex-col gap-5">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-bold uppercase tracking-[-0.02em]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-7 flex items-center justify-between border-t border-ink/10 pt-5">
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.15em]"
            >
              {content.cta}
              <Arrow />
            </Link>
            <LocaleSwitcher currentLocale={locale} label={content.localeLabel} />
          </div>
        </div>
      )}
    </header>
  );
}
