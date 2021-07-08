import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmednewsuppliersComponent } from './confirmednewsuppliers.component';

describe('ConfirmednewsuppliersComponent', () => {
  let component: ConfirmednewsuppliersComponent;
  let fixture: ComponentFixture<ConfirmednewsuppliersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmednewsuppliersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmednewsuppliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
