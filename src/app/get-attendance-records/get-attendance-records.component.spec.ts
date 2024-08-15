import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAttendanceRecordsComponent } from './get-attendance-records.component';

describe('GetAttendanceRecordsComponent', () => {
  let component: GetAttendanceRecordsComponent;
  let fixture: ComponentFixture<GetAttendanceRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAttendanceRecordsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAttendanceRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
