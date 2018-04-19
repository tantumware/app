import { Constraints } from './../../models/constraints';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Api } from '../providers';
import 'rxjs/add/operator/map';

@Injectable()
export class SubjectsProvider {

  constructor(public http: Http, public api: Api) {
  }

  allSubjects(): any {
    let seq = this.api.get('subjects').share();

    return seq;
  }

  calculateSemester(constraints: Constraints): any {
    let body = new FormData();
    let seq = this.api.post('calculate-semester', constraints).share();
    
    return seq;
  }

}
