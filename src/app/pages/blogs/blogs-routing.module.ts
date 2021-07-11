import { ArticleComponent } from './article/article.component';
import { CategoryComponent } from './category/category.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogsComponent } from './blogs.component';

const routes: Routes = [{
  path: '',
  component: BlogsComponent,
  children: [
    {
      path: 'category',
      component: CategoryComponent,
    },

    {
      path: 'article',
      component: ArticleComponent,
    },

    {
      path: '',
      redirectTo: 'article',
      pathMatch: 'full',
    },

  ],

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogsRoutingModule { }
