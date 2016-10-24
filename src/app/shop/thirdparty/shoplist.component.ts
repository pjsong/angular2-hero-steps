import { Component } from '@angular/core';

// webpack html imports
let template = require('./shoplist.component.html');

@Component({
  selector: 'shoplist',
  template: template,
  styleUrls: ['./shoplist.component.scss']
})
export class Shoplist {

}
