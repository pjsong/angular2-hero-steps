import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { BottomRouterRoutingModule } from './bottomrouter.routing';
import {ShopMenuModule} from '../../shop/shopmenu/shopmenu.module'
import {Ng2BootstrapModule} from 'ng2-bootstrap/ng2-bootstrap';

import { Homepage} from '../../homepage/ngb2/homepage.component';
import { GameZombie } from '../../game/zombie/zombie.component';
import { Fun } from "../../fun/ngb2/fun.component";
import { MemberComponent } from "../../member/ngb2/member.component";
import {BottomRouter} from "../../bottomnav/ngb2/bottomrouter.component";
import {Words} from "../../fun/ngb2/words/words.component";
import {ShopMenuComponent} from "../../shop/shopmenu/shopmenu.component";
import {PaginationDemoComponent} from "../../shop/ngb2/pagination.component";
import {CategoryRouter} from "../../shop/ngb2/categoryrouter.component";
import {_404Component} from "../../common/404";
import {ProductService} from "../../services/product-service";
import ProductDetailComponent from "../../shop/productdetail/product-detail";
import ProductItemComponent from "../../shop/productitem/product-item";
import StarsComponent from "../../shop/stars/stars";
import {ShopComponent} from "../../shop/shop/shop.component";
import {ShopRoutingModule} from "../../shop/shop/shop.routing";
import {ShopModule} from "../../shop/shop/shop.module";


@NgModule({
  imports: [ BrowserModule, Ng2BootstrapModule, BottomRouterRoutingModule,  ShopModule],
  declarations: [ BottomRouter, _404Component, Homepage, GameZombie, Fun, MemberComponent,  Words,
    ShopMenuComponent, CategoryRouter
    // ProductDetailComponent, ProductItemComponent, StarsComponent, ShopComponent
  ],
  providers: [
    ProductService,
  ],
  exports:[BottomRouter],
})
export class BottomRouterModule { }
