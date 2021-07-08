import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SentPrivateTenderToSuppliersComponent } from './sent-private-tender-to-suppliers.component';

describe('SentPrivateTenderToSuppliersComponent', () => {
  let component: SentPrivateTenderToSuppliersComponent;
  let fixture: ComponentFixture<SentPrivateTenderToSuppliersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SentPrivateTenderToSuppliersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SentPrivateTenderToSuppliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
