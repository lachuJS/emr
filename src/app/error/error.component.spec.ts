/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ErrorComponent } from './error.component';

import { Err } from './err';

describe('ErrorComponent', () => {
  let component: ErrorComponent;
  let fixture: ComponentFixture<ErrorComponent>;
  let expectedErr: Err;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorComponent);
    component = fixture.componentInstance;

    expectedErr = {
      code: 401,
      message: 'unauthorized',
      help: 'login again to get authenticated again.'
    }
    component.err = expectedErr;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have error code',() => {
    let de = fixture.debugElement.query(By.css('#err-code'));
    let el = de.nativeElement;
    expect(+el.textContent).toEqual(expectedErr.code)
  });
  it('should have error message',() => {
    let de = fixture.debugElement.query(By.css('#err-message'));
    let el = de.nativeElement;
    expect(el.textContent).toEqual(expectedErr.message);
  });
  it('should have error help',() => {
    let de = fixture.debugElement.query(By.css('#err-help'));
    let el = de.nativeElement;
    expect(el.textContent).toEqual(expectedErr.help);
  });
});
