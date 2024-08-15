import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  userDetails: any;
  allUsers: any[] = [];
  isAdminOrSuperAdmin: boolean = false;
  detailsLoaded: boolean = false; // Track whether details have been loaded

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.userDetails = this.authService.getUserDetails();

    // // Check if user is Admin or SuperAdmin
    // this.isAdminOrSuperAdmin = this.authService.isAdminOrSuperAdmin();
    // console.log('this.isAdminOrSuperAdmin', this.isAdminOrSuperAdmin);
  }

}
