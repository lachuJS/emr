/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { LoginFormComponent } from './login-form.component';
import { LoginFormService } from './login-form.service';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;
  let loginFormService: LoginFormService;
  let loginFormServiceAuthenticateSpy, invalidUser, validUser;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginFormComponent ],
      imports: [
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [ LoginFormService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;

    //spies
    loginFormService = fixture.debugElement.injector.get(LoginFormService);
    loginFormServiceAuthenticateSpy = spyOn(loginFormService,'authenticate')
    .and.returnValue(Promise.resolve(true));
    //init
    invalidUser = {
      username: '',
      password: 'default'
    }
    validUser = {
      username: 'username',
      password: 'default'
    }

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('login button should be disabled if loginForm is pristine',() => {
    let de = fixture.debugElement.query(By.css('#login-btn'));
    let el = de.nativeElement;
    el.click();
    expect(loginFormServiceAuthenticateSpy).not.toHaveBeenCalled();
  });
  it('login button should be disabled loginForm in invalid',() => {
    component.loginForm.setValue(invalidUser);
    let de = fixture.debugElement.query(By.css('#login-btn'));
    let el = de.nativeElement;
    el.click();
    expect(loginFormServiceAuthenticateSpy).not.toHaveBeenCalled();
  });
  it('login button should call submitForm on click',() => {
    component.loginForm.setValue(validUser);
    let de = fixture.debugElement.query(By.css('#login-btn'));
    let el = de.nativeElement;

    component.loginForm.markAsDirty(); //not pristine
    fixture.detectChanges();

    el.click();
    expect(loginFormServiceAuthenticateSpy).toHaveBeenCalledWith(validUser);
  });
});
