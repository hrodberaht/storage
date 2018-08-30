import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllegroSpyComponent } from './allegro-spy.component';

describe('AllegroSpyComponent', () => {
  let component: AllegroSpyComponent;
  let fixture: ComponentFixture<AllegroSpyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllegroSpyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllegroSpyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
