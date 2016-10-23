

    import { Component } from '@angular/core';
    import { PaginationModule } from 'ng2-bootstrap/components/pagination'
    // webpack html imports
    let template = require('./pagination.component.html');

    @Component({
      selector: 'pagination-demo',
      template: template
    })
    export class PaginationDemoComponent {
      private slides:Array<any> = [];
      public totalItems:number = 64; //total number of items in all pages
      public rotate:boolean;//current page in the middle of pagelist
      public currentPage:number = 1;
      public itemsPerPage: number = 4;  //maximum number of items per page. If value less than 1 will display all items on one page

      //the maximum buttons to show
      public maxSize:number = 5;
      public bigTotalItems:number = 175;
      public bigCurrentPage:number = 1;

      public setPage(pageNo:number):void {
        this.currentPage = pageNo;
      };
      constructor () {
        this.slides.push(
          {image:'http://www.angulartypescript.com/wp-content/uploads/2016/03/car1.jpg',text:'BMW 1'},
          {image:'http://www.angulartypescript.com/wp-content/uploads/2016/03/car2.jpg',text:'BMW 2'},
          {image:'http://www.angulartypescript.com/wp-content/uploads/2016/03/car3.jpg',text:'BMW 3'},
          {image:'http://www.angulartypescript.com/wp-content/uploads/2016/03/car4.jpg',text:'BMW 4'},
          {image:'http://www.angulartypescript.com/wp-content/uploads/2016/03/car5.jpg',text:'BMW 5'},
          {image:'http://www.angulartypescript.com/wp-content/uploads/2016/03/car6.jpg',text:'BMW 6'},
          {image:'http://www.angulartypescript.com/wp-content/uploads/2016/03/car2.jpg',text:'BMW 2'},
          {image:'http://www.angulartypescript.com/wp-content/uploads/2016/03/car3.jpg',text:'BMW 3'},
          {image:'http://www.angulartypescript.com/wp-content/uploads/2016/03/car4.jpg',text:'BMW 4'},
          {image:'http://www.angulartypescript.com/wp-content/uploads/2016/03/car5.jpg',text:'BMW 5'},
        );
        this.totalItems = this.slides.length;
        this.itemsPerPage = 1;// one item per page
      }
      public pageChanged(event:any):void {
        console.log('Page changed to: ' + event.page);
        console.log('Number items per page: ' + event.itemsPerPage);
        this.currentPage = event.page;
        this.itemsPerPage = event.itemsPerPage;
      };
    }

