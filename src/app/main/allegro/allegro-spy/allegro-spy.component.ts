import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-allegro-spy",
  templateUrl: "./allegro-spy.component.html",
  styleUrls: ["./allegro-spy.component.css"]
})
export class AllegroSpyComponent implements OnInit {
  search = new FormGroup({
    productName: new FormControl(),
    ean: new FormControl()
  });
  constructor() {}

  ngOnInit() {}

  onSubmit() {
    console.log(this.search.value);
  }
}
