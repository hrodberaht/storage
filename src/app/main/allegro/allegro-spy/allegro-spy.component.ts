import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";

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
  fragment: number;
  ean;

  search = new FormGroup({
    productName: new FormControl(),
    ean: new FormControl()
  });

  constructor(private allegroService: AllegroService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.toggleAddToSpy = false;
    this.productsToSpy = this.allegroService.getProductsToSpy();

    this.activatedRoute.queryParams.subscribe(params => {
      this.ean = +params.ean
    })

    this.activatedRoute.fragment.subscribe(fragment => {
      this.fragment = +fragment;
    })
    if (this.ean) {
      this.allegroService.addProduct(this.ean);
    }
  }

  addProduct() {
    this.allegroService.addProduct(this.search.value.ean);
  }

  onToggleAddToSpy() {
    this.toggleAddToSpy = !this.toggleAddToSpy;
  }
}
