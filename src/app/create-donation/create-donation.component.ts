import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DonationService} from '../donationservice.service';
import { Donation } from '../model/donation.model';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-donation',
  templateUrl: './create-donation.component.html',
  styleUrls: ['./create-donation.component.css']
})
export class CreateDonationComponent implements OnInit {
  donation=new FormGroup({
    dName:new FormControl(),
    dQuantity:new FormControl(),
    dDate:new FormControl()
  });
  don=new Donation();
  constructor(private donationService:DonationService) { }

  ngOnInit(): void {
  }
  getdonation(){
    this.don.dName=this.donation.value.dName;
    this.don.dQuantity=this.donation.value.dQuantity;
    this.don.dDate=this.donation.value.dDate;
    console.log(this.don);
    this.donationService.createDonation(this.don)
    .subscribe(
      response=>{console.log(response)},
      err=>{console.log(err)});
      this.donation.reset();
      alert("Donation registered Successfully")
  
}
}
