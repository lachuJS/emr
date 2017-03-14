import { Patient } from '../patient/patient';
export interface Appointment{
  aid: number,
  patient: Patient,
  followUp: boolean,
}
