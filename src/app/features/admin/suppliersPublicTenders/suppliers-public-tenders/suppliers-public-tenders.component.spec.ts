import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliersPublicTendersComponent } from './suppliers-public-tenders.component';

describe('SuppliersPublicTendersComponent', () => {
  let component: SuppliersPublicTendersComponent;
  let fixture: ComponentFixture<SuppliersPublicTendersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuppliersPublicTendersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppliersPublicTendersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
