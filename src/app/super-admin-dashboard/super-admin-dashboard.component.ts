
import { Component, OnInit } from '@angular/core';
import { Router,NavigationEnd} from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-super-admin-dashboard',
  templateUrl: './super-admin-dashboard.component.html',
  styleUrls: ['./super-admin-dashboard.component.css']
})
export class SuperAdminDashboardComponent implements OnInit {
  constructor(private router:Router,private authService:AuthService){}
  ngOnInit(): void {
   

  }

 
}

