import { Component, OnInit } from "@angular/core";
import { ProductDataService } from "../../product-data.service";
import { Product } from "../../shared/product.model";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.css"]
})
export class ProductDetailComponent implements OnInit {
  productItem: Product;
  constructor(
    private productDataService: ProductDataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(x => {
      this.productItem = this.productDataService.getProduct(+x.id);
    });
  }
}
