/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { PipeModule } from '../../pipes/pipe.module';
//component
import { InfoComponent } from './info.component';
//service
import { PatientService } from '../patient.service';
//interface
import { Info } from './info';

describe('InfoComponent', () => {
  let component: InfoComponent;
  let fixture: ComponentFixture<InfoComponent>;
  let expectedInfo = { name : 'lachu', hid: 1, dob: '1995-08-17', gender: true, location: 'erode' }
  let patientServiceStub = {
    patientId : 1,
    getInfo : () => {
      return Promise.resolve(expectedInfo);
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoComponent ],
      imports: [ PipeModule ],
      providers: [ { provide: PatientService, useValue: patientServiceStub } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should not have patient-info before service',() => {
    let de = fixture.debugElement.query(By.css('#patient-info'));
    expect(de).toBeFalsy();
  });
  it('should display patient-info after service',async(() => {
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      let de = fixture.debugElement.query(By.css('#patient-info'));
      expect(de).toBeTruthy();
    });
  }));

});
