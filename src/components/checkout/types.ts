import { PaymentMethod, ShippingMethod } from "@/services";

export interface CheckoutData {
  customerFirstName: string;
  customerLastName: string;
  customerEmail: string;
  customerPhone: string;
  street: string;
  city: string;
  zip: string;
  shippingMethod: ShippingMethod;
  shippingPrice: number;
  paymentMethod: PaymentMethod;
  notes: string;
}

export const SHIPPING_PRICES: Record<ShippingMethod, number> = {
  zasilkovna: 99,
  ceska_posta: 129,
  osobni_odber: 0,
};

export const INITIAL_CHECKOUT: CheckoutData = {
  customerFirstName: "",
  customerLastName: "",
  customerEmail: "",
  customerPhone: "",
  street: "",
  city: "",
  zip: "",
  shippingMethod: "zasilkovna",
  shippingPrice: 99,
  paymentMethod: "card",
  notes: "",
};
