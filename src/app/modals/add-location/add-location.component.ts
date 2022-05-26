import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import {Subscription} from 'rxjs';
import {PacketService} from '../../packet.service';
import {MatSelectModule} from '@angular/material/select';


  // Time zone select
  interface Food {
    value: string;
    viewValue: string;
  }


@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css']
})
export class AddLocationComponent implements OnInit {

  //Time zone select
  foods: Food[] = [
    {value: 'test', viewValue: '(GMT +00:00) GMT'},
    {value: 'floor(Math. random() * (max - min + 1)) + min', viewValue: '(GMT +00:00) UTC'},
    {value: 'floor(Math. random() * (max - min + 1)) + min', viewValue: '(GMT +1:00) ECT'},
    {value: 'floor(Math. random() * (max - min + 1)) + min', viewValue: '(GMT +2:00) EET'},
    {value: 'floor(Math. random() * (max - min + 1)) + min', viewValue: '(GMT +2:00) ART'},
    {value: 'floor(Math. random() * (max - min + 1)) + min', viewValue: '(GMT +3:00) EAT'},
    {value: 'floor(Math. random() * (max - min + 1)) + min', viewValue: '(GMT +3:30) MET'},
    {value: 'floor(Math. random() * (max - min + 1)) + min', viewValue: '(GMT +4:00) NET'},
    {value: 'floor(Math. random() * (max - min + 1)) + min', viewValue: '(GMT +5:00) PLT'},
    {value: 'floor(Math. random() * (max - min + 1)) + min', viewValue: '(GMT +5:30) IST'},
    {value: 'floor(Math. random() * (max - min + 1)) + min', viewValue: '(GMT +6:00) BST'},
    {value: 'floor(Math. random() * (max - min + 1)) + min', viewValue: '(GMT +7:00) VST'},
    {value: 'floor(Math. random() * (max - min + 1)) + min', viewValue: '(GMT +8:00) CTT'},
    {value: 'floor(Math. random() * (max - min + 1)) + min', viewValue: '(GMT +9:00) JST'},
    {value: 'floor(Math. random() * (max - min + 1)) + min', viewValue: '(GMT +9:30) ACT'},
    {value: 'floor(Math. random() * (max - min + 1)) + min', viewValue: '(GMT +10:00) AET'},
    {value: 'floor(Math. random() * (max - min + 1)) + min', viewValue: '(GMT +11:00) SST'},
    {value: 'floor(Math. random() * (max - min + 1)) + min', viewValue: '(GMT +12:00) NST'},
    {value: 'floor(Math. random() * (max - min + 1)) + min', viewValue: '(GMT -11:00) MIT'},
    {value: 'floor(Math. random() * (max - min + 1)) + min', viewValue: '(GMT -10:00) HST'},
    {value: 'floor(Math. random() * (max - min + 1)) + min', viewValue: '(GMT -9:00) AST'},
    {value: 'floor(Math. random() * (max - min + 1)) + min', viewValue: '(GMT -8:00) PST'},
    {value: 'floor(Math. random() * (max - min + 1)) + min', viewValue: '(GMT -7:00) PNT'},
    {value: 'floor(Math. random() * (max - min + 1)) + min', viewValue: '(GMT -7:00) MST'},
    {value: 'floor(Math. random() * (max - min + 1)) + min', viewValue: '(GMT -6:00) CST'},
    {value: 'floor(Math. random() * (max - min + 1)) + min', viewValue: '(GMT -5:00) EST'},
    {value: 'floor(Math. random() * (max - min + 1)) + min', viewValue: '(GMT -5:00) IET'},
    {value: 'floor(Math. random() * (max - min + 1)) + min', viewValue: '(GMT -4:00) PRT'},
    {value: 'floor(Math. random() * (max - min + 1)) + min', viewValue: '(GMT -3:30) CNT'},
    {value: 'floor(Math. random() * (max - min + 1)) + min', viewValue: '(GMT -3:00) AGT'},
    {value: 'floor(Math. random() * (max - min + 1)) + min', viewValue: '(GMT -3:00) BET'},
    {value: 'floor(Math. random() * (max - min + 1)) + min', viewValue: '(GMT -1:00) CAT'},
  ];
  foodControl = new FormControl(this.foods[2].value);


  contact = {
    firstName: 'Harry',
    lastName: 'Potter',
    contacts: [{ phoneNo: '', emailAddr: '' }]
  } 
  
  form: FormGroup = this.formBuilder.group({
    contacts: this.buildContacts(this.contact.contacts)
  });

  public formGroupAdd!: FormGroup;
  subscriptions = new Subscription();

  constructor(private packetService: PacketService, private formBuilder: FormBuilder) { 

      this.form = new FormGroup({
        food: this.foodControl,
      });

  }
  get contacts(): FormArray {
    return this.form.get('contacts') as FormArray;
  }

  buildContacts(contacts: {phoneNo: string; emailAddr: string;}[] = []) {
    return this.formBuilder.array(contacts.map(contact => this.formBuilder.group(contact)));
  }

  addContactField() {
    this.contacts.push(this.formBuilder.group({phoneNo: null, emailAddr: null}))
  }

  removeContactField(index: number): void {
    if (this.contacts.length > 1) this.contacts.removeAt(index);
    else this.contacts.patchValue([{phoneNo: null, emailAddr: null}]);
  }

  submit(value: any): void {
    console.log(value)
  }

  reset(): void {
    this.form.reset();
    this.contacts.clear();
    this.addContactField();
  }

  ngOnInit(): void {
  }

  public addHandler() {
    this.formGroupAdd = new FormGroup({
      'name': new FormControl(''),
      'email': new FormControl('', [
        Validators.required,
        Validators.pattern('[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{1,63}$')
      ]),
      'address': new FormControl(''),
      'website': new FormControl(''),
    });
  }
  public saveHandler() {
    console.log('user is added')
  
  }

}
