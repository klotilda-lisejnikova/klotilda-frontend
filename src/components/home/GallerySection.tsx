"use client";

import { useTranslations, useLocale } from "next-intl";
import { getGalleryTranslations } from "@/i18n/home";
import { artworks } from "@/data/artworks";
import type { Locale } from "@/types/locale";

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
        <div className="mb-14 flex items-end gap-3">
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
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {artworks.map((artwork) => (
            <article key={artwork.id} className="group">
              <div className="relative overflow-hidden">
                <div
                  className="aspect-square w-full transition-transform duration-700 group-hover:scale-105"
                  style={{ background: artwork.gradient }}
                >
                  <div
                    aria-hidden="true"
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(45deg, transparent, transparent 18px, rgba(255,255,255,0.07) 18px, rgba(255,255,255,0.07) 19px)",
                    }}
                  />
                  <div className="absolute top-3 right-3">
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
