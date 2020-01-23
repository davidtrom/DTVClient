import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAmbassadorRequestComponent } from './edit-ambassador-request.component';

describe('EditAmbassadorRequestComponent', () => {
  let component: EditAmbassadorRequestComponent;
  let fixture: ComponentFixture<EditAmbassadorRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAmbassadorRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAmbassadorRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
