/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DoctorComponent } from './doctor.component';

import { DoctorService } from './doctor.service';

import { Doctor } from './doctor';

describe('DoctorComponent', () => {
  let component: DoctorComponent;
  let fixture: ComponentFixture<DoctorComponent>;
  let doctorService: DoctorService;
  let doctorServiceGetDoctorSpy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorComponent ],
      providers: [ DoctorService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorComponent);
    component = fixture.componentInstance;

    //spy
    doctorService = fixture.debugElement.injector.get(DoctorService);
    doctorServiceGetDoctorSpy = spyOn(doctorService,'getDoctor')
    .and.returnValue(Promise.resolve({name:'doctor_name',bio:'MBBS'}));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call getDoctor service on init',() => {
    expect(doctorServiceGetDoctorSpy).toHaveBeenCalled();
  });
  it('should display doctor on getDoctor',() => {
    fixture.whenStable(() => {
      fixture.detectChanges();
      let de = fixture.debugElement.query(By.css('#doctor-container'));
      let el = de.nativeElement;
      expect(el).toBeTruthy();
    });
  });
});
