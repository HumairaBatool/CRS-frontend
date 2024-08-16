import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { UserService } from '../user.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-get-attendance-records',
  templateUrl: './get-attendance-records.component.html',
  styleUrls: ['./get-attendance-records.component.css']
})
export class GetAttendanceRecordsComponent implements OnInit {
  attendanceRecords: any[] = [];

  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.authService.getToken()}`,
    });
    this.userService.getAttendanceRecords(headers).subscribe(
      (response) => {
        this.attendanceRecords = response;
        console.log('attendance records: ',this.attendanceRecords)
      },
      (error) => {
        if (error.status === 401 && this.authService.isLoggedIn()) {
          console.log('token expires');
          this.authService.logout();
        } 
        console.error('Error fetching order details:', error);
      }
    );
  }

}
