import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Donation } from './model/donation.model';
import { User } from './model/User';

/* providedIn: 'root' */
@Injectable({ providedIn: 'root' })
export class DonationService {

  constructor(private http: HttpClient) { }

  getAllDonation(): Observable<Donation[]> {
    return this.http.get<Donation[]>("http://localhost:8899/donations");
  }
  /*
    getDonationById(dId: number): Observable<any> {
      return this.http.get(this.baseUrl + dId);
    } */

  createDonation(donation: Donation): Observable<Donation> {
    console.log("welcome" + " " + donation.dName + donation.dDate);
    return this.http.post<Donation>("http://localhost:8899/donation", donation);
  }

  updateDonation(d: Donation): Observable<Donation> {
    return this.http.put<Donation>("http://localhost:8899/donation/update", d);
  }
  deleteDonation(d: Donation): Observable<string> {
    return this.http.delete<string>("http://localhost:8899/donation/delete/" + d.dId);

  }

  createUser(user: User): Observable<User> {

    return this.http.post<User>("http://localhost:8899/user", user);
  }
  validateDonator(user: User): Observable<any> {
/*     console.log(cred.email+" "+cred.password)
 */    return this.http.post("http://localhost:8899/login/", user);

  }

}
