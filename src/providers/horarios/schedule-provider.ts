import { Injectable } from '@angular/core';
import { Api } from '../providers';
import { StorageKeys } from './../../utils/storage-keys';
import { Storage } from '@ionic/storage';

@Injectable()
export class ScheduleProvider {

  constructor(public api: Api, private storage: Storage) {
  }

  schedule(semester: string): any {
    let seq = this.api.get('schedule/' + semester, ['token'], [this.storage.get(StorageKeys.TOKEN)]).share();

    return seq;
  }

}
