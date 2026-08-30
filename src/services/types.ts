import type {
  productEntity,
  orderEntity,
  ProductDto,
} from "@klotilda-lisejnikova/klotilda-service";

export type {
  ProductCategory,
  ProductDto,
  ProductImage,
  ShippingMethod,
  PaymentStatus,
  OrderStatus,
  PlaceOrderResponse,
  CartItem as OrderItem,
} from "@klotilda-lisejnikova/klotilda-service";

/** Read shape — includes the `images` array the API attaches from the file service. */
export type Product = ProductDto;
export type CreateProduct = InstanceType<typeof productEntity.CreateDto>;
export type UpdateProduct = InstanceType<typeof productEntity.UpdateDto>;

export type Order = InstanceType<typeof orderEntity.Dto>;
export type CreateOrder = InstanceType<typeof orderEntity.CreateDto>;
