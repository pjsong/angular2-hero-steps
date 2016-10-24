import { Component, OnInit, } from '@angular/core';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import {Router} from "@angular/router";


@Component({
  selector: 'categoryrouter',
  templateUrl: './categoryrouter.component.html',
  // styleUrls: ['./bottomrouter.component.scss']
})
export class CategoryRouter implements OnInit{
  public radioModel:string = 'Homepage';

  constructor(private router:Router){}

  ngOnInit(){

  }

}
