import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicTenderReportComponent } from './public-tender-report.component';

describe('PublicTenderReportComponent', () => {
  let component: PublicTenderReportComponent;
  let fixture: ComponentFixture<PublicTenderReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicTenderReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicTenderReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
