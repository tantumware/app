import { LoginProvider } from './../../providers/login-provider/login-provider';
import { Account } from './../../models/account';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { StorageKeys } from '../../utils/storage-keys';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Deeplinks } from '@ionic-native/deeplinks';
import { BrowserTab } from '@ionic-native/browser-tab';

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

  manterConectado: boolean = true;

  constructor(public navCtrl: NavController,
    public loginProvider: LoginProvider,
    public toastCtrl: ToastController,
    public translateService: TranslateService,
    private storage: Storage,
    public loadingCtrl: LoadingController,
    private iab: InAppBrowser,
    private deeplinks: Deeplinks,
    private browserTab: BrowserTab) {


      this.deeplinks.routeWithNavController(this.navCtrl, {
        '*': LoginPage
      }).subscribe((match) => {
        // match.$route - the route we matched, which is the matched entry from the arguments to route()
        // match.$args - the args passed in the link
        // match.$link - the full link data
        console.log('Successfully matched route', match);
        // alert(match.$route);
        let code = (match.$link['queryString']);
        code = code.replace('code=', "");
        code = code.replace('&state=E3ZYKC1T6H2yP4z', '');
        this.loginProvider.setic(code);
      }, (nomatch) => {
        // nomatch.$link - the full link data
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
    this.storage.get(StorageKeys.ACCOUNT).then((acc) => {
      this.storage.get(StorageKeys.KEEP_LOGGED_IN).then(b => {
        this.manterConectado = b
        if (acc && b) {
          this.doLogin(acc);
        } else {
          this.showView = true;
        }
      });
      
    });
  }

  idiomaChanged(): void {
    this.translateService.use(this.idioma);
    this.storage.set(StorageKeys.LANGUAGE, this.idioma);
  }

  prepareLogin() {    
    let userName = this.username == null ? "" : this.username;
    let password = this.password == null ? "" : this.password;

    let acc = new Account(userName, password);
    // const browser = this.iab.create('https://sistemas.homologacao.ufsc.br/oauth2.0/authorize?client_id=oauth&client_secret=segredo&redirect_uri=ufsclogin://setic_oauth_example.ufsc.br&state=E3ZYKC1T6H2yP4z&response_type=code', '_system', 'location=yes');
    // browser.show();
    // browser.on("loadstart").subscribe(event => {
    //   alert('loadstart');
    //   if ((event.url).indexOf("ufsclogin://setic_oauth_example.ufsc.br") === 0) {
    //     browser.on("exit").subscribe(event => {});
    //     browser.close();
    //     var responseParameters = ((event.url).split("#")[1]).split("&");
    //     var parsedResponse = {};
    //     for (var i = 0; i < responseParameters.length; i++) {
    //       parsedResponse[responseParameters[i].split("=")[0]] = responseParameters[i].split("=")[1];
    //     }
    //     // if (parsedResponse["access_token"] !== undefined && parsedResponse["access_token"] !== null) {
    //       //     resolve(parsedResponse);
    //       // } else {
    //         //     reject("Problem authenticating with Facebook");
    //         // }
    //       }
    //     });
    //     browser.on("exit").subscribe(event => {
    //       alert('exit');
    //       // reject("The Facebook sign in flow was canceled");
    //     });
        
    //     browser.close();
        // this.doLogin(acc);

        this.browserTab.isAvailable()
        .then(isAvailable => {
          if (isAvailable) {
            this.browserTab.openUrl('https://sistemas.homologacao.ufsc.br/oauth2.0/authorize?client_id=oauth&client_secret=segredo&redirect_uri=ufsclogin://setic_oauth_example.ufsc.br&state=E3ZYKC1T6H2yP4z&response_type=code');
          } else {
            // open URL with InAppBrowser instead or SafariViewController
          }
        });
        this.browserTab.close().then(p => console.log(p));
  }

  doLogin(acc: Account) {
    this.storage.set(StorageKeys.KEEP_LOGGED_IN, this.manterConectado);
    let loading = this.loadingCtrl.create({
      content: this.translateService.instant("PLEASE_WAIT")
    });      

    let timeOutid = setTimeout(() => {
      loading.present();
    }, 300);

    this.loginProvider.login(acc).subscribe(res => {
      this.storage.set(StorageKeys.ACCOUNT, acc);
      loading.dismiss();
      clearTimeout(timeOutid);
      this.navCtrl.push('MainPage');
    }, err => {
      loading.dismiss();
      clearTimeout(timeOutid);
      console.error('ERROR', err);
      this.showView = true;
      let toast = this.toastCtrl.create({
        message: this.translateService.instant('ERROR_CONNECTING_TO_SERVER'),
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });

  }

  onSobreClick(): void {
    this.navCtrl.push('SobrePage');
  }
}
