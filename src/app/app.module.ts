import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {Ng2BootstrapModule} from 'ng2-bootstrap/ng2-bootstrap';

import { AppComponent }  from './app.component';

import { TopBanner } from './topbanner/ngb2/topbanner.component';
import { BottomRouterModule } from "./bottomnav/ngb2/bottomrouter.module";



@NgModule({
  imports: [ BrowserModule, BottomRouterModule],
  declarations: [ AppComponent],
  bootstrap: [ AppComponent ],
  exports: [AppComponent],
})
export class AppModule { }
