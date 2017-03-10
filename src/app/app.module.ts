import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PipeModule } from './pipes/pipe.module';

import { AppComponent } from './app.component';
import { DoctorComponent } from './doctor/doctor.component';
import { PatientComponent } from './patient/patient.component';
import { DiagnosisComponent } from './diagnosis/diagnosis.component';
import { VitalsComponent } from './diagnosis/vitals/vitals.component';
import { SystemicExaminationComponent } from './diagnosis/systemic-examination/systemic-examination.component';
import { DiagnosedComponent } from './diagnosis/diagnosed/diagnosed.component';
import { PrescriptionComponent } from './prescription/prescription.component';
import { HistoryComponent } from './history/history.component';
import { HealthLogComponent } from './health-log/health-log.component';

import { HistoryService } from './history/history.service';

@NgModule({
  declarations: [
    AppComponent,
    DoctorComponent,
    PatientComponent,
    DiagnosisComponent,
    VitalsComponent,
    SystemicExaminationComponent,
    DiagnosedComponent,
    PrescriptionComponent,
    HistoryComponent,
    HealthLogComponent,
    PatientComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PipeModule
  ],
  providers: [
    HistoryService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
