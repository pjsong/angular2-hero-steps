import { NgModule }     from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Homepage} from "../../homepage/ngb2/homepage.component";
import {GameZombie} from "../../game/zombie/zombie.component";
import {Fun} from "../../fun/ngb2/fun.component";
import {MemberComponent} from "../../member/ngb2/member.component";
import {ShopMenuComponent} from "../../shop/shopmenu/shopmenu.component";
import {CategoryRouter} from "../../shop/ngb2/categoryrouter.component";
import {_404Component} from "../../common/404";
import {PreloadSelectedModules} from "../../selective-preload-strategy";

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
    path: 'shopmenu',
    loadChildren: '../../shop/shopmenu/shopmenu.module#ShopmenuModule',
    data: {
      preload: true
    }
  },
  {
    path: 'crisis-center',
    loadChildren: '../../crisis-center/crisis-center.module#CrisisCenterModule',
    data: {
      preload: true
    }
  },
  {
    path: '**', component: _404Component
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes,{ preloadingStrategy: PreloadSelectedModules })
  ],
  exports: [
    RouterModule
  ],
  providers: [
    PreloadSelectedModules,
  ]
})
export class BottomRouterRoutingModule {}
