import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminupdaterecordsComponent } from './adminupdaterecords.component';

describe('AdminupdaterecordsComponent', () => {
  let component: AdminupdaterecordsComponent;
  let fixture: ComponentFixture<AdminupdaterecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminupdaterecordsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminupdaterecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
