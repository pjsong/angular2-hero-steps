import { Component } from '@angular/core';

// webpack html imports
let template = require('./topbanner.component.html');

@Component({
  selector: 'topbanner',
  template: template,
  styleUrls: ['./topbanner.component.scss']
})
export class TopBanner {
  public radioModel:string = 'Homepage';
}

