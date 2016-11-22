import {Component, OnInit, ViewChild,} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, Review, ProductService } from '../../services/product-service';
import {ModalDirective} from "ng2-bootstrap";


@Component({
  selector: 'auction-product-page',
  // styles: ['auction-stars.large {font-size: 24px;}.thumbnail{background-color: #2e6da4;}'],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css', ]
})
export default class ProductDetailComponent implements OnInit {
  @ViewChild('childModal') childModal: ModalDirective;
  cashPayTitle: string = "请放入现金";
  zhifubaoPayTitle: string = "请扫描二维码";
  cashPayDesc: string[] = ["需要支付:", "当前剩余:", "当前支付:", "还需支付:"];

  productId: number;
  product: Product;
  reviews: Review[];
  newComment: string;
  newRating: number;

  isReviewHidden: boolean = true;

  constructor(private productService: ProductService, route: ActivatedRoute) {
    this.productId = parseInt(route.snapshot.params['id']);
  }

  ngOnInit() {
    // this.product = this.productService.getProductById(this.productId);
    console.log(this.productId)
    this.productService.getProductById(this.productId).then(product => {console.log(product);this.product = product})
    // this.reviews = this.productService.getReviewsForProduct(this.product.id);
  }

  // addReview() {
  //   let review = new Review(0, this.product.id, new Date(), 'Anonymous',
  //       this.newRating, this.newComment);
  //   this.reviews = [...this.reviews, review];
  //   // this.product.rating = this.averageRating(this.reviews);
  //
  //   this.resetForm();
  // }

  // averageRating(reviews: Review[]) {
  //   let sum = reviews.reduce((average, review) => average + review.rating, 0);
  //   return sum / reviews.length;
  // }
  //
  // resetForm() {
  //   this.newRating = 0;
  //   this.newComment = null;
  //   this.isReviewHidden = true;
  // }
}
