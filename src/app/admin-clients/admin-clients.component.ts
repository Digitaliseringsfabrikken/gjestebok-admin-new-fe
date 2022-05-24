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
import { AddClientComponent } from '../modals/add-client/add-client.component';
import { EditClientComponent } from '../modals/edit-client/edit-client.component';
import { DeleteClientComponent } from '../modals/delete-client/delete-client.component';

@Component({
  selector: 'app-admin-clients',
  templateUrl: './admin-clients.component.html',
  styleUrls: ['./admin-clients.component.css']
})
export class AdminClientsComponent implements OnInit, AfterViewInit  {
 public clients :any
  public rowData = new MatTableDataSource<Client>();
  private gridApi!: GridApi;
  public displayedColumns = ['image', 'name', 'email', 'sms', 'created_at', 'view', 'edit', 'delete'];
  constructor(private packetService: PacketService, private excelService:ExcelService, public dialog: MatDialog){}


  // Final Popup
openDialog(){
  this.dialog.open(AddClientComponent, {
    width:'50%'
  });
}
openEditDialog(element:any){
  console.log('heree edit', element)
  this.dialog.open(EditClientComponent, {
    width:'50%'
  });
}

view(element:any){
  console.log('heree view', element)

}
openDeleteDialog(element:any){
  // console.log('heree delete', element)
  this.dialog.open(DeleteClientComponent, {
    width:'50%'
  });
}

  // @ViewChild(MatSort, {static: false})
  // set sort(value: MatSort) {
  //   this.rowData.sort = value;
  // }
  // @ViewChild(MatSort, {static: false})
  // set sort(value: MatSort) {
  //   this.rowData.sort = value;
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


//popup
// openDialog(): void {
//   const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
//     width: '250px',
//     data: {name: this.name, animal: this.animal},
//   });

//   dialogRef.afterClosed().subscribe(result => {
//     console.log('The dialog was closed');
//     this.animal = result;
//   });
// }
// }

// @Component({
// selector: 'dialog-overview-example-dialog',
// templateUrl: 'dialog-overview-example-dialog.html',
// })
// export class DialogOverviewExampleDialog {
// constructor(
//   public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
//   @Inject(MAT_DIALOG_DATA) public data: DialogData,
// ) {}




 //popup
//  open(content:any) {
//   this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result:any) => {
//     this.closeResult = `Closed with: ${result}`;
//   }, (reason) => {
//     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
//   });
// }

// private getDismissReason(reason: any): string {
//   if (reason === ModalDismissReasons.ESC) {
//     return 'by pressing ESC';
//   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
//     return 'by clicking on a backdrop';
//   } else {
//     return  `with: ${reason}`;
//   }
// }
// public addHandler() {
//   this.formGroupAdd = new FormGroup({
//     'firstName': new FormControl(''),
//     'lastName': new FormControl(''),
//     'username': new FormControl(''),
//     'password': new FormControl(''),
//     'location': new FormControl('')
//   });
// }
// public saveHandler() {
//   this.subscriptions.add(
  
//     this.packetService.createUser(this.formGroupAdd.value)
//       .pipe(first())
//       .subscribe(data => {
//           this.user = data;
//           // console.log('success', this.user);
//           this.formGroupAdd.reset();
//           this.packetService.onCompleteRefresh();
//           window.location.reload();
//         },
//         error => {
//           console.log('error while creating a new user');
//         })
//         );
// }


}
