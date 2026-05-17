import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("home.hero");

  return (
    <section className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 text-center">
      <h1 className="font-serif text-6xl font-light tracking-widest text-stone-800 md:text-8xl">
        {t("title")}
      </h1>
      <p className="mt-4 text-lg font-light tracking-wide text-stone-500">
        {t("subtitle")}
      </p>
    </section>
  );
}
