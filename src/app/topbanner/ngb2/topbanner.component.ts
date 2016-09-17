// src/app/topbanner/ngb2/topbanner.component.ts
import {Component, OnInit, OnDestroy} from '@angular/core';

// webpack html imports
let template = require('./topbanner.component.html');
let waitingCnt = 10;

@Component({
  selector: 'topbanner',
  template: template,
  styleUrls: ['./topbanner.component.scss']
})
export class TopBanner implements OnInit, OnDestroy{
  public radioModel:string = 'Homepage';
  public pageWaiting: number = waitingCnt;
  ngOnInit(){
    setInterval(()=>{
      if(this.pageWaiting > 0){
        this.pageWaiting -- ;
      }
      if(this.radioModel != 'Homepage' && this.pageWaiting == 0){
        this.radioModel= 'Homepage';
      }
    },1000)
  }
  ngOnDestroy(){
    this.pageWaiting = waitingCnt;
  }
  resetPageWaiting(){
    this.pageWaiting = waitingCnt;
  }
}

