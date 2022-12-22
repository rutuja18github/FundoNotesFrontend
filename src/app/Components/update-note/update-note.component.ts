import { Component,Inject,OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { NoteService } from 'src/app/services/noteService/note.service';


@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.scss']
})
export class UpdateNoteComponent implements OnInit {
  title: any;
  description: any;
  id:any;
  constructor(private noteService:NoteService,
    public dialogRef: MatDialogRef<UpdateNoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    
  }

  ngOnInit():void{
      this.title = this.data.title;
      this.description =this.data.description;
      this.id = this.data._id;
      console.log(this.data);
  }

  Close(): void {
    let data = {
      title : this.title,
      description : this.description,
      id : this.id
    }
    console.log(this.data);
    this.noteService.updateNote(data).subscribe((response : any) =>{
      console.log(response)
    })
    this.dialogRef.close();
  }
  
}
