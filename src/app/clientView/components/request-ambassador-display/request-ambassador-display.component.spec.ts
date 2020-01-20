import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestAmbassadorDisplayComponent } from './request-ambassador-display.component';

describe('RequestAmbassadorDisplayComponent', () => {
  let component: RequestAmbassadorDisplayComponent;
  let fixture: ComponentFixture<RequestAmbassadorDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestAmbassadorDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestAmbassadorDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
