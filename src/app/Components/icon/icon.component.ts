import { Component,OnInit, Input ,Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoteService } from 'src/app/services/noteService/note.service';
import { ArchiveNoteComponent } from '../archive-note/archive-note.component';
import { DisplayNoteComponent } from '../display-note/display-note.component';
import { TrashNoteComponent } from '../trash-note/trash-note.component';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent{
  @Input() noteCard: any;
  @Output() event = new EventEmitter<string>();
  isDisplayNoteComponent: boolean = false;
  isTrashComponent: boolean = false;
  isArchiveComponent: boolean = false;
  constructor(private note: NoteService,private route:ActivatedRoute) {
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

  ngOnInit(): void {
    let comp = this.route.snapshot.component;
    if (comp == DisplayNoteComponent) {
      // this.isDisplayNoteComponent = true;
    }

    if (comp == TrashNoteComponent) {
      this.isTrashComponent = true;
      // console.log(this.isTrashComponent);
    }
    if (comp == ArchiveNoteComponent) {
      this.isArchiveComponent = true;
      // console.log(this.isArchiveComponent);
    }
  }


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
    this.note.updateNote(data).subscribe((response : any) => {
      console.log(response);
      this.event.emit(response);
    })
  }

  Unarchive() :void{
    let data = {
      id :this.noteCard._id,
      isArchive : false
    }
    console.log(data);
    this.note.updateNote(data).subscribe((response : any) => {
      console.log(response);
      this.event.emit(response);
    })
  }

  restore(){
    let data = {
      id :this.noteCard._id,
      isTrash : false
    }
    this.note.updateNote(data).subscribe((response : any) => {
      console.log(response);
      this.event.emit(response);
    })
  }
  
  deleteForever(){
    let data = {
      id :this.noteCard._id
    }
    this.note.deleteNote(data).subscribe((response : any) => {
      console.log(response);
      this.event.emit(response);
    })
  } 
}

