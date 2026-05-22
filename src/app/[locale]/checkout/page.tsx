"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Link } from "@/i18n/navigation";
import { services } from "@/services";
import { useCartStore } from "@/store/cart.store";
import StepIndicator from "@/components/checkout/StepIndicator";
import Step1Contact from "@/components/checkout/Step1Contact";
import Step2Shipping from "@/components/checkout/Step2Shipping";
import Step3Payment from "@/components/checkout/Step3Payment";
import Step4Summary from "@/components/checkout/Step4Summary";
import { CheckoutData, INITIAL_CHECKOUT } from "@/components/checkout/types";

export default function CheckoutPage() {
  const t = useTranslations("checkout");
  const { items, totalPrice, clearCart } = useCartStore();
  const [step, setStep] = useState(0);
  const [data, setData] = useState<CheckoutData>(INITIAL_CHECKOUT);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const update = (patch: Partial<CheckoutData>) =>
    setData((prev) => ({ ...prev, ...patch }));

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    try {
      const { redirectUrl } = await services.orders.placeOrder({
        customerFirstName: data.customerFirstName,
        customerLastName: data.customerLastName,
        customerEmail: data.customerEmail,
        customerPhone: data.customerPhone || undefined,
        street: data.street,
        city: data.city,
        zip: data.zip,
        shippingMethod: data.shippingMethod,
        shippingPrice: data.shippingPrice,
        items: items.map((i) => ({
          productId: i.productId,
          name: i.name,
          price: i.price,
          quantity: i.quantity,
        })),
        totalAmount: totalPrice() + data.shippingPrice,
        paymentMethod: data.paymentMethod,
        notes: data.notes || undefined,
      });
      clearCart();
      window.location.href = redirectUrl;
    } catch {
      setError("error");
      setLoading(false);
    }
  };

  if (items.length === 0 && step === 0) {
    return (
      <div className="mx-auto max-w-lg px-4 py-32 text-center">
        <p className="mb-6 text-stone-500">{t("emptyCart")}</p>
        <Link
          href="/shop"
          className="inline-block bg-stone-800 px-8 py-3 text-sm tracking-widest uppercase text-white hover:bg-stone-700 transition-colors"
        >
          {t("goToShop")}
        </Link>
      </div>
    );
  }

  return (
    <section className="mx-auto max-w-lg px-4 py-16 sm:px-6">
      <div className="mb-10 flex justify-center">
        <StepIndicator current={step} />
      </div>

      {step === 0 && (
        <Step1Contact data={data} onChange={update} onNext={() => setStep(1)} />
      )}
      {step === 1 && (
        <Step2Shipping
          data={data}
          onChange={update}
          onNext={() => setStep(2)}
          onBack={() => setStep(0)}
        />
      )}
      {step === 2 && (
        <Step3Payment
          data={data}
          onChange={update}
          onNext={() => setStep(3)}
          onBack={() => setStep(1)}
        />
      )}
      {step === 3 && (
        <Step4Summary
          data={data}
          onChange={update}
          items={items}
          onSubmit={handleSubmit}
          onBack={() => setStep(2)}
          loading={loading}
          error={error}
        />
      )}
    </section>
  );
}
