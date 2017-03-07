/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PipeModule } from '../pipes/pipe.module';

import { PatientComponent } from './patient.component';
import { Patient } from './patient';

describe('PatientComponent', () => {
  let component: PatientComponent;
  let fixture: ComponentFixture<PatientComponent>;
  let expectedPatient: Patient;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientComponent ],
      imports: [PipeModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientComponent);
    component = fixture.componentInstance;
    expectedPatient = new Patient('lorem','543','17/08/1995','lorem@ipsum',true,'1223432','10/10/10');
    component.patient = expectedPatient;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have a patient container',() => {
    let de = fixture.debugElement.query(By.css('#patient-container'));
    expect(de).toBeTruthy();
  });
  it('should display name',() => {
    let de = fixture.debugElement.query(By.css('#name'));
    let el = de.nativeElement;
    expect(el.textContent).toMatch(new RegExp(expectedPatient.name));
  });
  it('should display hid',() => {
    let de = fixture.debugElement.query(By.css('#hid'));
    let el = de.nativeElement;
    expect(el.textContent).toMatch(new RegExp(expectedPatient.hid));
  });
  it('should display gender',() => {
    let de = fixture.debugElement.query(By.css('#gender'));
    let el = de.nativeElement;
    expect(el.textContent).toMatch(/male/);
  });
  it('should display age from dob',() => {
    let de = fixture.debugElement.query(By.css('#age'));
    let el = de.nativeElement;
    expect(el.textContent).toMatch(/21/);
  });
  it('should display email',() => {
    let de = fixture.debugElement.query(By.css('#email'));
    let el = de.nativeElement;
    expect(el.textContent).toMatch(new RegExp(expectedPatient.email));
  });
  it('should display phone',() => {
    let de = fixture.debugElement.query(By.css('#phone'));
    let el = de.nativeElement;
    expect(el.textContent).toMatch(new RegExp(expectedPatient.phone));
  });
  it('should display date joined',() => {
    let de = fixture.debugElement.query(By.css('#doj'));
    let el = de.nativeElement;
    expect(el.textContent).toMatch(/October 10, 2010/);
  });
});
