import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { MainComponent } from "./main/main.component";
import { NavComponent } from "./header/nav/nav.component";
import { ProductsComponent } from "./main/products/products.component";
import { DocumentsComponent } from "./main/documents/documents.component";
import { ProductsListComponent } from "./main/products/products-list/products-list.component";
import { ProductDetailComponent } from "./main/products/product-detail/product-detail.component";
import { ProductItemComponent } from "./main/products/products-list/product-item/product-item.component";
import { ProductAddComponent } from './main/products/product-add/product-add.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    NavComponent,
    ProductsComponent,
    DocumentsComponent,
    ProductsListComponent,
    ProductDetailComponent,
    ProductItemComponent,
    ProductAddComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
