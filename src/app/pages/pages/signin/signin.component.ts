import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,ReactiveFormsModule ,FormsModule} from '@angular/forms';
import {  Router } from '@angular/router';


import { LoginService } from 'src/app/login.service';
import { Needy } from 'src/app/needy';






@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  
    
needy = new Needy();
msg='';
 

  constructor(private loginservice: LoginService, private route: Router){}

    ngOnInit(){
     
    }
    logInUser(){
     this.loginservice.loginNeedyFrmRemote(this.needy).subscribe(
       (       data) =>{
         
        console.log("response received");
        this.route.navigate(['/main']);
      
       },
       ( error) => {
         console.log("exceptionoccured");
         this.msg=("Bad credentials");
       }
     )
    }
   
}
