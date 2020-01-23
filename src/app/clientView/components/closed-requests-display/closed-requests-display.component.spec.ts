import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosedRequestsDisplayComponent } from './closed-requests-display.component';

describe('ClosedRequestsDisplayComponent', () => {
  let component: ClosedRequestsDisplayComponent;
  let fixture: ComponentFixture<ClosedRequestsDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClosedRequestsDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosedRequestsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
