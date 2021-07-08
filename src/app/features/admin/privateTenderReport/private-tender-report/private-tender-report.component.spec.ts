import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateTenderReportComponent } from './private-tender-report.component';

describe('PrivateTenderReportComponent', () => {
  let component: PrivateTenderReportComponent;
  let fixture: ComponentFixture<PrivateTenderReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateTenderReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateTenderReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
