import { TestBed, async, inject } from '@angular/core/testing';

import { PostCreatorDeactivateGuard } from './post-creator-deactivate-guard.service';

describe('PostCreatorDeactivateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostCreatorDeactivateGuard]
    });
  });

  it('should ...', inject([PostCreatorDeactivateGuard], (guard: PostCreatorDeactivateGuard) => {
    expect(guard).toBeTruthy();
  }));
});
