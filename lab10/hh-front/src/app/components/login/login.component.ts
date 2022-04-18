import { Component, OnInit } from '@angular/core';
import { LabService } from 'src/app/services/lab.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isLoggedIn = false;
  form: any = {
    username: null,
    password: null,
  };
  // username = '';
  // password = '';
  token: string = '';
  tokenPayload: string | undefined;
  user_id: string[] | undefined;

  ngOnInit() {
    this.getToken();
    this.service.currentMessage.subscribe((message) => {
      if (message === 'login') {
        this.logout();
      }
    });
  }

  constructor(
    private service: LabService,
    private jwtHelper: JwtHelperService
  ) {}

  login() {
    const { username, password } = this.form;
    this.service.login(username, password).subscribe((data) => {
      localStorage.setItem('token', data.access);

      this.isLoggedIn = true;
      // this.username = '';
      // this.password = '';
      this.form = {
        username: null,
        password: null,
      };
      location.reload();
      // console.log(data);
    });
  }

  logout() {
    this.isLoggedIn = false;
    localStorage.removeItem('token');
    location.reload();
  }

  getToken() {
    const token = localStorage.getItem('token');
    if (token) {
      this.isLoggedIn = true;
      this.token = token;
      this.tokenPayload = JSON.stringify(this.jwtHelper.decodeToken(token));
      this.user_id = JSON.parse(this.tokenPayload).user_id;
    }
  }
}
