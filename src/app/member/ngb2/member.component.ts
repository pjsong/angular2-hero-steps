import {Component, OnInit, OnDestroy} from '@angular/core'
import { ActivatedRoute} from "@angular/router";


let template = require("./member.component.html");
@Component({
  selector: 'member',
  template:template,
  styleUrls: ['./member.component.scss']
})

export class MemberComponent implements OnInit, OnDestroy {
  navCollapsed = true;
  public menuItem:string = 'All';
  public items:Array<string> = ['first', 'second', 'third'];

  constructor(private router:ActivatedRoute){ //

  }

  ngOnInit(){
  }
  ngOnDestroy(){
    if(localStorage.getItem("token")){
      localStorage.removeItem("token");
      console.log("member destroyed")
    }
  }

  public toggled(open:boolean):void {
    console.log('Dropdown is now:', open);
  }

  loadList(menuClicked: string){
    console.log(menuClicked);
  }

}
