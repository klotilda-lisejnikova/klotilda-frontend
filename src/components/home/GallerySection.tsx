"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { getGalleryTranslations } from "@/i18n/home";
import { artworks } from "@/data/artworks";
import FadeIn from "@/components/ui/FadeIn";
import type { Locale } from "@/types/locale";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
  }),
};

export default function GallerySection() {
  const t = useTranslations("home");
  const gallery = getGalleryTranslations(t);
  const locale = useLocale() as Locale;

  return (
    <section
      id="gallery"
      className="scroll-mt-16 py-28 md:py-36"
      style={{ background: "#f5efe6" }}
    >
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <FadeIn className="mb-14 flex items-end gap-3">
          <span
            className="font-serif text-9xl leading-none font-light text-stone-300/60 select-none"
            aria-hidden="true"
          >
            {gallery.number}
          </span>
          <div className="mb-2">
            <h2 className="font-serif text-2xl font-light tracking-[0.2em] text-stone-800">
              {gallery.title}
            </h2>
            <p className="mt-1 text-xs tracking-widest text-stone-500">
              {gallery.subtitle}
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {artworks.map((artwork, i) => (
            <motion.article
              key={artwork.id}
              className="group"
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              <div className="relative overflow-hidden">
                <div
                  className="relative aspect-square w-full overflow-hidden transition-transform duration-700 group-hover:scale-105"
                  style={{ background: artwork.gradient }}
                >
                  {artwork.image && (
                    <Image
                      src={artwork.image}
                      alt={artwork.name[locale]}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  )}
                  <div className="absolute top-3 right-3 z-10">
                    <span
                      className="px-2.5 py-1 text-[0.6rem] tracking-[0.2em] uppercase"
                      style={{
                        background: "rgba(250,250,248,0.82)",
                        color: artwork.accent,
                        backdropFilter: "blur(4px)",
                      }}
                    >
                      {artwork.category[locale]}
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="border border-t-0 border-stone-200 px-4 py-3"
                style={{ background: "#fafaf8" }}
              >
                <p className="font-serif text-sm tracking-wide text-stone-700">
                  {artwork.name[locale]}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
