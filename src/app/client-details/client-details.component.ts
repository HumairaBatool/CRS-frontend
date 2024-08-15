import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {
  clientDetails: any={};

  constructor(private router:Router,private authService: AuthService, private http: HttpClient) {}

  ngOnInit(): void {
    const token = this.authService.getClientToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    this.http.get('http://localhost:3000/api/getclientDetail', { headers }).subscribe(
      (response: any) => {
        console.log('response.client',response.client)
        this.clientDetails = response.client;
       console.log('this.clientDetails',this.clientDetails)

      },
      (error) => {
        console.error('Error fetching client details:', error);
      }
    );
  }


  navigateToplaceOrder() {
    this.router.navigate(['./sales-form']);
  }
}


