import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'
import {Ng2BootstrapModule, } from 'ng2-bootstrap/ng2-bootstrap';

import {ProductService} from "../../services/product-service";
import {MemberRoutingModule} from "./member-routing.module";
import CashChargeComponent from "../cashcharge/cashCharge";
import {MemberComponent} from "./member.component";



@NgModule({
  imports: [CommonModule, FormsModule, Ng2BootstrapModule, MemberRoutingModule],
  declarations: [MemberComponent, CashChargeComponent],
  providers: [
      ProductService
  ],
  // exports: [MemberComponent]
})
export class MemberModule { }
