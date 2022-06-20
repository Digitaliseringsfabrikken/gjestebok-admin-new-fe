import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  clients:any = []
  selectVal:string = "";
  user:any
  constructor(public router: Router) { 
    this.clients = ['norautron', 'test2', 'test3']
    this.user=false
  }

  ngOnInit(): void {
  }

}
