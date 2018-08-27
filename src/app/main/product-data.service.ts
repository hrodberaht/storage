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
}
