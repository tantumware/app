import { LoginProvider } from './../../providers/login-provider/login-provider';
import { Account } from './../../models/account';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController, LoadingController, Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { StorageKeys } from '../../utils/storage-keys';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Deeplinks } from '@ionic-native/deeplinks';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  showView: boolean = false;

  username: string;
  password: string;

  idioma = "pt";

  private browser;

  manterConectado: boolean = true;

  constructor(public navCtrl: NavController,
    public loginProvider: LoginProvider,
    public toastCtrl: ToastController,
    public translateService: TranslateService,
    private storage: Storage,
    public loadingCtrl: LoadingController,
    private iab: InAppBrowser,
    private deeplinks: Deeplinks,
    private plataform: Platform) {

    this.deeplinks.routeWithNavController(this.navCtrl, {
      '*': LoginPage
    }).subscribe((match) => {
      this.browser.close();
      // match.$route - the route we matched, which is the matched entry from the arguments to route()
      // match.$args - the args passed in the link
      // match.$link - the full link data
      let code = (match.$link['queryString']);
      code = code.replace('code=', "");
      code = code.replace('&state=E3ZYKC1T6H2yP4z', '');
      this.loginProvider.authSetic(code)
        .map(res => res.json())
        .subscribe(res => {
          this.doLogin(res['access_token']);
        });
    }, (nomatch) => {
      console.error('Got a deeplink that didn\'t match', nomatch);
    });

    this.translateService.setDefaultLang('pt');

    this.storage.get(StorageKeys.LANGUAGE).then(idioma => {
      if (idioma) {
        this.idioma = idioma;
        this.translateService.use(this.idioma);
      }
    });
  }

  ionViewWillEnter() {
    this.username = null;
    this.password = null;
    this.showView = false;

    this.idioma = this.translateService.currentLang;
    this.checkKeepLoggedIn();
  }

  checkKeepLoggedIn() {
    this.storage.get(StorageKeys.TOKEN).then((acc) => {      
      if (acc) {
        this.doLogin(acc);
      } else {
        this.showView = true;
      }
    });
  }

  idiomaChanged(): void {
    this.translateService.use(this.idioma);
    this.storage.set(StorageKeys.LANGUAGE, this.idioma);
  }

  prepareLogin() {
    // this.browserTab.isAvailable()
    // .then(isAvailable => {
    //   if (isAvailable) {
    //     this.browserTab.openUrl('https://sistemas.homologacao.ufsc.br/oauth2.0/authorize?client_id=oauth&client_secret=segredo&redirect_uri=ufsclogin://setic_oauth_example.ufsc.br&state=E3ZYKC1T6H2yP4z&response_type=code');
    //   } else {
    //     // open URL with InAppBrowser instead or SafariViewController
    //   }
    // });
    // this.browserTab.close().then(p => console.log(p));
    // this.browser = this.iab.create('https://sistemas.homologacao.ufsc.br/oauth2.0/authorize?client_id=oauth&client_secret=segredo&redirect_uri=ufsclogin://setic_oauth_example.ufsc.br&state=E3ZYKC1T6H2yP4z&response_type=code&bypass_approval_prompt=true', '_system', { location: 'yes'});
    
    // this.browser.close();
    this.doLogin("AT-10-XSLAp9Ec0eEHo02aMoUhBzpdU66bTGmoNYO");
  }

  doLogin(token: string) {
    this.storage.set(StorageKeys.KEEP_LOGGED_IN, this.manterConectado);
    let loading = this.loadingCtrl.create({
      content: this.translateService.instant("PLEASE_WAIT")
    });

    this.storage.set(StorageKeys.TOKEN, token);

    let timeOutid = setTimeout(() => {
      loading.present();
    }, 300);

    this.loginProvider.login(token).subscribe(res => {
      if (res && res.status == 200 && res.json().success) {
        loading.dismiss();
        clearTimeout(timeOutid);
        this.navCtrl.push('MainPage');
      } else {
        loading.dismiss();
        clearTimeout(timeOutid);
        this.showError();
      }
    }, err => {
      loading.dismiss();
      clearTimeout(timeOutid);
      console.error('ERROR', err);
      this.showError();
    });

  }

  showError() {
    this.showView = true;
    let toast = this.toastCtrl.create({
      message: this.translateService.instant('ERROR_CONNECTING_TO_SERVER'),
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

  onSobreClick(): void {
    // this.plataform.exitApp();
    this.navCtrl.push('SobrePage');
  }
}
