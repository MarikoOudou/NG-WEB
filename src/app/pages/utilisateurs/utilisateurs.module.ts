import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilisateursRoutingModule } from './utilisateurs-routing.module';
import { UtilisateursComponent } from './utilisateurs.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { ModalModule } from 'ngx-modal';
import { LayoutModule } from '../../shared/layout.module';


@NgModule({
  declarations: [UtilisateursComponent],
  imports: [
    CommonModule,
    UtilisateursRoutingModule,
    NgxPaginationModule,
    FormsModule,
    ModalModule,
    ReactiveFormsModule,
    SharedModule,
    LayoutModule,


  ]
})
export class UtilisateursModule { }
