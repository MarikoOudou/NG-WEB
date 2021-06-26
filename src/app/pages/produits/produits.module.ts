import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProduitsRoutingModule } from './produits-routing.module';
import { ProduitsComponent } from './produits.component';
import { TerrainsComponent } from './terrains/terrains.component';
import { MaisonsComponent } from './maisons/maisons.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-modal';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [ProduitsComponent, TerrainsComponent, MaisonsComponent],
  imports: [
    CommonModule,
    ProduitsRoutingModule,
    NgxPaginationModule,
    FormsModule,
        ModalModule,
        ReactiveFormsModule,
    SharedModule,
  ]
})
export class ProduitsModule { }
