import { Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import '@ag-grid-community/core/dist/styles/ag-theme-alpine.css';
import {PacketService} from '../packet.service';
import {ExcelService} from '../excel.service';
import {
  ColDef,
  GridApi,
  GridReadyEvent,
  ICellRendererParams,
  PopupComponent,
} from 'ag-grid-community';
import {FormGroup, FormControl, FormBuilder} from '@angular/forms';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Client } from './../models/clients.model';
import { MatPaginator } from '@angular/material/paginator';
import {MatDialog, MatDialogModule ,  MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddUserComponent } from '../modals/add-user/add-user.component';
import { EditUserComponent } from '../modals/edit-user/edit-user.component';
import { DeleteUserComponent } from '../modals/delete-user/delete-user.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public clients :any
  public rowData = new MatTableDataSource<Client>();
  private gridApi!: GridApi;
  public displayedColumns = ['id', 'client_id', 'name', 'email', 'role', 'is_active', 'is_intercom', 'email_verified_at', 'created_at', 'updated_at', 'deleted_at'];
  constructor(private packetService: PacketService, private excelService:ExcelService, public dialog: MatDialog){}

  openDialog(){
    this.dialog.open(AddUserComponent, {
      width:'50%'
    });
  }
  openEditDialog(element:any){
    console.log('heree edit', element)
    this.dialog.open(EditUserComponent, {
      width:'50%'
    });
  }
  
  view(element:any){
    console.log('heree view', element)
  
  }
  openDeleteDialog(element:any){
    // console.log('heree delete', element)
    this.dialog.open(DeleteUserComponent, {
      width:'50%'
    });
  }
  
    @ViewChild(MatSort)
    sort!: MatSort;
    @ViewChild(MatPaginator)
    paginator!: MatPaginator;
    ngAfterViewInit() {
      this.rowData.sort = this.sort;
      this.rowData.paginator = this.paginator;
    }
  
    /** Announce the change in sort state for assistive technology. */
    announceSortChange(sortState: Sort) {
      if (sortState.direction) {
        // this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
      } else {
        // this._liveAnnouncer.announce('Sorting cleared');
      }
    }
  
  
    ngOnInit(): void {
      this.onAllClients()
    }
   
  
    onAllClients() {
      // console.log('get All Clientsgg');
      this.packetService.getAllUsers().subscribe(
          res => {
            this.clients = res;
            console.log('get All Clientsgg',  this.clients);
          },
          error => {
            console.log(error);
          });
    }
    public doFilter(event:any) {
      console.log('dd',event.target.value )
      this.rowData.filter = event.target.value.trim().toLocaleLowerCase();
    }
  
   
  
    //export to Excel
    exportAsXLSX():void {
      console.log('get All Clientsgg',  this.clients);
      this.excelService.exportAsExcelFile( this.clients, 'myExcelFile');
   }
   onBtnExport() {
    this.gridApi.exportDataAsCsv();
  }
  

}
