import {Component, Input} from '@angular/core';
import {Product} from '../../services/product-service';
import {ShopComponent} from "../shop/shop.component";
import {BottomRouter} from "../../bottomnav/ngb2/bottomrouter.component";

@Component({
  selector: 'auction-product-item',
  styleUrls: [ 'product-item.css' ],
  templateUrl: 'product-item.html'
})
export default class ProductItemComponent {
  @Input() product: Product;
  constructor(private shop: BottomRouter){}
}
