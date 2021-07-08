import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateTendersComponent } from './private-tenders.component';

describe('PrivateTendersComponent', () => {
  let component: PrivateTendersComponent;
  let fixture: ComponentFixture<PrivateTendersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateTendersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateTendersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
