/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PipeModule } from '../pipes/pipe.module';

import { DiagnosisComponent } from './diagnosis.component';
import { VitalsComponent } from './vitals/vitals.component';
import { SystemicExaminationComponent } from './systemic-examination/systemic-examination.component';
import { DiagnosedComponent } from './diagnosed/diagnosed.component';

import { Vital } from './vitals/vital';
import { SystemicExamination } from './systemic-examination/systemic-examination';
import { Diagnosed } from './diagnosed/diagnosed';
import { Diagnosis } from './diagnosis';

describe('DiagnosisComponent', () => {
  let component: DiagnosisComponent;
  let fixture: ComponentFixture<DiagnosisComponent>;
  let expectedDiagnosis: Diagnosis;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DiagnosisComponent,
        VitalsComponent,
        SystemicExaminationComponent,
        DiagnosedComponent
      ],
      imports: [PipeModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosisComponent);
    component = fixture.componentInstance;
    expectedDiagnosis = new Diagnosis(
      'lorem and ipsum',
      true,
      new Vital(1,1,1,1),
      new SystemicExamination(1,1,1,1),
      'lorem ipsum',
      new Diagnosed('lorem ipsum'),
      '1/1/2018'
    )
    component.diagnosis = expectedDiagnosis;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display title diagnosis',() => {
    let de = fixture.debugElement.query(By.css('h4'));
    let el = de.nativeElement;
    expect(el.textContent).toEqual('Diagnosis');
  });
  it('should display chief complaints',() => {
    let de = fixture.debugElement.query(By.css('#chief-complaints'));
    let el = de.nativeElement;
    expect(el.textContent).toMatch(new RegExp(expectedDiagnosis.chiefComplaints));
  });
  it('should display duration',() => {
    let de = fixture.debugElement.query(By.css('#duration'));
    let el = de.nativeElement;
    expect(el.textContent).toMatch(new RegExp(expectedDiagnosis.duration));
  });
  it('should display examination',() => {
    let de = fixture.debugElement.query(By.css('#examination'));
    let el = de.nativeElement;
    expect(el.textContent).toMatch(new RegExp(expectedDiagnosis.examination));
  });
  it('should display vitals component',() => {
    let de = fixture.debugElement.query(By.css('#vital'));
    expect(de).toBeTruthy();
  });
  it('should display systemic examination component',() => {
    let de = fixture.debugElement.query(By.css('#systemic-examination'));
    expect(de).toBeTruthy();
  });
  it('should display L/E',() => {
    let de = fixture.debugElement.query(By.css('#l-e'));
    let el = de.nativeElement;
    expect(el.textContent).toMatch(new RegExp(expectedDiagnosis.le));
  });
  it('should display diagnosis component',() => {
    let de = fixture.debugElement.query(By.css('#diagnosed'));
    expect(de).toBeTruthy();
  });
  it('should display followup-date',() => {
    let de = fixture.debugElement.query(By.css('#followup-date'));
    let el = de.nativeElement;
    expect(el.textContent).toMatch(new RegExp('January 1, 2018')));
  });
});
