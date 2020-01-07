import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { FilterPipe } from './pipes/filter.pipe';
import { StyleDirective } from './directives/style.directive';
import { IfrenderDirective } from './directives/ifrender.directive';



@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    StyleDirective,
    IfrenderDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
