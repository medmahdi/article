import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddarticleComponent } from './addarticle/addarticle.component';
import { ArticlesComponent } from './articles/articles.component';

import { NotfoundComponent } from './notfound/notfound.component';
import { ShowOneArticleComponent } from './showonearticle/showonearticle.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:'addarticle', component:AddarticleComponent},
  {path:'article', component:ArticlesComponent},
  {path:'**', component:NotfoundComponent},
  {path:'show',component:ShowOneArticleComponent},
  {path:'update/:id',component:UpdateComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
