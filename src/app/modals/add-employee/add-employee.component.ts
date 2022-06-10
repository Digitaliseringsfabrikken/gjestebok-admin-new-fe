import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';

interface Company {
  value: string;
  viewValue: string;
}
interface Location{
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employeeFormGroup!: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.employeeFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
  }

  public doFilter(event:any) {
    console.log('dd',event.target.value )
    // this.rowData.filter = event.target.value.trim().toLocaleLowerCase();
  }

  // SELECT COMPANY
  companies: string[] = [
    'None',
    'Company 1',
    'Company 2',
    'Company 3',
    'Company 4',
  ]

  locations:  string[] = [
    'Headquarters Oslo',
    'Main office Copenhagen',
    'Homesourcing Serbia',
    'Headquarters Oslo',
  ]

}
