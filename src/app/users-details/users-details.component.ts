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
  //isAdminOrSuperAdmin: boolean = false;
  roles: string[] = ['SuperAdmin','Admin', 'Manager', 'SalesSupervisor', 'SalesAgent']; // Add all your roles here
  selectedUserId: number | null = null;
  newRoleName: string = '';

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private userService: UserService,
    private router:Router
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
      (error) => {
        console.error('Error fetching all users', error);
      }
    );
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
        (response) => {
          console.log('Role updated successfully', response);
          this.ngOnInit(); // Reload all users
        },
        (error) => {
          console.error('Error updating role', error);
          if (error.status === 403) {
            alert('You do not have the authority to perform this action.');
          } else if(error.status===401){
            alert('Admin can not change its own role')
          }
          
          else if (error.status === 404) {
            alert('User not found.');
          } else {
            alert('An error occurred while updating the role.');
          }
        }
      );
    
  }

}
