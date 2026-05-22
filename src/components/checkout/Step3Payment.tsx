import { useTranslations } from "next-intl";
import { PaymentMethod } from "@/services";
import { CheckoutData } from "./types";

interface Props {
  data: CheckoutData;
  onChange: (data: Partial<CheckoutData>) => void;
  onNext: () => void;
  onBack: () => void;
}

const METHODS: Array<{ key: PaymentMethod; icon: string }> = [
  { key: "card", icon: "💳" },
  { key: "qr", icon: "📱" },
];

export default function Step3Payment({ data, onChange, onNext, onBack }: Props) {
  const t = useTranslations("checkout");

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        {METHODS.map(({ key, icon }) => {
          const active = data.paymentMethod === key;
          return (
            <button
              key={key}
              type="button"
              onClick={() => onChange({ paymentMethod: key })}
              className={`flex items-start gap-4 border px-4 py-4 text-left transition-colors ${
                active ? "border-stone-800 bg-stone-50" : "border-stone-200 hover:border-stone-400"
              }`}
            >
              <div
                className={`mt-0.5 h-4 w-4 shrink-0 rounded-full border-2 ${
                  active ? "border-stone-800 bg-stone-800" : "border-stone-300"
                }`}
              />
              <div>
                <p className="text-sm font-medium text-stone-800">
                  {icon} {t(`payment.${key}`)}
                </p>
                <p className="mt-0.5 text-xs text-stone-400">{t(`payment.${key}Desc`)}</p>
              </div>
            </button>
          );
        })}
      </div>

      <div className="flex gap-3">
        <button
          onClick={onBack}
          className="flex-1 border border-stone-300 py-3 text-sm tracking-widest uppercase text-stone-600 hover:border-stone-500 transition-colors"
        >
          {t("back")}
        </button>
        <button
          onClick={onNext}
          className="flex-1 bg-stone-800 py-3 text-sm tracking-widest uppercase text-white hover:bg-stone-700 transition-colors"
        >
          {t("next")}
        </button>
      </div>
    </div>
  );
}
