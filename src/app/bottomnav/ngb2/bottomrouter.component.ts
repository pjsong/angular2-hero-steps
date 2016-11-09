import {Component, OnInit, OnDestroy, Input} from '@angular/core';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import {Router} from "@angular/router";

const waitingCnt = 999;
@Component({
  selector: 'bottomrouter',
  templateUrl: './bottomrouter.component.html',
  styleUrls: ['./bottomrouter.component.scss'],
})
export class BottomRouter implements OnInit, OnDestroy{
  public pageWaiting: number = waitingCnt;

  constructor(private router:Router){}

  ngOnInit(){
    setInterval(()=>{
      if(this.pageWaiting > 0){
        this.pageWaiting -- ;
      }
      if(!this.router.isActive("homepage", true) && this.pageWaiting == 0){
        this.router.navigate(['/homepage']);
      }
    },1000)
  }
  ngOnDestroy(){
    this.pageWaiting = waitingCnt;
  }
  resetPageWaiting(){
    this.pageWaiting = waitingCnt;
    console.log("reset triggered" + this.pageWaiting);
  }
}
