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
import { WorkplacesComponent } from './workplaces/workplaces/workplaces.component';
import { LocationsComponent } from './workplaces/locations/locations/locations.component';



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
    WorkplacesComponent,
    LocationsComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    AgGridModule.withComponents([]),
    HttpClientModule,
    // NgbModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatFormFieldModule,
    MatDialogModule
    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
