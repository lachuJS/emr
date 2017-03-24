import { Injectable } from '@angular/core';

import { History } from './history';

@Injectable()
export class HistoryService {

  constructor() { }
  getHistory(hid: number): Promise<History> {
    //return promise.resolve(history: History)
    //mock data
    return Promise.resolve({
      dm: null,
      htn: null,
      ba: null,
      thyroid: true,
      seizures: null,
      presentingIllness: 'lorem'
    });
  }
}
