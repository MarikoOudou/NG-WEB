import { LayoutModule } from './../../shared/layout.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsRoutingModule } from './blogs-routing.module';
import { BlogsComponent } from './blogs.component';
import { CategoryComponent } from './category/category.component';
import { ArticleComponent } from './article/article.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-modal';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../../shared/shared.module';
import { ArticleUpdateComponent } from './article-update/article-update.component';


@NgModule({
  declarations: [BlogsComponent, CategoryComponent, ArticleComponent, ArticleUpdateComponent],
  imports: [
    CommonModule,
    BlogsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    ModalModule,
    SharedModule,
    LayoutModule
  ]
})
export class BlogsModule { }
