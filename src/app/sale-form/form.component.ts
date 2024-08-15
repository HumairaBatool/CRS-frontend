// src/app/form/form.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  userForm!: FormGroup;
  submittedData:any;
  orderDetails: any= [];
  serviceProviders = ['Spectrum', 'ATT', 'Xfinity', 'Comcast'];
  durations = ['1-3 Years', '3-5 Years', 'New Installation'];
  activeServices = ['Cable', 'Landline', 'Internet'];
  cardProviders = ['MasterCard', 'Visa', 'American Express', 'Discover'];
  cardTypes = ['Credit', 'Debit'];
  wantToUpgradeBoxes = ['Yes', 'No'];

  constructor(private fb: FormBuilder,private http:HttpClient,private router:Router, private authService:AuthService) {}

  ngOnInit(): void {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.authService.getToken()}`,
    });
    this.userForm = this.fb.group({

      serviceProvider: ['', Validators.required],
      duration: ['', Validators.required],
      activeServices: this.fb.array(this.activeServices.map(() => this.fb.control(false))), // Initialize FormArray
      wantToUpgradeBoxes: ['', Validators.required],

      securityPin: ['', Validators.required],
      accNum: ['', Validators.required],
      ssn: ['', Validators.required],

      cardProvider: ['', Validators.required],
      nameOnCard: ['', Validators.required],
      cardType: ['', Validators.required],
      cardNum: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      cardExp: ['', Validators.required],
      cvv: ['', Validators.required],
      comments: ['', Validators.required],

    });
  }

  get activeServicesArray(): FormArray {
    return this.userForm.get('activeServices') as FormArray;
  }

  onSubmit() {
    console.log('form values ',this.userForm.value)
    if (this.userForm.valid) {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${this.authService.getClientToken()}`,
      });
      this.http.post('http://localhost:3000/api/sale', this.userForm.value, { headers }).subscribe(
        (response: any) => {
          console.log('Form submitted successfully', response);
          // Store the order details in a service or local storage
          this.authService.setOrderDetails(response.order);
          this.router.navigate(['/sale-details']);
        },
        error => {
          console.error('Frontend Error submitting form', error);
        }
      );
    } else {
      console.log('Form is not valid');
    }
  }
  
   
}
