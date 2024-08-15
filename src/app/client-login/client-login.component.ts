import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-client-login',
  templateUrl: './client-login.component.html',
  styleUrls: ['./client-login.component.css']
})
export class ClientLoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.http.post('http://localhost:3000/api/clientLogin', this.loginForm.value)
        .subscribe(
          (response: any) => {
            console.log('Form submitted successfully', response);

            this.authService.setClientDetails(response.token); // Store client token
            this.router.navigate(['/getclientDetail']); // Redirect to home or dashboard
          },
          error => {
            console.error('Error logging in', error);
          }
        );
    } else {
      console.log('Form is not valid');
    }
  }
}
