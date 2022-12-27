import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-trash-note',
  templateUrl: './trash-note.component.html',
  styleUrls: ['./trash-note.component.scss']
})
export class TrashNoteComponent implements OnInit {
  noteArray = [];
  constructor(private note : NoteService){}

  ngOnInit(): void {
      this.trashNote();
  }

  trashNote(){
    this.note.getAllNotes().subscribe((response:any) =>{
      this.noteArray=response.data
      this.noteArray=this.noteArray.filter((result :any) =>{
        return result.isTrash==true;
      })
      console.log(this.noteArray)
    })
  }
  receivedData(event: any){
      this.trashNote()
  }

}
