import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { ICredentials } from '../../contracts/ICredentials';
import { LoginCredential } from '../../models/LoginCredential';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'lb-bankofficial-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

  public credentials: ICredentials = {
    email: 'sandra@gmail.com',
    password: 'password'
  };

  public showAuthenticationLoader = false;
  private currentUser: any;

  constructor(private router: Router, private _authService: AuthService) {

  }

  ngOnInit() {
  }

  login() {
    this.onLoginButtonClick();
    this._authService.login(this.credentials.email, this.credentials.password)
      .subscribe(authedUser => {
        this.currentUser = authedUser;
        console.log(authedUser);
        if (authedUser.data != null) {
          this._authService.currentUser = authedUser;
          this.router.navigate(['/all-transactions']);
        } else {
          this.onLoginButtonClick();
          this.onLoginError();
        }
      });
  }

  onLoginButtonClick() {
    this.showAuthenticationLoader = !this.showAuthenticationLoader;
  }

  onLoginError() {
    $.Notify({
      caption: 'Invalid Credentials',
      content: 'The supplied Credentials does not exit',
      icon: '<span class="mif-feed mif-ani-ripple mif-ani-fast"></span>'
    });
  }




}
