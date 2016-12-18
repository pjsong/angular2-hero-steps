import { NgModule }     from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MemberComponent} from "./member.component";
import CashChargeComponent from "../cashcharge/cashCharge";
import {AuthGuard} from "../../services/auth/auth-guard.service";
import OpsPageComponent from "../opspage/opspage.component";
import DefaultComponent from "../default/default.component";
import {TestControlBoardComponent} from "../testcontrolboard/testcontrolboard.component";


const memberRoutes:Routes = [{
  path: '',
  component: MemberComponent,
  canActivate: [AuthGuard],
  children: [
    { path: '',
      canActivate: [AuthGuard],
      children: [
      {
        path: '',
        // redirectTo: 'index',
        component: DefaultComponent,
        // pathMatch: 'full',
      }, {
        path: 'testslot',
        component: TestControlBoardComponent,
        },{
          path: 'test/cashcharge',
          component: CashChargeComponent,
        },{
          path: 'test/controlboard',
          component: CashChargeComponent,
        },{
        path: 'ops',
        component: OpsPageComponent,
      },{
        path: 'ops/cashcharge',
        component: CashChargeComponent,
      }
  ]}]
}]

@NgModule({
  imports: [
    RouterModule.forChild(memberRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})
export class MemberRoutingModule { }

