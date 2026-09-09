import { createServiceContainer } from "@eleansphere/entity-core";
import {
  productEntity,
  orderEntity,
  galleryItemEntity,
} from "@klotilda-lisejnikova/klotilda-service";

export * from "./types";

export const services = createServiceContainer(
  {
    products: productEntity,
    orders: orderEntity,
    gallery: galleryItemEntity,
  },
  process.env.NEXT_PUBLIC_API_URL ?? "",
  () => null,
);
