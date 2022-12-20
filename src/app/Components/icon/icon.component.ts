import { Component,OnInit, Input  } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input() noteCard: any;
  isDeleted = false;

  constructor(private note: NoteService) {
  }

  ngOnInit(): void {

  }

  trash() {
    
  }
}
