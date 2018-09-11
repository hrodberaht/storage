import { Injectable } from '@angular/core';
import { PRODUCT } from './shared/mock-product';
import { Product } from './shared/product.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {
  products: Product[] = PRODUCT;
  subject = new BehaviorSubject<Product[]>(this.products);

  constructor() {
    // setTimeout(() => {
    //   this.subject.next(
    //     (this.products = [
    //       {
    //         id: 13,
    //         name: "RxJS",
    //         ean: 45345345,
    //         price: 12.5,
    //         imgUrl: "string"
    //       }
    //     ])
    //   );
    // }, 5000);
  }

  getProducts() {
    return this.subject;
  }

  getProduct(id: number): Product {
    return this.products.find((prod: any) => {
      if (prod.id === id) {
        return prod;
      }
    });
  }

  getProductByEan(ean: number): Product {
    return this.products.find((prod: any) => {
      if (prod.ean === ean) {
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
    const index = this.products.findIndex((prod: Product) => {
      return prod.id === id;
    });
    this.products[index] = product;
  }

  getLastId(): number {
    return this.products[this.products.length - 1].id + 1;
  }
}
