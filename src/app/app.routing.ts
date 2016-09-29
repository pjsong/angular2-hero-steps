import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {Homepage} from "./homepage/ngb2/homepage.component";
import {GameZombie} from "./game/zombie/zombie.component";
import {Fun} from "./fun/ngb2/fun.component";
import {Member} from "./member/ngb2/member.component";
import {Shop} from "./shop/ngb2/shop.component";

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
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
