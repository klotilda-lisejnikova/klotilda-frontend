"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { getCtaTranslations } from "@/i18n/home";
import FadeIn from "@/components/ui/FadeIn";

export default function CtaSection() {
  const t = useTranslations("home");
  const cta = getCtaTranslations(t);

  return (
    <section
      className="py-28 md:py-36"
      style={{
        background:
          "linear-gradient(135deg, #e8dece 0%, #d9c9ae 50%, #ccbb9c 100%)",
      }}
    >
      <FadeIn className="mx-auto max-w-2xl px-4 text-center">
        <div
          className="mx-auto mb-10 flex items-center justify-center gap-4"
          aria-hidden="true"
        >
          <div className="h-px w-12 bg-stone-600/30" />
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            className="text-stone-600/40"
          >
            <rect x="6" y="0" width="2" height="14" fill="currentColor" />
            <rect x="0" y="6" width="14" height="2" fill="currentColor" />
          </svg>
          <div className="h-px w-12 bg-stone-600/30" />
        </div>

        <h2 className="font-serif text-4xl font-light tracking-[0.15em] text-stone-800 md:text-5xl">
          {cta.title}
        </h2>
        <p className="mt-5 text-sm tracking-wide text-stone-600">
          {cta.subtitle}
        </p>
        <Link
          href="/shop"
          className="mt-10 inline-block border border-stone-700 px-10 py-3.5 text-[0.7rem] tracking-[0.3em] text-stone-700 uppercase transition-all hover:bg-stone-700 hover:text-[#fafaf8]"
        >
          {cta.button}
        </Link>
      </FadeIn>
    </section>
  );
}
