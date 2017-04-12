import { Routes } from '@angular/router';

//components
//appointments
import { AppointmentsComponent } from './appointments/appointments.component';
//patients listing
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


export const appRoutes: Routes = [
  //default landing page
  {
    path: '',
    redirectTo : '/appointments',
    pathMatch: 'full'
  },
  //appointments
  {
    path: 'appointments',
    children : [
      {
        path : '',
        component: AppointmentsComponent,
      }
    ]
  },
  //patients
  {
    path : 'patients',
    children : [
      {
        path : '',
        component : PatientsComponent,
      }
    ]
  },
  //patient
  {
    path: 'patient/:patientId',
    children: [
      //default landing page
      {
        path : '',
        redirectTo : 'profile',
        pathMatch : 'full'
      },
      //subnav
      {
        path : '',
        component : PatientSubNavComponent,
        outlet: 'subnav'
      },
      //primary & action
      //profile
      {
        path  : 'profile',
        component : PatientInfoComponent,
      },
      {
        path : 'track',
        children : [
          //primary
          {
            path : '',
            component : PatientTrackComponent
          },
          {
            path : '',
            component : PatientTrackActionComponent,
            outlet  : 'action'
          }
        ]
      },
      //new-log
      {
        path : 'new-log',
        children : [
          {
            path : '',
            component : PatientHealthLogFormComponent,
          },
          {
            path : '',
            component : PatientHealthLogFormActionComponent,
            outlet : 'action'
          }
        ]
      }
      //diagnosis
      {
        path : 'diagnosis',
        component : PatientDiagnosisFormComponent,
      }
    ]
  }

];
