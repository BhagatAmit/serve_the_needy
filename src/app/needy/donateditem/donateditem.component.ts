import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

import { DonationService } from '../donation.service';

@Component({
  selector: 'app-donateditem',
  templateUrl: './donateditem.component.html',
  styleUrls: ['./donateditem.component.css']
})
export class DonateditemComponent  {


 donationDetails :any=null;

constructor(private donationService: DonationService, private route: Router){
   this.getDonationsDetails();
 }
  getDonationsDetails(){
    this.donationService.getDonations().subscribe(
      (resp) =>{
        console.log(resp);
        this.donationDetails =resp;

      },
      (err) => {
        console.log(err);

      }
    );
   }

  delete(deleteForm: { value: any; }){
    this.donationService.deleteDonation(deleteForm.value).subscribe(
      (resp) =>{
      console.log(resp);
    },
    err => {
      console.log(err);
    }

    );
   }


   back(){
    this.route.navigate(['/main']);
  }



}
