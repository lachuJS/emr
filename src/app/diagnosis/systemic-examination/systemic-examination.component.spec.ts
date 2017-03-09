/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SystemicExaminationComponent } from './systemic-examination.component';

import { SystemicExamination } from './systemic-examination';

describe('SystemicExaminationComponent', () => {
  let component: SystemicExaminationComponent;
  let fixture: ComponentFixture<SystemicExaminationComponent>;
  let expectedSystemicExamination: SystemicExamination;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemicExaminationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemicExaminationComponent);
    component = fixture.componentInstance;
    expectedSystemicExamination = new SystemicExamination(1,1,1,1);
    component.systemicExamination = expectedSystemicExamination;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display title systemic-examination',() => {
    let de = fixture.debugElement.query(By.css('h4'));
    let el = de.nativeElement;
    expect(el.textContent).toEqual('Systemic Examination');
  });
  it('should display CVS',() => {
    let de = fixture.debugElement.query(By.css('#cvs'));
    let el = de.nativeElement;
    expect(el.textContent).toMatch(new RegExp(expectedSystemicExamination.cvs));
  });
  it('should display RS',() => {
    let de = fixture.debugElement.query(By.css('#rs'));
    let el = de.nativeElement;
    expect(el.textContent).toMatch(new RegExp(expectedSystemicExamination.rs));
  });
  it('should display CNS',() => {
    let de = fixture.debugElement.query(By.css('#cns'));
    let el = de.nativeElement;
    expect(el.textContent).toMatch(new RegExp(expectedSystemicExamination.cns));
  });
  it('should display P/A',() => {
    let de = fixture.debugElement.query(By.css('#p-a'));
    let el = de.nativeElement;
    expect(el.textContent).toMatch(new RegExp(expectedSystemicExamination.pa));
  });
});
