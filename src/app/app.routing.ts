import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {Homepage} from "./homepage/ngb2/homepage.component";
import {GameZombie} from "./game/zombie/zombie.component";
import {Fun} from "./fun/ngb2/fun.component";
import {Member} from "./member/ngb2/member.component";
import {Shop} from "./shop/ngb2/shop.component";
import {PaginationDemoComponent} from "./shop/ngb2/pagination.component";
import {Menu} from "./shop/thirdparty/menu.component";
// import {Angular2Pagination} from "./thirdparty/pagination/example.component";

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/homepage',
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
    component: Member
  },
  {
    path: 'shop',
    component: Shop
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

export const RoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes);
