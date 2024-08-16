import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  currentUser='';
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    if(this.authService.isSuperAdmin())
      {this.currentUser='SuperAdmin'}
    else if(this.authService.isAdmin())
      {this.currentUser='Admin'}
    else if(this.authService.isManager())
      {this.currentUser='Manager'}
    else if (this.authService.isSupervisor())
     { this.currentUser='SalesSupervisor'}
     else if (this.authService.isAgent())
      {this.currentUser='SalesAgent'}
    else
    {this.currentUser='client'}
  }

}
