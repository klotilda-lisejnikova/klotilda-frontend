import { AbstractCrudService, PaginationParams } from '@eleansphere/service-core';
import { CreateProduct, ImageField, Product, ProductCategory, UpdateProduct } from './types';

export interface ProductParams extends PaginationParams {
  category?: ProductCategory;
}

export class ProductService extends AbstractCrudService<Product, CreateProduct, UpdateProduct> {
  protected readonly basePath = '/api/products';

  getAll(params?: ProductParams) {
    return super.getAll(params);
  }

  uploadImage(id: string, field: ImageField, file: File): Promise<void> {
    return this.uploadFile(`${this.basePath}/${id}/${field}`, field, file);
  }

  getImageUrl(id: string, field: ImageField): string {
    return `${this.baseUrl}${this.basePath}/${id}/${field}`;
  }
}
