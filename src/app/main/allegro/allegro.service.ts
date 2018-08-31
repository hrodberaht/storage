import { Injectable } from "@angular/core";
import { PRODUCTS_TO_SPY } from "../shared/mock-products-to-spy";
import { ProductsToSpy } from "../shared/products-to-spy.model";

@Injectable({
  providedIn: "root"
})
export class AllegroService {
  productsToSpy: ProductsToSpy[] = PRODUCTS_TO_SPY;
  constructor() {}

  getProductsToSpy() {
    return this.productsToSpy;
  }

  addAuction(i, id) {
    console.log(this.productsToSpy);
    this.productsToSpy[i].auctions.push({ auctionId: id });
  }
}
