import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'any'
})
export class DonationService  {
  constructor(private http: HttpClient){ }
  
  API = "http://localhost:8899/api/v1";
  
public getDonations(){
  return this.http.get(this.API + '/getdonations');
}

public deleteDonation(dId:any){
  return this.http.delete(this.API + '/deleteDonation/'+dId,dId);

  

}
public addrequest(request: any){
  return this.http.post(this.API+ '/addrequest',request);
}
public getRequest(){
  return this.http.get(this.API + '/getrequests');
}



}