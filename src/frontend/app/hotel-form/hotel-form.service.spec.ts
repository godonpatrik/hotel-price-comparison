import { TestBed } from '@angular/core/testing';

import { HotelFormService } from './hotel-form.service';

describe('HotelSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HotelFormService = TestBed.get(HotelFormService);
    expect(service).toBeTruthy();
  });
});
