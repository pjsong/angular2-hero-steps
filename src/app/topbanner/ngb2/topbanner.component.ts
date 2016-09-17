import { Component } from '@angular/core';

// webpack html imports
let template = require('./topbanner.component.html');

@Component({
  selector: 'topbanner',
  template: template,
  styleUrls: ['./topbanner.component.css']
})
export class TopBanner {
  public radioModel:string = 'Homepage';
}

