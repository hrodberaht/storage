import { Component, OnInit } from "@angular/core";
import { ProductDataService } from "../product-data.service";
import { Product } from "../shared/product.model";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  productsData: Product[];
  constructor(private productDataService: ProductDataService) {}

  ngOnInit() {
    this.productsData = this.productDataService.getProducts();
  }
}
