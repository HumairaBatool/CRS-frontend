import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
import { UserService } from '../user.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-edit-sale-modal',
  templateUrl: './edit-sale-modal.component.html',
  styleUrls: ['./edit-sale-modal.component.css'],
})
export class EditSaleModalComponent implements OnInit {
  serviceProviders = ['Spectrum', 'ATT', 'Xfinity', 'Comcast'];
  durations = ['1-3 Years', '3-5 Years', 'New Installation'];
  activeServices = ['Cable', 'Landline', 'Internet'];
  cardProviders = ['MasterCard', 'Visa', 'American Express', 'Discover'];
  cardTypes = ['Credit', 'Debit'];
  wantToUpgradeBoxes = ['Yes', 'No'];
  updateForm!: FormGroup;
  selectedOrder: any;
  isSubmitted: boolean = false;
  successMessage: string = 'Details have been updated successfully!';

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private authService: AuthService
  ) {
    // Initializing the form group with form controls and their validators
    this.updateForm = this.fb.group({
      id:0,
      orderId:0,
      clientName: [''],
      Service: [''],
      serviceProvider: [''],
      duration: [''],
      Upgrade: [''],
      clientEmail: [''],
      clientAddress: [''],
      clientPrimaryPhone: [''],
      clientAlternatePhone: [''],
      clientRelation: [''],
      clientCloserName: [''],
      agentName: [''],
      comment: [''],
      securityPin: [''],
      accountNum: [''],
      SSN: [''],
      cardProvider: [''],
      nameOnCard: [''],
      CardType: [''],
      cardNum: [''],
      DOB: [''],
      expiry: [''],
      CVV: [''],
    });
  }

  ngOnInit(): void {
    this.selectedOrder = history.state.selectedOrder;
    if (this.selectedOrder) {
      this.updateForm.patchValue(this.selectedOrder);
    }
  }
  onSubmit() {
    if (this.updateForm.valid) {
      // console.log('Form values:', this.updateForm.value);
      const headers = new HttpHeaders({
        Authorization: `Bearer ${this.authService.getToken()}`,
      });
      this.userService.updateSaleDetails(this.updateForm.value, headers).subscribe(
          (response) => {
            this.successMessage = 'Details updated successfully!';
            this.isSubmitted = true;
            window.scrollTo({ top: 0, behavior: 'smooth' });
          },
          (error) => {
            this.successMessage = 'Failed to update details. Please try again.';
            this.isSubmitted = true;
          }
        );
    } else {
      console.error('Form is invalid');
    }
  }
}

