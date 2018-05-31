import { ModalHelper } from './../../utils/modal-helper';
import { Constraints } from './../../models/constraints';
import { StorageKeys } from './../../utils/storage-keys';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { SubjectsProvider } from '../../providers/subjects/subjects';
import { Subject } from '../../models/subject';
import { TranslateService } from '@ngx-translate/core';
import { Navbar } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {

  private constraints: Constraints;

  private subjects: Subject[];

  @ViewChild(Navbar) navBar: Navbar;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage,
    private subjectsProvider: SubjectsProvider,
    public translateService: TranslateService,
    public alertCtrl: AlertController) {   
  }

  ionViewDidLoad() {
    this.navBar.backButtonClick = (e: UIEvent) => {
      this.navCtrl.popToRoot();
    }

    this.storage.get(StorageKeys.RESULT).then(res => {
      if (res) {
        this.subjects = res[Object.keys(res)[0]].subjects;
      }
    });

    this.storage.get(StorageKeys.CONSTRAINT).then((val) => {
      if (val) {
        this.constraints = val;
        this.subjectsProvider.calculateSemester(this.constraints)
          .map(res => res.json())
          .subscribe(res => {
            if (res.success) {
              let subjectsError: Subject[] = res.result.subjectsWantedError;
              if (subjectsError.length > 0) {
                let modal = new ModalHelper(this.translateService, this.alertCtrl);
                modal.createModalError(subjectsError);
              }
              this.storage.set(StorageKeys.RESULT, res.result.nextSemesters);
              this.storage.remove(StorageKeys.CONSTRAINT);
              this.subjects = res.result.nextSemesters[Object.keys(res.result.nextSemesters)[0]].subjects;
            }
          }, err => {
            console.error('ERROR', err);
          });
      }
    });

    // se demorar criar um loading
  }

  getSubjects() {
    return this.subjects;
  }

  onRedefineConstrainsClicked() {
    this.storage.remove(StorageKeys.RESULT);
    let last = this.navCtrl.getPrevious();
    if (last && last.id == "DefineConstraintsPage") {
      this.navCtrl.pop();
    } else {
      this.navCtrl.popToRoot();
      this.navCtrl.push('DefineConstraintsPage');
    }
  }

}
