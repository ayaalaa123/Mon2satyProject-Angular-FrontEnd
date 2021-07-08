import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignSupplierToPrivateTenderComponent } from './assign-supplier-to-private-tender.component';

describe('AssignSupplierToPrivateTenderComponent', () => {
  let component: AssignSupplierToPrivateTenderComponent;
  let fixture: ComponentFixture<AssignSupplierToPrivateTenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignSupplierToPrivateTenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignSupplierToPrivateTenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
