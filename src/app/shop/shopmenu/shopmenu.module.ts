import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {Ng2BootstrapModule, } from 'ng2-bootstrap/ng2-bootstrap';

import {ShopMenuComponent} from "./shopmenu.component";
import {PaginationDemoComponent} from "../ngb2/pagination.component";
import {ShopComponent} from "../shop/shop.component";
import {CategoryRouter} from "../ngb2/categoryrouter.component";
import ProductDetailComponent from "../productdetail/product-detail";
import ProductItemComponent from "../productitem/product-item";
import StarsComponent from "../stars/stars";
import {ProductService} from "../../services/product-service";


@NgModule({
  imports: [BrowserModule, FormsModule, Ng2BootstrapModule],
  declarations: [ ShopMenuComponent, PaginationDemoComponent,CategoryRouter,
    ProductDetailComponent, ProductItemComponent, StarsComponent, ShopComponent ],
    providers: [
      ProductService,
    ],
  exports: [ShopMenuComponent]
})
export class ShopMenuModule { }
