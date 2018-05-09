import { StorageKeys } from './../../utils/storage-keys';
import { Api } from './../api/api';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class EstatisticaProvider {

  constructor(public api: Api, private storage: Storage) {
  }

  getEstatisticas(): any {
    let seq = this.api.get('statictics', ['token'], [this.storage.get(StorageKeys.TOKEN)]).share();

    return seq;
  }

}
