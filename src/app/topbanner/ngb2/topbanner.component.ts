// src/app/topbanner/ngb2/topbanner.component.ts
import {Component, Input} from '@angular/core';

// webpack html imports
let template = require('./topbanner.component.html');

@Component({
  selector: 'topbanner',
  template: template,
  styleUrls: ['./topbanner.component.scss']
})
export class TopBanner {
  @Input()
  pageWaiting: number;
}

