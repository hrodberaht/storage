import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { AllegroService } from "../allegro.service";
import { ProductsToSpy } from "../../shared/products-to-spy.model";

@Component({
  selector: "app-allegro-spy",
  templateUrl: "./allegro-spy.component.html",
  styleUrls: ["./allegro-spy.component.css"]
})
export class AllegroSpyComponent implements OnInit {
  toggleAddToSpy: boolean;
  productsToSpy: ProductsToSpy[];

  search = new FormGroup({
    productName: new FormControl(),
    ean: new FormControl()
  });

  constructor(private allegroService: AllegroService) {}

  ngOnInit() {
    this.toggleAddToSpy = false;
    this.productsToSpy = this.allegroService.getProductsToSpy();
  }

  addProduct() {
    this.allegroService.addProduct(this.search);
  }

  onToggleAddToSpy() {
    this.toggleAddToSpy = !this.toggleAddToSpy;
  }
}
