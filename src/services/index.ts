import { AbstractServiceContainer } from '@eleansphere/service-core';
import { OrderService } from './order.service';
import { ProductService } from './product.service';

export * from './types';
export * from './product.service';
export * from './order.service';

class ServiceContainer extends AbstractServiceContainer {
  readonly products: ProductService;
  readonly orders: OrderService;

  constructor() {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL ?? '';
    super(baseUrl, () => null);
    this.products = new ProductService(...this.args());
    this.orders = new OrderService(...this.args());
  }
}

export const services = new ServiceContainer();
