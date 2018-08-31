import { Injectable } from "@angular/core";
import { PRODUCTS_TO_SPY } from "../shared/mock-products-to-spy";
import { ProductsToSpy } from "../shared/products-to-spy.model";
import { NgForm } from "@angular/forms";
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
    console.log(search);
    if (search.value.ean) {
      const product = this.productsData.getProductByEan(search.value.ean);
      console.log(product);
      const productToSpy = {
        ean: product.ean,
        auctions: []
      };
      this.productsToSpy.push(productToSpy);
    }
  }

  addAuction(indexOfProduct, id) {
    console.log(this.productsToSpy);
    this.productsToSpy[indexOfProduct].auctions.push({ auctionId: +id });
  }

  removeAuction(indexOfAuction, indexOfProduct) {
    this.productsToSpy[indexOfProduct].auctions.splice(indexOfAuction, 1);
  }
}
