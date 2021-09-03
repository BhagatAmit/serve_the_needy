import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../model/User';
import { DonationService} from '../donationservice.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  register=new FormGroup({
    fullName:new FormControl(),
    email:new FormControl(),
    username:new FormControl(),
    phone:new FormControl(),
    password:new FormControl()

  });
  reg=new User();
  constructor(private donationService:DonationService) { }

  ngOnInit(): void {
  }
  getUser(){
    this.reg.email=this.register.value.email;
    this.reg.fullName=this.register.value.fullName;
    this.reg.username=this.register.value.username;
    this.reg.phone=this.register.value.phone;
    this.reg.password =this.register.value.password;
    this.donationService.createUser(this.reg)
    .subscribe(
      response=>{console.log(response)},
      err=>{console.log(err)});
      this.register.reset();
      alert("Donator registered Successfully")
  }

}
