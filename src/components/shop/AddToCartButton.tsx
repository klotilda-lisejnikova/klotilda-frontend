"use client";

import { useTranslations } from "next-intl";
import { useCartStore } from "@/store/cart.store";

interface Props {
  productId: string;
  name: string;
  price: number;
  inStock: boolean;
}

export default function AddToCartButton({ productId, name, price, inStock }: Props) {
  const t = useTranslations("shop");
  const { items, addItem } = useCartStore();
  const inCart = items.some((i) => i.productId === productId);
  const disabled = !inStock || inCart;

  return (
    <button
      onClick={() => addItem({ productId, name, price })}
      disabled={disabled}
      className={`w-full py-3 text-sm tracking-widest uppercase transition-colors ${
        disabled
          ? "cursor-not-allowed bg-stone-200 text-stone-400"
          : "bg-stone-800 text-white hover:bg-stone-700"
      }`}
    >
      {!inStock ? t("soldOutBtn") : inCart ? t("inCart") : t("addToCart")}
    </button>
  );
}
