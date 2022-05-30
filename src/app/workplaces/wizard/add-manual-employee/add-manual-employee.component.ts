import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';


@Component({
  selector: 'app-add-manual-employee',
  templateUrl: './add-manual-employee.component.html',
  styleUrls: ['./add-manual-employee.component.css']
})
export class AddManualEmployeeComponent implements OnInit {

  employeeFormGroup!: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.employeeFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });

  };
}
