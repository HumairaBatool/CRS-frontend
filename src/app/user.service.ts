import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}
  // Get Clients Count
  getClientsCount(headers: HttpHeaders): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/getClientsCount`, { headers });
  }
  // Get Sales Count
  getSalesCount(headers: HttpHeaders): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/getSalesCount`, { headers });
  }
  // Get Orders Count
  getOrdersCount(headers: HttpHeaders): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/getOrdersCount`, { headers });
  }
  getAllUsers(headers: HttpHeaders): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/getAllUsers`, { headers });
  }
  updateRole(body: any, headers: HttpHeaders): Observable<any> {
    return this.http.put(`${this.baseUrl}/updateUserRole`, body, { headers });
  }
  getSalesDetails(headers: HttpHeaders): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/sales-details`, { headers });
  }
  getMonthlySalesRecord(headers: HttpHeaders): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/getMonthlySalesRecord`, { headers });
  }
  getMonthlyWeeklySales(headers: HttpHeaders): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/getMonthlyWeeklySales`, { headers });
  }
  getWeeklySalesRecord(headers: HttpHeaders): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/getWeeklySalesRecord`, { headers });
  }
  getTopServices(headers: HttpHeaders): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/getTopServices`, { headers });
  }
  getSaleDetail(headers: HttpHeaders): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/sale-details`, { headers });
  }
  getClientDetail(headers: HttpHeaders): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/getclientDetail`, { headers });
  }
  getSaleDetailsOfSpecificOrder(
    userId: number,
    headers: HttpHeaders
  ): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/sales-details/${userId}`, {
      headers,
    });
  }
  getAttendanceRecords(headers: HttpHeaders): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/attendance`, { headers });
  }
  updateSaleDetails(body: any, headers: HttpHeaders): Observable<any> {
    return this.http.put(`${this.baseUrl}/updateSaleDetails`, body, {
      headers,
    });
  }
}
