import { TestBed } from '@angular/core/testing';

import { CreativesService } from './creatives.service';

describe('CreativesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreativesService = TestBed.get(CreativesService);
    expect(service).toBeTruthy();
  });
});
