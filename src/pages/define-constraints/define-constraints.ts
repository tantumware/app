import { Constraints } from './../../models/constraints';
import { StorageKeys } from './../../utils/storage-keys';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';

import { CapsuleComponent } from '../../components/capsule/capsule';
import { Subject } from '../../models/subject';
import { FormatterUtils } from './../../utils/formatter';
import { SubjectsProvider } from './../../providers/subjects/subjects';

@IonicPage()
@Component({
  selector: 'page-define-constraints',
  templateUrl: 'define-constraints.html',
})
export class DefineConstraintsPage {

  placeholder = this.translate.instant('NAME_OR_CODE');

  step: string = '1';

  private button: string = this.step == "3" ? this.translate.instant('GENERATE_TIME_GRID') : this.translate.instant('NEXT_STEP');

  private periodsSelected: string[] = [];

  private subjectsWanted: Subject[] = [];

  private subjectsExcluded: Subject[] = [];

  @ViewChild(CapsuleComponent) capsuleComponent;

  busca: string;

  private subjects;

  credits = {
    lower: 20,
    upper: 30
  }

  equivalent = true;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public alertCtrl: AlertController, 
    public translate: TranslateService, 
    private subjectsProvider: SubjectsProvider, 
    private storage: Storage) {
  }

  ionViewDidLoad() {
    this.storage.get(StorageKeys.RESULT).then((val) => {
      if (val) {
        this.navCtrl.push('ResultPage');
      }
    });
    
    this.storage.get(StorageKeys.ALL_SUBJECTS).then((val) => {
      if (val) {
        this.subjects = val;
      }
    });

    this.subjectsProvider.allSubjects()
      .map(res => res.json())
      .subscribe(res => {
        if (res.success) {
          this.subjects = res.result.subjects;
          this.storage.set(StorageKeys.ALL_SUBJECTS, this.subjects);
        }
      }, err => {
        console.error('ERROR', err);
      });
  }

  ionViewWillEnter(){
   this.step == '1';
  }

  onPeriodSelected(event: string[]) {
    this.periodsSelected = event;
  }

  searchSubject(): void {
    this.doCheckbox(this.busca);
  }

  getClass(step: string): string {
    if (this.step == step) {
      return "step";
    } else {
      return "step step-hidden";
    }
  }

  onStepChanged(event: any): void {
    this.button = this.step == "3" ? this.translate.instant('GENERATE_TIME_GRID') : this.translate.instant('NEXT_STEP');
  }

  btnNextStepClicked(): void {
    if (this.step == '3') {
      let constraints: Constraints = this.createConstraints();
      this.storage.set(StorageKeys.CONSTRAINT, constraints);
      this.navCtrl.push('ResultPage');
    } else {
      this.step = (Number(this.step) + 1).toString();
    }
  }

  createConstraints(): Constraints {
    let periods: number[] = [];
    
    if (this.periodsSelected.indexOf(this.translate.instant('MORNING')) > -1) {
      periods.push(0);
    }
    if (this.periodsSelected.indexOf(this.translate.instant('AFTERNOON')) > -1) {
      periods.push(1);
    }
    if (this.periodsSelected.indexOf(this.translate.instant('NIGHT')) > -1) {
      periods.push(2);
    }
    
    let subjectsWantedCode: string[] = [];
    this.subjectsWanted.forEach(s => subjectsWantedCode.push(s.codigo));

    let subjectsNotWantedCode: string[] = [];
    this.subjectsExcluded.forEach(s => subjectsNotWantedCode.push(s.codigo));

    return new Constraints(periods, this.credits.lower, this.credits.upper, this.equivalent, subjectsWantedCode, subjectsNotWantedCode);
  }

  getPeriods(): string[] {
    let periods: string[] = [];

    periods.push(this.translate.instant('MORNING'));
    periods.push(this.translate.instant('AFTERNOON'));
    periods.push(this.translate.instant('NIGHT'));

    return periods;
  }

  getSubjectsWanted() {
    return this.subjectsWanted;
  }

  getSubjectsExcluded() {
    return this.subjectsExcluded;
  }

  doCheckbox(search: string) {
    let alert = this.alertCtrl.create();
    alert.setTitle(this.translate.instant('SELECT_SUBJECT'));

    let subjects: Subject[] = this.getPossibleSubjects();
    subjects.forEach(s => {
      alert.addInput({
        type: 'checkbox',
        label: s.codigo + " - " + s.nome,
        value: s.codigo
      })
    })

    alert.addButton(this.translate.instant('BACK_BUTTON_TEXT'));
    alert.addButton({
      text: 'Ok',
      handler: (data: any) => {
        this.busca = "";
        if (data) {
          data.forEach(element => {
            console.log(element);
            if (this.step == '2') {
              this.subjectsWanted.push(this.getSubjectByCode(element));
            } else if (this.step == '3') {
              this.subjectsExcluded.push(this.getSubjectByCode(element));
            }
          });
        }

      }
    });

    alert.present();
  }

  getSubjectByCode(code: string): Subject {
    for (let i in this.subjects) {
      let subject: Subject = this.subjects[i];
      if (subject.codigo == code) {
        return subject;
      }
    }

    return undefined;
  }

  getPossibleSubjects(): Subject[] {
    let subjects: Subject[] = [];

    for (let i in this.subjects) {
      let subject: Subject = this.subjects[i];
      let nome: string = subject.nome;
      let codigo: string = subject.codigo;

      if (this.contains(nome, this.busca) || this.contains(codigo, this.busca)) {
        subjects.push(subject);
      }
    }

    return subjects;
  }

  contains(a: string, b: string): boolean {
    return FormatterUtils.replaceSpecialChars(a).includes(FormatterUtils.replaceSpecialChars(b));
  }

}
