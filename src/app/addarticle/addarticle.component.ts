import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../ArticleService/article-service.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-addarticle',
  templateUrl: './addarticle.component.html',
  styleUrls: ['./addarticle.component.css']
})
export class AddarticleComponent implements OnInit {

  constructor(private art:ArticleService,
    private router:Router) { }

  ngOnInit(): void {
  }
  savedata(f:any){
    this.art.addarticle(f).subscribe(
      ()=>{
       this.router.navigate(['article'])
      }
    );
      }

}
