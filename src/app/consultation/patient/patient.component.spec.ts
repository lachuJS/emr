/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { PipeModule } from '../../pipes/pipe.module';

import { PatientComponent } from './patient.component';

import { Patient } from './patient';

xdescribe('PatientComponent', () => {
  let component: PatientComponent;
  let fixture: ComponentFixture<PatientComponent>;
  let expectedPatient: Patient;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientComponent ],
      imports: [ PipeModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientComponent);
    component = fixture.componentInstance;
    expectedPatient = new Patient('lorem',12,true,'1995-08-17','erode',121323);
    component.patient = expectedPatient;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display patient name',() => {
    let de = fixture.debugElement.query(By.css('#patient-name'));
    let el = de.nativeElement;
    expect(el.textContent).toMatch(expectedPatient.name);
  });
  it('should display patient age',() => {
    let de = fixture.debugElement.query(By.css('#patient-age'));
    let el = de.nativeElement;
    expect(el.textContent).toMatch('21');
  });
  it('should display patient sex',() => {
    let de = fixture.debugElement.query(By.css('#patient-sex'));
    let el =  de.nativeElement;
    expect(el.textContent).toMatch('male')
  });
  it('should display patient location',() => {
    let de = fixture.debugElement.query(By.css('#patient-location'));
    let el = de.nativeElement;
    expect(el.textContent).toMatch(expectedPatient.location);
  });
  it('should display patient phone',() => {
    let de = fixture.debugElement.query(By.css('#patient-phone'));
    let el = de.nativeElement;
    expect(el.textContent).toMatch(expectedPatient.phone.toString());
  });
  it('should not display patient email',() => {
    let de = fixture.debugElement.query(By.css('#patient-email'));
    expect(de).toBeFalsy();
  });
});
