import { TestBed, inject } from '@angular/core/testing';

import { PolicyService } from './policy.service';

describe('PolicyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PolicyService]
    });
  });

  it('should be created', inject([PolicyService], (service: PolicyService) => {
    expect(service).toBeTruthy();
  }));
});
