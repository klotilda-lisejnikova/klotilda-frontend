"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { getAboutTranslations } from "@/i18n/home";
import FadeIn from "@/components/ui/FadeIn";

export default function AboutSection() {
  const t = useTranslations("home");
  const about = getAboutTranslations(t);

  return (
    <section id="about" className="scroll-mt-16 py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20">
          <FadeIn direction="left" className="flex flex-col justify-center">
            <div className="mb-8 flex items-end gap-3">
              <span
                className="font-serif text-9xl leading-none font-light text-stone-200 select-none"
                aria-hidden="true"
              >
                {about.number}
              </span>
              <h2 className="mb-2 font-serif text-2xl font-light tracking-[0.2em] text-stone-800">
                {about.title}
              </h2>
            </div>

            <p className="mb-5 leading-relaxed text-stone-600">{about.bio1}</p>
            <p className="mb-10 leading-relaxed text-stone-600">{about.bio2}</p>

            <div className="flex flex-wrap gap-2">
              {(["ceramics", "textiles", "embroidery"] as const).map(
                (craft) => (
                  <span
                    key={craft}
                    className="border border-stone-300 px-4 py-1.5 text-[0.7rem] tracking-[0.25em] text-stone-500 uppercase"
                  >
                    {about.crafts[craft]}
                  </span>
                ),
              )}
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.15} className="relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src="/images/me_portrait.jpg"
                alt="Klotilda — ateliér"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div
              aria-hidden="true"
              className="absolute -right-5 -bottom-5 hidden h-28 w-28 md:block"
              style={{ background: "#d4c4a8" }}
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
