import { TranslateService } from '@ngx-translate/core';
import { Component, Input } from '@angular/core';
import { AlertController } from 'ionic-angular';

import { Subject } from '../../models/subject';
import { ModalHelper } from '../../utils/modal-helper';

@Component({
  selector: 'week-schedule',
  templateUrl: 'week-schedule.html'
})
export class WeekScheduleComponent {

  @Input() subjects: Subject[]

  morningTimes: string[] = ["07:30", "08:20", "09:10", "10:10", "11:00"];
  afternoonTimes: string[] = ["13:30", "14:20", "15:10", "16:20", "17:10"];
  nightTimes: string[] = ["18:30", "19:20", "20:20", "21:10"];

  weekDays: string[] = ['2', '3', '4', '5', '6'];

  private afternoon: string;
  private morning: string;
  private night: string;

  private monday: string;
  private tuesday: string;
  private wednesday: string;
  private thursday: string;
  private friday: string;

  constructor(private alertCtrl: AlertController, private translate: TranslateService) {
    this.afternoon = this.translate.instant('AFTERNOON');
    this.morning = this.translate.instant('MORNING');
    this.night = this.translate.instant('NIGHT');

    this.monday = this.translate.instant('MONDAY_SHORT');
    this.tuesday = this.translate.instant('TUESDAY_SHORT');
    this.wednesday = this.translate.instant('WEDNESDAY_SHORT');
    this.thursday = this.translate.instant('THURSDAY_SHORT');
    this.friday = this.translate.instant('FRIDAY_SHORT');
  }

  onSlideChanged(event: any): void {
    console.log(event);
  }

  onSwiped(event: any): void {
    console.log(event);
  }

  getInnerHTML(day: string, time: string) {
    let subject = this.getSubject(day, time);
    if (subject){
      return subject.codigo;
    }
    return "&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;"; // white space
  }

  getClass(time: string): string {
    if (this.morningTimes[0] == time || this.afternoonTimes[0] == time || this.nightTimes[0] == time) {
      return "primeira-linha";
    } 

    if (this.morningTimes[4] == time || this.afternoonTimes[4] == time || this.nightTimes[3] == time) {
      return "ultima-linha";
    }

    return '';
  }

  onDisciplinaClicked(day: string, time: string) {
    let subject = this.getSubject(day, time);
    if (subject) {
      let mh = new ModalHelper(this.translate, this.alertCtrl);
      mh.createModal(subject);
    }
  }

  getSubject(day: string, time: string): Subject {
    let horario = day + '.' +  time.replace(":", '');

    if (this.subjects && this.subjects.length > 0) {
      for (let i in this.subjects) {
        for (let j in this.subjects[i].horarios) {
          if (this.subjects[i].horarios[j].startsWith(horario)) {
            return this.subjects[i];
          }
        }
      }
    }
    return;
  }
  
}
