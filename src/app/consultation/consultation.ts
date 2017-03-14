import { Patient } from '../patient/patient';
export interface Consultation {
  aid: number;
  patient: Patient,
  followUp: boolean
}
