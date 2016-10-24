import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ShopComponent} from "./shop.component";
import {PaginationDemoComponent} from "./pagination.component";
import {Menu} from "../thirdparty/menu.component";
// import {Angular2Pagination} from "./thirdparty/pagination/example.component";

const shopRoutes: Routes = [
  {
    path: '',
    redirectTo: 'shop',
    pathMatch: 'full'
  },
  {
    path: 'shop',
    component: ShopComponent,
  },
  {
    path: 'pagination',
    component: PaginationDemoComponent
  },
  {
    path: 'menu',
    component: Menu,
  }
];

export const RoutingCategoryModule: ModuleWithProviders = RouterModule.forRoot(shopRoutes);
