import { Suspense } from "react";
import { getTranslations } from "next-intl/server";
import { services, ProductCategory } from "@/services";
import CategoryFilter from "@/components/shop/CategoryFilter";
import ProductCard from "@/components/shop/ProductCard";

interface Props {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ category?: string; page?: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "shop" });
  return { title: t("title"), description: t("description") };
}

export default async function ShopPage({ params, searchParams }: Props) {
  const { locale } = await params;
  const { category, page } = await searchParams;
  const t = await getTranslations({ locale, namespace: "shop" });

  const validCategories: ProductCategory[] = ["keramika", "textil", "vysivky"];
  const activeCategory = validCategories.includes(category as ProductCategory)
    ? (category as ProductCategory)
    : undefined;

  let products: Awaited<ReturnType<typeof services.products.getAll>>["data"] = [];
  try {
    const result = await services.products.getAll({
      category: activeCategory,
      page: page ? Number(page) : 1,
      limit: 24,
    });
    products = result.data;
  } catch {
    // API nedostupné — zobrazíme prázdný stav
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="mb-2 text-3xl font-light tracking-wide text-stone-800">
        {t("title")}
      </h1>
      <p className="mb-8 text-sm text-stone-500">{t("description")}</p>

      <Suspense>
        <CategoryFilter />
      </Suspense>

      <div className="mt-10">
        {products.length === 0 ? (
          <p className="py-16 text-center text-sm text-stone-400">{t("empty")}</p>
        ) : (
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} locale={locale} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
