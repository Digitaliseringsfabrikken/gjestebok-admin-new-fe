import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdminClientsComponent } from './admin-clients/admin-clients.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule,  HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSort, MatSortModule} from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PopupComponent } from './popup/popup.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddClientComponent } from './modals/add-client/add-client.component';
import { EditClientComponent } from './modals/edit-client/edit-client.component';
import { DeleteClientComponent } from './modals/delete-client/delete-client.component';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { WorkplacesComponent } from './workplaces/workplaces/workplaces.component';
import { LocationsComponent } from './workplaces/locations/locations.component';
import {MatTabsModule} from '@angular/material/tabs';
import { CompaniesComponent } from './workplaces/companies/companies.component';
import {MatIconModule} from '@angular/material/icon';
import { EmployeesComponent } from './workplaces/employees/employees.component';
import { AddLocationComponent } from './modals/add-location/add-location.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { WizardComponent } from './workplaces/wizard/wizard.component';
import { RouterModule } from "@angular/router";
import { BodyComponent } from './body/body.component';
import {MatStepperModule} from '@angular/material/stepper';
import { AddManualEmployeeComponent } from "./workplaces/wizard/add-manual-employee/add-manual-employee.component";
import { STEPPER_GLOBAL_OPTIONS } from "@angular/cdk/stepper";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminDashboardComponent,
    HeaderComponent,
    SidebarComponent,
    AdminClientsComponent,
    PopupComponent,
    AddClientComponent,
    EditClientComponent,
    DeleteClientComponent,
    ClientDashboardComponent,
    WorkplacesComponent,
    LocationsComponent,
    CompaniesComponent,
    EmployeesComponent,
    AddLocationComponent,
    WizardComponent,
    BodyComponent,
    AddManualEmployeeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    AgGridModule.withComponents([]),
    HttpClientModule,
    // NgModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatFormFieldModule,
    MatDialogModule,
    MatTabsModule,
    MatIconModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    RouterModule,
    MatStepperModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
