import { Component, OnInit, Input } from "@angular/core";
import { AllegroService } from "../../allegro.service";
import { FormControl } from "@angular/forms";


@Component({
  selector: "app-product-to-spy",
  templateUrl: "./product-to-spy.component.html",
  styleUrls: ["./product-to-spy.component.css"]
})
export class ProductToSpyComponent implements OnInit {
  @Input()
  productToSpy;
  @Input()
  indexOfProduct;

  toggleShowAuctions: boolean;
  toggleAddAuction: boolean;


  auctionId = new FormControl();

  constructor(private allegroService: AllegroService,
  ) { }

  ngOnInit() {
    this.toggleShowAuctions = false;
    this.toggleAddAuction = false;




  }

  addAuction() {
    this.allegroService.addAuction(this.indexOfProduct, this.auctionId.value);
    this.auctionId.reset();
  }

  removeAuction(i) {
    this.allegroService.removeAuction(this.indexOfProduct, i);
  }

  onToggleShowAuctions() {
    this.toggleShowAuctions = !this.toggleShowAuctions;
  }

  onToggleAddAuction() {
    this.toggleAddAuction = !this.toggleAddAuction;
  }
}
