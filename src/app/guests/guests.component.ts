import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-guests',
  templateUrl: './guests.component.html',
  styleUrls: ['./guests.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GuestsComponent implements OnInit {

  name = '!!!';
  viewMode = 'tab1';
 
  ngOnInit(): void {
  }

}
