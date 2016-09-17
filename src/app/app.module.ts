import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

// import { Tabset } from './homepage/ngb/tabset.component';
// import { TopBanner } from './topbanner/ngb/topbanner.component';
// import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { Tabset } from './homepage/ngb2/tabset.component';
import { TopBanner } from './topbanner/ngb2/topbanner.component';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';

import { AppComponent }  from './app.component';

@NgModule({
  imports: [ BrowserModule, FormsModule, Ng2BootstrapModule ],
  declarations: [ AppComponent, Tabset, TopBanner ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
