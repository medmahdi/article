import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../ArticleService/article-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  article!:any;
  constructor(private s:ArticleService,private router :Router) { }

  ngOnInit(): void {
    this.s.getarticles().subscribe(
      (d)=>{
      this.article=d;
      }
    )
  }

}
