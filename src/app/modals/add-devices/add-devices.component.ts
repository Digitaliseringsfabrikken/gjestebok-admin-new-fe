import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-devices',
  templateUrl: './add-devices.component.html',
  styleUrls: ['./add-devices.component.css']
})
export class AddDevicesComponent implements OnInit {
  devicesFormGroup!: FormGroup;


  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.devicesFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
  }

  public doFilter(event:any) {
    console.log('dd',event.target.value )
    // this.rowData.filter = event.target.value.trim().toLocaleLowerCase();
  }
  locations: string[] = [
    'Headquarters Oslo',
    'Main office Stockholm',
    'Meeting room ',
    'Headquarters Oslo'
  ];
  entrancess: string[] = [
    'Main Entrance',
    'Main Entrance',
    'Main Entrance',
    'Main Entrance'

  ]

}
