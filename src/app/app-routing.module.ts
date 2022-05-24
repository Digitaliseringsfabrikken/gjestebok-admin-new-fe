import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { AdminClientsComponent } from './admin-clients/admin-clients.component';
import { WorkplacesComponent } from './workplaces/workplaces/workplaces.component';

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
  {
    path: 'client-dashboard',
    component: ClientDashboardComponent
  },
  {
    path: 'workplaces',
    component: WorkplacesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
