import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailabledoctorComponent } from './availabledoctor.component';

describe('AvailabledoctorComponent', () => {
  let component: AvailabledoctorComponent;
  let fixture: ComponentFixture<AvailabledoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailabledoctorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailabledoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
