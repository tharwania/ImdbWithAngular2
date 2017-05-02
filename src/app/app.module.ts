import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import  { MovieViewComponent } from './movieView.component';


@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, MovieViewComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
