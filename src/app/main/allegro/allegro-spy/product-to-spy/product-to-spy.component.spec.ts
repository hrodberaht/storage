import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductToSpyComponent } from './product-to-spy.component';

describe('ProductToSpyComponent', () => {
  let component: ProductToSpyComponent;
  let fixture: ComponentFixture<ProductToSpyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductToSpyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductToSpyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
