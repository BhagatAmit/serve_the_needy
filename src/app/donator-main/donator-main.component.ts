import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donator-main',
  templateUrl: './donator-main.component.html',
  styleUrls: ['./donator-main.component.css']
})
export class DonatorMainComponent implements OnInit {
  showNav:boolean=false;
  constructor() { }
navView(){
  this.showNav=true

}
  ngOnInit(): void {
  }
  myimage:string="assets/images/donation-1.jpg";

}
