import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-companies',
  templateUrl: './add-companies.component.html',
  styleUrls: ['./add-companies.component.css']
})
export class AddCompaniesComponent implements OnInit {

  companyFormGroup!: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.companyFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
  }

  public doFilter(event:any) {
    console.log('dd',event.target.value )
    // this.rowData.filter = event.target.value.trim().toLocaleLowerCase();
  }

}
