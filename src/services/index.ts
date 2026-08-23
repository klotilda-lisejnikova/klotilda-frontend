import { AbstractServiceContainer } from '@eleansphere/service-core';
import { productEntity, orderEntity } from '@klotilda/klotilda-service';

export * from './types';

class ServiceContainer extends AbstractServiceContainer {
  readonly products: InstanceType<typeof productEntity.Service>;
  readonly orders: InstanceType<typeof orderEntity.Service>;

  constructor() {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL ?? '';
    super(baseUrl, () => null);
    this.products = new productEntity.Service(...this.args());
    this.orders = new orderEntity.Service(...this.args());
  }
}

export const services = new ServiceContainer();
