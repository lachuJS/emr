/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { PipeModule } from '../../pipes/pipe.module';

import { AppointmentComponent } from './appointment.component';
import { ConsultationComponent } from '../../consultation/consultation.component';

import { ConsultationService } from '../../consultation/consultation.service';

describe('AppointmentComponent', () => {
  let component: AppointmentComponent;
  let fixture: ComponentFixture<AppointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppointmentComponent,
        ConsultationComponent
      ],
      imports: [ PipeModule ],
      providers: [ ConsultationService ]
    })
    .overrideComponent(ConsultationComponent,{
      set: {
        template: `<div id="consultation-container"></div>`
      }
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentComponent);
    component = fixture.componentInstance;

    component.appointment = {
      count: 23,
      patient: {
        name: 'lorem',
        hid: 12,
        gender: true,
        dob: '1995-08-17'
      }
      followUp: true
    }

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('consulation becomes true on click',() => {
    let de = fixture.debugElement.query(By.css('#consult-btn'));
    let el = de.nativeElement;
    el.click();
    expect(component.consultation).toBeTruthy();
  });
  it('consultation-container opens on click consult-btn',() => {
    let de = fixture.debugElement.query(By.css('#consult-btn'));
    let el = de.nativeElement;
    el.click();
    fixture.detectChanges();
    let consultationDe = fixture.debugElement.query(By.css('#consultation-container'));
    expect(consultationDe).toBeTruthy();
  });
});
