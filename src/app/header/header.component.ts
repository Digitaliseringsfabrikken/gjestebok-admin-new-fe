import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  clients:any = []
  selectVal:string = "";
  user:any
  constructor() { 
    this.clients = ['norautron', 'test2', 'test3']
    this.user=false
  }

  ngOnInit(): void {
  }

}
