import {Component, OnInit, OnDestroy} from '@angular/core';

// webpack html imports
let template = require('./topbanner.component.html');

@Component({
  selector: 'topbanner',
  template: template,
  styleUrls: ['./topbanner.component.scss']
})
export class TopBanner implements OnInit, OnDestroy{
  public radioModel:string = 'Homepage';
  public pageWaiting: number = 120;
  ngOnInit(){
    setInterval(()=>{
      if(this.pageWaiting > 0){
        this.pageWaiting -- ;
      }
    },1000)
  }
  ngOnDestroy(){
    this.pageWaiting = 120;
  }
  resetPageWaiting(){
    this.pageWaiting = 120;
  }
}

