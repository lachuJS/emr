import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { PipeModule } from './pipes/pipe.module';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DoctorComponent } from './dashboard/doctor/doctor.component';
import { PatientComponent } from './consultation/patient/patient.component';
import { HistoryComponent } from './consultation/history/history.component';
import { HealthLogFormComponent } from './consultation/health-log-form/health-log-form.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { AppointmentComponent } from './dashboard/appointment/appointment.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { HealthLogComponent } from './consultation/health-log/health-log.component';

import { DashboardService } from './dashboard/dashboard.service';
import { ConsultationService } from './consultation/consultation.service';
import { LoginFormService } from './login-form/login-form.service';
import { ErrorComponent } from './error/error.component';
import { PromptComponent } from './prompt/prompt.component';

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
    DashboardComponent,
    LoginFormComponent,
    HealthLogComponent,
    ErrorComponent,
    PromptComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PipeModule,
    ReactiveFormsModule,
    FormsModule
    //ng2-bootstrap modules
  ],
  providers: [
    LoginFormService,
    DashboardService,
    ConsultationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
