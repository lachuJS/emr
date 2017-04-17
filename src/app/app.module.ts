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
//patients
import { PatientsAppointmentComponent } from './patients/patients-appointment/patients-appointment.component';
import { PatientsPinnedComponent } from './patients/patients-pinned/patients-pinned.component';
import { PatientsSubNavComponent } from './patients/patients-sub-nav/patients-sub-nav.component';
//patient
import { PatientInfoComponent } from './patient/patient-info/patient-info.component';
import { PatientTrackComponent } from './patient/patient-track/patient-track.component';
import { PatientHealthLogsComponent } from './patient/patient-health-logs/patient-health-logs.component';
import { PatientSubNavComponent } from './patient/patient-sub-nav/patient-sub-nav.component';
import { PatientDiagnosisFormComponent } from './patient/patient-diagnosis-form/patient-diagnosis-form.component';
import { PatientPrescriptionFormComponent } from './patient/patient-prescription-form/patient-prescription-form.component';
import { PatientInvestigationsFormComponent } from './patient/patient-investigations-form/patient-investigations-form.component';
import { PatientHealthTimelineComponent } from './patient/patient-health-timeline/patient-health-timeline.component';
//services
//patients
import { PatientsService } from './patients/patients.service';
//patient
import { PatientService } from './patient/patient.service';
import { DiagnosisComponent } from './patient/patient-health-timeline/diagnosis/diagnosis.component';
import { PrescriptionComponent } from './patient/patient-health-timeline/prescription/prescription.component';



@NgModule({
  declarations: [
    AppComponent,
    PatientsAppointmentComponent,
    PatientInfoComponent,
    PatientTrackComponent,
    PatientHealthLogsComponent,
    PatientSubNavComponent,
    PatientsPinnedComponent,
    PatientDiagnosisFormComponent,
    PatientPrescriptionFormComponent,
    PatientInvestigationsFormComponent,
    PatientsSubNavComponent,
    PatientHealthTimelineComponent,
    DiagnosisComponent,
    PrescriptionComponent
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
    PatientsService,
    PatientService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
