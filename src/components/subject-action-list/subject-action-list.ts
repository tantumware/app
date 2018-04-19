import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Platform } from 'ionic-angular';

import { Subject } from '../../models/subject';

@Component({
  selector: 'subject-action-list',
  templateUrl: 'subject-action-list.html'
})
export class SubjectActionListComponent {

  @Input() subjects: Subject[];

  @Input() action: boolean = true;

  @Output() onRemoved = new EventEmitter<Subject>();

  constructor(public plt: Platform) {
  }

  remove(disciplina): void {
    let index = this.subjects.indexOf(disciplina);
    this.subjects.splice(index, 1);
    this.onRemoved.emit(disciplina);
  }
  
  getValue(disciplia: Subject): string {
    return disciplia.codigo + " - " + disciplia.nome;
  }

  getClass(): string {
    let name = "name-subject";
    if (!this.action) {
      name += " name-subject-without-action"
    }
    return name; 
  }

}
