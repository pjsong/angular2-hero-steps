// src/app/topbanner/ngb2/bottomnav.component.ts
import {Component, OnInit, OnDestroy} from '@angular/core';

// webpack html imports
let template = require('./bottomnav.component.html');
let waitingCnt = 10;

@Component({
  selector: 'bottomnav',
  template: template,
  styleUrls: ['./bottomnav.component.scss']
})
export class BottomNav implements OnInit, OnDestroy{
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

