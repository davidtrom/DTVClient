import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportAConcernComponent } from './report-a-concern.component';

describe('ReportAConcernComponent', () => {
  let component: ReportAConcernComponent;
  let fixture: ComponentFixture<ReportAConcernComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportAConcernComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportAConcernComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
