import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ShopComponent} from "../shop/shop.component";
import ProductDetailComponent from "../productdetail/product-detail";
import {PaginationDemoComponent} from "../ngb2/pagination.component";

const shopRoutes: Routes = [
  {
    path: '',
    // redirectTo: 'shop',
    // pathMatch: 'full'\
    component: ShopComponent,
  },
  {path: 'pagination',  component: PaginationDemoComponent},

  // {
  //   path: 'shop',
  //   component: ShopComponent,
  // },
  {
    path: 'products/:id',
    component: ProductDetailComponent,

  },
];

export const ShopRoutingModule: ModuleWithProviders = RouterModule.forChild(shopRoutes);
