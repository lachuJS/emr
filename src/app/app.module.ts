import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { PipeModule } from './pipes/pipe.module';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; //ng-bootstrap

import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routing';

import { AppComponent } from './app.component';
import { DoctorComponent } from './dashboard/doctor/doctor.component';
import { PatientComponent } from './consultation/patient/patient.component';
import { HealthLogFormComponent } from './consultation/health-log-form/health-log-form.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { HealthLogComponent } from './consultation/health-log/health-log.component';

import { DashboardService } from './dashboard/dashboard.service';
import { ConsultationService } from './consultation/consultation.service';
import { LoginFormService } from './login-form/login-form.service';

@NgModule({
  declarations: [
    AppComponent,
    DoctorComponent,
    PatientComponent,
    PatientComponent,
    HealthLogFormComponent,
    ConsultationComponent,
    DashboardComponent,
    LoginFormComponent,
    HealthLogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PipeModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot()
  ],
  providers: [
    LoginFormService,
    DashboardService,
    ConsultationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
