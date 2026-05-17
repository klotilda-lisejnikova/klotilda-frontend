"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggle = () => {
    router.replace(pathname, { locale: locale === "cs" ? "en" : "cs" });
  };

  return (
    <button
      onClick={toggle}
      className="text-xs font-medium tracking-widest text-stone-500 transition-colors hover:text-stone-900"
      aria-label="Switch language"
    >
      {locale === "cs" ? "EN" : "CZ"}
    </button>
  );
}
