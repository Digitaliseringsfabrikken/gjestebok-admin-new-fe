import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {Subscription} from 'rxjs';
import {PacketService} from '../../packet.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  public formGroupAdd: FormGroup;
  subscriptions = new Subscription();

  constructor(private packetService: PacketService) { }

  ngOnInit(): void {
  }
  public addHandler() {
    this.formGroupAdd = new FormGroup({
      'name': new FormControl(''),
      'email': new FormControl('', [Validators.required, Validators.email]), //new FormControl('',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
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
