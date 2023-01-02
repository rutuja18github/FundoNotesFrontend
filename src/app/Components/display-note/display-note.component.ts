import {Component,OnInit,Input,Output, EventEmitter} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DataService } from 'src/app/services/DataService/data.service';
import {UpdateNoteComponent} from '../update-note/update-note.component';

@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.scss']
})
export class DisplayNoteComponent implements OnInit {
@Input() noteList :any;
@Output() displayNoteEvent = new EventEmitter<string>();
title: any;
description: any;
notes:any;
constructor(public dialog: MatDialog,private dataService:DataService) {}
search='';
ngOnInit() {
  this.dataService.searchNote.subscribe(result =>{ 
    this.search = result 
    console.log(this.search)
  })
}

  openDialog(notes : any): void {
    const dialogRef = this.dialog.open(UpdateNoteComponent, {
      width: '500px',
      height: 'auto',
      data: notes,
    });

    dialogRef.afterClosed().subscribe(response => {
      console.log('The dialog was closed');
      this.displayNoteEvent.emit(response)
    });
  }
  receivedData(event: any) {
    console.log(event);
    this.displayNoteEvent.emit(event)
  } 

}
