import { Component,OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.scss']
})
export class DisplayNoteComponent implements OnInit {
@Input() noteList :any;
title: any;
description: any;
note:any;
constructor(){
}


ngOnInit() {
  
}

}
