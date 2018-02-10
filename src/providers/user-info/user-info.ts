import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UserInfoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserInfoProvider {

  constructor(public http: Http) {
    console.log('Hello UserInfoProvider Provider');
  }
  
  set
    UpdateUserInfo(userDetails: any) {
      console.log("Hello from UpdateUserInfo setter");
      console.log(userDetails);
    }
 }
