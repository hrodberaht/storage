import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { ProductDataService } from '../../../product-data.service';

@Component({
  selector: 'app-invoice-add',
  templateUrl: './invoice-add.component.html',
  styleUrls: ['./invoice-add.component.css']
})
export class InvoiceAddComponent implements OnInit {
  invoiceForm: FormGroup;

  constructor(private fb: FormBuilder,
    private productData:  ProductDataService) {}

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
    this.productsForms.controls.map(product => {
      this.productData.getProductByEan(product.value.ean).quantity += product.value.quantity;
    });
  }

  addProduct() {
    const product = this.fb.group({
      ean: [],
      name: [],
      quantity: []
    });

    this.productsForms.push(product);
  }

  deleteProduct(i) {
    this.productsForms.removeAt(i);
  }

  findProduct(i) {
    const product = this.productsForms.controls[i].value;
    const prod = this.productData.getProductByEan(product.ean);
    this.productsForms.controls[i].patchValue({name: prod.name});
    console.log(prod);
  }
}
