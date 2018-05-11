import { Account } from './../../models/account';
import { StorageKeys } from './../../utils/storage-keys';
import { Subject } from './../../models/subject';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';
import { ScheduleProvider } from '../../providers/horarios/schedule-provider';
import { SubjectHelper } from '../../utils/subject-helper';

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  private subjects: Subject[];

  private account: Account;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage,
    public translateService: TranslateService,
    private scheduleProvider: ScheduleProvider) {
  }

  ionViewDidLoad() {
    this.navCtrl.setRoot(this.navCtrl.getActive());

    this.storage.get(StorageKeys.SCHEDULE).then(d => {
      if (d) {
        this.subjects = d;
      }
    });

    this.storage.get(StorageKeys.ACCOUNT).then(acc => this.account = acc);

    // mudar esse ano automaticamente
    this.scheduleProvider.schedule("2018-1")
      .map(res => res.json())
      .subscribe(res => {
        if (res.success) {
          this.subjects = res.result.subjects;
          this.storage.set(StorageKeys.SCHEDULE, this.subjects);
        }
      }, err => {
        console.error('ERROR', err);
      });
  }

  onHorariosClicked(): void {
    this.navCtrl.push('GradeHorariosPage');
  }

  onGerarHorarioClicked(): void {
    this.storage.get(StorageKeys.RESULT).then(res => {
      if (res) {
        this.navCtrl.push('ResultadoPage');
      } else {
        this.navCtrl.push('DefineConstraintsPage');
      }
    });
  }

  onSairClicked(): void {
    if (this.navCtrl.length() > 1) {
      this.navCtrl.remove(0);
    }
    this.storage.remove(StorageKeys.TOKEN);
    this.navCtrl.push('LoginPage');
  }

  onEstatisticaClicked(): void {
    this.navCtrl.push('StatisticsPage');
  }

  getDisciplinas() {
    return SubjectHelper.nextTwo(this.subjects);
  }

}
