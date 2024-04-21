import { TestBed } from '@angular/core/testing';

import { MovieslistService } from './movieslist.service';

describe('MovieslistService', () => {
  let service: MovieslistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieslistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
