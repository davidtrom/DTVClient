import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportedConcernsDisplayComponent } from './reported-concerns-display.component';

describe('ReportedConcernsDisplayComponent', () => {
  let component: ReportedConcernsDisplayComponent;
  let fixture: ComponentFixture<ReportedConcernsDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportedConcernsDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportedConcernsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
