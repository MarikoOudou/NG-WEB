import { LayoutModule } from './../../shared/layout.module';
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
import { DetailProduitComponent } from './detail-produit/detail-produit.component';
import { UpdateProduitComponent } from './update-produit/update-produit.component';
import { ListProduitComponent } from './list-produit/list-produit.component';


@NgModule({
  declarations: [ProduitsComponent, TerrainsComponent,
    MaisonsComponent, DetailProduitComponent, UpdateProduitComponent, ListProduitComponent],
  imports: [
    CommonModule,
    ProduitsRoutingModule,
    NgxPaginationModule,
    FormsModule,
    ModalModule,
    ReactiveFormsModule,
    SharedModule,
    LayoutModule,
  ]
})
export class ProduitsModule { }
