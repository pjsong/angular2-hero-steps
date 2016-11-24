import {Component, Input} from '@angular/core';
import {Product} from '../../services/product-service';

@Component({
  selector: 'cashcharge',
  styleUrls: [ 'cashCharge.scss' ],
  templateUrl: 'cashCharge.html'
})
export default class CashChargeComponent {
  @Input() product: Product;
  constructor(){}
}
