import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {APP_BASE_HREF} from '@angular/common'
import { ShopRoutingModule } from './shop.routing';
import { CommonModule } from '@angular/common'
import {Ng2BootstrapModule, } from 'ng2-bootstrap/ng2-bootstrap';

import {PaginationDemoComponent} from "../ngb2/pagination.component";
import {ShopComponent} from "../shop/shop.component";
import {CategoryRouter} from "../ngb2/categoryrouter.component";
import ProductDetailComponent from "../productdetail/product-detail";
import ProductItemComponent from "../productitem/product-item";
import StarsComponent from "../stars/stars";
import {ProductService} from "../../services/product-service";


@NgModule({
  imports: [CommonModule, FormsModule, Ng2BootstrapModule, ShopRoutingModule],
  // providers:[{provide: APP_BASE_HREF, useValue:'/vending/shop'}],
  declarations: [ PaginationDemoComponent, ProductDetailComponent, ProductItemComponent, StarsComponent, ShopComponent ],
    providers: [
      ProductService,
    ],
  exports: [ShopComponent]
})
export class ShopModule { }
