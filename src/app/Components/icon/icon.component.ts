import { Component,OnInit, Input ,Output, EventEmitter } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent{
  @Input() noteCard: any;
  @Output() event = new EventEmitter<string>();
  constructor(private note: NoteService) {
  }
  colors = [
    { code: '#fff', name: 'white' },
    { code: '#f28b82', name: 'red' },
    { code: '#fbbc04', name: 'orange' },
    { code: '#FFFF00', name: 'yellow' },
    { code: '#ccff90', name: 'green' },
    { code: '#a7ffeb', name: 'teal' },
    { code: '#cbf0f8', name: 'Blue' },
    { code: '#aecbfa', name: 'darkblue' },
    { code: '#d7aefb', name: 'purple' },
    { code: '#fdcfe8', name: 'pink' },
    { code: '#e6c9a8', name: 'brown' },
    { code: '#e8eaed', name: 'grey' },
  ];
  archive() :void{
    let data = {
      id :this.noteCard._id,
      isArchive : true
    }
    console.log(data);
    this.note.archiveNoteService(data).subscribe((response : any) => {
      console.log(response);
      this.event.emit(response);
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
      this.event.emit(response);
    })
  }

  Color(color:any){
    this.noteCard.color=color
    let data={
      id :this.noteCard._id,
      color:this.noteCard.color
    }
    console.log(data);
    this.note.colorService(data).subscribe((response : any) => {
      console.log(response);
      this.event.emit(response);
    })
  }
}

