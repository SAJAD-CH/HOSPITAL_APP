import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrthodoctordashboardComponent } from './orthodoctordashboard.component';

describe('OrthodoctordashboardComponent', () => {
  let component: OrthodoctordashboardComponent;
  let fixture: ComponentFixture<OrthodoctordashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrthodoctordashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrthodoctordashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
