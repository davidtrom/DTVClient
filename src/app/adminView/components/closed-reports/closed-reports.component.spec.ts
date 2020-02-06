import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosedReportsComponent } from './closed-reports.component';

describe('ClosedReportsComponent', () => {
  let component: ClosedReportsComponent;
  let fixture: ComponentFixture<ClosedReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClosedReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosedReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
