import { Component, OnInit } from "@angular/core";
import { ProductDataService } from "../../product-data.service";
import { Product } from "../../shared/product.model";
import { ActivatedRoute, Router } from "@angular/router";
import { NgForm } from "@angular/forms";

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
    private route: ActivatedRoute,
    private router: Router
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

  updateProduct(form: NgForm) {
    const id = { id: this.productItem.id };
    Object.assign(form.value, id); // object dont have id from form, assign it
    this.productItem = form.value;
    this.productDataService.updateProduct(form.value, this.productItem.id);
    this.toggleEditingProduct();
  }

  gotoProducts() {
    this.router.navigate(["/products"]);
  }
}
