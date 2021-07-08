import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateTenderComponent } from './private-tender.component';

describe('PrivateTenderComponent', () => {
  let component: PrivateTenderComponent;
  let fixture: ComponentFixture<PrivateTenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateTenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateTenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
