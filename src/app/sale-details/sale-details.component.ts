import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sale-details',
  templateUrl: './sale-details.component.html',
  styleUrls: ['./sale-details.component.css'],
})
export class SaleDetailsComponent implements OnInit {
  orderDetails: any = {};

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    // Get the order details from AuthService
    this.orderDetails = this.authService.getOrderDetails();
    console.log('Order details:', this.orderDetails);
  }
}
