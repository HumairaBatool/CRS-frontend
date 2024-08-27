import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { AuthService } from '../auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
})
export class TeamComponent implements OnInit {
  allUsers: any[] = [];
  roles: string[] = [
    'SuperAdmin',
    'Admin',
    'Manager',
    'SalesSupervisor',
    'SalesAgent',
  ];

  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}
  ngOnInit(): void {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.authService.getToken()}`,
    });
    this.userService.getAllUsers(headers).subscribe(
      (response: any[]) => {
        console.log('response', response);
        this.allUsers = response;
      },
      (error: any) => {
        if (error.status === 401 && this.authService.isLoggedIn()) {
          console.log('token expires');
          this.authService.logout();
        }
        console.error('Error fetching all users', error);
      }
    );
  }

  getAvatarClass(roleName: string): string {
    switch (roleName) {
      case 'SuperAdmin':
        return 'avatar-SuperAdmin';
      case 'Admin':
        return 'avatar-Admin';
      case 'Manager':
        return 'avatar-Manager';
      case 'SalesSupervisor':
        return 'avatar-SalesSupervisor';
      case 'SalesAgent':
        return 'avatar-SalesAgent';
      default:
        return 'avatar-default';
    }
  }
}
