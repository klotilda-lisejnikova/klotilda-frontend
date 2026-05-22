export type ProductCategory = 'keramika' | 'textil' | 'vysivky';
export type ImageField = 'image1' | 'image2' | 'image3';

export interface Product {
  id: string;
  name_cs: string;
  name_en: string | null;
  description_cs: string | null;
  description_en: string | null;
  price: number;
  category: ProductCategory;
  stockCount: number;
  active: boolean;
}

export interface CreateProduct {
  name_cs: string;
  name_en?: string;
  description_cs?: string;
  description_en?: string;
  price: number;
  category: ProductCategory;
  stockCount?: number;
  active?: boolean;
}

export type UpdateProduct = Partial<CreateProduct>;

export interface OrderItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
}

export type ShippingMethod = 'zasilkovna' | 'ceska_posta' | 'osobni_odber';
export type PaymentMethod = 'card' | 'qr';
export type PaymentStatus = 'pending' | 'paid' | 'failed' | 'refunded';
export type OrderStatus = 'new' | 'processing' | 'shipped' | 'delivered' | 'cancelled';

export interface Order {
  id: string;
  customerFirstName: string;
  customerLastName: string;
  customerEmail: string;
  customerPhone: string | null;
  street: string;
  city: string;
  zip: string;
  shippingMethod: ShippingMethod;
  shippingPrice: number;
  items: OrderItem[];
  totalAmount: number;
  paymentMethod: PaymentMethod;
  paymentStatus: PaymentStatus;
  orderStatus: OrderStatus;
  comgateTransactionId: string | null;
  notes: string | null;
}

export interface CreateOrder {
  customerFirstName: string;
  customerLastName: string;
  customerEmail: string;
  customerPhone?: string;
  street: string;
  city: string;
  zip: string;
  shippingMethod: ShippingMethod;
  shippingPrice: number;
  items: OrderItem[];
  totalAmount: number;
  paymentMethod: PaymentMethod;
  notes?: string;
}

export interface PlaceOrderResponse {
  id: string;
  redirectUrl: string;
}
