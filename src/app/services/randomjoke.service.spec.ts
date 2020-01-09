import { TestBed } from '@angular/core/testing';

import { RandomjokeService } from './randomjoke.service';

describe('RandomjokeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RandomjokeService = TestBed.get(RandomjokeService);
    expect(service).toBeTruthy();
  });
});
