import { Component, OnInit } from "@angular/core";
import { ProductDataService } from "../../product-data.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-product-add",
  templateUrl: "./product-add.component.html",
  styleUrls: ["./product-add.component.css"]
})
export class ProductAddComponent implements OnInit {
  constructor(private productDataService: ProductDataService) {}

  ngOnInit() {}

  addProduct(form: NgForm) {
    this.productDataService.addProduct(form.value);
    form.reset();
  }
}
