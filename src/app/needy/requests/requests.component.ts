import { Component, OnInit ,Input} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DonationService } from '../donation.service';


@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent  {
  requestdetails: any=null;
 



  constructor(private donationService: DonationService,private route: Router){
    this.getRequestDetails();
  }
    
   
 
  getRequestDetails(){
    this.donationService.getRequest().subscribe(
      (resp) =>{
        console.log(resp);
        this.requestdetails =resp;

      },
      (err) => {
        console.log(err);
       
      } 
    );
   }

   back(){
    this.route.navigate(['/main']);
  }
  }