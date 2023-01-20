import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysiodoctordashboardComponent } from './physiodoctordashboard.component';

describe('PhysiodoctordashboardComponent', () => {
  let component: PhysiodoctordashboardComponent;
  let fixture: ComponentFixture<PhysiodoctordashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhysiodoctordashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhysiodoctordashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
