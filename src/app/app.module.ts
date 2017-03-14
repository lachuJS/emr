import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { PipeModule } from './pipes/pipe.module';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DoctorComponent } from './doctor/doctor.component';
import { PatientComponent } from './patient/patient.component';
import { HistoryComponent } from './history/history.component';
import { HealthLogFormComponent } from './health-log-form/health-log-form.component';

import { HistoryService } from './history/history.service';
import { HealthLogFormService } from './health-log-form/health-log-form.service';
import { ConsultationComponent } from './consultation/consultation.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorComponent,
    PatientComponent,
    HistoryComponent,
    PatientComponent,
    HealthLogFormComponent,
    ConsultationComponent,
    AppointmentComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PipeModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    HistoryService,
    HealthLogFormService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
