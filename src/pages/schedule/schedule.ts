import { StorageKeys } from './../../utils/storage-keys';
import { SubjectHelper } from './../../utils/subject-helper';
import { Component, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

import { CalendarUtils } from './../../utils/calendar';
import { Dia } from './../../models/dia';
import { Subject } from './../../models/subject';

@IonicPage()
@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html',
})
export class SchedulePage {

  private step: string;

  private day: number;

  private days: Dia[];

  private subjects: Subject[];

  @ViewChild('slides') slides: Slides;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private storage: Storage, 
    private cal: CalendarUtils) {
      
    this.day = new Date().getDay() - 1; // starts monday
    if (this.day < 0) {
      this.day = 0;
    }
    this.days = this.cal.getAllDias();

    this.storage.get(StorageKeys.SCHEDULE).then(d => {
      if (d) {
        this.subjects = d;
      }
    });
  }

  ionViewDidLoad() {
    this.step = '1';
  }

  onStepChanged(): void {
  }

  onSlideChanged(event: any): void {
    if (event._activeIndex < 5 && event._activeIndex >= 0) {
      this.day = event._activeIndex;
    }
  }

  onSwiped(event: boolean): void {
    if (event) {
      this.swipeRight();
    } else {
      this.swipeLeft();
    }
  }

  swipeRight(): void {
    if (this.day < 5) {
      this.day = this.day + 1;
    }
    this.slides.slideTo(this.day);
  }

  swipeLeft(): void {
    if (this.day > 0) {
      this.day = this.day - 1;
    }
    this.slides.slideTo(this.day);
  }

  onDayClicked(day: Dia): void {
    this.day = this.days.indexOf(day);
    this.slides.slideTo(this.day);
  }

  getSubjects(day?: string): Subject[] {
    return SubjectHelper.list(this.subjects, day);
  }

  getAllSubjects(): Subject[] {
    return SubjectHelper.list(this.subjects);
  }

  getClassDay(day: Dia): string {
    let clazz: string = "";
    if (!day.visible) {
      clazz += "day-hidden ";
    }
    if (this.days[this.day].nomeAbreviado == day.nomeAbreviado) {
      clazz += "day-selected";
    }
    return clazz;
  }

  getClass(step: string): string {
    if (this.step == step) {
      return "";
    } else {
      return "step-hidden";
    }
  }

}
