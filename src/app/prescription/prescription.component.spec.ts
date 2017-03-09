/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PrescriptionComponent } from './prescription.component';

import { Prescription } from './prescription';

describe('PrescriptionComponent', () => {
  let component: PrescriptionComponent;
  let fixture: ComponentFixture<PrescriptionComponent>;
  let expectedPrescription: Prescription;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescriptionComponent);
    component = fixture.componentInstance;
    expectedPrescription = new Prescription('lorem ipsum 25mg' );
    component.prescription = expectedPrescription;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display title prescription',() => {
    let de = fixture.debugElement.query(By.css('h4'));
    let el = de.nativeElement;
    expect(el.textContent).toEqual('Prescription');
  });
  it('should display prescription data',() => {
    let de = fixture.debugElement.query(By.css('#prescription-data'));
    let el = de.nativeElement;
    expect(el.textContent).toEqual(expectedPrescription.data);
  });
});
