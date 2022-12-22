import { Component,OnInit, Input  } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent{
  @Input() noteCard: any;
  
  constructor(private note: NoteService) {
  }
  archive() :void{
    let data = {
      id :this.noteCard._id,
      isArchive : true
    }
    console.log(data);
    this.note.archiveNoteService(data).subscribe((response : any) => {
      console.log(response);
    })
  }

  trash(){
    let data = {
      id :this.noteCard._id,
      isTrash : true
    }
    console.log(data);
    this.note.trashNoteService(data).subscribe((response : any) => {
      console.log(response);
    })
  }
}

