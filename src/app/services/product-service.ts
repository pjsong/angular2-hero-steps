import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http'
var constants = require('../globalconst');

export class Product {
  constructor(
    public id: number,
    public imageListUrl: string,
    public productName: string,
    public saleUnitPrice: number,
    public productSummary: string,
    public productDesc: string)
  {
  }
}

export class Review {
  constructor(
    public id: number,
    public productId: number,
    public timestamp: Date,
    public user: string,
    public rating: number,
    public comment: string) {
  }
}

const IMG_PREFIX_SHOPTEST: string=constants.GLOBALIMGPREFIX + 'shoptest/car';

@Injectable()
export class ProductService {
  constructor(private http: Http){}

  getProducts(): Promise<Product[]>{
    // return products.map(p => new Product(p.id, p.imageListUrl, p.productName, p.saleUnitPrice, p.productSummary, p.productDesc));

    let reqHeaders = new Headers();
    reqHeaders.append('Content-type', 'application/json;charset=utf8');
    // reqHeaders.append('Accept', 'application/json');
    // reqHeaders.append('Username', 'pjsong');
    // reqHeaders.append('Password', 'pjsong3101');
    // reqHeaders.append('Authorization', 'Basic '+btoa('pjsong:pjsong3101'));
    let reqOptions = new RequestOptions({headers: reqHeaders})
    return this.http.get('http://172.18.0.4/api/data/product/?format=json') //{headers: reqHeaders}
      .toPromise().then(res=>{ console.log(res.json());return res.json() as Product[]})
      .catch(error=>console.error('add products error'));
  }

  getProductById(productId: number): Promise<Product> {
    // return products.find(p => p.id === productId);
     return this.http.get('http://172.18.0.4/api/data/product/'+productId+'/?format=json')
       .toPromise().then(res => {console.log(res.json());return res.json() as Product})
  }

  getReviewsForProduct(productId: number): Review[] {
    return reviews
      .filter(r => r.productId === productId)
      .map(r => new Review(r.id, r.productId, new Date(r.timestamp), r.user, r.rating, r.comment));
  }

  getAllcategory(): string[] {
    return ['Books', 'Electronics', 'Hardware'];
  }
}

var products = [
  {
    "id": 7,
    "imageListUrl": "http://172.18.0.3/static/images/vendor/front/604.jpeg",
    "productName": "避孕套",
    "saleUnitPrice": 12,
    "productSummary": "避孕套避孕套",
    "productDesc": "避孕套避孕套避孕套"
  },
  {
    "id": 0,
    "imageListUrl":IMG_PREFIX_SHOPTEST + '1.jpg',
    "productName": "abc",
    "saleUnitPrice": 24.99,
    "productSummary": "First Product",
    "productDesc": "This is a short productDesc. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    "id": 1,
    "imageListUrl":IMG_PREFIX_SHOPTEST + '1.jpg',
    "productName": "abc",
    "saleUnitPrice": 64.99,
    "productSummary": "Second Product",
    "productDesc": "This is a short productDesc. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    "id": 2,
    "imageListUrl":IMG_PREFIX_SHOPTEST + '2.jpg',
    "productName": "abc",
    "productSummary": "Third Product",
    "saleUnitPrice": 74.99,
    "productDesc": "This is a short productDesc. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    "id": 3,
    "imageListUrl":IMG_PREFIX_SHOPTEST + '3.jpg',
    "productName": "abc",
    "productSummary": "Fourth Product",
    "saleUnitPrice": 84.99,
    "productDesc": "This is a short productDesc. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    "id": 4,
    "imageListUrl":IMG_PREFIX_SHOPTEST + '4.jpg',
    "productName": "abc",
    "productSummary": "Fifth Product",
    "saleUnitPrice": 94.99,
    "productDesc": "This is a short productDesc. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    "id": 5,
    "imageListUrl":IMG_PREFIX_SHOPTEST + '5.jpg',
    "productName": "abc",
    "productSummary": "Sixth Product",
    "saleUnitPrice": 54.99,
    "productDesc": "This is a short productDesc. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    "id": 6,
    "imageListUrl":IMG_PREFIX_SHOPTEST + '1.jpg',
    "productName": "abc",
    "productSummary": "Sixth Product",
    "saleUnitPrice": 54.99,
    "productDesc": "This is a short productDesc. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  }
];

var reviews = [
  {
    "id": 0,
    "productId": 0,
    "timestamp": "2014-05-20T02:17:00+00:00",
    "user": "User 1",
    "rating": 5,
    "comment": "Aenean vestibulum velit id placerat posuere. Praesent placerat mi ut massa tempor, sed rutrum metus rutrum. Fusce lacinia blandit ligula eu cursus. Proin in lobortis mi. Praesent pellentesque auctor dictum. Nunc volutpat id nibh quis malesuada. Curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. Vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. Praesent non lectus nec dui venenatis pretium."
  },
  {
    "id": 1,
    "productId": 0,
    "timestamp": "2014-05-20T02:53:00+00:00",
    "user": "User 2",
    "rating": 3,
    "comment": "Aenean vestibulum velit id placerat posuere. Praesent placerat mi ut massa tempor, sed rutrum metus rutrum. Fusce lacinia blandit ligula eu cursus. Proin in lobortis mi. Praesent pellentesque auctor dictum. Nunc volutpat id nibh quis malesuada. Curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. Vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. Praesent non lectus nec dui venenatis pretium."
  },
  {
    "id": 2,
    "productId": 0,
    "timestamp": "2014-05-20T05:26:00+00:00",
    "user": "User 3",
    "rating": 4,
    "comment": "Aenean vestibulum velit id placerat posuere. Praesent placerat mi ut massa tempor, sed rutrum metus rutrum. Fusce lacinia blandit ligula eu cursus. Proin in lobortis mi. Praesent pellentesque auctor dictum. Nunc volutpat id nibh quis malesuada. Curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. Vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. Praesent non lectus nec dui venenatis pretium."
  },
  {
    "id": 3,
    "productId": 0,
    "timestamp": "2014-05-20T07:20:00+00:00",
    "user": "User 4",
    "rating": 4,
    "comment": "Aenean vestibulum velit id placerat posuere. Praesent placerat mi ut massa tempor, sed rutrum metus rutrum. Fusce lacinia blandit ligula eu cursus. Proin in lobortis mi. Praesent pellentesque auctor dictum. Nunc volutpat id nibh quis malesuada. Curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. Vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. Praesent non lectus nec dui venenatis pretium."
  },
  {
    "id": 4,
    "productId": 0,
    "timestamp": "2014-05-20T11:35:00+00:00",
    "user": "User 5",
    "rating": 5,
    "comment": "Aenean vestibulum velit id placerat posuere. Praesent placerat mi ut massa tempor, sed rutrum metus rutrum. Fusce lacinia blandit ligula eu cursus. Proin in lobortis mi. Praesent pellentesque auctor dictum. Nunc volutpat id nibh quis malesuada. Curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. Vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. Praesent non lectus nec dui venenatis pretium."
  },
  {
    "id": 5,
    "productId": 0,
    "timestamp": "2014-05-20T11:42:00+00:00",
    "user": "User 6",
    "rating": 5,
    "comment": "Aenean vestibulum velit id placerat posuere. Praesent placerat mi ut massa tempor, sed rutrum metus rutrum. Fusce lacinia blandit ligula eu cursus. Proin in lobortis mi. Praesent pellentesque auctor dictum. Nunc volutpat id nibh quis malesuada. Curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. Vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. Praesent non lectus nec dui venenatis pretium."
  }
];
