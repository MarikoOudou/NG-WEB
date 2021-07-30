import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VentesRoutingModule } from './ventes-routing.module';
import { VentesComponent } from './ventes.component';
import { ModalModule } from 'ngx-modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../../shared/shared.module';
import { LayoutModule } from '../../shared/layout.module';
import { SelectModule } from 'ng2-select';




@NgModule({
  declarations: [VentesComponent],
  imports: [
    CommonModule,
    VentesRoutingModule,
    NgxPaginationModule,
    FormsModule,
        ModalModule,
        ReactiveFormsModule,
    SharedModule,
    LayoutModule,
    SelectModule,

  ]
})
export class VentesModule { }
