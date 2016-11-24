import { Component } from '@angular/core';
import {MoneyChargeService} from "../../services/moneycharge-service";

// webpack html imports
let template = require('./member.component.html');

@Component({
  selector: 'member',
  template: template,
  styleUrls: ['./member.component.scss']
})

class keyboardButton {
  val:any;
  displayValue:any;
  switchCase(toUpper: boolean){
    if(!isNaN(this.val*1)){
      return
    }else if(toUpper){
      this.val = this.val.toUpperCase()
      this.displayValue = this.val.toUpperCase()
    }else{
      this.val = this.val.toLowerCase()
      this.displayValue = this.val.toLowerCase()
    }
  }
  constructor(val: any, displayVal: any){
    this.val = val;
    this.displayValue = displayVal;
  }
}
export class MemberComponent {
  userTipMessage: string = "请输入登录名"
  passwordTipMessage :string = "请输入密码"
  userNameDisplay: boolean = false
  passwordDisplay: boolean = false
  keyboardRow: Array<any> = [
    new keyboardButton("1","1"),new keyboardButton("2","2"),new keyboardButton("3","3"),new keyboardButton("4","4"),
    new keyboardButton("5","5"),new keyboardButton("6","6"),new keyboardButton("7","7"),new keyboardButton("8","8"),
    new keyboardButton("9","9"),new keyboardButton("0","0"),

    new keyboardButton("q","q"),new keyboardButton("w","w"),new keyboardButton("e","e"),new keyboardButton("r","r"),
    new keyboardButton("t","t"),new keyboardButton("y","y"),new keyboardButton("u","u"),new keyboardButton("i","i"),
    new keyboardButton("o","o"),new keyboardButton("p","p"),

    new keyboardButton("a","a"),new keyboardButton("s","s"),new keyboardButton("d","d"),new keyboardButton("f","f"),
    new keyboardButton("g","g"),new keyboardButton("h","h"),new keyboardButton("j","j"),new keyboardButton("k","k"),
    new keyboardButton("l","l"),new keyboardButton("10","大写"),

    new keyboardButton("z","z"),new keyboardButton("x","x"),new keyboardButton("c","c"),new keyboardButton("v","v"),
    new keyboardButton("b","b"),new keyboardButton("n","n"),new keyboardButton("m","m"),new keyboardButton("后退","后退"),
    new keyboardButton("11","清空"),new keyboardButton("12","完成")
  ]
  public constructor() {
  }
  userNameClicked(){
    this.userNameDisplay = !this.userNameDisplay
    this.passwordDisplay = false;
  }

  switchCase(keyboardArr: Array<any>){
    let switchedArr = keyboardArr.map(ele=>{ele.value})
    return switchedArr;
  }

  clickButton(numObj:any){
    if(this.userTipMessage.length >= 3 && numObj.val != 10 && this.userTipMessage != "请输入登录名"){
      // this.keyboardDisplay = !this.keyboardDisplay
      return
    }

    if(numObj.val==10){
      if(this.userTipMessage.length > 1) {
        this.userTipMessage = this.userTipMessage.substr(0, this.userTipMessage.length - 1);
      }else{
        this.userTipMessage = "请输入货道编号"
      }
    }else if(numObj.val != 11){
      if(this.userTipMessage == "请输入货道编号"){
        this.userTipMessage = '';
      }
      this.userTipMessage += numObj.val;
    }else{
      // this.keyboardDisplay = !this.keyboardDisplay
    }
    console.log(numObj.val)
  }

}

