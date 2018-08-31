import { Injectable } from "@angular/core";
import { PRODUCTS_TO_SPY } from "../shared/mock-products-to-spy";
import { ProductsToSpy } from "../shared/products-to-spy.model";
import { ProductDataService } from "../product-data.service";

@Injectable({
  providedIn: "root"
})
export class AllegroService {
  productsToSpy: ProductsToSpy[] = PRODUCTS_TO_SPY;
  constructor(private productsData: ProductDataService) {}

  getProductsToSpy() {
    return this.productsToSpy;
  }

  addProduct(search) {
    if (search.value.ean) {
      const product = this.productsData.getProductByEan(search.value.ean);
      const productToSpy = {
        ean: product.ean,
        auctions: []
      };
      this.productsToSpy.push(productToSpy);
    }
  }

  addAuction(index, id) {
    this.productsToSpy[index].auctions.push({ auctionId: +id });
  }

  removeAuction(index, i) {
    this.productsToSpy[index].auctions.splice(i, 1);
  }
}
