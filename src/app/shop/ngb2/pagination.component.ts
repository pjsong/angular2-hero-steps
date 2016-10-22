

    import { Component } from '@angular/core';
    import { PaginationModule } from 'ng2-bootstrap/components/pagination'
    // webpack html imports
    let template = require('./pagination.component.html');

    @Component({
      selector: 'pagination-demo',
      template: template
    })
    export class PaginationDemoComponent {
      public totalItems:number = 64;
      public currentPage:number = 4;

      public maxSize:number = 5;
      public bigTotalItems:number = 175;
      public bigCurrentPage:number = 1;

      public setPage(pageNo:number):void {
        this.currentPage = pageNo;
      };

      public pageChanged(event:any):void {
        console.log('Page changed to: ' + event.page);
        console.log('Number items per page: ' + event.itemsPerPage);
      };
    }

