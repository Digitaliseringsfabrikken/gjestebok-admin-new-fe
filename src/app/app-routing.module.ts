import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminClientsComponent } from './admin-clients/admin-clients.component';

const routes: Routes = [
  { path: '', 
    redirectTo: '/login', 
    pathMatch: 'full'},
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent
  },
  {
    path: 'admin-clients',
    component: AdminClientsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
