import { Component } from '@angular/core';
import {MoneyChargeService} from "../../services/moneycharge-service";

// webpack html imports
let template = require('./member.component.html');

@Component({
  selector: 'member',
  template: template,
  styleUrls: ['./member.component.scss']
})
export class MemberComponent {

  constructor(private moneyChargeService: MoneyChargeService){}

}

