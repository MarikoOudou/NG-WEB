import { AuthGuard } from './../guards/auth.guard';
import { FormModule } from './form/form.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './pages.routing';

import { LayoutModule } from '../shared/layout.module';
import { SharedModule } from '../shared/shared.module';

/* components */
import { PagesComponent } from './pages.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-modal';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
    imports: [
        CommonModule,
        LayoutModule,
        SharedModule,
        NgxPaginationModule,
        FormsModule,
            ModalModule,
            ReactiveFormsModule,
        SharedModule,
        LayoutModule,
        routing
    ],
    declarations: [
        PagesComponent,
        LoginComponent
    ],
    providers: [
      AuthGuard
    ]
})
export class PagesModule { }
