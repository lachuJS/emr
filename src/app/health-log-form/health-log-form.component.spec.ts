/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HealthLogFormComponent } from './health-log-form.component';
import { HealthLogFormService } from "./health-log-form.service";

import { HealthLogForm } from './health-log-form.data-model';

describe('HealthLogFormComponent', () => {
  let component: HealthLogFormComponent;
  let fixture: ComponentFixture<HealthLogFormComponent>;
  let emptyHealthLogForm: HealthLogForm;
  let expectedHealthLogForm: HealthLogForm;
  let expectedValidForm: HealthLogForm;
  let healthLogFormService: HealthLogFormService;
  let healthLogFormServicePostSpy;
  let healthLogFormServiceGetSpy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthLogFormComponent ],
      imports: [
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [ HealthLogFormService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthLogFormComponent);
    component = fixture.componentInstance;

    /*
      healthLogForm initialisations
    */
    emptyHealthLogForm = {
      chiefComplaints: [''],
      examination: 'concious',
      //form builder replaces undefined with null values
      vitals: {
        pr:null,
        bp:null,
        rr:null,
        temp:null
      },
      systemicExamination: {
        cvs:null,
        rs:null,
        cns:null,
        pa:null
      },
      le:'',
      finalDiagnosis:'',
      nextFollowUp: '',
      prescription: ['']
    }
    expectedHealthLogForm = {
      chiefComplaints: ['lorem'],
      examination: 'concious',
      //form builder replaces undefined with null values
      vitals: {
        pr:1,
        bp:1,
        rr:1,
        temp:1
      },
      systemicExamination: {
        cvs:1,
        rs:1,
        cns:1,
        pa:1
      },
      le:'lazy brown fox jumped',
      finalDiagnosis:'lrem ipsum',
      nextFollowUp: '1995-08-17',
      prescription: ['lorem 25mg']
    }
    expectedValidForm = {
      chiefComplaints: ['lorem','ipsum'],
      examination: 'oriented',
      finalDiagnosis:'lorem',
      prescription:['ipsum 25mg']
    }
    //====================
    /*
      spies
    */
    healthLogFormService = fixture.debugElement.injector.get(HealthLogFormService);
    healthLogFormServicePostSpy = spyOn(healthLogFormService,'postHealthLog')
    .and.returnValue(Promise.resolve(true));

    healthLogFormServiceGetSpy = spyOn(healthLogFormService,'getHealthLog')
    .and.returnValue(Promise.resolve(expectedHealthLogForm));

    //=====================

  });

  it('should create', () => {
    component.healthLogId = null;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
  it('should display empty form if healthLogId is null',() => {
    component.healthLogId = null;
    fixture.detectChanges();
    expect(component.healthLogForm.value).toEqual(emptyHealthLogForm);
  });
  it('prepareForm should capture form model( deep copy )', () => {
    component.healthLogId = null;
    fixture.detectChanges();
    component.healthLogForm.setValue(expectedHealthLogForm);
    fixture.detectChanges();
    const capturedFormModel = component.prepareForm();
    component.healthLogForm.patchValue({examination:'oriented'});
    expect(component.healthLogForm.value.examination).not.toEqual(capturedFormModel.examination);
  });
  it('submit should be disabled if healthLogForm is pristine',() => {
    component.healthLogId = null;
    fixture.detectChanges();
    let de = fixture.debugElement.query(By.css('#submit-btn'));
    let el = de.nativeElement;
    el.click();
    expect(healthLogFormServicePostSpy).not.toHaveBeenCalled();
  });
  it('postHealthLog should have been called with param',() => {
    component.healthLogId = null;
    fixture.detectChanges();
    component.healthLogForm.setValue(expectedHealthLogForm);
    component.healthLogForm.markAsDirty(); //enable submit button
    fixture.detectChanges();
    let de = fixture.debugElement.query(By.css('#submit-btn'));
    let el = de.nativeElement;
    el.click();
    expect(healthLogFormServicePostSpy).toHaveBeenCalledWith(expectedHealthLogForm);
  });
  it('should go back to pristine after save',async(() => {
    component.healthLogId = null;
    fixture.detectChanges();
    component.healthLogForm.setValue(expectedHealthLogForm);
    component.healthLogForm.markAsDirty(); //enable submit button
    fixture.detectChanges();
    let de = fixture.debugElement.query(By.css('#submit-btn'));
    let el = de.nativeElement;
    el.click();
    fixture.whenStable()
    .then(() => {
      fixture.detectChanges();
      expect(component.healthLogForm.pristine).toBeTruthy();
    })
  }));
  it('should add new control to FormArray chiefComplaints on add-btn click',() => {
    component.healthLogId = null;
    fixture.detectChanges();
    const lengthBefore = component.healthLogForm.value.chiefComplaints.length;
    let de = fixture.debugElement.query(By.css('#chief-complaints > .add-btn'));
    let el = de.nativeElement;
    el.click();
    fixture.detectChanges();
    expect(component.healthLogForm.value.chiefComplaints.length).toEqual(lengthBefore+1);
  });
  it('should add new control to FormArray prescription on add-btn click',() => {
    component.healthLogId = null;
    fixture.detectChanges();
    const lengthBefore = component.healthLogForm.value.prescription.length;
    let de = fixture.debugElement.query(By.css('#prescription > .add-btn'));
    let el = de.nativeElement;
    el.click();
    fixture.detectChanges();
    expect(component.healthLogForm.value.prescription.length).toEqual(lengthBefore+1);
  });
  //validators
  it('check form validity',() => {
    component.healthLogId = null;
    fixture.detectChanges();
    component.healthLogForm.patchValue(expectedValidForm);
    expect(component.healthLogForm.status).toEqual('VALID');
  });
  it('check form INVALID',() => {
    component.healthLogId = null;
    fixture.detectChanges();
    component.healthLogForm.patchValue({chiefComplaints:['lorem']});
    expect(component.healthLogForm.status).toEqual('INVALID');
  });
});
