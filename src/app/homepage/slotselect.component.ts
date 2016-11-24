import { Component } from '@angular/core';
import {ProductService} from "../services/product-service";
const globalConst = require('../globalconst');
let template = require('./slotselect.component.html');

@Component({
  selector: 'slotselect',
  template: template,
  styleUrls: ['./slotselect.component.scss']
})



export class SlotSelect {
  tipMessage: string = "请输入货道编号"
  keyboardDisplay: boolean = false
  keyboardImgsRow1: Array<any> = [
    {"val":1, "displayValue" : "1"}
    , {"val":2, "displayValue" : "2"}
    , {"val":3, "displayValue" : "3"}
    , {"val":0, "displayValue" : "0"}
    , {"val":4, "displayValue" : "4"}
    , {"val":5, "displayValue" : "5"}
    , {"val":6, "displayValue" : "6"}
    , {"val":10, "displayValue" : "后退"}
    , {"val":7, "displayValue" : "7"}
    , {"val":8, "displayValue" : "8"}
    , {"val":9, "displayValue" : "9"}
    , {"val":11, "displayValue" :"完成"}
  ]
  public constructor(private productService: ProductService) {
  }
  inputboxClicked(){
    this.keyboardDisplay = !this.keyboardDisplay
  }

  clickButton(numObj:any){
    if(this.tipMessage.length >= 3 && numObj.val != 10 && this.tipMessage != "请输入货道编号"){
      this.keyboardDisplay = !this.keyboardDisplay
      return
    }

    if(numObj.val==10){
      if(this.tipMessage.length > 1) {
        this.tipMessage = this.tipMessage.substr(0, this.tipMessage.length - 1);
      }else{
        this.tipMessage = "请输入货道编号"
      }
    }else if(numObj.val != 11){
      if(this.tipMessage == "请输入货道编号"){
        this.tipMessage = '';
      }
      this.tipMessage += numObj.val;
    }else{
      this.keyboardDisplay = !this.keyboardDisplay
    }
    console.log(numObj.val)
  }
}
