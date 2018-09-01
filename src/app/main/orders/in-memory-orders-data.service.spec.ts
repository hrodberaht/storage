import { TestBed, inject } from '@angular/core/testing';

import { InMemoryOrdersDataService } from './in-memory-orders-data.service';

describe('InMemoryOrdersDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InMemoryOrdersDataService]
    });
  });

  it('should be created', inject([InMemoryOrdersDataService], (service: InMemoryOrdersDataService) => {
    expect(service).toBeTruthy();
  }));
});
