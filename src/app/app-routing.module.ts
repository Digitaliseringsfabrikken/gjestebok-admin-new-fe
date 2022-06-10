import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { AdminClientsComponent } from './admin-clients/admin-clients.component';
import { WorkplacesComponent } from './workplaces/workplaces/workplaces.component';
import { LocationsComponent } from './workplaces/locations/locations.component';
import { WizardComponent } from './workplaces/wizard/wizard.component';
import { DevicesComponent } from './devices/devices.component';
import { UsersComponent } from './users/users.component';

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
  },
  {
    path: 'workplace-locations',
    component: LocationsComponent
  },
  {
  path: 'workplace-wizard',
  component: WizardComponent
  },
  {
    path: 'devices',
    component: DevicesComponent
  },
  {
    path: 'users',
    component: UsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
