import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "checkoutResult" });
  return { title: t("cancelTitle") };
}

export default async function CheckoutCancelPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "checkoutResult" });

  return (
    <div className="mx-auto max-w-lg px-4 py-32 text-center">
      <div className="mb-6 text-4xl">✕</div>
      <h1 className="mb-3 text-2xl font-light tracking-wide text-stone-800">
        {t("cancelTitle")}
      </h1>
      <p className="mb-8 text-sm text-stone-500">{t("cancelBody")}</p>
      <Link
        href="/checkout"
        className="inline-block bg-stone-800 px-8 py-3 text-sm tracking-widest uppercase text-white hover:bg-stone-700 transition-colors"
      >
        {t("tryAgain")}
      </Link>
    </div>
  );
}
