import { TestBed } from '@angular/core/testing';

import { PtivatetenderserviceService } from './ptivatetenderservice.service';

describe('PtivatetenderserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PtivatetenderserviceService = TestBed.get(PtivatetenderserviceService);
    expect(service).toBeTruthy();
  });
});
