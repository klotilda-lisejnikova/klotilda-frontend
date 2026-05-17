import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Navigation from "./Navigation";

export default function Header() {
  const t = useTranslations("nav");

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-[#FAFAF8]/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-8">
        <Link
          href="/"
          className="font-serif text-xl tracking-[0.2em] text-stone-800 transition-opacity hover:opacity-70"
        >
          KLOTILDA
        </Link>
        <Navigation
          links={[
            { href: "/#about", label: t("about") },
            { href: "/#gallery", label: t("gallery") },
            { href: "/shop", label: t("shop") },
            { href: "/#contact", label: t("contact") },
          ]}
        />
      </div>
    </header>
  );
}
