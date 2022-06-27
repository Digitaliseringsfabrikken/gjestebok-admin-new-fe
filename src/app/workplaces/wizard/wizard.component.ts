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
    // {
    //   provide: STEPPER_GLOBAL_OPTIONS,
    //   useValue: {showError: true},
    // },
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {displayDefaultIndicatorType: false}
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

  contact = {
    contacts: [{ phoneNo: '', emailAddr: '' }]
  }


  constructor(private _formBuilder: FormBuilder, private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
      entranceCtrl: ['', Validators.required],
      contacts: new FormArray([
        new FormGroup({
          fistCtrl: new FormControl(''),
          entranceCtrl: new FormControl('')

        })
      ])
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required],
    });

  //  ADD MULTIPLE ENTRANCES


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


  //Time zone select
  times: string[] = [
    '(GMT +00:00) GMT',
    '(GMT +00:00) UTC',
    '(GMT +1:00) ECT',
    '(GMT +2:00) EET',
    '(GMT +2:00) ART',
    '(GMT +3:00) EAT',
    '(GMT +3:30) MET',
    '(GMT +4:00) NET',
    '(GMT +5:00) PLT',
    '(GMT +5:30) IST',
    '(GMT +6:00) BST',
    '(GMT +7:00) VST',
    '(GMT +8:00) CTT',
    '(GMT +9:00) JST',
    '(GMT +9:30) ACT',
    '(GMT +10:00) AET',
    '(GMT +11:00) SST',
    '(GMT +12:00) NST',
    '(GMT -11:00) MIT',
    '(GMT -10:00) HST',
    '(GMT -9:00) AST',
    '(GMT -8:00) PST',
    '(GMT -7:00) PNT',
    '(GMT -7:00) MST',
    '(GMT -6:00) CST',
    '(GMT -5:00) EST',
    '(GMT -5:00) IET',
    '(GMT -4:00) PRT',
    '(GMT -3:30) CNT',
    '(GMT -3:00) AGT',
    '(GMT -3:00) BET',
    '(GMT -1:00) CAT'
  ];

//  ADD MORE ENTRANCES
  get contacts(): FormArray {
    return this.firstFormGroup.get('contacts') as FormArray;
  }

  buildContacts(contacts: {phoneNo: string; emailAddr: string;}[] = []) {
    return this.formBuilder.array(contacts.map(contact => this.formBuilder.group(contact)));
  }
  addContactField() {
    this.contacts.push(this.formBuilder.group({entranceCtrl: new FormControl(''),}))

  }

  removeContactField(index: number): void {
    if (this.contacts.length > 1) this.contacts.removeAt(index);
    else this.contacts.patchValue([{phoneNo: null, emailAddr: null}]);
  }

  submit(value: any): void {
    console.log(value)
  }

  reset(): void {
    this.firstFormGroup.reset();
    this.contacts.clear();
    this.addContactField();
  }
}