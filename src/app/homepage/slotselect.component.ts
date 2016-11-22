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
  keyboardImgsRow1: Array<any> = [
    {"val":1, "url" : globalConst.GLOBALIMGPREFIX + 'keyboard/pk00n.png'}
    , {"val":2, "url" :globalConst.GLOBALIMGPREFIX + 'keyboard/pk01n.png'}
    , {"val":3, "url" : globalConst.GLOBALIMGPREFIX + 'keyboard/pk02n.png'}
    , {"val":0, "url" : globalConst.GLOBALIMGPREFIX + 'keyboard/pk09n.png'}
    , {"val":4, "url" : globalConst.GLOBALIMGPREFIX + 'keyboard/pk03n.png'}
    , {"val":5, "url" : globalConst.GLOBALIMGPREFIX + 'keyboard/pk04n.png'}
    , {"val":6, "url" : globalConst.GLOBALIMGPREFIX + 'keyboard/pk05n.png'}
    , {"val":10, "url" : globalConst.GLOBALIMGPREFIX + 'keyboard/pk38.png'}
    , {"val":7, "url" : globalConst.GLOBALIMGPREFIX + 'keyboard/pk06n.png'}
    , {"val":8, "url" : globalConst.GLOBALIMGPREFIX + 'keyboard/pk07n.png'}
    , {"val":9, "url" : globalConst.GLOBALIMGPREFIX + 'keyboard/pk08n.png'}
    , {"val":11, "url" : globalConst.GLOBALIMGPREFIX + 'keyboard/pk39n.png'}
  ]
  public constructor(private productService: ProductService) {
  }
  inputboxClicked(){
    this.tipMessage = '';
  }
  clickButton(numObj:any){
    if(this.tipMessage == "请输入货道编号"){
      this.inputboxClicked()
    }
    if(this.tipMessage.length >= 3 && numObj.val != 10){
      return
    }
    if(numObj.val==10){
      if(this.tipMessage.length>0) {
        this.tipMessage = this.tipMessage.substr(0, this.tipMessage.length - 1);
      }else{
        this.tipMessage = "请输入货道编号"
      }
    }else if(numObj.val != 11){
      this.tipMessage += numObj.val;
    }else{

    }
    console.log(numObj.val)
  }
}
