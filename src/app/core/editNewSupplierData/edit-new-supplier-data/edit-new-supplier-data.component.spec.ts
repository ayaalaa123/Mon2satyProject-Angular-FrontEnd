import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNewSupplierDataComponent } from './edit-new-supplier-data.component';

describe('EditNewSupplierDataComponent', () => {
  let component: EditNewSupplierDataComponent;
  let fixture: ComponentFixture<EditNewSupplierDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditNewSupplierDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditNewSupplierDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
