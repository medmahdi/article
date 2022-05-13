import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-showonearticle',
  templateUrl: './showonearticle.component.html',
  styleUrls: ['./showonearticle.component.css']
})
export class ShowOneArticleComponent implements OnInit {
  @Input()article!:any;
  @Output()sendid=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  sendidto(i:any){
    this.sendid.emit(i);
   console.log(i);
   
   }

}