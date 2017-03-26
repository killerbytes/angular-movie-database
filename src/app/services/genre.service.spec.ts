import { TestBed, inject } from '@angular/core/testing';

import { GenreService } from './genre.service';

describe('GenreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GenreService]
    });
  });

  it('should ...', inject([GenreService], (service: GenreService) => {
    expect(service).toBeTruthy();
  }));
});
