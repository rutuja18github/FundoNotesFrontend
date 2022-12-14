import { Component,OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-get-all-note',
  templateUrl: './get-all-note.component.html',
  styleUrls: ['./get-all-note.component.scss']
})
export class GetAllNoteComponent implements OnInit {
 noteArray=[]
 constructor(private note: NoteService){
 
 }
 ngOnInit(): void {
   this.getAllNote()
 }
 getAllNote(){
   this.note.getAllNotes().subscribe((response : any) => {
     this.noteArray=response.data
     this.noteArray=this.noteArray.filter((result:any)=>{
      return result.isArchive==false && result.isTrash==false;
    })
    console.log(this.noteArray);
   })
 }
 receivedData(event: any) {
  this.getAllNote();
}
}
