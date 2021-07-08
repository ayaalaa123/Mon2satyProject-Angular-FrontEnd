import { TestBed } from '@angular/core/testing';

import { NewSupplierService } from './new-supplier.service';

describe('NewSupplierService', () => {
  let service: NewSupplierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewSupplierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
