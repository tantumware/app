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

  login(token: string) {
    let seq = this.api.get('login', ['token'], [token]).share();
    return seq;
  }

  authSetic(code: string) {
    // let api_key = 'oauth';
    // let api_key = 'tccphpils';
    // let secret_key = 'segredo';
    // let secret_key = 'Gto1W3ErSqWWdmASpb5CsqqPkgjNv8';
    // let redirect_url = 'ufsclogin://setic_oauth_example.ufsc.br';
    // let redirect_url = 'tccphpils://tccphpils.setic_oauth.ufsc.br';
    // let site = 'https://sistemas.homologacao.ufsc.br/oauth2.0/';
    // let site = 'https://sistemas.ufsc.br/oauth2.0/';

    // let url = site + 'accessToken?grant_type=authorization_code&code=' + code + '&client_id=' + api_key + '&redirect_uri=' + redirect_url + '&client_secret=' + secret_key + '&username=tccphpils&password=VLwwAvvHdNzF';

    // .appendQueryParameter(GRANT_TYPE_PARAM, GRANT_TYPE)
    // .appendQueryParameter(RESPONSE_TYPE_VALUE, authorizationToken)
    // .appendQueryParameter(CLIENT_ID_PARAM, API_KEY)
    // .appendQueryParameter(REDIRECT_URI_PARAM, REDIRECT_URI)
    // .appendQueryParameter(SECRET_KEY_PARAM, SECRET_KEY)
    // let url = 'https://sistemas.homologacao.ufsc.br/oauth2.0/accessToken?grant_type=authorization_code&code='+code+'&client_id=oauth&redirect_uri=ufsclogin%3A%2F%2Fsetic_oauth_example.ufsc.br&client_secret=segredo';
    // let seq = this.http.post(url, "");
    // return seq;
  }

}
