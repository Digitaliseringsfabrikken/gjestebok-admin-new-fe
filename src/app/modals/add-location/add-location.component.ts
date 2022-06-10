import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import {Subscription} from 'rxjs';
import {PacketService} from '../../packet.service';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';





@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css']
})
export class AddLocationComponent implements OnInit {

  //Show a section on click
  isShown: boolean = false ; // hidden by default
  //Hide Button onclick
  hideBtn: boolean = true;

//  Show close icon onclick
  hideIcon: boolean = false;

toggleShow() {
this.isShown = ! this.isShown;
this.hideBtn = ! this.hideBtn;
this.hideIcon = !this.hideIcon;
}
  hideSection(){
  this.isShown = ! this.hideIcon;
  this.hideIcon =! this.hideIcon;
  this.hideBtn = ! this.hideIcon;
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


  contact = {
    contacts: [{ phoneNo: '', emailAddr: '' }]
  }

  form: FormGroup = this.formBuilder.group({
    contacts: this.buildContacts(this.contact.contacts)
  });

  public formGroupAdd!: FormGroup;
  subscriptions = new Subscription();

  constructor(private packetService: PacketService, private formBuilder: FormBuilder) {


  }
  get contacts(): FormArray {
    return this.form.get('contacts') as FormArray;
  }

  buildContacts(contacts: {phoneNo: string; emailAddr: string;}[] = []) {
    return this.formBuilder.array(contacts.map(contact => this.formBuilder.group(contact)));
  }
  addContactField() {
    this.contacts.push(this.formBuilder.group({name: new FormControl(''),}))

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

  ngOnInit() {
    this.form = new FormGroup({
      contacts: new FormArray([
        new FormGroup({
          name: new FormControl(''),

        })
      ])
    });
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
    console.log('location is added')

  }


}