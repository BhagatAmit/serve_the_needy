import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ngo } from './ngo';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NgoService {
  constructor(
    private http: HttpClient
  ) { }


   createNgoMember(data: any) {
    console.log(data)
    return this.http.post<any>("http://localhost:8899/Ngo/NgoMember", data)

      .pipe(map((res: any) => {
        console.log(data )
        console.log(res)
        return res;
      }))
  }

  getMembers() {
    return this.http.get<Ngo>("http://localhost:8899/Ngo/NgoMembers")
      .pipe(map((res: any) => {
        return res;
      }))
  }

  updateMember(data: any, memberId: number) {
    return this.http.put<Ngo>('http://localhost:8899/Ngo/NgoMember/update' + memberId, data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  deleteMember(memberId: number) {
    return this.http.delete<void>('http://localhost:8899/Ngo/NgoMember/delete/' + memberId)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  OnGet() {
    let url = "http://localhost:8899/Ngo/NgoMembers";
    return this.http.get(url);
  }

  saveMemberData(data: any) {
    console.log(data);
    return this.http.post('http://localhost:8899/Ngo/NgoMember', data);
  }

  getCurrentData(memberId: any) {
    return this.http.get<Ngo>('http://localhost:8899/Ngo/NgoMember/' + memberId)
  }
}
