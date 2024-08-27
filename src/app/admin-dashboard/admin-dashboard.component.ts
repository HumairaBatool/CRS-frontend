import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { UserService } from '../user.service';
import { HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  chartOptions: any;
  // showSidebar: boolean = true;
  clientsCount: number = 0;
  ordersCount: number = 0;
  salesCount: number = 0;

  constructor(private router: Router, private userService: UserService) {}
  ngOnInit(): void {

    this.fetchCounts();

  }
  fetchCounts(): void {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    this.userService.getClientsCount(headers).subscribe(
      (response) => {
        console.log('Clients count response:', response);  // Debugging log

        this.clientsCount = response;
      },
      (error) => {
        console.error('Error fetching client count:', error);
      }
    );

    // Fetch Sales Count
    this.userService.getSalesCount(headers).subscribe(
      (response) => {
        this.salesCount = response;
      },
      (error) => {
        console.error('Error fetching sales count:', error);
      }
    );

    // Fetch Orders Count
    this.userService.getOrdersCount(headers).subscribe(
      (response) => {
        this.ordersCount = response;
      },
      (error) => {
        console.error('Error fetching orders count:', error);
      }
    );
   

  }

  
}
