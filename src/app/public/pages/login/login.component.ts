import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../shared/auth/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email = 'wleung1995@hotmail.com';
  password= 'test1234';
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  tryLogin() {
    this.authService.Login(this.email, this.password);
  }
}
