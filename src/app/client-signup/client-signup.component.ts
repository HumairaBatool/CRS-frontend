import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-signup',
  templateUrl: './client-signup.component.html',
  styleUrls: ['./client-signup.component.css'],
})
export class ClientSignupComponent implements OnInit {
  clientSignupForm!: FormGroup;
  submittedData: any;
  //serviceProviders = ['Spectrum', 'ATT', 'Xfinity', 'Comcast'];
  //durations = ['1-3 Years', '3-5 Years', 'New Installation'];
  //activeServices = ['Cable', 'Landline', 'Internet', 'All Three'];
  cardProviders = ['MasterCard', 'Visa', 'American Express', 'Discover'];
  cardTypes = ['Credit', 'Debit'];
  wantToUpgradeBoxes = ['Yes', 'No'];

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.clientSignupForm = this.fb.group({
      name: ['', Validators.required],
      accEmailAdd: ['', [Validators.required, Validators.email]],
      accAddress: ['', Validators.required],
      accPhoneNum: ['', Validators.required],
      altPhoneNum: ['', Validators.required],
      onCallPerson: ['', Validators.required],
      nameOfCloser: ['', Validators.required],

  
    });
  }
  onSubmit() {
    if (this.clientSignupForm.valid) {
  
      console.log(' in if condtion signupForm', this.clientSignupForm.value);
      this.http.post('http://localhost:3000/api/clientSignup', this.clientSignupForm.value)
        .subscribe(
          (response) => {
            console.log('client signed-up successfully', response);
            this.router.navigate(['/clientLogin']);
          },
          (error) => {
            console.error('Frontend Error in client sign-up', error);
          }
        );
    } else {
      console.log('Frontend client signup Form is not valid');
    }
  }
}
