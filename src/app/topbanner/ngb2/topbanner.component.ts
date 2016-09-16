

import { Component } from '@angular/core';

// webpack html imports
let template = require('./topbanner.component.html');

@Component({
  selector: 'topbanner',
  template: template,
  styleUrls: ['./topbanner.component.css']
})
export class TopBanner {
  public singleModel:string = '1';
  public radioModel:string = 'Middle';
  public checkModel:any = {left: false, middle: true, right: false};
}

