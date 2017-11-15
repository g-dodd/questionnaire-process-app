import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientProcessCardComponent } from './patient-process-card.component';

describe('PatientProcessCardComponent', () => {
  let component: PatientProcessCardComponent;
  let fixture: ComponentFixture<PatientProcessCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientProcessCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientProcessCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
