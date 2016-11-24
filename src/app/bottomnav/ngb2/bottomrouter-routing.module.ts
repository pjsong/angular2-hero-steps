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
import {SlotSelect} from "../../homepage/slotselect.component";
import {HttpModule} from "@angular/http";
import {MoneyChargeService} from "../../services/moneycharge-service";
import {AuthGuard} from "../../services/auth/auth-guard.service";

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'slotselect',
    pathMatch: 'full'
  },
  {
    path: 'slotselect',
    component: SlotSelect
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
    loadChildren: '../../member/ngb2/member.module#MemberModule',
    canLoad: [AuthGuard],
    // data: {
    //   preload: true
    // }
  },

  {
    path: 'shopmenu',
    loadChildren: '../../shop/shopmenu/shopmenu.module#ShopmenuModule',
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
    , HttpModule
  ],
  exports: [
    RouterModule
  ],
  providers: [
    PreloadSelectedModules, MoneyChargeService
  ]
})
export class BottomRouterRoutingModule {}
