"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { getGalleryTranslations } from "@/i18n/home";
import FadeIn from "@/components/ui/FadeIn";
import type { Locale } from "@/types/locale";
import type { GalleryItem, GalleryRow } from "@/services";

const ROWS: GalleryRow[] = [1, 2];

// Subtle per-category accent for the badge text (kept from the old hand-curated gallery).
const CATEGORY_ACCENT: Record<string, string> = {
  keramika: "#6b5e50",
  vysivka: "#6e6050",
  linoryt: "#62574e",
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      delay: i * 0.1,
    },
  }),
};

interface Props {
  items: GalleryItem[];
}

export default function GallerySection({ items }: Props) {
  const t = useTranslations("home");
  const tCat = useTranslations("home.gallery.categories");
  const gallery = getGalleryTranslations(t);
  const locale = useLocale() as Locale;

  const rows = ROWS.map((row) =>
    items.filter((item) => item.row === row),
  ).filter((rowItems) => rowItems.length > 0);

  if (rows.length === 0) return null;

  return (
    <section
      id="gallery"
      className="scroll-mt-16 py-28 md:py-36"
      style={{ background: "#f5efe6" }}
    >
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <FadeIn className="mb-14">
          <h2 className="font-serif text-4xl font-light tracking-[0.15em] text-stone-800 md:text-5xl">
            {gallery.title}
          </h2>
          <p className="mt-4 text-xs tracking-widest text-stone-500">
            {gallery.subtitle}
          </p>
        </FadeIn>

        <div className="flex flex-col gap-5">
          {rows.map((rowItems, rowIndex) => (
            <div
              key={rowIndex}
              className="flex flex-col gap-5 md:flex-row md:snap-x md:snap-mandatory md:overflow-x-auto md:pb-1 md:[-ms-overflow-style:none] md:[scrollbar-width:none] md:[&::-webkit-scrollbar]:hidden"
            >
              {rowItems.map((item, i) => {
                const title =
                  locale === "en" && item.title_en
                    ? item.title_en
                    : item.title_cs;
                const accent =
                  (item.category && CATEGORY_ACCENT[item.category]) ||
                  "#6b5e50";
                return (
                  <motion.article
                    key={item.id}
                    className="group w-full md:w-[calc((100%-1.25rem)/2)] md:shrink-0 md:snap-start lg:w-[calc((100%-2.5rem)/3)]"
                    custom={i}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                  >
                    <div className="relative overflow-hidden">
                      <div className="relative aspect-[3/4] w-full overflow-hidden bg-stone-200 transition-transform duration-700 group-hover:scale-105">
                        {item.images[0] && (
                          <Image
                            src={item.images[0].url}
                            alt={title}
                            fill
                            className="object-cover"
                            sizes="(min-width: 1024px) 384px, (min-width: 768px) 50vw, 100vw"
                          />
                        )}
                        {item.category && CATEGORY_ACCENT[item.category] && (
                          <div className="absolute top-3 right-3 z-10">
                            <span
                              className="px-2.5 py-1 text-[0.6rem] tracking-[0.2em] uppercase"
                              style={{
                                background: "rgba(250,250,248,0.82)",
                                color: accent,
                                backdropFilter: "blur(4px)",
                              }}
                            >
                              {tCat(item.category)}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div
                      className="border border-t-0 border-stone-200 px-4 py-3"
                      style={{ background: "#fafaf8" }}
                    >
                      <p className="font-serif text-sm tracking-wide text-stone-700">
                        {title}
                      </p>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
