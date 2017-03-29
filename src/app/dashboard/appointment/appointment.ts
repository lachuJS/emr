import { Patient } from '../../consultation/patient/patient';
export interface Appointment{
  aid: number,
  patient: Patient,
  dateTimeCreated: Date,
}
