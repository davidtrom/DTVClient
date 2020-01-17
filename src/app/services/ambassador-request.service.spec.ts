import { TestBed } from '@angular/core/testing';

import { AmbassadorRequestService } from './ambassador-request.service';

describe('AmbassadorRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AmbassadorRequestService = TestBed.get(AmbassadorRequestService);
    expect(service).toBeTruthy();
  });
});
