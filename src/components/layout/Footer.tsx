import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-stone-200 bg-[#FAFAF8]">
      <div className="mx-auto max-w-6xl px-4 py-8 md:px-8">
        <div className="flex flex-col items-center gap-2 text-center">
          <span className="font-serif tracking-[0.2em] text-stone-700">
            KLOTILDA
          </span>
          <p className="text-sm text-stone-500">{t("tagline")}</p>
          <p className="mt-2 text-xs text-stone-400">{t("copyright")}</p>
        </div>
      </div>
    </footer>
  );
}
