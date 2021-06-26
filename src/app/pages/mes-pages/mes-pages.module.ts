import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MesPagesRoutingModule } from './mes-pages-routing.module';
import { MesPagesComponent } from './mes-pages.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccueilComponent } from './accueil/accueil.component';
import { BlogsComponent } from './blogs/blogs.component';
import { EquipeComponent } from './equipe/equipe.component';
import { ModalModule } from 'ngx-modal';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [MesPagesComponent, AccueilComponent, BlogsComponent, EquipeComponent],
  imports: [
    CommonModule,
    MesPagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    ModalModule,
    SharedModule,
  ]
})
export class MesPagesModule { }
