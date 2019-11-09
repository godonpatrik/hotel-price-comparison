import { TestBed } from '@angular/core/testing';

import { MySearchesService } from './my-searches.service';

describe('MySearchesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MySearchesService = TestBed.get(MySearchesService);
    expect(service).toBeTruthy();
  });
});
