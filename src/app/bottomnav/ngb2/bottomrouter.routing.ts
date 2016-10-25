import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {Homepage} from "../../homepage/ngb2/homepage.component";
import {GameZombie} from "../../game/zombie/zombie.component";
import {Fun} from "../../fun/ngb2/fun.component";
import {MemberComponent} from "../../member/ngb2/member.component";
import {ShopMenuComponent} from "../../shop/shopmenu/shopmenu.component";
import {PaginationDemoComponent} from "../../shop/ngb2/pagination.component";
import {_404Component} from "../../common/404";
import {CategoryRouter} from "../../shop/ngb2/categoryrouter.component";


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'homepage',
    pathMatch: 'full'
  },
  {
    path: 'homepage',
    component: Homepage
  },
  {
    path: 'game',
    component: GameZombie
  },
  {
    path: 'fun',
    component: Fun
  },
  {
    path: 'member',
    component: MemberComponent
  },
  {
    path: 'shop',
    // loadChildren: '../../shop/shopmenu/shopmenu.module#ShopMenuModule',
    component: ShopMenuComponent,
    children: [
      {path: '', redirectTo: 'pagination', pathMatch: 'full'},
      {path: 'pagination',  component: PaginationDemoComponent},
      {path: 'cat/:name', component: CategoryRouter}
    ]
  },
  {
    path: '**', component: _404Component
  },
];

export const BottomRouterRoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes);
