import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Api } from '../api/api';

@Injectable()
export class LoginProvider {
  _user: any;

  constructor(public http: Http, public api: Api) {
  }

  /**
   * Send a GET request to our login endpoint with the data
   * the user entered on the form.
   */
  login(token: string) {
    let seq = this.api.get('login', ['token'], [token]).share();

    seq
      .map(res => res.json())
      .subscribe(res => {

        if (res.success) {
          this.loggedIn(res);
        }

        if (res.status == 'success') {
        } else {
        }
      }, err => {
        console.error('ERROR', err);
      });

    return seq;
  }

  authSetic(code: string) {
    let url = 'https://sistemas.homologacao.ufsc.br/oauth2.0/accessToken?grant_type=authorization_code&code='+code+'&client_id=oauth&redirect_uri=ufsclogin%3A%2F%2Fsetic_oauth_example.ufsc.br&client_secret=segredo';
    let seq = this.http.post(url, "");
    return seq;
  }

  /**
   * Log the user out, which forgets the session
   */
  logout() {
    this._user = null;
  }

  /**
   * Process a login/signup response to store user data
   */
  loggedIn(resp) {
    this._user = resp.user;
  }
}
