import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-invoice-add',
  templateUrl: './invoice-add.component.html',
  styleUrls: ['./invoice-add.component.css']
})
export class InvoiceAddComponent implements OnInit {
  invoiceForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.invoiceForm = this.fb.group({
      supplier: [],
      invoiceNumber: [],
      date: [],
      products: this.fb.array([])
    });
  }

  get productsForms() {
    return this.invoiceForm.get('products') as FormArray;
  }

  onSubmit() {
    console.log(this.invoiceForm);
  }

  addProduct() {
    const product = this.fb.group({
      ean: [],
      name: [],
      quantity: []
    });
    console.log(product);

    this.productsForms.push(product);
  }

  deleteProduct(i) {
    this.productsForms.removeAt(i);
  }
}
