import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { UserService } from '../user.service';
import { AuthService } from '../auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditSaleModalComponent } from '../edit-sale-modal/edit-sale-modal.component';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css'],
})
export class OrderDetailsComponent implements OnInit {
  orderDetails: any[] = [];
  selectedOrder: any;
  selectedSaleID: number | null = null;
  isAdminOrSubadmin=true;
  constructor(
    private userService: UserService,
    private authService: AuthService,
    private modalService: NgbModal,
  ) {}

  ngOnInit() {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.authService.getToken()}`,
    });
    this.userService.getSalesDetails(headers).subscribe(
      (response) => {
        this.orderDetails = response;
        // console.log('orderDetails :',this.orderDetails)
      },
      (error) => {
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
        console.log('selectedOrder: ',this.selectedOrder)
      },
      (error) => {
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
    const modalRef = this.modalService.open(EditSaleModalComponent);
  
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.authService.getToken()}`,
    });
  
    this.userService.getSaleDetailsOfSpecificOrder(saleID, headers).subscribe(
      (response: any) => {
        console.log('Data to be passed to modal:', response[0]);
        modalRef.componentInstance.orderDetails = response[0];
        modalRef.result.then((result) => {
          // Handle modal close result if needed
          console.log('result: ',result)
        }).catch((error) => {
          console.error('Error handling modal result:', error);
        });
      },
      (error) => {
        console.error('Frontend: Error fetching order details', error);
      }
    );
  }
  
  
}
