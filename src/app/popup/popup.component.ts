import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';


@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  constructor() { }

  ngOnInit(): void {
  }
  saveHandler(){
    console.log("Hello SaveHandler");
  }

}
