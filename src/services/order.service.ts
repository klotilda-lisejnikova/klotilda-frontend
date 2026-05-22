import { AbstractCrudService } from '@eleansphere/service-core';
import { CreateOrder, Order, OrderStatus, PlaceOrderResponse } from './types';

export class OrderService extends AbstractCrudService<Order, CreateOrder, Partial<Order>> {
  protected readonly basePath = '/api/orders';

  placeOrder(data: CreateOrder): Promise<PlaceOrderResponse> {
    return this.post(this.basePath, data);
  }

  updateStatus(id: string, orderStatus: OrderStatus): Promise<Order> {
    return this.put(`${this.basePath}/${id}/status`, { orderStatus });
  }
}
