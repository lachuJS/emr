import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LoginFormService } from './login-form.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private loginFormService: LoginFormService
  ) {
    this.createForm();
  }
  createForm() {
    this.loginForm = this.fb.group({
      username: ['',Validators.required],
      password: ['',Validators.required]
    });
  }
  prepareForm() {
    //capture form model
    const formModel = this.loginForm.value;
    return {
      username: formModel.username as string,
      password: formModel.password as string
    }
  }
  submitForm() {
    const user = this.prepareForm();
    this.loginFormService.authenticate(user)
    .then((status: boolean) => {
      //code...
      //redirect to /home
    })
    .catch((err) => {
      //code...
      //show error component
    });
  }
  ngOnInit() {}

}
