import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Needy } from './needy';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient){ }

   API = "http://localhost:8899/api/v1";



  public formData!: FormGroup;

public loginNeedyFrmRemote(needy :Needy):Observable<any>{
  return this.http.post(this.API + '/login',needy)
}


}
