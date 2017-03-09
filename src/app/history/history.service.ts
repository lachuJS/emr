import { Injectable } from '@angular/core';

import { History } from './history';

@Injectable()
export class HistoryService {

  constructor() { }
  getHistory(hid: number): Promise<History> {
    //return promise.resolve(history: History)
  }
}
