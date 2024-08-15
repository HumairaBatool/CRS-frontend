import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  submittedData:any;
  RoleNames = ['SuperAdmin', 'Admin', 'Manager', 'SalesSupervisor','SalesAgent'];

  constructor(private fb: FormBuilder,private http:HttpClient,private router:Router) {}

  ngOnInit(): void {
    this.signupForm=this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      roleName: ['', Validators.required],
    })
  }
  onSubmit() {
    if (this.signupForm.valid) {

      this.http.post('http://localhost:3000/api/signup', this.signupForm.value).subscribe(
        response => {
          console.log('signed-up successfully', response);
          this.router.navigate(['/login'])
        },
        error => {
          console.error('Error in sign-up', error);
        }
      );
    } else {
      console.log('Form is not valid');
    }
  }
}
