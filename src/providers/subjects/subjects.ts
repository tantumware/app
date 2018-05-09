import { Constraints } from './../../models/constraints';
import { Injectable } from '@angular/core';
import { Api } from '../providers';
import 'rxjs/add/operator/map';
import { StorageKeys } from './../../utils/storage-keys';
import { Storage } from '@ionic/storage';

@Injectable()
export class SubjectsProvider {

  constructor(public api: Api, private storage: Storage) {
  }

  allSubjects(): any {
    let seq = this.api.get('subjects', ['token'], [this.storage.get(StorageKeys.TOKEN)]).share();
    return seq;
  }

  calculateSemester(constraints: Constraints): any {
    let seq = this.api.post('calculate-semester', constraints, ['token'], [this.storage.get(StorageKeys.TOKEN)]).share();    
    return seq;
  }

}
