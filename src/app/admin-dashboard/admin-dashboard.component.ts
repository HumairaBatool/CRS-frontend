import { Component, OnInit } from '@angular/core';
import { Router,NavigationEnd} from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  chartOptions: any;
  showSidebar: boolean = true;

constructor(private router:Router,private authService:AuthService){}
  ngOnInit(): void {
    // this.chartOptions = {
    //   animationEnabled: true,
    //   title: {
    //     text: "Sales Status",
    //     fontFamily: "Arial", 
    //     fontWeight: "bold", 
    //     fontSize: 24, 
    //     color: "#3a0163" 
    //   },
     
    //   data: [{
    //   type: "pie",
    //   startAngle: -90,
    //   indexLabel: "{name}: {y}",
    //   yValueFormatString: "#,###.##'%'",
    //   dataPoints: [
    //     { y: 40, name: "Completed" },
    //     { y:30, name: "Pending" },
    //     { y: 30, name: "On-way" },
    //   ]
    //   }]
    // }	

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log('NavigationEnd event: ', event);
        this.checkUserRole();
      }
    });
  }


  private checkUserRole() {
    // Check if the user is logged in and is an Admin
    if (this.authService.isLoggedIn() && this.authService.isAdmin()) {
      this.showSidebar = true; 
    } else {
      this.showSidebar = false; 
    }
  
    console.log('User is admin:', this.authService.isAdmin());
    console.log('Current URL:', this.router.url);
    console.log('showSidebar set to:', this.showSidebar);
  }
  
  
  
}

