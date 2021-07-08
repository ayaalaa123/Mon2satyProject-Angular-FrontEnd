import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicAdminComponent } from './public-admin.component';

describe('PublicAdminComponent', () => {
  let component: PublicAdminComponent;
  let fixture: ComponentFixture<PublicAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
