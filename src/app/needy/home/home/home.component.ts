import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DonationService } from '../../donation.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  alert:boolean= false;
  addForm: any;
  constructor(private donationService: DonationService,private route: Router
    
  ) { }
add(addForm: { value: any; } ){
this.donationService.addrequest(addForm.value).subscribe(
 
  (resp) => {
    this.alert=true;
    this.addForm.reset({});
  console.log(resp);
  
  },
  (err) => {
    console.log(err);
  }
)
}
closeAlert(){
  this.alert = false;
}

back(){
  this.route.navigate(['/main']);
}
  
}
