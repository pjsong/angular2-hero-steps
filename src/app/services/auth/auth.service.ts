import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import {Http, Response} from "@angular/http";
import {HttpUtils} from "../http-util";
import {UserPrinciple} from "../../models/Module";

@Injectable()
export class AuthService {
  // store the URL so we can redirect after logging in
  redirectUrl: string;
  constructor(private http: Http ){}
  // login(): Observable<boolean> {
  //   return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
  // }

  login(up: UserPrinciple): Observable<Response>{
    return new HttpUtils(this.http).POST('http://172.18.0.4/api/data/api-token-auth/', up);

  }
  logout(): void {
    localStorage.removeItem("token")
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
