import { TestBed } from '@angular/core/testing';

import { UcesnikGuard } from './ucesnik.guard';

describe('UcesnikGuard', () => {
  let guard: UcesnikGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UcesnikGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
