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
  editingProduct: boolean;
  constructor(
    private productDataService: ProductDataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.editingProduct = false;
    this.route.params.subscribe(x => {
      this.productItem = this.productDataService.getProduct(+x.id);
    });
  }

  toggleEditingProduct() {
    this.editingProduct = !this.editingProduct;
  }

  updateProduct(product) {
    let id = { id: this.productItem.id };
    Object.assign(product.value, id); // object dont have id, assign it
    this.productItem = product.value;
    this.productDataService.updateProduct(product.value, this.productItem.id);
    this.toggleEditingProduct();
  }
}
