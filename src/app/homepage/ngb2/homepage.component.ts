import { Component } from '@angular/core';

// webpack html imports
let template = require('./homepage.component.html');

@Component({
  selector: 'homepage',
  template: template
})
export class Homepage {

}

