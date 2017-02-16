import 'rxjs/add/operator/map';

import { Headers, Http } from '@angular/http';

import { AppConfig } from '../app.config';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  private url: string;
  private endpoint: string;
  private config = new AppConfig();

  private _currentUser: any;
  get currentUser() {
    return this._currentUser;
  }

  set currentUser(value: any) {
    this._currentUser = value;
    localStorage.setItem('user', JSON.stringify(value));
  }

  constructor(private _http: Http, private router: Router) {
    this.url = this.config.ServerUrl;
    this.endpoint = 'login';
    console.log('Login Service ready ...');
  }

  isAdminUser() {
    if (this.currentUser || this.getUserFromStorage()) {
      return (this.currentUser.data.department.role === 'Administrator') ||
        (this.getUserFromStorage().data.department.role === 'Administrator');
    }
    return false;
  }

  login(email: string, password: string) {
    return this._http.post(this.url + this.endpoint, {
      'email': email,
      'password': password
    }).map(res => res.json());
  }

  getUserFromStorage() {
    return JSON.parse(localStorage.getItem('user'));
  }

  logout() {
    localStorage.clear();
    this._currentUser = null;
    this.router.navigate(['/']);
  }

  authenticated() {
    return this.getUserFromStorage() != null;
  }




}

