import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth.service'; // Assuming you have an AuthService to manage tokens

@Component({
  selector: 'app-agent-attendance',
  templateUrl: './agent-attendance.component.html',
  styleUrls: ['./agent-attendance.component.css']
})
export class AgentAttendanceComponent implements OnInit {

  constructor(private http: HttpClient, private authService: AuthService) {}
  agentId: number | null = null;
  message: string = ''; // To store the check-in/check-out message

  ngOnInit(): void {
  }
  checkIn() {
    const userDetails = this.authService.getUserDetails();
    this.agentId = userDetails?.id || null;  
      const headers = new HttpHeaders({
      Authorization: `Bearer ${this.authService.getToken()}`,
    });

    this.http.post('http://localhost:3000/api/attendance/check-in', { agentId:this.agentId }, { headers }).subscribe(
      (response) => {
        const checkInTime = new Date().toLocaleString(); // Format the check-in time
        this.message = `Checked in at ${checkInTime}`
        this.clearMessageAfterDelay();

        console.log('Checked in successfully:', response);

      },
      (error) => {
        console.error('Frontend: Error during check-in:', error);
      }
    );
  }

  checkOut() {

    const userDetails = this.authService.getUserDetails();
    this.agentId = userDetails?.id || null;  
        const headers = new HttpHeaders({
      Authorization: `Bearer ${this.authService.getToken()}`,
    });

    this.http.post('http://localhost:3000/api/attendance/check-out', { agentId:this.agentId }, { headers }).subscribe(
      (response) => {
        const checkOut = new Date().toLocaleString(); // Format the check-in time
        this.message = `Checked in at ${checkOut}`
        this.clearMessageAfterDelay();

        console.log('Checked out successfully:', response);
      },
      (error) => {
        console.error('Error during check-out:', error);
      }
    );
  }
  clearMessageAfterDelay() {
    setTimeout(() => {
      this.message = '';
    }, 1000); // 1 second
  }

}



