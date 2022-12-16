import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService: HttpService) { }
  register(data: any){
    let header = { 
      headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };
  return this.httpService.postService("/users/Register", data, false, header )
  }
}
