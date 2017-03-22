import { Injectable } from '@angular/core';

@Injectable()
export class LoginFormService {

  constructor() { }
  authenticate(user: {username: string,password: string}): Promise<boolean> {
    //return true if 200 ok
    return Promise.resolve(true);
  }

}
