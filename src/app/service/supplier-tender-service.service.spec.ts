import { TestBed } from '@angular/core/testing';

import { SupplierTenderServiceService } from './supplier-tender-service.service';

describe('SupplierTenderServiceService', () => {
  let service: SupplierTenderServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupplierTenderServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
