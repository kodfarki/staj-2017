import { Injectable } from '@angular/core';
import {letProto} from "rxjs/operator/let";

@Injectable()
export class LoginService {

    userDataStore = [
        {"username": "mehmet", "password": "1234"},
        {"username": "ahmet", "password": "12345"},
    ];

    constructor() { }

  authenticate(username:string, password:string){
    console.log("authenticate() username: " + username
        + "password: " + password)


      for (let user of this.userDataStore){
        if (user.username == username &&
            user.password == password){
            return true;
        }
      }

      return false;
  }
}
