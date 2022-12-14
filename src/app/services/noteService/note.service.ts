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
  return this.httpService.putService(`/note/${noteId}`, data, true, header)
  }
  archiveNoteService(data: any){
    this.token= localStorage.getItem('token')
    let header ={
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
       Authorization:'Bearer '+ this.token,
    })
  };
  let noteId=data.id
  return this.httpService.putService(`/note/${noteId}/archive`, data, true, header)
  }
  trashNoteService(data: any){
    this.token= localStorage.getItem('token')
    let header ={
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
       Authorization:'Bearer '+ this.token,
    })
  };
  let noteId=data.id
  return this.httpService.putService(`/note/${noteId}/trash`, data, true, header)
  }
  deleteNote(data: any){
    this.token= localStorage.getItem('token')
    let header ={
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
       Authorization:'Bearer '+ this.token,
    })
  };
  let noteId=data.id
  return this.httpService.deleteServive(`/note/${noteId}`, true, header)
  }
}
