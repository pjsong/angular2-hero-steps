import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions, RequestMethod} from '@angular/http'
var httpUtils = require('./http-util')
var constants = require('../globalconst');

export class Token {
  constructor( public token: string)  {}
}



@Injectable()
export class MemberService {
  constructor(private http: Http){}

  login():any {
    httpUtils.Post('http://172.18.0.4/api/data/api-token-auth/', {"username": "pjsong", "password": "pjsong3101"})
      .subscribe(
        (data:any)=>console.log(data)
      );
  }
}

