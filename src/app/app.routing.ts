import { Routes } from '@angular/router';

//components
//dashboard
import { AppointmentsComponent } from './appointments/appointments.component';
//patient
import { PatientComponent } from './patient/patient.component';
import { InfoComponent } from './patient/info/info.component';
import { HistoryComponent } from './patient/history/history.component';
import { HealthLogFormComponent } from './patient/health-log-form/health-log-form.component';
import { HealthLogsComponent } from './patient/health-logs/health-logs.component';

export const appRoutes: Routes = [
  {
    path : '',
    redirectTo : '/appointments',
    pathMatch : 'full'
  },
  {
    path : 'appointments',
    component: AppointmentsComponent
  },
  {
    path : 'patient/:patientId',
    component : PatientComponent,
    //patient child routes
    children: [
      {
        path : '', //default patient landing page
        component : InfoComponent,
        outlet : 'patient'
      },
      {
        path : 'history',
        component : HistoryComponent,
        outlet : 'patient'
      },
      {
        path : 'health-log',
        component : HealthLogFormComponent,
        outlet : 'patient'
      },
      {
        path : 'health-logs',
        component : HealthLogsComponent,
        outlet : 'patient'
      }
    ]
  }
];
