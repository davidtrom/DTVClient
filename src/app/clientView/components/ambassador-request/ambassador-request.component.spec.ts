import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbassadorRequestComponent } from './ambassador-request.component';

describe('AmbassadorRequestComponent', () => {
  let component: AmbassadorRequestComponent;
  let fixture: ComponentFixture<AmbassadorRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmbassadorRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbassadorRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
