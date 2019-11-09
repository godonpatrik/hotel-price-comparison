import { TestBed } from '@angular/core/testing';

import { HotelDetailsService } from './hotel-details.service';

describe('HotelDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HotelDetailsService = TestBed.get(HotelDetailsService);
    expect(service).toBeTruthy();
  });
});
