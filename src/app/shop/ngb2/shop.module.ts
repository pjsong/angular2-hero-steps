import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RoutingCategoryModule } from './shop.routing';

import {Ng2BootstrapModule} from 'ng2-bootstrap/ng2-bootstrap';

import {ShopComponent} from "./shop.component";
import {CategoryRouter} from "./categoryrouter.component";

import {PaginationDemoComponent} from "./pagination.component";
import { Menu } from "../thirdparty/menu.component"
// import {PagerComponent} from 'ng2-bootstrap/components/pagination/pager.component'

// import {Pagination} from "./thirdparty/pagination/pagination.component";
// import {Angular2Pagination} from "./thirdparty/pagination/example.component";
// import {Pagination} from "./thirdparty/pagination/pagination.component";
// import {Pager} from "./thirdparty/pagination/pager.component";

@NgModule({
  imports: [ BrowserModule, FormsModule, RoutingCategoryModule, Ng2BootstrapModule ],
  declarations: [ ShopComponent,  CategoryRouter, ShopComponent, Menu, PaginationDemoComponent, ],
  bootstrap: [ ShopComponent ]
})
export class ShopModule { }
