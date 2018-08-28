import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-invoice-add",
  templateUrl: "./invoice-add.component.html",
  styleUrls: ["./invoice-add.component.css"]
})
export class InvoiceAddComponent implements OnInit {
  invoiceForm: FormGroup;

  constructor() {}

  ngOnInit() {
    this.invoiceForm = new FormGroup({
      supplier: new FormControl(null, Validators.required),
      invoiceNumber: new FormControl(null, [
        Validators.required,
        Validators.minLength(3)
      ])
    });
  }

  onSubmit() {
    console.log(this.invoiceForm);
  }
}
