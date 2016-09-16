import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { Tabset } from './homepage/tabset.component';
import { TopBanner } from './topbanner/topbanner.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [ BrowserModule, FormsModule, NgbModule ],
  declarations: [ AppComponent, Tabset, TopBanner ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
