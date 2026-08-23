import type { productEntity, orderEntity } from '@klotilda-lisejnikova/klotilda-service';

export type {
  ProductCategory,
  ImageField,
  ShippingMethod,
  PaymentStatus,
  OrderStatus,
  PlaceOrderResponse,
  CartItem as OrderItem,
} from '@klotilda-lisejnikova/klotilda-service';

export type Product = InstanceType<typeof productEntity.Dto>;
export type CreateProduct = InstanceType<typeof productEntity.CreateDto>;
export type UpdateProduct = InstanceType<typeof productEntity.UpdateDto>;

export type Order = InstanceType<typeof orderEntity.Dto>;
export type CreateOrder = InstanceType<typeof orderEntity.CreateDto>;
