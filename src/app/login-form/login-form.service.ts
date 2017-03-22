import { Injectable } from '@angular/core';

@Injectable()
export class LoginFormService {

  constructor() { }
  authenticate(user: {username: string,password: string}): boolean {}

}
