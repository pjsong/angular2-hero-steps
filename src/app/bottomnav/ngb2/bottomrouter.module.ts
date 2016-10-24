import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { BottomRouterRoutingModule } from './bottomrouter.routing';
import {ShopModule} from '../../shop/ngb2/shop.module'
import {Ng2BootstrapModule} from 'ng2-bootstrap/ng2-bootstrap';

import { Homepage} from '../../homepage/ngb2/homepage.component';
import { GameZombie } from '../../game/zombie/zombie.component';
import { Fun } from "../../fun/ngb2/fun.component";
import { MemberComponent } from "../../member/ngb2/member.component";
import {BottomRouter} from "../../bottomnav/ngb2/bottomrouter.component";
import {Words} from "../../fun/ngb2/words/words.component";


@NgModule({
  imports: [ BrowserModule, BottomRouterRoutingModule, ShopModule, Ng2BootstrapModule ],
  declarations: [ BottomRouter, Homepage, GameZombie, Fun, MemberComponent,  Words ],
  exports:[BottomRouter],
  // bootstrap: [ BottomRouter ]
})
export class BottomRouterModule { }
