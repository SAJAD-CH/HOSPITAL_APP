import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientreportaddComponent } from './patientreportadd.component';

describe('PatientreportaddComponent', () => {
  let component: PatientreportaddComponent;
  let fixture: ComponentFixture<PatientreportaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientreportaddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientreportaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
