import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MesPagesRoutingModule } from './mes-pages-routing.module';
import { MesPagesComponent } from './mes-pages.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccueilComponent } from './accueil/accueil.component';
import { EquipeComponent } from './equipe/equipe.component';
import { ModalModule } from 'ngx-modal';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../../shared/shared.module';
import { LayoutModule } from '../../shared/layout.module';


@NgModule({
  declarations: [MesPagesComponent, AccueilComponent, EquipeComponent],
  imports: [
    CommonModule,
    MesPagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    ModalModule,
    SharedModule,
    LayoutModule
  ]
})
export class MesPagesModule { }
