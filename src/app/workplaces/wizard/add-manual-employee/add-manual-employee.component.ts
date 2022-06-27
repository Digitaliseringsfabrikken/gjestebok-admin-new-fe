import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators, FormArray} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';




@Component({
  selector: 'app-add-manual-employee',
  templateUrl: './add-manual-employee.component.html',
  styleUrls: ['./add-manual-employee.component.css']
})
export class AddManualEmployeeComponent implements OnInit {

  employeeFormGroup!: FormGroup;


  constructor(private _formBuilder: FormBuilder, private formBuilder: FormBuilder,) {}

  ngOnInit() {
    this.employeeFormGroup = this._formBuilder.group({
      employeeFormGroup: ['', Validators.required],
    });
  };

  selectedOption = '1'

  // Companies Select
  companies: string[] = [
    'None',
   'Homesourcing',
   'Cisco',
  'Vertrand AS',
  'Carrot AS'
  ];

  // Gjestbok Role
  roles: string[] = [
    'None',
    'Superadmin',
    'Company admin'
   ];

}
