import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {Subscription} from 'rxjs';
import {PacketService} from '../../packet.service';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {
  public formGroupAdd: FormGroup;
  subscriptions = new Subscription();

  constructor(private packetService: PacketService) { }

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
