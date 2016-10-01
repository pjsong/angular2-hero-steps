import { ChangeDetectionStrategy, Component } from '@angular/core';

import { BottomRouter } from '../../bottomnav/ngb2/bottomrouter.component';


// webpack html imports
let template = require('./fun.component.html');

@Component({
  selector: 'fun',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: template,
  styleUrls: ['./fun.component.scss'],
})

export class Fun {
  public tabs:Array<any> = [
    {title: 'Video', content: 'Dynamic content 1'},
    {title: 'Articles', content: 'Dynamic content 2', disabled: false},
    {title: 'Help', content: 'Dynamic content 3', removable: true},
    {title: 'Cooperation', content: 'Dynamic content 3', removable: true}
  ];
  private bottomRouter: BottomRouter;
  constructor(bottomRouter: BottomRouter) {
    this.bottomRouter = bottomRouter;
  }
  public alertMe():void {
    setTimeout(function ():void {
      // alert('You\'ve selected the alert tab!');
      this.bottomRouter.resetPageWaiting();
    }.bind(this));
  };

  public setActiveTab(index:number):void {
    this.tabs[index].active = true;
    this.bottomRouter.resetPageWaiting();
  };

  public removeTabHandler(/*tab:any*/):void {
    console.log('Remove Tab handler');
    this.bottomRouter.resetPageWaiting();
  };
}


