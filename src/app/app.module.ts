import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';  // Import NgbModule

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DetailsComponent } from './admin-portal/details.component';
import { UsersDetailsComponent } from './users-details/users-details.component';
import { FormComponent } from './sale-form/form.component';
import { OrderDetailsComponent } from './all-sales-record/order-details.component';
import { SaleDetailsComponent } from './sale-details/sale-details.component';
import { ClientSignupComponent } from './client-signup/client-signup.component';
import { ClientLoginComponent } from './client-login/client-login.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './home/home.component';
import { SuperAdminDashboardComponent } from './super-admin-dashboard/super-admin-dashboard.component';
import { AgentDashboardComponent } from './agent-dashboard/agent-dashboard.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LayoutComponent } from './layout/layout.component';
import { AgentAttendanceComponent } from './agent-attendance/agent-attendance.component';
import { GetAttendanceRecordsComponent } from './get-attendance-records/get-attendance-records.component';
import { EditSaleModalComponent } from './edit-sale-modal/edit-sale-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    DetailsComponent,
    UsersDetailsComponent,
    FormComponent,
    OrderDetailsComponent,
    SaleDetailsComponent,
    ClientSignupComponent,
    ClientLoginComponent,
    ClientDetailsComponent,
    SidebarComponent,
    TopNavbarComponent,
    AdminDashboardComponent,
    HomeComponent,
    SuperAdminDashboardComponent,
    AgentDashboardComponent,
    AboutUsComponent,
    ContactUsComponent,
    LayoutComponent,
    AgentAttendanceComponent,
    GetAttendanceRecordsComponent,
    EditSaleModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    CanvasJSAngularChartsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
