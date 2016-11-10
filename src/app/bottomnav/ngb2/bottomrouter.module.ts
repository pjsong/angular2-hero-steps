import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { BottomRouterRoutingModule } from './bottomrouter-routing.module';
import {Ng2BootstrapModule} from 'ng2-bootstrap/ng2-bootstrap';

import { Homepage} from '../../homepage/ngb2/homepage.component';
import { GameZombie } from '../../game/zombie/zombie.component';
import { Fun } from "../../fun/ngb2/fun.component";
import { MemberComponent } from "../../member/ngb2/member.component";
import {BottomRouter} from "../../bottomnav/ngb2/bottomrouter.component";
import {Words} from "../../fun/ngb2/words/words.component";
import {_404Component} from "../../common/404";
import {ProductService} from "../../services/product-service";
import {TopBanner} from "../../topbanner/ngb2/topbanner.component";


@NgModule({
  imports: [ BrowserModule, Ng2BootstrapModule, BottomRouterRoutingModule],
  declarations: [ TopBanner,  BottomRouter, _404Component, Homepage, GameZombie, Fun, MemberComponent, Words
  ],
  providers: [
    ProductService,
  ],
  exports:[BottomRouter],
})
export class BottomRouterModule { }
