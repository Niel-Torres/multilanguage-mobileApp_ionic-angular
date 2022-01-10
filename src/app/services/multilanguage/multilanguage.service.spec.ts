import { TestBed } from '@angular/core/testing';

import { MultilanguageService } from './multilanguage.service';

describe('MultilenguageService', () => {
  let service: MultilanguageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MultilanguageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
