import { TestBed } from '@angular/core/testing';

import { WorkOrderService } from './work-order.service';

describe('WorkOrderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorkOrderService = TestBed.get(WorkOrderService);
    expect(service).toBeTruthy();
  });
});
