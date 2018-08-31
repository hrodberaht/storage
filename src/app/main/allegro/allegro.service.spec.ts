import { TestBed, inject } from '@angular/core/testing';

import { AllegroService } from './allegro.service';

describe('AllegroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllegroService]
    });
  });

  it('should be created', inject([AllegroService], (service: AllegroService) => {
    expect(service).toBeTruthy();
  }));
});
