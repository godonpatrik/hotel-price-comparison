import { TestBed } from '@angular/core/testing';

import { PlacesDetailsService } from './places-details.service';

describe('VenuesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlacesDetailsService = TestBed.get(PlacesDetailsService);
    expect(service).toBeTruthy();
  });
});
