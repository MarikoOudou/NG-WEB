import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { PagesModule } from './pages/pages.module';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {NgxImageCompressService} from 'ngx-image-compress';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    PagesModule,HttpClientModule,
    routing,

  ],
  declarations: [
    AppComponent,
  ],
  providers: [NgxImageCompressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
