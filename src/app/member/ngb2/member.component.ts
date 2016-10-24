import { Component } from '@angular/core';

// webpack html imports
let template = require('./member.component.html');

@Component({
  selector: 'member',
  template: template,
  styleUrls: ['./member.component.scss']
})
export class MemberComponent {

}

