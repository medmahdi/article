import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http:HttpClient) { }
  getarticles() {
    return this.http.get('http://localhost:3000/article')
  }

  addarticle(data:any) {
    return this.http.post('http://localhost:3000/article', data)
  }
  updateArticle(id :any,data:any){
    return this.http.put("http://localhost:3000/article/"+id,data);
  }
  
  getArticleById(id:any){
    return this.http.get("http://localhost:3000/article/"+id);
  
  }
}
