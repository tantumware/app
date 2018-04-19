import { Subject } from "../models/subject";
import { TranslateService } from "@ngx-translate/core";
import { AlertController } from "ionic-angular";

export class ModalHelper {

    constructor(public translateService: TranslateService, public alertCtrl: AlertController){
    }
    
    public createModal(subject: Subject) {
        let alert = this.alertCtrl.create({
            title: this.translateService.instant('SUBJECT_DETAILS'),
            subTitle: this.createContent(subject),
            buttons: [this.translateService.instant('BACK_BUTTON_TEXT')]
          });
          alert.present();
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