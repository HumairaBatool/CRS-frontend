import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showSidebar: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.checkLoggedIn();
      }
    });
  }

  private checkLoggedIn() {

    if (this.authService.isLoggedIn() ) {
      this.showSidebar =true;
    } else {
      this.showSidebar = false;
    }
  }
}
