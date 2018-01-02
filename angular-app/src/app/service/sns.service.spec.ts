import { TestBed, inject } from '@angular/core/testing';

import { SnsService } from './sns.service';

describe('SnsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SnsService]
    });
  });

  it('should be created', inject([SnsService], (service: SnsService) => {
    expect(service).toBeTruthy();
  }));
});
