import Image from "next/image";
import Link from "next/link";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { Arrow } from "@/components/arrow";

export function Work({ content }: Readonly<{ content: Dictionary["work"] }>) {
  return (
    <section
      id="work"
      className="bg-moss px-[clamp(22px,8vw,120px)] py-[clamp(4.5rem,9vw,8.75rem)]"
    >
      <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="m-0 mb-7 text-[10px] font-bold uppercase tracking-[0.12em] text-muted">
            {content.eyebrow}
          </p>
          <h2 className="m-0 text-[clamp(2.9rem,5.6vw,5.25rem)] font-bold leading-[0.87] tracking-[-0.055em]">
            {content.titleLead}
            <br />
            <em className="font-serif font-normal italic tracking-[-0.03em]">
              {content.titleTail}
            </em>
          </h2>
        </div>
        <p className="m-0 max-w-[235px] text-[13px] leading-relaxed text-ink/70">{content.aside}</p>
      </div>

      <ul className="grid list-none grid-cols-1 gap-7 p-0 sm:grid-cols-2 lg:grid-cols-3 lg:gap-[18px]">
        {content.items.map((item, index) => (
          <li key={item.title} className={index === 2 ? "sm:col-span-2 lg:col-span-1" : ""}>
            <Link href="#contact" className="group block">
              <div className="relative h-[280px] overflow-hidden rounded-[28px] bg-ink/10 lg:h-[300px]">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="relative px-1 py-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-muted">
                  {item.tag}
                </span>
                <h3 className="mb-0 mt-2.5 max-w-[250px] text-[19px] font-bold leading-[1.05] tracking-[-0.03em]">
                  {item.title}
                </h3>
                <Arrow className="absolute right-1 top-4 text-[15px] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
