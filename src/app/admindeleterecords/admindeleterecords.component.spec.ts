import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindeleterecordsComponent } from './admindeleterecords.component';

describe('AdmindeleterecordsComponent', () => {
  let component: AdmindeleterecordsComponent;
  let fixture: ComponentFixture<AdmindeleterecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmindeleterecordsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmindeleterecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
