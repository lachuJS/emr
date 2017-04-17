import { Routes } from '@angular/router';

//components
//patients
import { PatientsAppointmentComponent } from './patients/patients-appointment/patients-appointment.component';
import { PatientsPinnedComponent } from './patients/patients-pinned/patients-pinned.component';
import { PatientsSubNavComponent } from './patients/patients-sub-nav/patients-sub-nav.component';
//patient
import { PatientInfoComponent } from './patient/patient-info/patient-info.component';
import { PatientTrackComponent } from './patient/patient-track/patient-track.component';
import { PatientHealthLogsComponent } from './patient/patient-health-logs/patient-health-logs.component';
import { PatientSubNavComponent } from './patient/patient-sub-nav/patient-sub-nav.component';
import { PatientHealthTimelineComponent } from './patient/patient-health-timeline/patient-health-timeline.component';
import { PatientDiagnosisFormComponent } from './patient/patient-diagnosis-form/patient-diagnosis-form.component';
import { PatientPrescriptionFormComponent } from './patient/patient-prescription-form/patient-prescription-form.component';
import { PatientInvestigationsFormComponent } from './patient/patient-investigations-form/patient-investigations-form.component';

export const appRoutes: Routes = [
  //default landing page
  {
    path: '',
    redirectTo : '/patients/appointments',
    pathMatch: 'full'
  },
  //patients
  {
    path: 'patients',
    children : [
      //subnav
      {
        path : '',
        component : PatientsSubNavComponent,
        outlet: 'subnav'
      },
      {
        path : '',
        redirectTo : 'appointments',
        pathMatch : 'full'
      },
      //appointments
      {
        path : 'appointments',
        component: PatientsAppointmentComponent,
      },
      //pinned
      {
        path : 'pinned',
        component : PatientsPinnedComponent
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
      //profile
      {
        path  : 'profile',
        component : PatientInfoComponent,
      },
      //track
      {
        path : 'track',
        component : PatientTrackComponent,
      },
      {
        path : 'health-timeline',
        component : PatientHealthTimelineComponent
      },
      //diagnosis
      {
        path : 'diagnosis',
        component : PatientDiagnosisFormComponent
      },
      //prescription
      {
        path : 'prescription',
        component : PatientPrescriptionFormComponent
      },
      //investigations
      {
        path : 'investigations',
        component : PatientInvestigationsFormComponent
      }
    ]
  }
];
