import { NgModule }     from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShopMenuComponent} from "./shopmenu.component";
import {ShopComponent} from "../shop/shop.component";
import {PaginationDemoComponent} from "../ngb2/pagination.component";
import ProductDetailComponent from "../productdetail/product-detail";

const shopmenuRoutes:Routes = [{
  path: '',
  component: ShopMenuComponent,
  children: [
    {
      path: '',
      redirectTo: 'shop',
      pathMatch: 'full',
    },{
      path: 'shop',
      component: ShopComponent,
      pathMatch: 'full',
      // children: [
      // ]
    },
    {
      path: 'pagination',
      component: PaginationDemoComponent
    },
    {
      path: 'shop/products/:id',
      component: ProductDetailComponent,
    },
  ]
}]

@NgModule({
  imports: [
    RouterModule.forChild(shopmenuRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})
export class ShopmenuRoutingModule { }

