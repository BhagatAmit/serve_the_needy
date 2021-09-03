import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../model/api.response';
import { Router } from '@angular/router';
import { Donation } from '../model/donation.model';
import { DonationService } from '../donationservice.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-donation-list',
  templateUrl: './donation-list.component.html',
  styleUrls: ['./donation-list.component.css']
})
export class DonationListComponent implements OnInit {
 
  
    
    donations:Donation[]=[];
    isUpdated:boolean=false;
    isError:boolean=false;
    editDonation=new FormGroup(
      {
        dId:new FormControl(),
        dName:new FormControl(),
        dQuantity:new FormControl(),
        dDate:new FormControl()
      }
    );
    constructor(private donationService:DonationService,private router:Router){}
  
    ngOnInit(): void {
       this.donationService.getAllDonation()
       .subscribe(response=>{this.donations=response},
        err=>{console.log(err)})
    }
    showDonation(don:Donation){
      
      this.editDonation.setValue({dId:don.dId,dName:don.dName,dQuantity:don.dQuantity,dDate:don.dDate});
      console.log(this.editDonation.value);
    }
    updateDonation(){
      this.donationService.updateDonation(this.editDonation.value)
      .subscribe(completed=>{alert('Donation Details Updated');this.ngOnInit();
      this.isUpdated=true;},
        err=>{alert('Donation Details not Updated');this.isError=true});
    }
    deleteDonation(don:Donation){
      this.donationService.deleteDonation(don)
      .subscribe(completed=>{console.log(completed); },
      error=>{alert(error)});
     
      this.donationService.getAllDonation()
      .subscribe(response=>{this.donations=response},
       err=>{console.log(err)});
    }
  }
  