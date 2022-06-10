import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {Subscription} from 'rxjs';
import {PacketService} from '../../packet.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  public formGroupAdd !: FormGroup;
  subscriptions = new Subscription();

  constructor(private packetService: PacketService) { }

  ngOnInit(): void {
  }
  public addHandler() {
    this.formGroupAdd = new FormGroup({
      'client_id': new FormControl(''),
      'name': new FormControl(''),
      'email': new FormControl('', [
        Validators.required,
        Validators.pattern('[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{1,63}$')
      ]),
      'role': new FormControl(''),
      'is_active': new FormControl(''),
      'is_intercom': new FormControl(''),
      'email_verified_at': new FormControl(''),
      'created_at': new FormControl(''),
      'updated_at': new FormControl(''),
      'deleted_at': new FormControl(''),
    });
  }
  public saveHandler() {
    console.log('user is added')
    // this.subscriptions.add(
    
    //   this.packetService.createUser(this.formGroupAdd.value)
    //     .pipe(first())
    //     .subscribe(data => {
    //         this.user = data;
    //         // console.log('success', this.user);
    //         this.formGroupAdd.reset();
    //         this.packetService.onCompleteRefresh();
    //         window.location.reload();
    //       },
    //       error => {
    //         console.log('error while creating a new user');
    //       })
    //       );
  }

}
