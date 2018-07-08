import { TestBed, inject } from '@angular/core/testing';

import { DeedService } from './deed.service';

describe('DeedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeedService]
    });
  });

  it('should be created', inject([DeedService], (service: DeedService) => {
    expect(service).toBeTruthy();
  }));
});
