import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donator-home',
  templateUrl: './donator-home.component.html',
  styleUrls: ['./donator-home.component.css']
})
export class DonatorHomeComponent implements OnInit {
  myimage:string="assets/images/donation-1.jpg";

  constructor() { 
  
  }

  ngOnInit(): void {
  
  }
  
}
