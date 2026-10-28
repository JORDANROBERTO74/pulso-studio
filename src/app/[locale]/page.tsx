import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { constructMetadata } from "@/lib/seo";
import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { ServiceMarquee } from "@/components/service-marquee";
import { Manifesto } from "@/components/manifesto";
import { Work } from "@/components/work";
import { Insights } from "@/components/insights";
import { Footer } from "@/components/footer";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const dict = getDictionary(locale as Locale);
  return constructMetadata({
    locale: locale as Locale,
    title: dict.meta.title,
    description: dict.meta.description,
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  const dict = getDictionary(locale as Locale);

  return (
    <main className="overflow-hidden">
      <Navigation content={dict.navigation} locale={locale as Locale} />
      <Hero content={dict.hero} />
      <ServiceMarquee content={dict.marquee} />
      <Manifesto content={dict.manifesto} />
      <Work content={dict.work} />
      <Insights content={dict.insights} />
      <Footer content={dict.footer} locale={locale as Locale} />
    </main>
  );
}
