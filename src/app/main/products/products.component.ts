import { Component, OnInit } from "@angular/core";
import { ProductDataService } from "../product-data.service";
import { Product } from "../shared/product.model";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  productsData = null;
  constructor(private productDataService: ProductDataService) {}
  ngOnInit() {
    this.productDataService.getProducts().subscribe(prod => {
      return (this.productsData = prod);
    });
  }
}
