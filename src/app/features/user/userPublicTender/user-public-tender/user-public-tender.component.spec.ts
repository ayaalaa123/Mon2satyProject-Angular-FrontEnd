import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPublicTenderComponent } from './user-public-tender.component';

describe('UserPublicTenderComponent', () => {
  let component: UserPublicTenderComponent;
  let fixture: ComponentFixture<UserPublicTenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPublicTenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPublicTenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
