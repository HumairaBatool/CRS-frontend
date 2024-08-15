import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // showSidebar: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    // this.router.events.subscribe(event => {
    //   if (event instanceof NavigationEnd) {
    //     this.checkUserRole();
    //   }
    // });
  }

  // private checkUserRole() {
  //   const user = this.authService.getUserDetails();
  //   const restrictedRoutes = ['/user-details', '/records'];

  //   if (this.authService.isLoggedIn() && this.authService.isAdminOrSuperAdmin()) {
  //     this.showSidebar = !restrictedRoutes.includes(this.router.url);
  //   } else {
  //     this.showSidebar = false;
  //   }
  // }
}
