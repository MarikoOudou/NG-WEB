
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { routing } from './index.routing';
import { NgxEchartsModule } from 'ngx-echarts';
import { SharedModule } from '../../shared/shared.module';
import { LayoutModule } from '../../shared/layout.module';

@NgModule({
    imports: [
        CommonModule,
        NgxEchartsModule,
        routing,
        SharedModule,
        LayoutModule

    ],
    declarations: [
        IndexComponent
    ]
})
export class IndexModule { }
