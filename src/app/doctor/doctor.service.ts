import { Injectable } from '@angular/core';

import { Doctor } from './doctor';

@Injectable()
export class DoctorService {

  constructor() { }
  getDoctor(): Promise<Doctor> {
    return Promise.resolve({
      name:'doctor_name',
      bio:'MBBS,MD'
    })
  }
}
