import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurgeryaddComponent } from './surgeryadd.component';

describe('SurgeryaddComponent', () => {
  let component: SurgeryaddComponent;
  let fixture: ComponentFixture<SurgeryaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurgeryaddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurgeryaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
