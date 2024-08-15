import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submittedData: any;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.http.post('http://localhost:3000/api/login', this.loginForm.value).subscribe(
        (response: any) => {
          console.log('Form submitted successfully', response);
          console.log('setUserDetails:',response.user)

          this.authService.setUserDetails(response.user, response.token); // Store user details

          const userRole = response.user.roleName; 
          if (userRole === 'Admin' || userRole === 'SuperAdmin') {
            this.router.navigate(['/admin-dashboard']); // Redirect to admin dashboard
          }else if (userRole === 'SalesAgent') {
            this.router.navigate(['/agent-dashboard']); // Redirect to agent dashboard
          } else {

            this.router.navigate(['/home']); // Redirect to home or another page
          }        },
        error => {
          console.error('Error logging in', error);
        }
      );
    } else {
      console.log('Form is not valid');
    }
  }
}
