import { LoginProvider } from './../../providers/login-provider/login-provider';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { StorageKeys } from '../../utils/storage-keys';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  showView: boolean = false;

  username: string;
  password: string;

  language = "pt";

  keepLoggedIn: boolean = true;

  constructor(public navCtrl: NavController,
    public loginProvider: LoginProvider,
    public toastCtrl: ToastController,
    public translateService: TranslateService,
    private storage: Storage,
    public loadingCtrl: LoadingController) {
    // private iab: InAppBrowser,
    // private deeplinks: Deeplinks,
    // private plataform: Platform) {


    // this.deeplinks.routeWithNavController(this.navCtrl, {
    //   '*': LoginPage
    // }).subscribe((match) => {
    //   this.browser.close();
    //   // match.$route - the route we matched, which is the matched entry from the arguments to route()
    //   // match.$args - the args passed in the link
    //   // match.$link - the full link data
    //   let code = (match.$link['queryString']);
    //   code = code.replace('code=', "");
    //   code = code.replace('&state=E3ZYKC1T6H2yP4z', '');     
    //   this.loginProvider.authSetic(code)
    //     .map(res => res.json())
    //     .subscribe(res => {
    //       this.doLogin(res['access_token']);
    //     }, err => alert(err));
    // }, (nomatch) => {
    //   console.error('Got a deeplink that didn\'t match', nomatch);
    // });

    this.translateService.setDefaultLang('pt');

    this.storage.get(StorageKeys.LANGUAGE).then(language => {
      if (language) {
        this.language = language;
        this.translateService.use(this.language);
      }
    });
  }

  ionViewDidLoad(){
    this.navCtrl.setRoot(this.navCtrl.getActive());
  }

  ionViewWillEnter() {
    this.username = null;
    this.password = null;
    this.showView = false;

    this.language = this.translateService.currentLang;
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

  languageChanged(): void {
    this.translateService.use(this.language);
    this.storage.set(StorageKeys.LANGUAGE, this.language);
  }

  prepareLogin() {
    // let api_key = 'oauth';
    // let api_key = 'tccphpils';
    // let secret_key = 'segredo';
    // let secret_key = 'Gto1W3ErSqWWdmASpb5CsqqPkgjNv8';
    // let redirect_url = 'ufsclogin://setic_oauth_example.ufsc.br';
    // let redirect_url = 'tccphpils://tccphpils.setic_oauth.ufsc.br';
    // let site = 'https://sistemas.homologacao.ufsc.br/oauth2.0/';
    // let site = 'https://sistemas.ufsc.br/oauth2.0/';

    // let url = site + 'authorize?client_id='+ api_key +'&client_secret='+ secret_key +'&redirect_uri=' + redirect_url + '&state=E3ZYKC1T6H2yP4z&response_type=code&bypass_approval_prompt=true'; //&bypass_approval_prompt=true
    // this.browser = this.iab.create(url, '_system', { location: 'yes'});
    
    // this.browser.close();
    this.doLogin("AT-10-XSLAp9Ec0eEHo02aMoUhBzpdU66bTGmoNYO");
  }

  doLogin(token: string) {
    this.storage.set(StorageKeys.KEEP_LOGGED_IN, this.keepLoggedIn);
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

  onAboutClicked(): void {
    this.navCtrl.push('AboutPage');
  }
}
