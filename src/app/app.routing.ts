import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ConsultationComponent } from './consultation/consultation.component';

export const appRoutes: Routes = [
  {
    path : '',
    redirectTo : '/appointments',
    pathMatch : 'full'
  },
  {
    path : 'appointments',
    component: DashboardComponent
  },
  {
    path : 'appointment/:aid',
    component : ConsultationComponent
  }
];
