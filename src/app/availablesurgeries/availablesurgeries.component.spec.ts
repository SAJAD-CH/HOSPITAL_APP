import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailablesurgeriesComponent } from './availablesurgeries.component';

describe('AvailablesurgeriesComponent', () => {
  let component: AvailablesurgeriesComponent;
  let fixture: ComponentFixture<AvailablesurgeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailablesurgeriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailablesurgeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
