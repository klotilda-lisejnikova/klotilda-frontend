import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Product } from "@/services";
import { services } from "@/services";

interface Props {
  product: Product;
  locale: string;
}

export default function ProductCard({ product, locale }: Props) {
  const t = useTranslations("shop");
  const name = locale === "en" && product.name_en ? product.name_en : product.name_cs;
  const imageUrl = services.products.getImageUrl(product.id, "image1");
  const inStock = product.stockCount > 0;

  return (
    <Link href={`/shop/${product.id}`} className="group block">
      <div className="relative aspect-square overflow-hidden bg-stone-100">
        <Image
          src={imageUrl}
          alt={name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {!inStock && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <span className="bg-white px-3 py-1 text-xs tracking-widest text-stone-800 uppercase">
              {t("soldOut")}
            </span>
          </div>
        )}
      </div>
      <div className="mt-3 flex items-start justify-between gap-2">
        <div>
          <p className="text-sm font-medium text-stone-800">{name}</p>
          {inStock && (
            <p className="mt-0.5 text-xs text-stone-400">{t("inStock")}</p>
          )}
        </div>
        <p className="shrink-0 text-sm text-stone-700">
          {product.price.toLocaleString("cs-CZ")}&nbsp;{t("currency")}
        </p>
      </div>
    </Link>
  );
}
