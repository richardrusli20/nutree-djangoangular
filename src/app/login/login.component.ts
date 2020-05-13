import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login;
  loginCustomer;

  constructor(private api: ApiService) {
    this.login = {login_success:false};
    this.loginCustomer = {username: '', password: '' };
    console.log("------");
    console.log(this.loginCustomer);
  }

  customerLogin = () => {
    this.api.login(this.loginCustomer).subscribe(
      data => {
        this.login = data;
        console.log(this.login);
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
  }

}
