import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {FormsModule} from "@angular/forms";
import { ArticlesComponent } from './articles/articles.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AddarticleComponent } from './addarticle/addarticle.component';
import { ShowOneArticleComponent } from './showonearticle/showonearticle.component';
import { UpdateComponent } from './update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    AddarticleComponent,
    ArticlesComponent,
    NotfoundComponent,
    ShowOneArticleComponent,
    UpdateComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
