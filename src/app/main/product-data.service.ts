import { Injectable } from "@angular/core";
import { PRODUCT } from "./shared/mock-product";
import { Product } from "./shared/product.model";

@Injectable({
  providedIn: "root"
})
export class ProductDataService {
  products: Product[] = PRODUCT;
  constructor() {}

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id: number): Product {
    return this.products.find((prod: any) => {
      if (prod.id === id) {
        return prod;
      }
    });
  }

  addProduct(product: Product) {
    const id = { id: this.getLastId() };
    Object.assign(product, id);
    this.products.push(product);
  }

  updateProduct(product: Product, id: number): void {
    let index = this.products.findIndex((prod: Product) => {
      return prod.id === id;
    });
    this.products[index] = product;
  }

  getLastId(): number {
    return this.products[this.products.length - 1].id + 1;
  }
}
