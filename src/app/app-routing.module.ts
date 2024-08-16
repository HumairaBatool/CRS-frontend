import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DetailsComponent } from './admin-portal/details.component';
import { UsersDetailsComponent } from './users-details/users-details.component';
import { OrderDetailsComponent } from './all-sales-record/order-details.component';
import { FormComponent } from './sale-form/form.component';
import { SaleDetailsComponent } from './sale-details/sale-details.component';
import { ClientSignupComponent } from './client-signup/client-signup.component';
import { ClientLoginComponent } from './client-login/client-login.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LayoutComponent } from './layout/layout.component';
import { AgentDashboardComponent } from './agent-dashboard/agent-dashboard.component';
import { SuperAdminDashboardComponent } from './super-admin-dashboard/super-admin-dashboard.component';
import { GetAttendanceRecordsComponent } from './get-attendance-records/get-attendance-records.component';
import { EditSaleModalComponent } from './edit-sale-modal/edit-sale-modal.component';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { SupervisorDashboardComponent } from './supervisor-dashboard/supervisor-dashboard.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: './home', pathMatch: 'full' },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },

  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'detail', component: DetailsComponent },
  { path: 'users-details', component: UsersDetailsComponent },

  { path: 'sales-details', component: OrderDetailsComponent },
  { path: 'sales-form', component: FormComponent },
  { path: 'sale-details', component: SaleDetailsComponent },
{path:'update-order',component:EditSaleModalComponent},
  { path: 'clientSignup', component: ClientSignupComponent },
  { path: 'clientLogin', component: ClientLoginComponent },
  { path: 'getclientDetail', component: ClientDetailsComponent },

  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'superadmin-dashboard', component: SuperAdminDashboardComponent },
  { path: 'manager-dashboard', component: ManagerDashboardComponent },
  { path: 'supervisor-dashboard', component: SupervisorDashboardComponent },

  { path: 'agent-dashboard', component: AgentDashboardComponent },
  {path:'attendance',component:GetAttendanceRecordsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
