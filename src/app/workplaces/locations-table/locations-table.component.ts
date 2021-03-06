import { Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import '@ag-grid-community/core/dist/styles/ag-theme-alpine.css';
import { PacketService } from 'src/app/packet.service';
import { ExcelService } from 'src/app/excel.service';
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
import { Client } from 'src/app/models/clients.model';
import { MatPaginator } from '@angular/material/paginator';
import {MatDialog, MatDialogModule ,  MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddLocationComponent } from 'src/app/modals/add-location/add-location.component';
import { Router } from '@angular/router';
import { MatTabChangeEvent } from '@angular/material/tabs/tab-group';
import { LocationsComponent } from '../locations/locations.component';

@Component({
  selector: 'app-locations-table',
  templateUrl: './locations-table.component.html',
  styleUrls: ['./locations-table.component.css']
})
export class LocationsTableComponent implements OnInit, AfterViewInit {

  public clients :any
  public rowData = new MatTableDataSource<Client>();
  private gridApi!: GridApi;
  public displayedColumns = ['name',  'address', 'city', 'post_code','country','entrances', 'edit', 'delete'];
  constructor(private packetService: PacketService, private excelService:ExcelService, public dialog: MatDialog, private router: Router){}




  // Final Popup
openDialog(){
  this.dialog.open(AddLocationComponent, {
    width:'60%'
  });
}
openEditDialog(element:any){
  console.log('heree edit', element)
  this.dialog.open(LocationsComponent, {
    width:'60%'
  });
}

view(element:any){
  console.log('heree view', element)

}
// openDeleteDialog(element:any){
//   // console.log('heree delete', element)
//   this.dialog.open(DeleteClientComponent, {
//     width:'50%'
//   });
// }

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
  
  this.packetService.getAllClients()
    .subscribe(
      res => {
        this.rowData.data = res as Client[];
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




