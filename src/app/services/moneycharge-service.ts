import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http'
var constants = require('../globalconst');

export class MoneyCharge {
  constructor(
    public vmSlug: number,
    public cashAmount: number,
    public coinAmount: number) {
  }
}
const MONEYCHARGEURL: string=constants.GLOBALSERVICE_MONEYCHARGE;
@Injectable()
export class MoneyChargeService {

  private headers = new Headers({'Content-type': 'application/json;charset=utf-8', 'Authorization': 'Basic '+btoa('pjsong:pjsong3101')})
  constructor(private http:Http){}
  addMoneyCharge(moneyCharge: any): Promise<MoneyCharge> {
    return this.http
      .post(MONEYCHARGEURL+'create/', JSON.stringify(moneyCharge),{headers: this.headers})
      .toPromise().then(res =>res.json().data)
      .catch(error=>console.error('add moneycharge error'));
  }

  getMoneyCharge(): Promise<MoneyCharge[]>{
    return this.http.get(MONEYCHARGEURL).toPromise().then(res=>res.json().data)
  }

  // getProductById(productId: number): Product {
  //   return products.find(p => p.id === productId);
  // }
  //
  // getReviewsForProduct(productId: number): Review[] {
  //   return reviews
  //     .filter(r => r.productId === productId)
  //     .map(r => new Review(r.id, r.productId, new Date(r.timestamp), r.user, r.rating, r.comment));
  // }

  getAllCategories(): string[] {
    return ['Books', 'Electronics', 'Hardware'];
  }
}
