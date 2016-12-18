import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {ControlBoardInput, ControlBoardIO} from "../../models/Module";
import {ControlBoardService} from "../../services/controlboard-service";

var httpUtils = require('../../services/http-util')
const slotTipMessage = "请输入货道编号"
const testCntTipMessage = "请输入测试循环计数"
@Component({
  selector: 'testcontrolboard',
  styleUrls: [ 'testcontrolboard.component.scss' ],
  templateUrl: 'testcontrolboard.component.html'
})

export class TestControlBoardComponent {
  errorMsg: string;
  slotInput: string = slotTipMessage
  testCntInput :string = testCntTipMessage
  keyboardInput :string = "";
  slotKBDisplay: boolean = false
  testCntKBDisplay: boolean = false
  keyboardRow: Array<any> = [
    {"val":"1", "displayValue" : "1"}
    , {"val":"2", "displayValue" : "2"}
    , {"val":"3", "displayValue" : "3"}
    , {"val":"0", "displayValue" : "0"}
    , {"val":"4", "displayValue" : "4"}
    , {"val":"5", "displayValue" : "5"}
    , {"val":"6", "displayValue" : "6"}
    , {"val":"backspace", "displayValue" :"退格"}
    , {"val":"7", "displayValue" : "7"}
    , {"val":"8", "displayValue" : "8"}
    , {"val":"9", "displayValue" : "9"}
    , {"val":"enter", "displayValue" :"完成"}
  ]
  public constructor(public controlBoardService: ControlBoardService, public router: Router) {
  }

  inputClicked(event: any){
    event.preventDefault();
    console.log(event.target.name)
    if(event.target.name=="slotInput") {
      this.slotKBDisplay = true
      this.testCntKBDisplay = false;
      this.keyboardInput=this.slotInput;
    }else if(event.target.name=="testCntInput"){
      this.slotKBDisplay = false
      this.testCntKBDisplay = true;
      this.keyboardInput = this.testCntInput
    }
    this.errorMsg="";
  }

  clickButton(numObj:any, name:string){
    if(numObj.val=="backspace"){
      if(this.keyboardInput.length > 1)
        this.keyboardInput = this.keyboardInput.substr(0, this.keyboardInput.length-1);
      else
        this.keyboardInput = (name=="slotInput" ? slotTipMessage: testCntTipMessage);
    }else if(numObj.val=="clear"){
      this.keyboardInput = name=="slotInput"?slotTipMessage: testCntTipMessage;
    }else if(numObj.val=="enter"){
      name=="slotInput"? this.slotKBDisplay = false : this.testCntKBDisplay = false;
      if(name=="testCntInput"){
        this.doTest(new ControlBoardInput(parseInt(this.slotInput), parseInt(this.testCntInput)))
      }
    }else {
      if([slotTipMessage, testCntTipMessage].some(x => x ==this.keyboardInput)){
        this.keyboardInput = '';
      }
      this.keyboardInput += numObj.val;
    }

    name=="slotInput"? this.slotInput = this.keyboardInput : this.testCntInput = this.keyboardInput;
  }


  doTest(controlBoardInput: ControlBoardInput): void{
    console.log(controlBoardInput)
    this.controlBoardService.instructControlBoard(controlBoardInput).subscribe(
      (data:ControlBoardIO)=>{console.log(data)},
      (err:any) => {this.errorMsg = err; this.slotInput=""; this.testCntInput=""}
    );
  }


}

