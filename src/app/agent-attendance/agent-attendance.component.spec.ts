import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentAttendanceComponent } from './agent-attendance.component';

describe('AgentAttendanceComponent', () => {
  let component: AgentAttendanceComponent;
  let fixture: ComponentFixture<AgentAttendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentAttendanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
