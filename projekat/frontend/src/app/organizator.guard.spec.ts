import { TestBed } from '@angular/core/testing';

import { OrganizatorGuard } from './organizator.guard';

describe('OrganizatorGuard', () => {
  let guard: OrganizatorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(OrganizatorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
