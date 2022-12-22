import { Component,OnInit, Input  } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input() noteCard: any;
  
  constructor(private note: NoteService) {
  }

  ngOnInit(): void {

  }
  archive() :void{
    let data = {
      id :this.noteCard._id,
      isArchive : true,
    }
    console.log(data);
    this.note.archiveNoteService(data).subscribe((response : any) => {
      console.log(response);
    })
  }
}

