import { TestBed } from '@angular/core/testing';

import { SelectedPlaceService } from './selected-place.service';

describe('SelectedPlaceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SelectedPlaceService = TestBed.get(SelectedPlaceService);
    expect(service).toBeTruthy();
  });
});
