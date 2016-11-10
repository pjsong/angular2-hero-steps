import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'
import {Ng2BootstrapModule, } from 'ng2-bootstrap/ng2-bootstrap';

import {PaginationDemoComponent} from "../ngb2/pagination.component";
import {ShopComponent} from "../shop/shop.component";
import ProductDetailComponent from "../productdetail/product-detail.component";
import ProductItemComponent from "../productitem/product-item";
import StarsComponent from "../stars/stars";
import {ProductService} from "../../services/product-service";
import {BottomRouter} from "../../bottomnav/ngb2/bottomrouter.component";
import {ShopMenuComponent} from "../shopmenu/shopmenu.component";
import {ShopmenuRoutingModule} from "./shopmenu-routing.module";


@NgModule({
  imports: [CommonModule, FormsModule, Ng2BootstrapModule, ShopmenuRoutingModule],
  // providers:[{provide: APP_BASE_HREF, useValue:'/vending/shop'}],
  declarations: [ShopMenuComponent, PaginationDemoComponent, ProductDetailComponent, ProductItemComponent, StarsComponent, ShopComponent],
  providers: [
      ProductService, BottomRouter
  ],
  exports: [ShopMenuComponent]
})
export class ShopmenuModule { }
