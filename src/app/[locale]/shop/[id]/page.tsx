import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { services } from "@/services";
import AddToCartButton from "@/components/shop/AddToCartButton";
import ProductGallery from "@/components/shop/ProductGallery";

export const dynamic = 'force-dynamic';

interface Props {
  params: Promise<{ locale: string; id: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { locale, id } = await params;
  try {
    const product = await services.products.getById(id);
    const name = locale === "en" && product.name_en ? product.name_en : product.name_cs;
    return { title: name };
  } catch {
    return {};
  }
}

export default async function ProductDetailPage({ params }: Props) {
  const { locale, id } = await params;
  const t = await getTranslations({ locale, namespace: "shop" });

  let product;
  try {
    product = await services.products.getById(id);
  } catch {
    notFound();
  }

  const name = locale === "en" && product.name_en ? product.name_en : product.name_cs;
  const description =
    locale === "en" && product.description_en
      ? product.description_en
      : product.description_cs;
  const inStock = product.stockCount > 0;

  const imageUrls = {
    image1: services.products.getImageUrl(id, "image1"),
    image2: services.products.getImageUrl(id, "image2"),
    image3: services.products.getImageUrl(id, "image3"),
  };

  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <Link
        href="/shop"
        className="mb-10 inline-flex items-center gap-1 text-sm text-stone-400 hover:text-stone-700"
      >
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
        </svg>
        {t("title")}
      </Link>

      <div className="grid gap-12 md:grid-cols-2">
        <ProductGallery imageUrls={imageUrls} alt={name} />

        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-2xl font-light tracking-wide text-stone-800">{name}</h1>
            <p className="mt-1 text-sm text-stone-400">
              {inStock ? t("inStock") : t("soldOut")}
            </p>
          </div>

          <p className="text-2xl text-stone-700">
            {product.price.toLocaleString("cs-CZ")}&nbsp;{t("currency")}
          </p>

          {description && (
            <p className="text-sm leading-relaxed text-stone-600">{description}</p>
          )}

          <AddToCartButton
            productId={product.id}
            name={name}
            price={product.price}
            inStock={inStock}
          />
        </div>
      </div>
    </section>
  );
}
