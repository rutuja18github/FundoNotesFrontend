import {Component,OnInit,Input} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {UpdateNoteComponent} from '../update-note/update-note.component';

@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.scss']
})
export class DisplayNoteComponent implements OnInit {
@Input() noteList :any;
title: any;
description: any;
notes:any;
constructor(public dialog: MatDialog) {}

  openDialog(notes : any): void {
    const dialogRef = this.dialog.open(UpdateNoteComponent, {
      width: '500px',
      height: 'auto',
      data: notes,
    });

    dialogRef.afterClosed().subscribe(response => {
      console.log('The dialog was closed',response);
      
    });
  }


ngOnInit() {
  
}

}
