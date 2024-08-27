import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { AuthService } from '../auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css'],
})
export class UsersDetailsComponent implements OnInit {
  allUsers: any[] = [];
  roles: string[] = ['SuperAdmin','Admin', 'Manager', 'SalesSupervisor', 'SalesAgent']; // Add all your roles here
  selectedUserId: number | null = null;
  newRoleName: string = '';

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
      (error:any) => {
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


  updateUserRole(userId: number, newRoleName: string) {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${this.authService.getToken()}`,
      });
      const body = {
        userId: userId,
        newRoleName: newRoleName,

      };
      this.userService.updateRole(body,headers).subscribe(
        (response:any) => {
          console.log('Role updated successfully', response);
          this.ngOnInit(); // Reload all users
        },
        (error:any) => {
          if (error.status === 401 && this.authService.isLoggedIn()) {
            console.log('token expires');
            this.authService.logout();
          } 
         else if (error.status === 403) {
            alert('You do not have the authority to perform this action.');
          }      
          else if (error.status === 404) {
            alert('User not found.');
          } 
          else if (error.status === 405) {
            alert('Admin can not change its own role ');
          }else {
            console.error('Error updating role', error);

            alert('An error occurred while updating the role.');

          }
        }
      );
    
  }

}
