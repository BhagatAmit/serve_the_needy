import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormControl, FormGroup } from '@angular/forms';
import { User } from '../model/User';
import { DonationService} from '../donationservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donator-login',
  templateUrl: './donator-login.component.html',
  styleUrls: ['./donator-login.component.css']
})
export class DonatorLoginComponent implements OnInit {
  myimage:string="assets/images/donation-1.jpg";
login=new FormGroup({
 
  email:new FormControl(),
  password:new FormControl()
})
user=new User();
msg='';
  constructor(private donationService:DonationService,private route:Router) { }


  ngOnInit(): void {
    
  }
  getCredential(){
   
    this.user.email=this.login.value.email;
    this.user.password=this.login.value.password;

    this.donationService.validateDonator(this.user)
    .subscribe(
      (data)=>{
        console.log("response recieved");
        this.route.navigate(['/donator-home'])},
        (error)=>{
          console.log("exception occured");
          this.login.reset();

          alert("Invalid username or password")
          this.msg=("Bad credentials");
        }
    )
      
  
  }

}
