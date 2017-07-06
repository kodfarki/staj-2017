import { Component, OnInit } from '@angular/core';
import {LoginService} from "../login.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  authenticated:boolean;

  usernameStr:string;
  passwordStr:string;
  
  constructor(private loginService:LoginService) { }

  ngOnInit() {
    }

  onSubmit(){
    this.authenticated =
        this.loginService.authenticate(this.usernameStr,
            this.passwordStr);

    console.log("authenticated: " + this.authenticated);
  }

}
