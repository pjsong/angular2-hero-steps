import { Component } from '@angular/core';

// webpack html imports
let template = require('./shop.component.html');

@Component({
  selector: 'shop',
  template: template,
  styleUrls: ['./shop.component.scss']
})
export class Shop {

}

