/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PromptComponent } from './prompt.component';

describe('PromptComponent', () => {
  let component: PromptComponent;
  let fixture: ComponentFixture<PromptComponent>;
  let expectedMessage: { title: string, body: string };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromptComponent);
    component = fixture.componentInstance;

    expectedMessage = {
      title: 'you didnt log anything',
      body: 'are you sure?'
    }
    component.message = expectedMessage;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have title in modal header',() => {
    let de = fixture.debugElement.query(By.css('.modal-title'));
    let el = de.nativeElement;
    expect(el.textContent).toMatch(expectedMessage.title);
  });
  it('should have body in modal body',() => {
    let de = fixture.debugElement.query(By.css('.modal-body'));
    let el = de.nativeElement;
    expect(el.textContent).toMatch(expectedMessage.body);
  });
  it('should have yes btn in modal footer',() => {
    let de = fixture.debugElement.query(By.css('.modal-footer > #yes'));
    expect(de).toBeTruthy();
  });
  it('should have no btn in modal footer',() => {
    let de = fixture.debugElement.query(By.css('.modal-footer > #no'));
    expect(de).toBeTruthy();
  });
  //yes btn test
  it('should emit response as true on click yes btn',() => {
    //subscribe to event
    let expectedResponse: boolean;
    component.response.subscribe((res: boolean) => {
      expectedResponse = res;
    });
    let de = fixture.debugElement.query(By.css('#yes'));
    let el = de.nativeElement;
    el.click();
    expect(expectedResponse).toEqual(true);
  });
  //no btn test
  it('should emit response as no on click no btn',() => {
    let expectedResponse: boolean;
    component.response.subscribe((res: boolean) => {
      expectedResponse = res;
    });
    let de = fixture.debugElement.query(By.css('#no'));
    let el = de.nativeElement;
    el.click();
    expect(expectedResponse).toEqual(false);
  });
});
