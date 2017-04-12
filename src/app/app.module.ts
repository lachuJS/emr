import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { PipeModule } from './pipes/pipe.module';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; //ng-bootstrap

//routing
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routing';

//components
import { AppComponent } from './app.component';
//appointments
import { AppointmentsComponent } from './appointments/appointments.component';
//patients
import { PatientsComponent } from './patients/patients.component';
//patient
import { PatientInfoComponent } from './patient/patient-info/patient-info.component';
import { PatientTrackComponent } from './patient/patient-track/patient-track.component';
import { PatientHealthLogFormComponent } from './patient/patient-health-log-form/patient-health-log-form.component';
import { PatientHealthLogsComponent } from './patient/patient-health-logs/patient-health-logs.component';
import { PatientSubNavComponent } from './patient/patient-sub-nav/patient-sub-nav.component';
import { PatientTrackActionComponent } from './patient/patient-track-action/patient-track-action.component';
import { PatientHealthLogFormActionComponent } from './patient/patient-health-log-form-action/patient-health-log-form-action.component';
import { PatientDiagnosisFormComponent } from './patient/patient-diagnosis-form/patient-diagnosis-form.component';

//services
//appointments
import { AppointmentsService } from './appointments/appointments.service';
//patients
import { PatientsService } from './patients/patients.service';
//patient
import { PatientService } from './patient/patient.service';


@NgModule({
  declarations: [
    AppComponent,
    AppointmentsComponent,
    PatientInfoComponent,
    PatientTrackComponent,
    PatientHealthLogFormComponent,
    PatientHealthLogsComponent,
    PatientSubNavComponent,
    PatientsComponent,
    PatientTrackActionComponent,
    PatientHealthLogFormActionComponent,
    PatientDiagnosisFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PipeModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes), //routes
    NgbModule.forRoot() //ng-bootstrap module
  ],
  providers: [
    AppointmentsService,
    PatientsService,
    PatientService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
