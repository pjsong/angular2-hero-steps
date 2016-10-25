//our root app component
import {Component, OnInit} from '@angular/core'
import {Router, ActivatedRoute} from "@angular/router";

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

  constructor(private router:ActivatedRoute){

  }

  ngOnInit(){
  }

  public toggled(open:boolean):void {
    console.log('Dropdown is now:', open);
  }
  loadList(menuClicked: string){
    console.log(menuClicked);
  }

}
