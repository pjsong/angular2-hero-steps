import { ChangeDetectionStrategy, Component } from '@angular/core';

// webpack html imports
let template = require('./pay.component.html');

@Component({
  selector: 'fun',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: template,
  styleUrls: ['./pay.component.scss'],
})

export class Pay {
  public tabs:Array<any> = [
    {title: '现金支付', content: 'Dynamic content 1'},
    {title: 'Articles', content: 'Dynamic content 2', disabled: false},
    {title: 'Help', content: 'Dynamic content 3', removable: true},
    {title: 'Cooperation', content: 'Dynamic content 3', removable: true}
  ];
  constructor() {
  }
  public alertMe():void {
    setTimeout(function ():void {
      // alert('You\'ve selected the alert tab!');
    }.bind(this));
  };

  public setActiveTab(index:number):void {
    this.tabs[index].active = true;
  };

  public removeTabHandler(/*tab:any*/):void {
    console.log('Remove Tab handler');
  };
}


