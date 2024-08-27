import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-sales-report',
  templateUrl: './sales-report.component.html',
  styleUrls: ['./sales-report.component.css'],
})
export class SalesReportComponent implements OnInit {
  chartOptionsWeekly: any;
  topServices: any[] = [];

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    this.fetchWeeklySalesData();
    this.fetchTopServices()
  }

  fetchWeeklySalesData(): void {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    this.userService.getWeeklySalesRecord(headers).subscribe(
      (response) => {
        this.initializeWeeklyChart(response);
      },
      (error) => {
        console.error('Error fetching weekly sales data:', error);
      }
    );
  }
  fetchTopServices(): void {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    this.userService.getTopServices(headers).subscribe(
      (response) => {
        console.log('Top Services',response);
        this.topServices=response;
      },
      (error) => {
        console.error('Error fetching weekly sales data:', error);
      }
    );
  }
  initializeWeeklyChart(data: any[]): void {
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    // Transform the data to include day names
    const transformedData = dayNames.map((dayName, index) => {
      const salesData = data.find(item => item.dayOfWeek === index + 1);
      return {
        label: dayName,
        y: salesData ? salesData.salesCount : 0, // Default to 0 if no data for the day
      };
    });

    this.chartOptionsWeekly = {
      title: {
        text: 'Weekly Sales Statistics',
      },
      axisX: {
        title: 'Days',
        interval: 1,
        labelAngle: -45, 
      },
      axisY: {
        title: 'Sales Count',
        includeZero: true,
        gridThickness: 0, // Disable horizontal grid lines
      },
      data: [
        {
          type: 'column',
          dataPoints: transformedData,
        },
      ],
    };
  }
}
