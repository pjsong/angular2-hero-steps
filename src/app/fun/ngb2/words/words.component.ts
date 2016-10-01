import {Component, ViewEncapsulation} from '@angular/core';
import { BottomRouter } from '../../../bottomnav/ngb2/bottomrouter.component';
// webpack html imports
let template = require('./words.component.html');

@Component({
  selector: 'words',
  template: template,
  styleUrls: ['./words.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class Words {
  public oneAtATime:boolean = true;
  public items:Array<string> = ['Item 1', 'Item 2', 'Item 3'];

  public status:Object = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
  private bottomRouter: BottomRouter;
  constructor(bottomRouter: BottomRouter) {
    this.bottomRouter = bottomRouter;
  }
  public groups:Array<any> = [
    {
      title: 'Dynamic Group Header - 1',
      content: 'Dynamic Group Body - 1'
    },
    {
      title: 'Dynamic Group Header - 2',
      content: 'Dynamic Group Body - 2'
    }
  ];

  public addItem():void {
    this.items.push(`Items ${this.items.length + 1}`);
  }
}

