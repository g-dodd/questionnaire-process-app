import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientTableListComponent } from './patient-table-list.component';

describe('PatientTableListComponent', () => {
  let component: PatientTableListComponent;
  let fixture: ComponentFixture<PatientTableListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientTableListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientTableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
