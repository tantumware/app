import { TranslateService } from "@ngx-translate/core";
import { AlertController } from "ionic-angular";
import { Subject } from "../models/subject";

export class ModalHelper {

    constructor(public translateService: TranslateService, public alertCtrl: AlertController){
    }

    public createModalError(subjects: Subject[]) {
        let alert = this.alertCtrl.create({
            title: this.translateService.instant('SUBJECTS_NOT_SELECTED'),
            subTitle: this.createContentError(subjects),
            buttons: [this.translateService.instant('BACK_BUTTON_TEXT')]
          });
          alert.present();
    }
    
    public createModal(subject: Subject) {
        let alert = this.alertCtrl.create({
            title: this.translateService.instant('SUBJECT_DETAILS'),
            subTitle: this.createContent(subject),
            buttons: [this.translateService.instant('BACK_BUTTON_TEXT')]
          });
          alert.present();
    }

    private createContentError(subjects: Subject[]): string {
        let list: string[] = []
        subjects.forEach(s => list.push(s.nome));
        
        return list.join(", ");
    }

    private createContent(subject: Subject): string {
        return this.p(this.translateService.instant('SUBJECT'))
                + this.p(subject.nome)
                + this.p(this.translateService.instant('PROFESSOR'))
                + this.p(subject.professor)
                + this.p(this.translateService.instant('SCHEDULES'))
                + this.p(subject.horarios[0])
                ;
    }

    private p(value: string): string {
        return '<p>'+value+'</p>'
    }
}