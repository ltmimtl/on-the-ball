import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { SimpleAnimation }  from './simple-animation.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, SimpleAnimation ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
