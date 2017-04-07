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
import { DoctorComponent } from './appointments/doctor/doctor.component';
//patient
import { PatientComponent } from './patient/patient.component';
import { InfoComponent } from './patient/info/info.component';
import { HistoryComponent } from './patient/history/history.component';
import { HealthLogFormComponent } from './patient/health-log-form/health-log-form.component';
import { HealthLogsComponent } from './patient/health-logs/health-logs.component';

//services
//appointments
import { AppointmentsService } from './appointments/appointments.service';
//patient
import { PatientService } from './patient/patient.service';


@NgModule({
  declarations: [
    AppComponent,
    AppointmentsComponent,
    DoctorComponent,
    PatientComponent,
    InfoComponent,
    HistoryComponent,
    HealthLogFormComponent,
    HealthLogsComponent
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
    PatientService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
