
import { Component, OnInit } from '@angular/core';
import { Router,NavigationEnd} from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-super-admin-dashboard',
  templateUrl: './super-admin-dashboard.component.html',
  styleUrls: ['./super-admin-dashboard.component.css']
})
export class SuperAdminDashboardComponent implements OnInit {
  chartOptions: any;
  showSidebar: boolean = false;
  constructor(private router:Router,private authService:AuthService){}
  ngOnInit(): void {
    this.chartOptions = {
      animationEnabled: true,
      title: {
        text: "Sales Status",
        fontFamily: "Arial", 
        fontWeight: "bold", 
        fontSize: 24, 
        color: "#3a0163" 
      },
     
      data: [{
      type: "pie",
      startAngle: -90,
      indexLabel: "{name}: {y}",
      yValueFormatString: "#,###.##'%'",
      dataPoints: [
        { y: 40, name: "Completed" },
        { y:30, name: "Pending" },
        { y: 30, name: "On-way" },
      ]
      }]
    }	

     this.router.events.subscribe(event => {
    if (event instanceof NavigationEnd) {
      this.checkUserRole();
    }
  });
  }

  private checkUserRole() {
    const user = this.authService.getUserDetails();
    const restrictedRoutes = ['/user-details', '/records'];
  
    if (this.authService.isLoggedIn() && this.authService.isSuperAdmin()) {
      this.showSidebar = !restrictedRoutes.includes(this.router.url);
    } else {
      this.showSidebar = false;
    }
  }
}

