import { Component } from '@angular/core';
import {HttpUtils} from "../../services/http-util";
import {Http} from "@angular/http";
import {AuthService} from "../../services/auth/auth.service";
import {Router} from "@angular/router";
import {UserPrinciple} from "../../models/Module"
let template = require('./login.component.html');
const userTipMessage:string = "pjsong" //"请输入登录名"
const passwordTipMessage :string = "pjsong3101" //"请输入密码"
var httpUtils = require('../../services/http-util')

@Component({
  selector: 'login',
  template: template,
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  loginErrorMsg: string;
  userInput: string = userTipMessage
  passwordInput :string = passwordTipMessage
  keyboardInput :string = "";
  userNameKBDisplay: boolean = false
  passwordKBDisplay: boolean = false
  keyboardRow: Array<any> = [
    {"val":"1", "displayValue" : "1"}
    , {"val":"2", "displayValue" : "2"}
    , {"val":"3", "displayValue" : "3"}
    , {"val":"4", "displayValue" : "4"}
    , {"val":"5", "displayValue" : "5"}
    , {"val":"6", "displayValue" : "6"}
    , {"val":"7", "displayValue" : "7"}
    , {"val":"8", "displayValue" : "8"}
    , {"val":"9", "displayValue" : "9"}
    , {"val":"0", "displayValue" : "0"}
    , {"val":"q", "displayValue" : "q"}
    , {"val":"w", "displayValue" : "w"}
    , {"val":"e", "displayValue" : "e"}
    , {"val":"r", "displayValue" : "r"}
    , {"val":"t", "displayValue" : "t"}
    , {"val":"y", "displayValue" : "y"}
    , {"val":"u", "displayValue" : "u"}
    , {"val":"i", "displayValue" : "i"}
    , {"val":"o", "displayValue" : "o"}
    , {"val":"p", "displayValue" : "p"}
    , {"val":"a", "displayValue" : "a"}
    , {"val":"s", "displayValue" : "s"}
    , {"val":"d", "displayValue" : "d"}
    , {"val":"f", "displayValue" : "f"}
    , {"val":"g", "displayValue" : "g"}
    , {"val":"h", "displayValue" : "h"}
    , {"val":"j", "displayValue" : "j"}
    , {"val":"k", "displayValue" : "k"}
    , {"val":"l", "displayValue" : "l"}
    , {"val":"shift", "displayValue" : "大写"}
    , {"val":"z", "displayValue" : "z"}
    , {"val":"x", "displayValue" : "x"}
    , {"val":"c", "displayValue" : "c"}
    , {"val":"v", "displayValue" : "v"}
    , {"val":"b", "displayValue" : "b"}
    , {"val":"n", "displayValue" : "n"}
    , {"val":"m", "displayValue" : "m"}
    , {"val":"backspace", "displayValue" :"退格"}
    , {"val":"clear", "displayValue" :"清空"}
    , {"val":"enter", "displayValue" :"完成"}
  ]
  public constructor(public authService: AuthService, public router: Router) {
  }

  shiftClick(numObj: any){
    // console.log(numObj.displayValue)
    if(numObj.displayValue == "大写"){
      numObj.displayValue = "小写"
      this.switchCase(true)
    }else{
      numObj.displayValue = "大写"
      this.switchCase(false)
    }
  }

  switchCase(isToUpperCase: boolean){
    this.keyboardRow.forEach(
      ele=>{
        let isSpecialButton = ["backspace", "clear", "enter", "shift"].some(x=>x==ele.val);
        if(!isSpecialButton && isNaN(+ele.val)) {
          if (isToUpperCase) {
            ele.val = ele.val.toUpperCase();ele.displayValue = ele.displayValue.toUpperCase()
          }
          else {
            ele.val = ele.val.toLowerCase();ele.displayValue = ele.displayValue.toLowerCase()
          }
        }
      })
  }

  inputClicked(event: any){
    event.preventDefault();
    if(event.target.name=="userInput") {
      this.userNameKBDisplay = true
      this.passwordKBDisplay = false;
      this.keyboardInput=this.userInput;
    }else if(event.target.name=="passwordInput"){
      this.userNameKBDisplay = false
      this.passwordKBDisplay = true;
      this.keyboardInput = this.passwordInput
    }
    this.loginErrorMsg="";
  }

  clickButton(numObj:any, name:string){
     if(numObj.val=="shift"){
        this.shiftClick(numObj);
    }else if(numObj.val=="backspace"){
      if(this.keyboardInput.length > 1)
        this.keyboardInput = this.keyboardInput.substr(0, this.keyboardInput.length-1);
      else
        this.keyboardInput = (name=="userInput" ? userTipMessage: passwordTipMessage);
    }else if(numObj.val=="clear"){
      this.keyboardInput = name=="userInput"?userTipMessage: passwordTipMessage;
    }else if(numObj.val=="enter"){
       name=="userInput"? this.userNameKBDisplay = false : this.passwordKBDisplay = false;
       if(name=="passwordInput"){
         this.login(new UserPrinciple(this.userInput, this.passwordInput))
       }
    }else {
      if([userTipMessage, passwordTipMessage].some(x => x ==this.keyboardInput)){
        this.keyboardInput = '';
      }
      this.keyboardInput += numObj.val;
    }

    name=="userInput"? this.userInput = this.keyboardInput : this.passwordInput = this.keyboardInput;
  }


  login(up: UserPrinciple): boolean{
    if(localStorage.getItem("token")){
      let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/member';
      this.router.navigate([redirect]);
      return true;
    }
    this.authService.login(up).subscribe(
        (data:any)=>{
          localStorage.setItem("token", data.token);
          console.log("authservice.redirect: " + this.authService.redirectUrl)
          let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/member';
          this.router.navigate([redirect]);
        },
        (err:any) => {this.loginErrorMsg = "用户名/密码错误"; this.userInput=""; this.passwordInput=""}
      );
  }

  logout(){
    localStorage.removeItem("token");
  }
}

