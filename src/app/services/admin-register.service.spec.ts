import { TestBed } from '@angular/core/testing';

import { AdminRegisterService } from './admin-register.service';

describe('AdminRegisterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminRegisterService = TestBed.get(AdminRegisterService);
    expect(service).toBeTruthy();
  });
});
