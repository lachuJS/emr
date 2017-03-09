import { Vital } from './vitals/vital';
import { SystemicExamination } from './systemic-examination/systemic-examination';
import { Diagnosed } from './diagnosed/diagnosed';

export class Diagnosis{
  constructor(
    public chiefComplaints: string,
    public examination: boolean,
    public vital: Vital,
    public systemicExamination: SystemicExamination,
    public le: string,
    public diagnosed: Diagnosed,
    public followupDate: string
  ) {}
}
