import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");

  const links = [
    { href: "/#about", label: tNav("about") },
    { href: "/#gallery", label: tNav("gallery") },
    { href: "/shop", label: tNav("shop") },
    { href: "/#contact", label: tNav("contact") },
  ];

  return (
    <footer className="border-t border-stone-200 bg-[#FAFAF8]">
      <div className="mx-auto max-w-6xl px-4 py-5 md:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          {/* Brand */}
          <div>
            <span className="font-serif text-sm tracking-[0.2em] text-stone-700">
              KLOTILDA
            </span>
            <p className="mt-0.5 text-xs text-stone-400">{t("tagline")}</p>
          </div>

          {/* Nav + copyright */}
          <div className="flex flex-col items-start gap-2 sm:items-end">
            <nav className="flex flex-wrap gap-x-5 gap-y-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs tracking-wide text-stone-500 transition-colors hover:text-stone-800"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <p className="text-xs text-stone-400">{t("copyright")}</p>
          </div>

        </div>
      </div>
    </footer>
  );
}
