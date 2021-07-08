import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPrivateTenderComponent } from './user-private-tender.component';

describe('UserPrivateTenderComponent', () => {
  let component: UserPrivateTenderComponent;
  let fixture: ComponentFixture<UserPrivateTenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPrivateTenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPrivateTenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
