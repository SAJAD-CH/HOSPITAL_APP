import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardiodoctordashboardComponent } from './cardiodoctordashboard.component';

describe('CardiodoctordashboardComponent', () => {
  let component: CardiodoctordashboardComponent;
  let fixture: ComponentFixture<CardiodoctordashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardiodoctordashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardiodoctordashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
