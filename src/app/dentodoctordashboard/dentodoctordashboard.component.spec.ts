import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DentodoctordashboardComponent } from './dentodoctordashboard.component';

describe('DentodoctordashboardComponent', () => {
  let component: DentodoctordashboardComponent;
  let fixture: ComponentFixture<DentodoctordashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DentodoctordashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DentodoctordashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
