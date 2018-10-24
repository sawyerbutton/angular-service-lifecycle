import { TestBed } from '@angular/core/testing';

import { InjectTestService } from './inject-test.service';

describe('InjectTestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InjectTestService = TestBed.get(InjectTestService);
    expect(service).toBeTruthy();
  });
});
