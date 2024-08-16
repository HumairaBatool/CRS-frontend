import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private clientDetails: any = null;
  private userDetails: any = null;
  private token: string | null = null;
  private orderDetails:any={}
  private clientDetailsSubject = new BehaviorSubject<any>(null);
  private userDetailsSubject = new BehaviorSubject<any>(null);
  clientDetails$ = this.clientDetailsSubject.asObservable();
  userDetails$ = this.userDetailsSubject.asObservable();

  constructor(private http: HttpClient, private router: Router) {}

  setClientDetails(token: string) {
    this.clientDetails = { token };
    this.clientDetailsSubject.next(this.clientDetails);
    localStorage.setItem('clientToken', token); // Optionally store in local storage
  }

  getClientDetails() {
    // Optionally retrieve from local storage
    return { token: localStorage.getItem('clientToken') };
  }

  setUserDetails(user: any, token: string) {
    this.userDetails = user;
    this.token = token;
    this.userDetailsSubject.next(user); // Update BehaviorSubject
    localStorage.setItem('userDetails', JSON.stringify(user));
    localStorage.setItem('token', token);
  }


  getUserDetails() {
    return JSON.parse(localStorage.getItem('userDetails') || 'null');
  }

  getToken() {
    return localStorage.getItem('token');
  }
  getClientToken() {
    return this.clientDetails?.token || null;
  }
  // Order Details Methods
  setOrderDetails(order: any) {
    this.orderDetails = order;
  }

  getOrderDetails() {
    return this.orderDetails;
  }
  isAdmin() {
    const user = this.userDetailsSubject.getValue();
    return user && (user.roleName === 'Admin');
  }
  isSuperAdmin() {
    const user = this.userDetailsSubject.getValue();
    return user && ( user.roleName === 'SuperAdmin');
  }
  isManager() {
    const user = this.userDetailsSubject.getValue();
    return user && (user.roleName === 'Manager' );
  }

  isSupervisor() {
    const user = this.userDetailsSubject.getValue();
    return user && (user.roleName === 'SalesSupervisor' );
  }
  isAgent() {
    const user = this.userDetailsSubject.getValue();
    return user && (user.roleName === 'SalesAgent' );
  }


  isLoggedIn() {
    return !!this.getToken() || !!this.getClientDetails().token;
  }

  isClientLoggedIn() {
    return !!this.clientDetails?.token;
  }

  logout() {
    this.userDetails = null;
    this.token = null;
    this.clientDetails = null;
    this.userDetailsSubject.next(null); // Notify subscribers
    this.clientDetailsSubject.next(null); // Notify subscribers
    localStorage.removeItem('userDetails');
    localStorage.removeItem('token');
    localStorage.removeItem('clientToken');
    this.router.navigate(['/home']); // Redirect after logout
  }
}
