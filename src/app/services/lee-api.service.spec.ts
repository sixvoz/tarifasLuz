import { TestBed } from '@angular/core/testing';

import { LeeApiService } from './lee-api.service';

describe('LeeApiService', () => {
  let service: LeeApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeeApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
