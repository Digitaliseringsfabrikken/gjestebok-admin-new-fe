import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {MatStepperModule} from '@angular/material/stepper';


@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    }
  ],
})
export class WizardComponent implements OnInit {

  isShow = true;
  display = false;

  manualEmployee() {
    this.display = true;
    this.isShow = false;
  }

  myusername: string = "";
  companyname : string = "";
  employeenumber : string = "";

  blurEvent(event: any){
    this.myusername = event.target.value;
  }
  blurEventt(event: any){
    this.companyname = event.target.value;
  }
  blurEventtt(event: any){
    this.employeenumber = event.target.value;
  }

  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup! : FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required],
    });
  }



}
