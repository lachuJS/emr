import { Routes } from '@angular/router';

//components
//app-layout
import { LayoutComponent } from './layout/layout.component';
//appointments
import { AppointmentsComponent } from './appointments/appointments.component';
//patients listing
import { PatientsComponent } from './patients/patients.component';
//patient
import { PatientInfoComponent } from './patient/patient-info/patient-info.component';
import { PatientHistoryComponent } from './patient/patient-history/patient-history.component';
import { PatientHealthLogFormComponent } from './patient/patient-health-log-form/patient-health-log-form.component';
import { PatientHealthLogsComponent } from './patient/patient-health-logs/patient-health-logs.component';
import { PatientSubNavComponent } from './patient/patient-sub-nav/patient-sub-nav.component';

export const appRoutes: Routes = [
  //set default landing page as /appointments
  {
    path: '',
    redirectTo : '/appointments',
    pathMatch: 'full'
  },
  //appointments
  {
    path: 'appointments',
    component : LayoutComponent,
    children : [
      {
        path : '',
        component: AppointmentsComponent,
        outlet: 'content'
      }
      //subnav component here...
    ]
  },
  //patients
  {
    path : 'patients',
    component : LayoutComponent,
    children : [
      {
        path : '',
        component : PatientsComponent,
        outlet : 'content'
      }
      //insert subnav component here...
    ]
  },
  //patient
  {
    path: 'patient/:patientId',
    component : LayoutComponent,
    children: [
      //subnav
      {
        path : '',
        component : PatientSubNavComponent,
        outlet: 'subnav'
      },
      //content
      {
        path  : 'profile', //default landing page for /patient/:patientId
        component : PatientInfoComponent,
        outlet : 'content'
      },
      {
        path : 'track',
        component : PatientHistoryComponent,
        outlet : 'content'
      },
      {
        path : 'new-log',
        component : PatientHealthLogFormComponent,
        outlet : 'content'
      }
    ]
  }

];
