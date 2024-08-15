import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.css']
})
export class TopNavbarComponent implements OnInit, OnDestroy {
  userRole: string = '';
  userName: string = '';
  showLoginDropdown: boolean = false;
  showSignupDropdown: boolean = false;
  searchControl = new FormControl(''); 
  currentPage: string = 'home'; 

  private userSubscription: Subscription = new Subscription();
  private clientSubscription: Subscription = new Subscription();

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit(): void {


    this.userSubscription = this.authService.userDetails$.subscribe(user => {
      if (user) {
        this.userRole = user.roleName;
        this.userName = user.username;
      } else {
        this.userRole = '';
        this.userName = '';
      }
    });

    this.clientSubscription = this.authService.clientDetails$.subscribe(client => {
      if (client) {
        this.userName = 'Account';
      } else {
        this.userName = '';
      }
    });
  }
  navigateToPage(page: string):void  {
    this.currentPage = page;
    this.router.navigate([`/${page}`]);
  }
  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
    this.clientSubscription.unsubscribe();
  }

  logout() {
    this.authService.logout();
  }

  navigateToDetails() {
    if (this.authService.isAdmin() || this.authService.isSuperAdmin() || this.authService.isAgent()) {
      this.router.navigate(['/detail']);
    } else {
      this.router.navigate(['/getclientDetail']);
    }
  }

  toggleLoginDropdown() {
    this.showLoginDropdown = !this.showLoginDropdown;
  }

  toggleSignupDropdown() {
    this.showSignupDropdown = !this.showSignupDropdown;
  }

  navigateToLogin(type: string) {
    if (type === 'user') {
      this.router.navigate(['/login']);
    } else if (type === 'client') {
      this.router.navigate(['/clientLogin']);
    }
    this.showLoginDropdown = false;
  }

  navigateToSignup(type: string) {
    if (type === 'user') {
      this.router.navigate(['/signup']);
    } else if (type === 'client') {
      this.router.navigate(['/clientSignup']);
    }
    this.showSignupDropdown = false;
  }


  onSearch() {
    const searchTerm = this.searchControl.value;
    console.log('Search term:', searchTerm);
  }
}
