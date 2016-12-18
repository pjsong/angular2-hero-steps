import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http'
import {ControlBoardIO, ControlBoardInput} from "../models/Module";
import {HttpUtils} from "./http-util";
import {Observable} from "rxjs";
var constants = require('../globalconst');


const MONEYCHARGEURL: string=constants.GLOBALSERVICE_MONEYCHARGE;
@Injectable()
export class ControlBoardService {

  private headers = new Headers({'Content-type': 'application/json'})
  constructor(private http:Http){}

  instructControlBoard(controlBoardInput: ControlBoardInput): Observable<ControlBoardIO> {
    return new HttpUtils(this.http).POST('http://172.18.0.6/api/data/controlboard/testrun/', controlBoardInput);

  }
}
