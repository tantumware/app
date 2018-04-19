import { TranslateService } from '@ngx-translate/core';
import { ModalHelper } from './../../utils/modal-helper';
import { AlertController, Platform } from 'ionic-angular';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Subject } from '../../models/subject';

@Component({
  selector: 'subject-list',
  templateUrl: 'subject-list.html'
})
export class SubjectListComponent {

  @Input() subjects: Subject[];

  @Output() onSwiped = new EventEmitter<boolean>();

  constructor(private alertCtrl: AlertController, public plt: Platform, public translateService: TranslateService) {
  }

  itemSwiped(s: any) {
    if (s.direction == 2) { // 4 left
      this.onSwiped.emit(true);
    } else {
      this.onSwiped.emit(false);
    }
  }

  getDisciplinas(): Subject[] {
    return this.subjects;
  }

  onDisciplinaClicked(subject: Subject): void {
    let mh = new ModalHelper(this.translateService, this.alertCtrl);
    mh.createModal(subject);
  }

  showLista(): boolean {
    if (this.subjects) {
      return this.subjects.length > 0;
    } else {
      return false;
    }
  }

  getLocalClass(): string {
    let clazz: string = "disciplia-local"
    if (this.plt.is('windows')) {
      clazz += " disciplia-local-wp"
    }
    return clazz;
  }

  getNomeClass(): string {
    let clazz: string = "disciplia-nome"
    if (this.plt.is('windows')) {
      clazz += " disciplia-nome-wp"
    }
    return clazz;
  }

}
