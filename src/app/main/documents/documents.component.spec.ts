import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DocumentsComponent } from "./documents.component";
import { InvoicesListComponent } from "./invoices-list/invoices-list.component";
import { InvoiceAddComponent } from "./invoices-list/invoice-add/invoice-add.component";

describe("DocumentsComponent", () => {
  let component: DocumentsComponent;
  let fixture: ComponentFixture<DocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DocumentsComponent,
        InvoicesListComponent,
        InvoiceAddComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
