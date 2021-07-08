import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignSupplierToPublicTenderComponent } from './assign-supplier-to-public-tender.component';

describe('AssignSupplierToPublicTenderComponent', () => {
  let component: AssignSupplierToPublicTenderComponent;
  let fixture: ComponentFixture<AssignSupplierToPublicTenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignSupplierToPublicTenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignSupplierToPublicTenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
