import { Injectable } from "@angular/core";
import { PRODUCT } from "./shared/mock-product";
import { Product } from "./shared/product.model";

@Injectable({
  providedIn: "root"
})
export class ProductDataService {
  products: Product[] = PRODUCT;
  constructor() {}

  getProducts() {
    return this.products;
  }

  getProduct(id): Product {
    return this.products.find((prod: any) => {
      if (prod.id === id) {
        return prod;
      }
    });
  }

  updateProduct(product, id) {
    let index = this.products.findIndex((prod: Product) => {
      return prod.id === id;
    });
    this.products[index] = product;
  }
}
