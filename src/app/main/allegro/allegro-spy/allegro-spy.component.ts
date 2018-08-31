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
  toggleShowAuctions: boolean;
  toggleAddAuction: boolean;
  productsToSpy: ProductsToSpy[];

  search = new FormGroup({
    productName: new FormControl(),
    ean: new FormControl()
  });

  auctionId = new FormControl();
  constructor(private allegroService: AllegroService) {}

  ngOnInit() {
    this.toggleAddToSpy = false;
    this.toggleShowAuctions = false;
    this.toggleAddAuction = false;
    this.productsToSpy = this.allegroService.getProductsToSpy();
  }

  onSubmit() {
    console.log(this.search.value);
  }

  onAddAuction(i) {
    this.allegroService.addAuction(i, this.auctionId.value);
  }

  onToggleAddToSpy() {
    this.toggleAddToSpy = !this.toggleAddToSpy;
  }

  onToggleShowAuctions() {
    this.toggleShowAuctions = !this.toggleShowAuctions;
  }

  onToggleAddAuction() {
    this.toggleAddAuction = !this.toggleAddAuction;
  }
}
