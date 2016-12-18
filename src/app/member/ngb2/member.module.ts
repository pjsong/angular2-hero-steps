import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {Ng2BootstrapModule} from "ng2-bootstrap/ng2-bootstrap";
import {ProductService} from "../../services/product-service";
import {MemberRoutingModule} from "./member-routing.module";
import CashChargeComponent from "../cashcharge/cashCharge";
import {MemberComponent} from "./member.component";
import OpsPageComponent from "../opspage/opspage.component";
import DefaultComponent from "../default/default.component";
import {TestControlBoardComponent} from "../testcontrolboard/testcontrolboard.component";
import {ControlBoardService} from "../../services/controlboard-service";


@NgModule({
  imports: [CommonModule, FormsModule, Ng2BootstrapModule, MemberRoutingModule],
  declarations: [MemberComponent, DefaultComponent, TestControlBoardComponent, OpsPageComponent, CashChargeComponent],
  providers: [
      ProductService, ControlBoardService
  ],
  // exports: [MemberComponent]
})
export class MemberModule { }
