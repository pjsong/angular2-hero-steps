import {Component, OnInit} from '@angular/core';
import {Product, ProductService} from "../../services/product-service";
import {BottomRouter} from "../../bottomnav/ngb2/bottomrouter.component";
// webpack html imports
let template = require('./shop.component.html');

@Component({
  selector: 'shop',
  template: template,
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit{
  // private slides:Array<any> = [];
  public totalItems:number ; //total number of items in all pages
  // public rotate:boolean;//current page in the middle of pagelist
  public currentPage:number = 1;
  public itemsPerPage: number = 6;  //maximum number of items per page. If value less than 1 will display all items on one page
  products: Product[] = [];
  //the maximum buttons to show
  public maxSize:number = 5;
  // public bigTotalItems:number = 175;
  // public bigCurrentPage:number = 1;

  constructor(private bottomRouter: BottomRouter, private productService: ProductService){}

  public getProducts(): void{
    this.products = this.productService.getProducts();
  }
  public ngOnInit(): void{
    this.getProducts();
    this.totalItems = this.products.length;
    this.resetPageWaiting();
  }

  public resetPageWaiting(){
    this.bottomRouter.resetPageWaiting();
  }

  // public setPage(pageNo:number):void {
  //   this.currentPage = pageNo;
  // };
  public pageChanged(event:any):void {
    this.bottomRouter.resetPageWaiting();
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
    this.currentPage = event.page;
    this.itemsPerPage = event.itemsPerPage;
  };
}

