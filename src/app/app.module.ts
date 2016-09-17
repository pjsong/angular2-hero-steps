import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing';

// import { Tabset } from './homepage/ngb/tabset.component';
// import { TopBanner } from './topbanner/ngb/topbanner.component';
// import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';

import { AppComponent }  from './app.component';

import { TopBanner } from './topbanner/ngb2/topbanner.component';
// import { BottomNav } from "./bottomnav/ngb2/bottomnav.component";

import { Homepage} from './homepage/ngb2/homepage.component';
import { Game } from './game/ngb2/game.component';
import { Fun } from "./fun/ngb2/fun.component";
import {Shop} from "./shop/ngb2/shop.component";
import {Member} from "./member/ngb2/member.component";
import {BottomRouter} from "./bottomnav/ngb2/bottomrouter.component";

@NgModule({
  imports: [ BrowserModule, FormsModule, routing, Ng2BootstrapModule ],
  declarations: [ AppComponent, TopBanner, BottomRouter, Homepage, Game, Fun, Member, Shop  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
