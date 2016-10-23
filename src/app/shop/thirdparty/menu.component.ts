//our root app component
import {Component} from '@angular/core'

let template = require("./menu.component.html");
@Component({
  selector: 'shopmenu',
  template:template,
})
export class Menu  {
  navCollapsed = true;

  public items:Array<string> = ['first', 'second', 'third'];

  public toggled(open:boolean):void {
    console.log('Dropdown is now:', open);
  }


}
