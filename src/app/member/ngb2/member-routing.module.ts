import { NgModule }     from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MemberComponent} from "./member.component";
import {LoginComponent} from "../login/login.component";
import CashChargeComponent from "../cashcharge/cashCharge";
import {AuthGuard} from "../../services/auth/auth-guard.service";


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
        redirectTo: 'cashcharge',
        pathMatch: 'full',
      }, {
        path: 'cashcharge',
        component: CashChargeComponent,
      },
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

