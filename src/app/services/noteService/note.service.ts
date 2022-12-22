import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from '../httpService/http.service';
@Injectable({
  providedIn: 'root'
})
export class NoteService {
  token: any;
  constructor(private httpService: HttpService) {
    this.token=localStorage.getItem('token')
   }

  createNote(data: any){
    this.token= localStorage.getItem('token')
    let header ={
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
       Authorization:'Bearer '+ this.token,
    })
  };
  return this.httpService.postService("/note/create", data, true, header)
  }

  getAllNotes(){
    this.token= localStorage.getItem('token')
    let header ={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization:'Bearer '+ this.token
      })
    };
    return this.httpService.getService("/note/allNote" ,true, header)
  }

  updateNote(data: any){
    this.token= localStorage.getItem('token')
    let header ={
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
       Authorization:'Bearer '+ this.token,
    })
  };
  let noteId=data.id
  console.log(data.id)
  return this.httpService.putService(`/note/${noteId}`, data, true, header)
  }
}
