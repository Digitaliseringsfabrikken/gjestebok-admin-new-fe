import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators, FormArray} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {MatStepperModule} from '@angular/material/stepper';
import { HttpClient } from '@angular/common/http';


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

  imageSrc: string = '';

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



  constructor(private _formBuilder: FormBuilder, private formBuilder: FormBuilder, private http: HttpClient) {}

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

//FILE UPLOAD
url="../assets/logo.png";
  onSelect(event: any) {
    let fileType = event.target.files[0].type;
    if (fileType.match(/image\/*/)) {
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        this.url = event.target.result;
      };
    } else {
      window.alert('Please select correct image format');
    }
  }

//  ADD MORE FIELDS "Entrances on step 1"
//
//   contact = {
//
//     contacts: [{ firstCtrl: '' }]
//   }
//
//   form: FormGroup = this.formBuilder.group({
//
//     contacts: this.buildContacts(this.contact.contacts)
//   });
//
//
//   get contacts(): FormArray {
//     return this.form.get('contacts') as FormArray;
//   }
//
//   buildContacts(contacts: {firstCtrl: string; }[] = []) {
//     return this.formBuilder.array(contacts.map(contact => this.formBuilder.group(contact)));
//   }
//
//   addContactField() {
//     this.contacts.push(this.formBuilder.group({firstCtrl: null}))
//   }
//
//   removeContactField(index: number): void {
//     if (this.contacts.length > 1) this.contacts.removeAt(index);
//     else this.contacts.patchValue([{firstCtrl: null}]);
//   }
//
//   submit(value: any): void {
//     console.log(value)
//   }
//
//   reset(): void {
//     this.form.reset();
//     this.contacts.clear();
//     this.addContactField();
//   }

}
