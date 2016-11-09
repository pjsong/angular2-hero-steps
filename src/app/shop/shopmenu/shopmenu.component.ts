import {Component, OnInit} from '@angular/core'
import {Router, ActivatedRoute} from "@angular/router";
import {BottomRouter} from "../../bottomnav/ngb2/bottomrouter.component";

let template = require("./shopmenu.component.html");
@Component({
  selector: 'shopmenu',
  template:template,
  styleUrls: ['./shopmenu.component.scss']
})

export class ShopMenuComponent implements OnInit {
  navCollapsed = true;
  public menuItem:string = 'All';
  public items:Array<string> = ['first', 'second', 'third'];

  constructor(private router:ActivatedRoute){ //private bottomRouter: BottomRouter,

  }

  ngOnInit(){
  }

  private resetPageWaiting(){
    // this.bottomRouter.resetPageWaiting();
  }

  public toggled(open:boolean):void {
    console.log('Dropdown is now:', open);
    this.resetPageWaiting();
  }

  loadList(menuClicked: string){
    console.log(menuClicked);
    this.resetPageWaiting();
  }

}
