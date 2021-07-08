import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierTendersComponent } from './supplier-tenders.component';

describe('SupplierTendersComponent', () => {
  let component: SupplierTendersComponent;
  let fixture: ComponentFixture<SupplierTendersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierTendersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierTendersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
