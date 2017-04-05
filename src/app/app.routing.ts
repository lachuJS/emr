import { Routes } from '@angular/router';

//components
//dashboard
import { AppointmentsComponent } from './appointments/appointments.component';
//patient
import { PatientComponent } from './patient/patient.component';
import { InfoComponent } from './patient/info/info.component';
import { HistoryComponent } from './patient/history/history.component';
import { HealthLogFormComponent } from './patient/health-log-form/health-log-form.component';

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
    //consultation routes
    children: [
      {
        path : 'info',
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
      }
    ]
  }
];
