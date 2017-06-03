import { TestBed, inject } from '@angular/core/testing';

import { TvService } from './tv.service';

describe('TvService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TvService]
    });
  });

  it('should ...', inject([TvService], (service: TvService) => {
    expect(service).toBeTruthy();
  }));
});
