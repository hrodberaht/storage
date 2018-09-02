import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryOrdersDataService } from "./main/orders/in-memory-orders-data.service";

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
import { ProductAddComponent } from "./main/products/product-add/product-add.component";
import { InvoicesListComponent } from "./main/documents/invoices-list/invoices-list.component";
import { InvoiceAddComponent } from "./main/documents/invoices-list/invoice-add/invoice-add.component";
import { AllegroComponent } from './main/allegro/allegro.component';
import { AllegroSpyComponent } from './main/allegro/allegro-spy/allegro-spy.component';
import { ProductToSpyComponent } from './main/allegro/allegro-spy/product-to-spy/product-to-spy.component';
import { OrdersComponent } from './main/orders/orders.component';
import { OrdersListComponent } from './main/orders/orders-list/orders-list.component';
import { HttpClientModule } from "@angular/common/http";
import { OrderSearchComponent } from './main/orders/orders-list/order-search/order-search.component';


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
    ProductAddComponent,
    InvoicesListComponent,
    InvoiceAddComponent,
    AllegroComponent,
    AllegroSpyComponent,
    ProductToSpyComponent,
    OrdersComponent,
    OrdersListComponent,
    OrderSearchComponent
  ],
  imports: [BrowserModule, ReactiveFormsModule, AppRoutingModule, FormsModule, HttpClientModule, HttpClientInMemoryWebApiModule.forRoot(
    InMemoryOrdersDataService, { dataEncapsulation: false }
  )],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
