import { Component, OnInit, Input } from "@angular/core";
import { Router, NavigationExtras } from "@angular/router";

@Component({
  selector: "app-product-item",
  templateUrl: "./product-item.component.html",
  styleUrls: ["./product-item.component.css"]
})
export class ProductItemComponent implements OnInit {
  @Input()
  productItem;
  constructor(private router: Router) { }

  ngOnInit() { }

  addToAllegroSpy() {
    const nanigationExtras: NavigationExtras = {
      queryParams: { ean: this.productItem.ean },
      fragment: this.productItem.id
    };
    this.router.navigate(['/allegro/spy'],
      nanigationExtras
    );
  }
}
