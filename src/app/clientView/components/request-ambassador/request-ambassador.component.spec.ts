import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestAmbassadorComponent } from './request-ambassador.component';

describe('RequestAmbassadorComponent', () => {
  let component: RequestAmbassadorComponent;
  let fixture: ComponentFixture<RequestAmbassadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestAmbassadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestAmbassadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
