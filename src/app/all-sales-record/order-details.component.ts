import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { UserService } from '../user.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css'],
})
export class OrderDetailsComponent implements OnInit {
  orderDetails: any[] = [];
  selectedOrder: any;
  selectedSaleID: number | null = null;
  isAdminOrSubadmin = true;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router // Inject Router
  ) {}

  ngOnInit() {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.authService.getToken()}`,
    });
    this.userService.getSalesDetails(headers).subscribe(
      (response) => {
        this.orderDetails = response;
      },
      (error) => {
        if (error.status === 401 && this.authService.isLoggedIn()) {
          console.log('token expires');
          this.authService.logout();
        }
        console.error('Error fetching order details:', error);
      }
    );
  }

  fetchOrderDetails(saleID: number): void {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.authService.getToken()}`,
    });
    this.userService.getSaleDetailsOfSpecificOrder(saleID, headers).subscribe(
      (response: any) => {
        this.selectedOrder = response[0];
        console.log('selectedOrder: ', this.selectedOrder);
      },
      (error) => {
        if (error.status === 401 && this.authService.isLoggedIn()) {
          console.log('token expires');
          this.authService.logout();
        }
        console.error('Frontend: Error fetching order details', error);
      }
    );
  }

  toggleOrderDetails(saleID: number): void {
    if (this.selectedSaleID === saleID) {
      this.selectedOrder = null;
      this.selectedSaleID = null;
    } else {
      this.fetchOrderDetails(saleID);
      this.selectedSaleID = saleID;
    }
  }

  editOrderDetails(saleID: number): void {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.authService.getToken()}`,
    });
    this.userService.getSaleDetailsOfSpecificOrder(saleID, headers).subscribe(
      (response: any) => {
        this.selectedOrder = response[0];
        console.log('selectedOrder: ', this.selectedOrder);
        this.router.navigate(['/update-order'], {
          state: { selectedOrder: this.selectedOrder },
        });
      },
      (error) => {
        if (error.status === 401 && this.authService.isLoggedIn()) {
          console.log('token expires');
          this.authService.logout();
        }
        console.error('Frontend: Error fetching order details', error);
      }
    );
  }
}
