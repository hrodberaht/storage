import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { ProductsComponent } from "./main/products/products.component";
import { DocumentsComponent } from "./main/documents/documents.component";
import { ProductDetailComponent } from "./main/products/product-detail/product-detail.component";
import { ProductAddComponent } from "./main/products/product-add/product-add.component";
import { InvoiceAddComponent } from "./main/documents/invoices-list/invoice-add/invoice-add.component";

const routes: Routes = [
  { path: "", component: MainComponent },
  { path: "products", component: ProductsComponent },
  { path: "products/add", component: ProductAddComponent },
  { path: "products/:id", component: ProductDetailComponent },
  { path: "documents", component: DocumentsComponent },
  { path: "documents/invoices/add", component: InvoiceAddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
