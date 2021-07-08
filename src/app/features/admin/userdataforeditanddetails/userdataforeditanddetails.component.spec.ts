import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdataforeditanddetailsComponent } from './userdataforeditanddetails.component';

describe('UserdataforeditanddetailsComponent', () => {
  let component: UserdataforeditanddetailsComponent;
  let fixture: ComponentFixture<UserdataforeditanddetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserdataforeditanddetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserdataforeditanddetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
