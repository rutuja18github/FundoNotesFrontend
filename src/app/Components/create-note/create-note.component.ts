import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {
  @Output() createEvent = new EventEmitter<string>();
  isShow = false;
  title: any;
  description: any;
  

  constructor(private note: NoteService) {

  }
  ngOnInit(): void {

  }
  Show() {
    this.isShow = true;
  }
  Close() {
    this.isShow = false;
    if ((this.title != null && this.title != "") || (this.description != null && this.description != "")) {
      console.log(this.title, this.description)
      let data = {
        "title": this.title,
        "description": this.description,

      }
      this.note.createNote(data).subscribe((response: any) => {
        console.log(response)
        this.createEvent.emit(response);
        this.title = "";
        this.description = "";
      })
    }
  }

}
