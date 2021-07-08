import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePrivateTenderComponent } from './create-private-tender.component';

describe('CreatePrivateTenderComponent', () => {
  let component: CreatePrivateTenderComponent;
  let fixture: ComponentFixture<CreatePrivateTenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePrivateTenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePrivateTenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
