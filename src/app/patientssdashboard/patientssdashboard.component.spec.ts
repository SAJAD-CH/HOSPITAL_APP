import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientssdashboardComponent } from './patientssdashboard.component';

describe('PatientssdashboardComponent', () => {
  let component: PatientssdashboardComponent;
  let fixture: ComponentFixture<PatientssdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientssdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientssdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
