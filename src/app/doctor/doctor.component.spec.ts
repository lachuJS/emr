/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DoctorComponent } from './doctor.component';
import { Doctor } from './doctor';

describe('DoctorComponent', () => {
  let component: DoctorComponent;
  let fixture: ComponentFixture<DoctorComponent>;
  let expectedDoctor :Doctor;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorComponent);
    component = fixture.componentInstance;
    expectedDoctor = new Doctor('lorem','ipsum','lorem@ipsum','12343324');
    component.doctor = expectedDoctor;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should be enclosed in container',() => {
    let de = fixture.debugElement.query(By.css('#doctor-container'));
    expect(de).toBeTruthy();
  });
  it('should display name',() => {
    let de = fixture.debugElement.query(By.css('#name'));
    let el = de.nativeElement;
    expect(el.textContent).toContain(expectedDoctor.name);
  });
  it('should display bio',() => {
    let de = fixture.debugElement.query(By.css('#bio'));
    let el = de.nativeElement;
    expect(el.textContent).toContain(expectedDoctor.bio);
  });
  it('should display email',() => {
    let de = fixture.debugElement.query(By.css('#email'));
    let el = de.nativeElement;
    expect(el.textContent).toContain(expectedDoctor.email);
  });
  it('should display phone',() => {
    let de = fixture.debugElement.query(By.css('#phone'));
    let el = de.nativeElement;
    expect(el.textContent).toContain(expectedDoctor.phone);
  });
});
