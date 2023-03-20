import { Component, Input, EventEmitter, Output,OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{
 @Input() postURL = '';
 @Output() imgSelected = new EventEmitter<string>();

//  hooks
 constructor(){

 }
 
//interface
 ngOnInit(): void {
   
 }

}
