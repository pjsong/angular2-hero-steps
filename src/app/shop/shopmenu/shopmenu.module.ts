import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { BrowserModule } from '@angular/platform-browser';
import {APP_BASE_HREF} from '@angular/common'
// import { ShopRoutingModule } from './shopmenu.routing';
import { CommonModule } from '@angular/common'
import {Ng2BootstrapModule, } from 'ng2-bootstrap/ng2-bootstrap';

import {ShopMenuComponent} from "./shopmenu.component";
import {PaginationDemoComponent} from "../ngb2/pagination.component";
import {ShopComponent} from "../shop/shop.component";


@NgModule({
  imports: [ FormsModule, Ng2BootstrapModule, CommonModule ],
  // providers:[{provide: APP_BASE_HREF, useValue:'/vending/shop'}],
  declarations: [ShopMenuComponent, ShopComponent, PaginationDemoComponent], // ShopComponent, ShopMenu, PaginationDemoComponent,
  exports: [ShopMenuComponent]
})
export class ShopMenuModule { }
