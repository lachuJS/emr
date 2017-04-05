/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DoctorComponent } from './doctor.component';

import { Doctor } from './doctor';

xdescribe('DoctorComponent', () => {
  let component: DoctorComponent;
  let fixture: ComponentFixture<DoctorComponent>;
  let expectedDoctor: Doctor;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorComponent);
    component = fixture.componentInstance;

    //doctor
    expectedDoctor = {
      name: 'doctor name',
      info: 'MBBS'
    }
    component.doctor = expectedDoctor;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have doctor name',() => {
    let de = fixture.debugElement.query(By.css('h5'));
    let el = de.nativeElement;
    expect(el.textContent).toEqual(expectedDoctor.name);
  });
  it('should have doctor info',() => {
    let de = fixture.debugElement.query(By.css('p'));
    let el = de.nativeElement;
    expect(el.textContent).toEqual(expectedDoctor.info);
  });

});