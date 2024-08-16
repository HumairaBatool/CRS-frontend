import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getAllUsers(headers: HttpHeaders): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/getAllUsers`, { headers });
  }
  updateRole(body: any, headers: HttpHeaders): Observable<any> {
    return this.http.put(`${this.baseUrl}/updateUserRole`, body, { headers });
  }
  getSalesDetails(headers: HttpHeaders): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/sales-details`, { headers });
  }
  getSaleDetail(headers: HttpHeaders): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/sale-details`, { headers });
  }
  getClientDetail(headers: HttpHeaders): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/getclientDetail`, { headers });
  }
  getSaleDetailsOfSpecificOrder(userId: number, headers: HttpHeaders): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/sales-details/${userId}`, { headers });
  }
  getAttendanceRecords(headers: HttpHeaders): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/attendance`, { headers });
  }
  updateSaleDetails( body: any, headers: HttpHeaders): Observable<any> {
    return this.http.put(`${this.baseUrl}/updateSaleDetails`, body, { headers });
  }
}
